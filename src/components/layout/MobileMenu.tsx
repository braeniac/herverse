"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { instagramUrl } from "@/data/social";

export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const root = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [isOpen]);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--green)]"
        onClick={() => {
          dialogRef.current?.showModal();
          setIsOpen(true);
        }}
      >
        <Menu size={26} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {/* Native modal dialogs trap focus, make the page inert, support Escape,
          and restore focus to the trigger when closed. */}
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        className="mobile-menu"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu-panel relative flex h-full w-full flex-col bg-[#f7f3ea] text-[#354B3E]">
          <h2 id="mobile-navigation-title" className="sr-only">H.E.R navigation</h2>
          <button
            type="button"
            autoFocus
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe3d2] transition-colors motion-reduce:transition-none hover:bg-[#d1d8c6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#354B3E] sm:right-10 sm:top-8 sm:h-14 sm:w-14"
          >
            <X size={28} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <div className="relative isolate flex-1 overflow-y-auto overscroll-contain px-8 pb-14 pt-28 sm:px-16 sm:pb-20 sm:pt-36 lg:px-24">
            <svg
              viewBox="0 0 240 420"
              aria-hidden="true"
              focusable="false"
              className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-48 text-[#354B3E] opacity-[.09] sm:h-[28rem] sm:w-64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M238 420C198 306 184 182 211 18" />
              <path d="M218 353C153 359 107 319 83 272C151 278 193 307 218 353ZM199 283C141 270 95 216 87 170C153 191 185 229 199 283ZM197 205C149 177 131 130 133 87C179 118 196 157 197 205ZM202 128C170 97 166 55 179 20C205 55 211 91 202 128ZM205 316C247 281 255 235 237 199C205 236 198 275 205 316ZM196 238C235 210 245 165 232 130C204 160 194 202 196 238Z" fill="currentColor" fillOpacity=".3" />
              <path d="M218 353L83 272M199 283L87 170M197 205L133 87M202 128L179 20M205 316L237 199M196 238L232 130" />
            </svg>
            <nav
              aria-label="Mobile navigation"
              className="relative flex min-h-full max-w-4xl flex-col items-start font-normal"
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) closeMenu();
              }}
            >
              <div className="flex w-full flex-col items-start gap-6 text-[clamp(2rem,6vw,4rem)] leading-[1.2] tracking-[-.035em] sm:gap-8">
                {navigationLinks.map(({ label, href }) => (
                  <a key={href} href={href} className="menu-link py-1">
                    {label.charAt(0) + label.slice(1).toLowerCase()}
                  </a>
                ))}
                <span aria-disabled="true" className="py-1">Join the Community</span>
              </div>
              <div className="mt-16 w-full max-w-sm border-t border-[#354B3E]/15 pt-8 sm:mt-24">
                <ul className="flex flex-col gap-4 text-lg leading-relaxed text-[#737d73] sm:text-xl">
                  {["Services", "Our Approach", "Stories", "Gallery", "Resources"].map((label) => (
                    <li key={label}><span aria-disabled="true">{label}</span></li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 w-full max-w-sm border-t border-[#354B3E]/15 pt-8 sm:mt-12">
                <ul className="flex flex-col gap-4 text-lg leading-relaxed text-[#737d73] sm:text-xl">
                  <li><span aria-disabled="true">Newsletter</span></li>
                  <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram (opens in a new tab)" className="menu-link">Follow Us</a></li>
                  <li><span aria-disabled="true">Contact</span></li>
                  <li><span aria-disabled="true">Legal Notice</span></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </dialog>
    </div>
  );
}
