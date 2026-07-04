import fs from "node:fs";
import path from "node:path";

export type ProductScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export const serenNudgeScreenshots: ProductScreenshot[] = [
  {
    src: "/products/seren-nudge/business-dashboard.png",
    alt: "Seren Nudge business dashboard showing order overview and action items",
    caption: "Live business overview",
  },
  {
    src: "/products/seren-nudge/business-orders.png",
    alt: "Seren Nudge business orders screen showing active orders and pickup controls",
    caption: "Order queue and pickup control",
  },
  {
    src: "/products/seren-nudge/customer-home.png",
    alt: "Seren Nudge customer home screen with QR scan and order options",
    caption: "QR-first customer experience",
  },
  {
    src: "/products/seren-nudge/customer-tracking.png",
    alt: "Seren Nudge customer order tracking screen showing pickup status",
    caption: "Simple customer order tracking",
  },
  {
    src: "/products/seren-nudge/whatsapp-ordering.png",
    alt: "Seren Nudge WhatsApp ordering flow showing menu and order status messages",
    caption: "WhatsApp-assisted ordering flow",
  },
];

export function getAvailableSerenNudgeScreenshots(): ProductScreenshot[] {
  const publicDir = path.join(process.cwd(), "public");
  return serenNudgeScreenshots.filter((shot) =>
    fs.existsSync(path.join(publicDir, shot.src.replace(/^\//, ""))),
  );
}
