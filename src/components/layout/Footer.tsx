import Logo from "@/components/ui/Logo";
import InstagramLink from "@/components/ui/InstagramLink";
import { navigationLinks } from "@/data/navigation";

const connectLabels = ["Services", "Our Approach", "Stories", "Gallery", "Resources"];
const headingClassName = "text-[10px] leading-5 tracking-[.25em] uppercase";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#4e5b43] px-6 sm:px-8 py-16 text-[#f5f0e6] sm:py-20 lg:px-20">
      <svg
        viewBox="0 0 240 420"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute -bottom-12 -right-12 -z-10 h-80 w-48 opacity-[.08] sm:h-[28rem] sm:w-64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M238 420C198 306 184 182 211 18" />
        <path d="M218 353C153 359 107 319 83 272C151 278 193 307 218 353ZM199 283C141 270 95 216 87 170C153 191 185 229 199 283ZM197 205C149 177 131 130 133 87C179 118 196 157 197 205ZM202 128C170 97 166 55 179 20C205 55 211 91 202 128ZM205 316C247 281 255 235 237 199C205 236 198 275 205 316Z" fill="currentColor" fillOpacity=".4" />
      </svg>
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 xl:grid-cols-[1fr_1.5fr_1fr_1fr_1fr] xl:gap-x-0">
          <div className="flex items-center justify-center sm:justify-start xl:pr-10">
            <Logo className="w-40 max-w-full" />
          </div>
          <div className="flex flex-col justify-center xl:border-l xl:border-white/20 xl:px-10">
            <h2 className={headingClassName}>Stay Connected</h2>
            <p className="serif mt-5 max-w-sm text-sm leading-7">
              New experiences, gatherings and H.E.R updates are coming soon.
            </p>
          </div>
          <nav aria-label="Footer explore" className="xl:border-l xl:border-white/20 xl:px-8">
            <h2 className={headingClassName}>Explore</h2>
            <ul className="serif mt-5 space-y-3 text-sm leading-7">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                    {label.charAt(0) + label.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
              <li><span aria-disabled="true">Join the Community</span></li>
            </ul>
          </nav>
          <div className="xl:border-l xl:border-white/20 xl:px-8">
            <h2 className={headingClassName}>Connect</h2>
            <ul className="serif mt-5 space-y-3 text-sm leading-7">
              {connectLabels.map((label) => (
                <li key={label}><span aria-disabled="true">{label}</span></li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 xl:col-span-1 xl:border-l xl:border-white/20 xl:pl-8">
            <h2 className={headingClassName}>Follow Our Journey</h2>
            <InstagramLink showLabel iconSize={20} className="mt-5 min-h-11 text-sm leading-7 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/20 pt-7 text-[10px] leading-5 tracking-[.22em] sm:mt-16 sm:flex-row sm:justify-between">
          <span>© H.E.R 2026</span>
          <span>HEAL ✦ EXHALE ✦ RECONNECT</span>
        </div>
      </div>
    </footer>
  );
}
