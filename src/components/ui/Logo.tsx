import Image from "next/image";

export default function Logo({
  className = "w-40",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src="/her-logo-transparent.png"
      alt="H.E.R — Heal. Exhale. Reconnect."
      width={1142}
      height={1377}
      sizes="160px"
      className={`h-auto object-contain ${dark ? "brightness-0" : ""} ${className}`}
    />
  );
}
