import arviLogo from "@/Images/Arvi logo.png";
import { playfair } from "@/lib/fonts";
import Image from "next/image";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Printer,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks: {
  label: string;
  href: string;
  icon: LucideIcon | typeof TwitterXIcon;
  accentRing?: boolean;
}[] = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "X", href: "https://twitter.com/", icon: TwitterXIcon },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
    accentRing: true,
  },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {/* Column 1 — brand & social */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={arviLogo}
                alt=""
                width={48}
                height={48}
                className="size-12 shrink-0 object-contain"
                aria-hidden
              />
              <span className="min-w-0 text-left">
                <span
                  className={`${playfair.className} block text-lg font-bold leading-tight text-[#004438]`}
                >
                  ARVI Logistics
                </span>
                <span className="mt-0.5 block text-xs italic text-[#2d6a4f]">
                  Your Complete Transportation Solution
                </span>
              </span>
            </Link>

            <p className="mt-8 text-xs font-bold uppercase tracking-wide text-neutral-900">
              Follow us
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon, accentRing }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex size-9 items-center justify-center rounded-full border-2 border-[#004438] text-[#004438] transition hover:bg-[#004438]/10 ${
                      accentRing
                        ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-white"
                        : ""
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — contact */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-900">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-neutral-700">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[#004438]"
                  aria-hidden
                />
                <span>
                  120 Wood Avenue South, Suite 408, Iselin, NJ 08830
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[#004438]"
                  aria-hidden
                />
                <span>
                  16821 Buccaneer Ln., Suite 200, Houston, Texas 77058
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#004438]" aria-hidden />
                <a
                  href="tel:+12012599223"
                  className="transition hover:text-[#004438]"
                >
                  (201) 259-9223
                </a>
              </li>
              <li className="flex gap-3">
                <Printer className="mt-0.5 size-4 shrink-0 text-[#004438]" aria-hidden />
                <a href="tel:+12015375242" className="transition hover:text-[#004438]">
                  (201) 537-5242
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — information */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-900">
              Information
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#about" },
                { label: "Careers", href: "#careers" },
                { label: "Tracking", href: "#tracking" },
                { label: "Blog", href: "#blog" },
                { label: "Contact Us", href: "#quote" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-[#004438]"
                  >
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-[#004438]"
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — services */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-900">
              Company services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-700">
              {[
                { label: "Over-The-Road", href: "/over-the-road" },
                { label: "Warehouse", href: "#warehouse" },
                { label: "Intermodal", href: "#intermodal" },
                { label: "Carrier Network", href: "/carriers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-[#004438]"
                  >
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-[#004438]"
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#004438] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-center text-xs sm:flex-row sm:text-left sm:text-sm md:px-6 lg:px-8">
          <p>
            ©{year} ARVI Logistics | All Rights Reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1 sm:justify-end">
            <Link href="#privacy" className="transition hover:underline">
              Privacy Policy
            </Link>
            <span className="text-white/60" aria-hidden>
              |
            </span>
            <Link href="#terms" className="transition hover:underline">
              Terms of Services
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
