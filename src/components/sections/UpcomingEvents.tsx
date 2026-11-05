import { events, photos } from "@/data/homepage";
import EventCarousel from "@/components/sections/EventCarousel";

export default function UpcomingEvents() {
  return (
    <section
      id="events"
      className="px-6 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 bg-cream"
    >
      <div className="reveal-section grid grid-cols-1 lg:grid-cols-[.7fr_2fr] gap-8 sm:gap-10 lg:gap-14">
        <div>
          <p className="text-[10px] tracking-[.25em]">UPCOMING EXPERIENCES</p>
          <h2 className="serif text-4xl sm:text-5xl mt-3">Join Us</h2>
          <p className="text-sm leading-7 mt-4 max-w-xs">
            H.E.R experiences are being thoughtfully created. Event details
            and registration will be added as they become available.
          </p>
        </div>
        <EventCarousel
          events={events}
          imageUrls={events.map((_, index) => photos[(index % 3) + 1])}
        />
      </div>
    </section>
  );
}
