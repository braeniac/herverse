import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: 'H.E.R | Heal Exhale Reconnect',
  description: 'A welcoming space for women to heal, exhale, reconnect and experience life together.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico?v=her-symbol-1', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon-16x16.png?v=her-symbol-1', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=her-symbol-1', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg?v=her-symbol-1', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=her-symbol-1', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
