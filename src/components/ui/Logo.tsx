import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Force a specific asset. Omit to follow light/dark theme via CSS. */
  variant?: "light" | "dark" | "auto";
  size?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

/** Horizontal wordmark (Nov 16) — navy SEREN / teal TECH; for light backgrounds. */
const lightDims = { width: 1144, height: 320 } as const;
/** Transparent white+teal mark cutout — readable on dark backgrounds / footer. */
const darkDims = { width: 512, height: 512 } as const;

const lightSizeClasses = {
  header: "h-9 w-auto sm:h-10",
  footer: "h-11 w-auto sm:h-12",
} as const;

const darkSizeClasses = {
  header: "h-12 w-auto sm:h-14",
  footer: "h-14 w-auto sm:h-16",
} as const;

export function Logo({
  variant = "auto",
  size = "header",
  className = "",
  priority = false,
}: LogoProps) {
  const lightSize = lightSizeClasses[size];
  const darkSize = darkSizeClasses[size];

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
        <Image
          src="/images/logo-light.png"
          alt={`${siteConfig.name} logo`}
          width={lightDims.width}
          height={lightDims.height}
          className={`${lightSize} bg-transparent`}
          priority={priority}
        />
      ) : variant === "dark" ? (
        <Image
          src="/images/logo-dark.png"
          alt={`${siteConfig.name} logo`}
          width={darkDims.width}
          height={darkDims.height}
          className={`${darkSize} bg-transparent`}
          priority={priority}
        />
      ) : (
        <>
          <Image
            src="/images/logo-light.png"
            alt={`${siteConfig.name} logo`}
            width={lightDims.width}
            height={lightDims.height}
            className={`${lightSize} bg-transparent dark:hidden`}
            priority={priority}
          />
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={darkDims.width}
            height={darkDims.height}
            className={`${darkSize} hidden bg-transparent dark:block`}
            aria-hidden
            priority={priority}
          />
        </>
      )}
    </Link>
  );
}
