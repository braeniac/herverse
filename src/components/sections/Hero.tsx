import HeroBackground from "@/components/sections/HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      data-parallax="hero"
      className="relative w-full min-h-screen min-h-[100svh] flex items-center hero-parallax"
    >
      <HeroBackground />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-24 text-cream py-20 sm:py-28">
        <p className="text-[10px] sm:text-[11px] leading-6 tracking-[.2em] sm:tracking-[.32em] mb-8">
          WOMEN’S
          WELLBEING / CONNECTION / ADVENTURE
        </p>
        <h1 className="serif text-5xl sm:text-6xl md:text-8xl leading-[.9] max-w-2xl">
          Heal. Exhale.
          <br />
          Reconnect.
        </h1>
        <p className="mt-10 max-w-md leading-7">
          A welcoming space for women to connect, breathe, heal, feel
          supported and create beautiful memories together.
        </p>
        <a
          href="#about"
          className="inline-block mt-10 rounded-full border border-gold/70 bg-pine px-7 py-4 text-[10px] tracking-[.22em] transition-colors hover:bg-sage hover:text-pine motion-reduce:transition-none"
        >
          DISCOVER H.E.R →
        </a>
      </div>
    </section>
  );
}
