"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { jpg: "/img/legacy/Gold-Shield-slide1.jpg", webp: "/img/legacy/Gold-Shield-slide1.webp" },
  { jpg: "/img/legacy/slide-2.jpg", webp: "/img/legacy/slide-2.webp" },
  { jpg: "/img/legacy/slide-3.jpg", webp: "/img/legacy/slide-3.webp" },
  { jpg: "/img/legacy/slide-4.jpg", webp: "/img/legacy/slide-4.webp" },
];

const INTERVAL_MS = 5000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    start();
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative mx-6 mb-[clamp(40px,7vw,120px)] h-[clamp(300px,42vw,680px)] overflow-hidden rounded-[20px] bg-[#ddd] md:mx-20"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      {SLIDES.map((slide, i) => (
        <div key={slide.jpg} className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === current ? "opacity-100" : "opacity-0"}`}>
          <picture>
            <source srcSet={slide.webp} type="image/webp" />
            <Image
              src={slide.jpg}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </picture>
        </div>
      ))}
      <div className="absolute bottom-[18px] left-[22px] z-20 flex gap-2.5" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.jpg}
            className={`h-[13px] w-[13px] rounded-full border-2 border-white/75 p-0 transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => {
              setCurrent(i);
              start();
            }}
          />
        ))}
      </div>
    </div>
  );
}
