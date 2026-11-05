"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const media = {
  desktop: { video: "/videos/hero-desktop.mp4", poster: "/videos/hero-desktop.jpg" },
  mobile: { video: "/videos/hero-mobile.mp4", poster: "/videos/hero-mobile.jpg" },
};

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const stop = () => {
      video.style.opacity = "0";
      video.pause();
      video.removeAttribute("src");
      // Release the previous resource and cancel its outstanding requests.
      video.load();
    };
    const select = () => {
      stop();
      const selected = desktop.matches ? media.desktop : media.mobile;
      video.poster = selected.poster;
      if (reducedMotion.matches) return;

      // Set the property as well as the attribute for Safari autoplay.
      video.muted = true;
      video.defaultMuted = true;
      video.src = selected.video;
      // Keep the poster visible if a browser or power-saving policy blocks play.
      void video.play().catch(() => {});
    };

    select();
    desktop.addEventListener("change", select);
    reducedMotion.addEventListener("change", select);
    return () => {
      desktop.removeEventListener("change", select);
      reducedMotion.removeEventListener("change", select);
      stop();
    };
  }, []);

  return (
    <div className="parallax-image hero-image" aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet={media.desktop.poster} />
        <Image
          src={media.mobile.poster}
          alt=""
          fill
          unoptimized
          loading="eager"
          fetchPriority="high"
          className="hero-background-media"
        />
      </picture>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        tabIndex={-1}
        disablePictureInPicture
        className="hero-background-media hero-background-video"
        onPlaying={(event) => { event.currentTarget.style.opacity = "1"; }}
        onError={(event) => { event.currentTarget.style.opacity = "0"; }}
      />
    </div>
  );
}
