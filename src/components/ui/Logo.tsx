import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Force a specific asset. Omit to follow light/dark theme via CSS. */
  variant?: "light" | "dark" | "auto";
  /** header = full mark+wordmark; footer = text-only SERENTECH (no ribbon) */
  size?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

/** Horizontal wordmark with ribbon — light: navy SEREN / teal TECH; dark: white SEREN / teal TECH. */
const headerDims = { width: 1144, height: 320 } as const;
/** Text-only SERENTECH crop for footer repeats. */
const footerDims = { width: 1312, height: 160 } as const;

const sizeClasses = {
  header: "h-9 w-auto sm:h-10",
  /** Keep footer text mark ≤ nav wordmark height. */
  footer: "h-7 w-auto sm:h-8",
} as const;

function WordmarkImage({
  src,
  alt,
  dims,
  sizeClass,
  className,
  priority,
  ariaHidden,
}: {
  src: string;
  alt: string;
  dims: { width: number; height: number };
  sizeClass: string;
  className?: string;
  priority?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={dims.width}
      height={dims.height}
      className={cn(sizeClass, "bg-transparent", className)}
      priority={priority}
      aria-hidden={ariaHidden}
    />
  );
}

export function Logo({
  variant = "auto",
  size = "header",
  className = "",
  priority = false,
}: LogoProps) {
  const sizeClass = sizeClasses[size];
  const isFooter = size === "footer";
  const dims = isFooter ? footerDims : headerDims;
  const lightSrc = isFooter ? "/images/logo-footer-light.png" : "/images/logo-light.png";
  const darkSrc = isFooter ? "/images/logo-footer-dark.png" : "/images/logo-dark.png";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      {variant === "light" ? (
        <WordmarkImage
          src={lightSrc}
          alt={`${siteConfig.name} logo`}
          dims={dims}
          sizeClass={sizeClass}
          priority={priority}
        />
      ) : variant === "dark" ? (
        <WordmarkImage
          src={darkSrc}
          alt={`${siteConfig.name} logo`}
          dims={dims}
          sizeClass={sizeClass}
          priority={priority}
        />
      ) : (
        <>
          <WordmarkImage
            src={lightSrc}
            alt={`${siteConfig.name} logo`}
            dims={dims}
            sizeClass={sizeClass}
            className="dark:hidden"
            priority={priority}
          />
          <WordmarkImage
            src={darkSrc}
            alt=""
            dims={dims}
            sizeClass={sizeClass}
            className="hidden dark:block"
            priority={priority}
            ariaHidden
          />
        </>
      )}
    </Link>
  );
}
