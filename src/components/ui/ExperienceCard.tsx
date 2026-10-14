import type { Experience } from "@/data/homepage";

export default function ExperienceCard({ icon: Icon, name, description }: Experience) {
  return (
    <div className="text-center max-w-xs mx-auto w-full">
      <div className="w-14 h-14 border border-[#7c8373] rounded-full mx-auto flex items-center justify-center">
        <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="text-[9px] tracking-[.18em] mt-5 uppercase leading-5">
        {name}
      </h3>
      <p className="text-sm leading-6 mt-3 text-[var(--dark)]">
        {description}
      </p>
    </div>
  );
}
