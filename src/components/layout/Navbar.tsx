import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/data/navigation";
import Logo from "@/components/ui/Logo";
import InstagramLink from "@/components/ui/InstagramLink";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 site-header bg-cream flex items-center px-6 sm:px-8 lg:px-10 xl:px-16 border-b hairline text-pine">
      <nav className="hidden lg:flex flex-1 items-center gap-5 xl:gap-8 text-sm font-normal tracking-[.22em]">
        {navigationLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="inline-flex min-h-11 items-center underline decoration-transparent underline-offset-8 transition-colors hover:decoration-gold motion-reduce:transition-none"
          >
            {label}
          </a>
        ))}
      </nav>
      <Logo dark className="w-20 shrink-0" />
      <nav className="hidden lg:flex flex-1 justify-end items-center gap-5 xl:gap-8 text-sm font-normal tracking-[.22em]">
        <span className="rounded-full bg-pine text-cream px-4 xl:px-6 py-3 whitespace-nowrap">
          JOIN HERVERSE
        </span>
        <InstagramLink gradientId="instagram-desktop-gradient" iconSize={20} className="text-sm font-normal text-pine" />
      </nav>
      <MobileMenu />
    </header>
  );
}
