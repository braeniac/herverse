import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

// The existing SVG logos omit the emblem. Preserve the complete PNG artwork.
// Crop above the H.E.R lettering, retaining the star, circle, portrait and lotus.
const symbol = await sharp('public/her-logo-transparent.png')
  .extract({ left: 200, top: 24, width: 760, height: 824 })
  .png().toBuffer();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 920">
  <title>H.E.R circular symbol</title>
  <rect width="920" height="920" rx="160" fill="#58654b"/>
  <image x="80" y="48" width="760" height="824" href="data:image/png;base64,${symbol.toString('base64')}"/>
</svg>\n`;
await writeFile('public/favicon.svg', svg);
const assets = [
  ['favicon-16x16.png', 16], ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180], ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
];
for (const [name, size] of assets) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(`public/${name}`);
}
// ICO directory with three PNG-compressed images (supported by modern browsers).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, index) => {
  const entry = 6 + index * 16;
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...images]));
