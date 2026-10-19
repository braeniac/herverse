"use client";
import { useEffect } from "react";

/** One frame scheduler for the homepage's reveals and selective image depth. */
export default function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 767px)");
    const nodes = document.querySelectorAll<HTMLElement>(".reveal-section");
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      // Read every scene before writing styles to avoid layout thrashing.
      const bounds = scenes.map((scene) => scene.getBoundingClientRect());
      scenes.forEach((scene, index) => {
        const rect = bounds[index];
        if (rect.bottom < 0 || rect.top > viewport) return;
        const hero = scene.dataset.parallax === "hero";
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
        const travel = hero
          ? Math.max(0, -rect.top) * (compact.matches ? 0.16 : 0.38)
          : Math.max(-1, Math.min(1, (viewport / 2 - rect.top - rect.height / 2) / ((viewport + rect.height) / 2))) * rect.height * (compact.matches ? 0.04 : 0.1);
        scene.style.setProperty("--parallax-y", `${travel}px`);
        if (hero) {
          scene.style.setProperty("--text-y", `${progress * (compact.matches ? 24 : 72)}px`);
          scene.style.setProperty("--text-opacity", `${1 - progress * 0.55}`);
        }
      });
    };
    const schedule = () => {
      if (!motion.matches && !frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      if (motion.matches || !("IntersectionObserver" in window)) {
        nodes.forEach((node) => node.classList.add("is-visible"));
      } else {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
        nodes.forEach((node) => {
          // Keep initial viewport content visible; reveal only approaching content.
          if (node.getBoundingClientRect().top < window.innerHeight - 24) {
            node.classList.add("is-visible");
          } else {
            node.classList.add("reveal-ready");
            observer?.observe(node);
          }
        });
      }
      scenes.forEach((scene) => {
        scene.style.removeProperty("--parallax-y");
        scene.style.removeProperty("--text-y");
        scene.style.removeProperty("--text-opacity");
      });
      schedule();
    };
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", configure);
    compact.addEventListener("change", schedule);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", configure);
      compact.removeEventListener("change", schedule);
      nodes.forEach((node) => node.classList.remove("reveal-ready"));
    };
  }, []);
  return null;
}
