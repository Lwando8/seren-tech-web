import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  size?: "header" | "footer";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  header: "h-14 w-auto sm:h-16",
  footer: "h-16 w-auto sm:h-[4.5rem]",
} as const;

export function Logo({
  variant = "light",
  size = "header",
  className = "",
  priority = false,
}: LogoProps) {
  const src = variant === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={src}
        alt={`${siteConfig.name} logo`}
        width={536}
        height={713}
        className={`${sizeClasses[size]} bg-transparent`}
        priority={priority}
      />
    </Link>
  );
}
