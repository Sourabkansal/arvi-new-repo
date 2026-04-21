import type { Metadata } from "next";
import { inter, montserrat, poppins } from "@/lib/fonts";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARVI Logistics | Your Complete Transportation Solution",
  description:
    "Powering your supply chain, mile by mile. Freight brokerage for shippers and carriers.",
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
        <div className="flex min-h-screen flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
