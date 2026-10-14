import { activityCategories } from "@/data/homepage";

export default function ActivityCategories() {
  return (
    <section className="grid grid-cols-3 md:grid-cols-6 bg-[#f7f3ea] border-b hairline">
      {activityCategories.map(({ name, icon: Icon }) => {
        return (
          <div key={name} className="px-2 py-8 sm:py-11 lg:py-14 text-center border-r hairline">
            <div className="flex justify-center">
              <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="text-[8px] tracking-[.12em] sm:tracking-[.2em] leading-4 mt-2">{name}</div>
          </div>
        );
      })}
    </section>
  );
}
