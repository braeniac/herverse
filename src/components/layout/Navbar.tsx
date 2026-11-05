"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/data/navigation";
import Logo from "@/components/ui/Logo";
import InstagramLink from "@/components/ui/InstagramLink";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = document.querySelector(".site-header");
      const boundary = (header?.getBoundingClientRect().bottom ?? 112) + 32;
      let current = navigationLinks[0].href;
      navigationLinks.forEach(({ href }) => {
        const section = document.getElementById(href.slice(1));
        if (section && section.getBoundingClientRect().top <= boundary) current = href;
      });
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  return (
    <header className="fixed z-50 site-header bg-ivory flex items-center px-6 sm:px-8 lg:px-10 xl:px-16 text-forest">
      <nav aria-label="Primary navigation" className="hidden lg:flex flex-1 items-center gap-6 xl:gap-9 text-sm font-normal tracking-[.08em]">
        {navigationLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            aria-current={activeSection === href ? "location" : undefined}
            className="desktop-nav-link inline-flex min-h-11 items-center"
          >
            {label}
          </a>
        ))}
      </nav>
      <Logo dark className="mobile-navbar-logo w-20 shrink-0" />
      <nav aria-label="Community" className="hidden lg:flex flex-1 justify-end items-center gap-6 xl:gap-9 text-sm font-normal tracking-[.08em]">
        <span className="desktop-nav-link inline-flex min-h-11 items-center whitespace-nowrap text-forest">
          Join HERverse
        </span>
        <InstagramLink gradientId="instagram-desktop-gradient" iconSize={20} className="desktop-nav-link min-h-11 justify-center text-sm font-normal text-forest" />
      </nav>
      <MobileMenu />
    </header>
  );
}
