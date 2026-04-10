import type { Metadata } from "next";
import arviLogo from "@/Images/Arvi logo.png";
import { dmSans, playfair } from "@/lib/fonts";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARVI Logistics | Your Complete Transportation Solution",
  description:
    "Powering your supply chain, mile by mile. Freight brokerage for shippers and carriers.",
  icons: {
    icon: arviLogo.src,
    apple: arviLogo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${playfair.variable} antialiased`}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
