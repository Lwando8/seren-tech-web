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

/** Horizontal wordmark — light: navy SEREN / teal TECH; dark: white SEREN / teal TECH. */
const wordmarkDims = { width: 1144, height: 320 } as const;

const sizeClasses = {
  header: "h-9 w-auto sm:h-10",
  footer: "h-11 w-auto sm:h-12",
} as const;

export function Logo({
  variant = "auto",
  size = "header",
  className = "",
  priority = false,
}: LogoProps) {
  const sizeClass = sizeClasses[size];

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
          width={wordmarkDims.width}
          height={wordmarkDims.height}
          className={`${sizeClass} bg-transparent`}
          priority={priority}
        />
      ) : variant === "dark" ? (
        <Image
          src="/images/logo-dark.png"
          alt={`${siteConfig.name} logo`}
          width={wordmarkDims.width}
          height={wordmarkDims.height}
          className={`${sizeClass} bg-transparent`}
          priority={priority}
        />
      ) : (
        <>
          <Image
            src="/images/logo-light.png"
            alt={`${siteConfig.name} logo`}
            width={wordmarkDims.width}
            height={wordmarkDims.height}
            className={`${sizeClass} bg-transparent dark:hidden`}
            priority={priority}
          />
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={wordmarkDims.width}
            height={wordmarkDims.height}
            className={`${sizeClass} hidden bg-transparent dark:block`}
            aria-hidden
            priority={priority}
          />
        </>
      )}
    </Link>
  );
}
