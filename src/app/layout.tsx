import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Technology systems for real-world operations`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Seren Tech",
    "South Africa",
    "technology",
    "Seren Nudge",
    "queue management",
    "order communication",
    "operational technology",
    "business workflow systems",
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Technology systems for real-world operations`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo-light.png",
        width: 1200,
        height: 630,
        alt: "Seren Tech logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Technology systems for real-world operations`,
    description: siteConfig.description,
    images: ["/images/logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo-light.png",
    apple: "/images/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-28">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
