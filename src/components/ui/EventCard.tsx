import type { HomepageEvent } from "@/data/homepage";

export default function EventCard({ event, imageUrl }: { event: HomepageEvent; imageUrl: string }) {
  return (
    <article className="h-full flex flex-col border hairline bg-[#f2eee5]">
      <div
        className="h-60 lg:h-72 shrink-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="flex-1 p-6 sm:p-7">
        <p className="text-[9px] tracking-[.2em]">{event.date}</p>
        <h3 className="serif text-2xl mt-2">{event.title}</h3>
        <p className="text-[9px] tracking-[.1em] mt-2">{event.tags}</p>
        <p className="text-xs mt-5">⌖ {event.place}</p>
        <div className="text-[9px] tracking-[.2em] mt-5">
          DETAILS COMING SOON →
        </div>
      </div>
    </article>
  );
}
