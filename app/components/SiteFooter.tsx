import { montserrat } from "@/lib/fonts";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
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
    <footer className="bg-surface-card text-ink">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12">
          <div>
            <Link
              href="/"
              className={`${montserrat.className} inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2`}
            >
              <span className="min-w-0 text-left">
                <span className="block leading-[1.15]">
                  <span className="text-xl font-bold tracking-[1.5px] text-secondary sm:text-2xl">
                    ARVI
                  </span>
                  <span className="text-base font-medium text-secondary sm:text-lg">
                    {" "}
                    Logistics
                  </span>
                </span>
                <span className="mt-0.5 block text-xs font-light leading-snug text-muted sm:text-sm">
                  Your Complete Transportation Solution
                </span>
              </span>
            </Link>

            <p className="mt-8 text-xs font-bold uppercase tracking-wide text-ink">
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
                    className={`flex size-9 items-center justify-center rounded-full border-2 border-secondary text-secondary transition hover:bg-primary/10 hover:text-primary ${
                      accentRing
                        ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-surface-card"
                        : ""
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-ink">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span className="min-w-0 break-words">
                  150 Dessen Drive, Suite B, Hazle Township, PA 18201
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a
                  href="tel:+15703306181"
                  className="transition hover:text-secondary"
                >
                  (570) 330-6181
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a
                  href="mailto:Inquiry@arvilogisticsinc.com"
                  className="min-w-0 break-all transition hover:text-secondary"
                >
                  Inquiry@arvilogisticsinc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-ink">
              Information
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-secondary"
                  >
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-primary"
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wide text-ink">
              Company services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-muted">
              {[
                { label: "Over-The-Road", href: "/over-the-road" },
                { label: "Warehouse", href: "/warehouse" },
                { label: "Intermodal", href: "/intermodal" },
                { label: "Carrier Network", href: "/carriers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-secondary"
                  >
                    <ArrowUpRight
                      className="size-3.5 shrink-0 text-primary"
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

      <div className="border-t border-divider bg-secondary text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-4 text-center text-xs sm:flex-row sm:text-left sm:text-sm md:px-6 lg:px-8">
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
