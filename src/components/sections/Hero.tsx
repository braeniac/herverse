import { photos } from "@/data/homepage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100svh] bg-cover bg-no-repeat flex items-center hero-parallax"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(20,25,18,.68),rgba(20,25,18,.06)),url('${photos[0]}')`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-24 text-white py-20 sm:py-28">
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
          className="inline-block mt-10 rounded-full bg-[var(--green)] px-7 py-4 text-[10px] tracking-[.22em]"
        >
          DISCOVER H.E.R →
        </a>
      </div>
    </section>
  );
}
