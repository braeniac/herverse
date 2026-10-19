import { photos } from "@/data/homepage";

export default function Mission() {
  return (
    <section className="reveal-section grid grid-cols-1 lg:grid-cols-3 lg:min-h-[690px]">
      <div
        className="min-h-[320px] sm:min-h-[440px] lg:min-h-0 bg-cover bg-center parallax-panel"
        data-parallax="panel"
      >
        <div
          aria-hidden="true"
          className="parallax-image"
          style={{ backgroundImage: `url('${photos[3]}')` }}
        />
      </div>
      <div className="px-6 py-12 sm:p-12 lg:p-20 flex flex-col justify-center bg-[#f1ede4]">
        <p className="text-[10px] tracking-[.25em]">THE MISSION</p>
        <h2 className="serif text-3xl sm:text-4xl mt-3">A Space to Simply Be</h2>
        <p className="text-sm leading-7 mt-5">
          To create a welcoming and supportive space where women can heal,
          exhale, reconnect and experience life together.
        </p>
      </div>
      <div className="bg-[var(--green)] text-white flex items-center justify-center text-center px-6 py-12 sm:p-10">
        <p className="serif text-3xl leading-relaxed">
          slow down
          <br />
          try something new
          <br />
          connect
          <br />
          <span className="hand">create memories ♡</span>
        </p>
      </div>
    </section>
  );
}
