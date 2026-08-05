import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Phone portrait vs wider dashboard-style frame */
  aspect?: "phone" | "wide";
  priority?: boolean;
  className?: string;
};

export function ScreenshotFrame({
  src,
  alt,
  caption,
  aspect = "phone",
  priority = false,
  className = "",
}: ScreenshotFrameProps) {
  const aspectClass = aspect === "wide" ? "aspect-[4/3]" : "aspect-[9/19]";

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface p-2 shadow-soft sm:rounded-[1.75rem] sm:p-2.5">
        <div
          className={`relative overflow-hidden rounded-[1.1rem] bg-background sm:rounded-[1.35rem] ${aspectClass}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              aspect === "wide"
                ? "(min-width: 1024px) 480px, 90vw"
                : "(min-width: 1024px) 280px, (min-width: 640px) 240px, 70vw"
            }
            className="object-contain object-top"
            priority={priority}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm font-medium text-muted sm:text-left">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
