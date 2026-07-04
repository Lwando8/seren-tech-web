"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import type { ProductScreenshot } from "@/lib/seren-nudge-screenshots";

type ProductScreenshotCarouselProps = {
  screenshots: ProductScreenshot[];
  labelledBy?: string;
};

export function ProductScreenshotCarousel({
  screenshots,
  labelledBy,
}: ProductScreenshotCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const distance = (card?.offsetWidth ?? 340) + gap;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }, []);

  if (screenshots.length === 0) return null;

  return (
    <div className="relative">
      <div className="mb-6 hidden items-center justify-end gap-2 md:flex">
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-charcoal shadow-sm transition-colors hover:border-charcoal/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
          aria-label="Show previous screenshot"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-charcoal shadow-sm transition-colors hover:border-charcoal/20 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
          aria-label="Show next screenshot"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelledBy}
        tabIndex={0}
        className="carousel-track flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {screenshots.map((shot, index) => (
          <figure
            key={shot.src}
            data-carousel-card
            className="w-[78vw] shrink-0 snap-center sm:w-[360px] lg:w-[340px]"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface p-2 shadow-[0_8px_30px_rgba(28,28,30,0.08)] sm:rounded-[2rem] sm:p-2.5">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[1.25rem] bg-background sm:rounded-[1.5rem]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 360px, 78vw"
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-sm font-medium text-muted sm:text-left">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
