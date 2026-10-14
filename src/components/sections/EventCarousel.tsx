"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import type { HomepageEvent } from "@/data/homepage";

function subscribeToSize(callback: () => void) {
  const queries = [window.matchMedia("(min-width: 640px)"), window.matchMedia("(min-width: 1024px)")];
  queries.forEach((query) => query.addEventListener("change", callback));
  return () => queries.forEach((query) => query.removeEventListener("change", callback));
}
function visibleCards() {
  return window.matchMedia("(min-width: 1024px)").matches ? 3 : window.matchMedia("(min-width: 640px)").matches ? 2 : 1;
}

export default function EventCarousel({ events, imageUrls }: {
  events: HomepageEvent[];
  imageUrls: string[];
}) {
  const count = events.length;
  const visible = useSyncExternalStore(subscribeToSize, visibleCards, () => 1);
  // Copies on both sides allow every wrap to slide before an invisible reset.
  const [position, setPosition] = useState(count);
  const [animating, setAnimating] = useState(false);
  const moving = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activeIndex = ((position % count) + count) % count;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function finishSlide() {
    if (!moving.current) return;
    if (timer.current) clearTimeout(timer.current);
    setAnimating(false);
    setPosition((current) => count + ((current % count) + count) % count);
    moving.current = false;
  }

  function move(direction: number) {
    if (moving.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimating(false);
      setPosition(count + ((activeIndex + direction + count) % count));
      return;
    }
    moving.current = true;
    setAnimating(true);
    setPosition((current) => current + direction);
    // Also settles if a resize or preference change interrupts transitionend.
    timer.current = setTimeout(finishSlide, 500);
  }

  const buttonClassName = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--green)]/25 bg-[var(--cream)] text-[var(--green)] transition-colors hover:bg-[var(--sage)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--green)] motion-reduce:transition-none";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Upcoming events"
      tabIndex={0}
      className="-mx-4 grid min-w-0 sm:mx-0 grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--green)] sm:gap-2"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <button type="button" aria-label="Previous event" className={buttonClassName} onClick={() => move(-1)}>
        <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <div
        className="min-w-0 touch-pan-y overflow-hidden"
        onPointerDown={(event) => {
          if (event.pointerType === "mouse") return;
          touchStart.current = { x: event.clientX, y: event.clientY };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { touchStart.current = null; }}
        onPointerUp={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}
      >
        <div
          className="flex items-stretch motion-reduce:transition-none"
          style={{
            transform: `translateX(-${position * 100 / visible}%)`,
            transition: animating ? "transform 400ms cubic-bezier(.2,.7,.2,1)" : "none",
          }}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === "transform") finishSlide();
          }}
        >
          {[...events, ...events, ...events].map((event, index) => (
            <div
              key={`${index}-${event.title}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index % count + 1} of ${count}`}
              aria-hidden={index < position || index >= position + visible}
              className="min-w-0 shrink-0 basis-full px-2.5 sm:basis-1/2 lg:basis-1/3"
            >
              <EventCard event={event} imageUrl={imageUrls[index % count]} />
            </div>
          ))}
        </div>
      </div>
      <button type="button" aria-label="Next event" className={buttonClassName} onClick={() => move(1)}>
        <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
      </button>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {events[activeIndex].title}, event {activeIndex + 1} of {count}
      </p>
    </div>
  );
}
