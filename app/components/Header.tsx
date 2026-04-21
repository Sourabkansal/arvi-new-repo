"use client";

import { montserrat } from "@/lib/fonts";
import {
  ChevronDown,
  Menu,
  Phone,
  Mail,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DropdownChildItem = {
  label: string;
  href: string;
};

type DropdownItem = {
  label: string;
  href: string;
  hasChild?: boolean;
  children?: DropdownChildItem[];
};

const navItems: { label: string; href: string; hasDropdown: boolean }[] = [
  { label: "SHIPPERS", href: "#shippers", hasDropdown: true },
  { label: "CARRIERS", href: "/carriers", hasDropdown: false },
  /* Temporarily hidden — add back above ABOUT US when needed:
  { label: "RESOURCES", href: "#resources", hasDropdown: true },
  */
  { label: "ABOUT US", href: "#about", hasDropdown: true },
  { label: "TRACKING", href: "#tracking", hasDropdown: true },
];

const shippersDropdown: DropdownItem[] = [
  { label: "OVER THE ROAD", href: "/over-the-road" },
  { label: "WAREHOUSE", href: "/warehouse" },
  { label: "INTERMODAL", href: "/intermodal" },
];

const aboutDropdown: DropdownItem[] = [{ label: "CAREERS", href: "/careers" }];

/** XpressTrax customer portal (shared query string on all entry points). */
const XPRESSTRAX_QS = "id=Db8smWS1tpU%3d&ltr=6zcOsHDiKmw%3d";

const XPRESSTRAX_REGISTRATION = `https://customers.xpresstrax.com/PGCommon/Registration.aspx?${XPRESSTRAX_QS}`;
const XPRESSTRAX_AVAILABLE_LOADS = `https://customers.xpresstrax.com/Availloads.aspx?${XPRESSTRAX_QS}`;
const XPRESSTRAX_TRACING = `https://customers.xpresstrax.com/PGCommon/Tracing.aspx?${XPRESSTRAX_QS}`;
const XPRESSTRAX_DASHBOARD = `https://customers.xpresstrax.com/Default.aspx?${XPRESSTRAX_QS}`;

const trackingDropdown: DropdownItem[] = [
  { label: "Registration", href: XPRESSTRAX_REGISTRATION },
  { label: "Available Loads", href: XPRESSTRAX_AVAILABLE_LOADS },
  { label: "Tracking", href: XPRESSTRAX_TRACING },
  { label: "Dashboard", href: XPRESSTRAX_DASHBOARD },
];

function getDropdownItems(
  item: (typeof navItems)[number],
): DropdownItem[] | null {
  if (item.label === "SHIPPERS") return shippersDropdown;
  if (item.label === "ABOUT US") return aboutDropdown;
  if (item.href === "#tracking") return trackingDropdown;
  return null;
}

function NavDropdownLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function mainNavLinkClass(isActive: boolean) {
  return [
    "flex items-center gap-1 border-b-2 py-2 text-[11px] font-semibold tracking-wide transition-all duration-150 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
    isActive
      ? "border-secondary text-secondary"
      : "border-transparent text-ink hover:border-secondary/25 hover:text-secondary",
  ].join(" ");
}

const btnQuote =
  "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md shadow-primary/25 transition-all duration-150 hover:-translate-y-px hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:px-5";

const btnTrack =
  "inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-secondary shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 focus-visible:ring-offset-2 sm:px-5";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-secondary text-white">
        <div className="mx-auto flex max-w-[1280px] justify-end gap-6 px-4 py-2 text-[11px] font-medium tracking-wide sm:gap-10 lg:px-6">
          <a
            href="tel:+12012599223"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span>(201) 259-9223</span>
          </a>
          <a
            href="mailto:inquiry@arvilogistic.com"
            className="hidden items-center gap-2 transition-opacity hover:opacity-90 sm:flex"
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            <span>inquiry@arvilogistic.com</span>
          </a>
        </div>
      </div>

      <div className="border-b border-divider bg-surface-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-surface-card/90">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3.5 lg:px-6">
          <Link
            href="/"
            className={`${montserrat.className} flex min-w-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2`}
          >
            <span className="min-w-0 text-left">
              <span className="block leading-[1.15]">
                <span className="text-lg font-bold tracking-[1.5px] text-secondary sm:text-xl">
                  ARVI
                </span>
                <span className="text-base font-medium text-secondary sm:text-lg">
                  {" "}
                  Logistics
                </span>
              </span>
              <span className="mt-0.5 block text-[11px] font-light leading-snug text-muted sm:text-xs">
                Your Complete Transportation Solution
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex xl:gap-10"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const dropdownItems = getDropdownItems(item);
              const dropdownWidthClass =
                item.href === "#tracking"
                  ? "w-max min-w-0"
                  : item.label === "ABOUT US"
                    ? "w-24"
                    : "w-44";

              return dropdownItems ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={mainNavLinkClass(false)}
                  >
                    {item.label}
                    <ChevronDown className="size-3 opacity-70" aria-hidden />
                  </Link>
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 translate-y-1 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div
                      className={`${dropdownWidthClass} rounded-xl border border-divider bg-surface-card shadow-card ring-1 ring-secondary/5`}
                    >
                      <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
                      {dropdownItems.map((subItem) => (
                        <div
                          key={subItem.label}
                          className="group/subitem relative border-b border-divider last:border-b-0"
                        >
                          <NavDropdownLink
                            href={subItem.href}
                            className={`flex items-center justify-between px-3 py-2.5 text-[10px] font-semibold tracking-wide text-ink transition-all duration-150 hover:bg-primary/[0.06] hover:pl-4 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/25 ${
                              item.href === "#tracking"
                                ? "whitespace-nowrap"
                                : ""
                            }`}
                          >
                            <span>{subItem.label}</span>
                            {subItem.hasChild ? (
                              <ChevronDown
                                className="size-3.5 text-muted group-hover/subitem:text-secondary"
                                aria-hidden
                              />
                            ) : null}
                          </NavDropdownLink>

                          {subItem.children?.length ? (
                            <div className="pointer-events-none absolute left-full top-0 z-[60] min-w-[240px] opacity-0 transition duration-150 group-hover/subitem:pointer-events-auto group-hover/subitem:opacity-100">
                              <div className="rounded-r-xl border border-divider bg-surface-card shadow-card-hover ring-1 ring-secondary/5">
                                {subItem.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="block border-b border-divider px-3 py-2.5 text-[11px] font-medium tracking-wide text-ink transition-colors hover:bg-canvas hover:text-secondary last:border-b-0"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={mainNavLinkClass(
                    item.href.startsWith("/") && pathname === item.href,
                  )}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="size-3 opacity-70" aria-hidden />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="rounded-xl p-2 text-muted transition-colors hover:bg-canvas hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              aria-label="Search"
            >
              <Search className="size-[18px]" />
            </button>
            <Link href="/contact" className={btnQuote}>
              Get a quote
            </Link>
            <a
              href={XPRESSTRAX_TRACING}
              target="_blank"
              rel="noopener noreferrer"
              className={btnTrack}
            >
              Track shipment
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="rounded-xl p-2 text-muted"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>
            <button
              type="button"
              className="rounded-xl p-2 text-ink"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="max-h-[min(75dvh,32rem)] overflow-y-auto overscroll-y-contain border-t border-divider bg-surface-card px-4 py-5 lg:hidden"
          >
            <nav className="flex flex-col gap-0" aria-label="Mobile">
              {navItems.map((item) => {
                const mobileDropdown = getDropdownItems(item);
                if (mobileDropdown && item.hasDropdown) {
                  return (
                    <details
                      key={item.label}
                      className="group border-b border-divider"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold tracking-wide text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                        <span>{item.label}</span>
                        <ChevronDown
                          className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-open:rotate-180"
                          aria-hidden
                        />
                      </summary>
                      <div className="flex flex-col gap-0.5 pb-3 pl-1">
                        {mobileDropdown.map((sub) => (
                          <NavDropdownLink
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-canvas hover:text-secondary"
                          >
                            {sub.label}
                          </NavDropdownLink>
                        ))}
                      </div>
                    </details>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between border-b border-divider py-3 text-sm font-semibold tracking-wide ${
                      item.href.startsWith("/") && pathname === item.href
                        ? "text-secondary"
                        : "text-ink"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className={`${btnQuote} py-3 text-center text-sm`}
                  onClick={() => setMobileOpen(false)}
                >
                  Get a quote
                </Link>
                <a
                  href={XPRESSTRAX_TRACING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnTrack} py-3 text-center text-sm`}
                  onClick={() => setMobileOpen(false)}
                >
                  Track shipment
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
