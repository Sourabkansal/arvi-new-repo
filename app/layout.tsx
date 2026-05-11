import { GlobalJsonLd } from "@/app/components/seo/GlobalJsonLd";
import { inter, montserrat, poppins } from "@/lib/fonts";
import { SITE_URL } from "@/lib/seo/site";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

/** Global defaults; route-level segments override titles and descriptions via `generateMetadata` / `metadata` exports. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL.endsWith("/") ? SITE_URL : `${SITE_URL}/`),
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "ARVI Logistics",
  appleWebApp: {
    title: "ARVI Logistics",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2b4c7e" },
    { media: "(prefers-color-scheme: dark)", color: "#1a3052" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <GlobalJsonLd />
        <div className="flex min-h-screen flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
