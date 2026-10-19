import { photos } from "@/data/homepage";
import Logo from "@/components/ui/Logo";

export default function About() {
  return (
    <section
      id="about"
      className="reveal-section grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] lg:min-h-[760px]"
    >
      <div className="bg-[var(--green)] text-white flex items-center justify-center px-8 py-16 md:py-20">
        <Logo className="w-44 lg:w-48 max-w-full" />
      </div>
      <div className="px-6 py-12 sm:p-12 lg:p-16 xl:p-28 flex flex-col justify-center">
        <p className="text-[10px] tracking-[.25em] mb-4">OUR STORY</p>
        <h2 className="serif text-3xl sm:text-4xl mb-6">More Than a Community</h2>
        <p className="leading-7 text-sm">
          H.E.R was created to give women a space to connect, breathe, heal,
          feel supported and create beautiful memories together.
        </p>
        <p className="leading-7 text-sm mt-4">
          Inspired by the strength, love and sacrifices of the women who shape
          us, H.E.R is built on the belief that every woman deserves a safe
          and welcoming space where she can simply be herself.
        </p>
        <p className="hand text-2xl mt-6">
          You don’t have to carry it alone.
        </p>
      </div>
      <div
        className="bg-cover bg-center min-h-[320px] sm:min-h-[440px] parallax-panel"
        data-parallax="panel"
      >
        <div
          aria-hidden="true"
          className="parallax-image"
          style={{ backgroundImage: `url('${photos[1]}')` }}
        />
      </div>
    </section>
  );
}
