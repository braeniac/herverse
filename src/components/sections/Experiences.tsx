import { experiences } from "@/data/homepage";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experiences() {
  return (
    <section className="reveal-section bg-[var(--sage)] grid grid-cols-1 lg:grid-cols-[.8fr_2fr] px-6 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-36 gap-12 sm:gap-16 lg:gap-24">
      <div>
        <p className="text-[10px] tracking-[.25em]">WHAT WE DO</p>
        <h2 className="serif text-4xl sm:text-5xl mt-3">
          Experiences
          <br />
          That Nourish You
        </h2>
        <p className="text-sm leading-7 mt-5 max-w-sm">
          Meaningful experiences supporting emotional wellbeing,
          self-connection, creativity, movement, spirituality, nature and
          adventure.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 lg:gap-y-20">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.name} {...experience} />
        ))}
      </div>
    </section>
  );
}
