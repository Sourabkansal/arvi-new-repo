"use client";

import arviLogo from "@/Images/Arvi logo.png";
import { playfair } from "@/lib/fonts";
import Image from "next/image";
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
  { label: "RESOURCES", href: "#resources", hasDropdown: true },
  { label: "ABOUT US", href: "#about", hasDropdown: true },
  { label: "TRACKING", href: "#tracking", hasDropdown: true },
];

const shippersDropdown: DropdownItem[] = [
  { label: "OVER THE ROAD", href: "/over-the-road" },
  { label: "WAREHOUSE", href: "#warehouse" },
  { label: "INTERMODAL", href: "#intermodal" },
];

const resourcesDropdown: DropdownItem[] = [
  { label: "BLOG", href: "#blog" },
  { label: "NEWSROOM", href: "#newsroom" },
];

const aboutDropdown: DropdownItem[] = [{ label: "CAREERS", href: "#careers" }];

const trackingDropdown: DropdownItem[] = [
  { label: "TRACKING", href: "#tracking" },
  {
    label: "OCEAN TRACKING",
    href: "#ocean-tracking",
    hasChild: true,
    children: [
      { label: "APL", href: "#apl" },
      { label: "CMA CGM", href: "#cma-cgm" },
      { label: "COSCO", href: "#cosco" },
      { label: "EVERGREEN", href: "#evergreen" },
      { label: "HAPAG-LLOYD", href: "#hapag-lloyd" },
      { label: "HMM (HYUNDAI)", href: "#hmm-hyundai" },
      { label: "MAERSK", href: "#maersk" },
      { label: "MSC", href: "#msc" },
      { label: "ONE", href: "#one" },
      { label: "OOCL", href: "#oocl" },
      { label: "PIL", href: "#pil" },
      { label: "SM LINE", href: "#sm-line" },
      { label: "YANGMING", href: "#yangming" },
      { label: "ZIM", href: "#zim" },
    ],
  },
  { label: "AIRLINE TRACKING", href: "#airline-tracking" },
  {
    label: "CFS TRACKING",
    href: "#cfs-tracking",
    hasChild: true,
    children: [
      { label: "BINEX CFS (SEATTLE)", href: "#binex-cfs-seattle" },
      { label: "STG CFS", href: "#stg-cfs" },
      { label: "IMPERIAL CFS", href: "#imperial-cfs" },
      { label: "PCC", href: "#pcc" },
      { label: "AIR GENERAL", href: "#air-general" },
      { label: "SOUTHWEST FREIGHT", href: "#southwest-freight" },
    ],
  },
  { label: "TERMINAL TRACKING", href: "#terminal-tracking", hasChild: true },
];

function mainNavLinkClass(isActive: boolean) {
  return [
    "flex items-center gap-1 border-b-2 py-2 text-[11px] font-semibold tracking-wide transition-all duration-150 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004438]/30",
    isActive
      ? "border-[#004438] text-[#004438]"
      : "border-transparent text-neutral-800 hover:border-[#004438]/30 hover:text-[#004438]",
  ].join(" ");
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#004438] text-white">
        <div className="mx-auto flex max-w-7xl justify-end gap-6 px-4 py-1.5 text-[11px] font-medium tracking-wide sm:gap-10">
          <a
            href="tel:+12012599223"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            <span>(201) 259-9223</span>
          </a>
          <a
            href="mailto:inquiry@sandsbrokerageinc.com"
            className="hidden items-center gap-2 transition-opacity hover:opacity-90 sm:flex"
          >
            <Mail className="size-4 shrink-0" aria-hidden />
            <span>inquiry@sandsbrokerageinc.com</span>
          </a>
        </div>
      </div>

      <div className="border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src={arviLogo}
              alt=""
              width={44}
              height={44}
              className="size-11 shrink-0 object-contain"
              priority
              aria-hidden
            />
            <span className="min-w-0 text-left">
              <span
                className={`${playfair.className} block text-base font-bold leading-tight text-[#004438] sm:text-lg`}
              >
                ARVI Logistics
              </span>
              <span className="mt-0.5 block text-[10px] font-medium text-neutral-600 sm:text-[11px]">
                Your Complete Transportation Solution
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-7"
            aria-label="Main"
          >
            {navItems.map((item) => {
              const dropdownItems =
                item.label === "SHIPPERS"
                  ? shippersDropdown
                  : item.label === "RESOURCES"
                    ? resourcesDropdown
                    : item.label === "ABOUT US"
                      ? aboutDropdown
                      : item.label === "TRACKING"
                        ? trackingDropdown
                    : null;
              const dropdownWidthClass =
                item.label === "TRACKING"
                  ? "w-52"
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
                      className={`${dropdownWidthClass} rounded-xl border border-neutral-200/80 bg-white shadow-[0_16px_38px_-16px_rgba(0,0,0,0.35)] ring-1 ring-black/5`}
                    >
                      <div className="h-1 bg-gradient-to-r from-[#004438] to-[#0a6a5b]" />
                      {dropdownItems.map((subItem) => (
                        <div
                          key={subItem.label}
                          className="group/subitem relative border-b border-neutral-100 last:border-b-0"
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-3 py-2.5 text-[10px] font-semibold tracking-wide text-neutral-800 transition-all duration-150 hover:bg-emerald-50/50 hover:pl-4 hover:text-[#004438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#004438]/25"
                          >
                            <span>{subItem.label}</span>
                            {subItem.hasChild ? (
                              <ChevronDown
                                className="size-3.5 text-neutral-500 group-hover/subitem:text-[#004438]"
                                aria-hidden
                              />
                            ) : null}
                          </Link>

                          {subItem.children?.length ? (
                            <div className="pointer-events-none absolute left-full top-0 z-[60] min-w-[240px] opacity-0 transition duration-150 group-hover/subitem:pointer-events-auto group-hover/subitem:opacity-100">
                              <div className="rounded-r-xl border border-neutral-200/90 bg-white shadow-[0_18px_38px_-16px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                                {subItem.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="block border-b border-neutral-100 px-3 py-2.5 text-[11px] font-medium tracking-wide text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-[#004438] last:border-b-0"
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

          <div className="hidden items-center gap-2.5 md:flex">
            <button
              type="button"
              className="rounded-full p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-[#004438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004438]/25"
              aria-label="Search"
            >
              <Search className="size-[18px]" />
            </button>
            <Link
              href="#quote"
              className="rounded-full bg-[#fbbf24] px-4 py-2 text-[10px] font-bold tracking-wide text-neutral-900 shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-[#f59e0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:px-5"
            >
              GET A QUOTE
            </Link>
            <Link
              href="#tracking"
              className="rounded-full bg-[#004438] px-4 py-2 text-[10px] font-bold tracking-wide text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#00352c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-5"
            >
              TRACK A SHIPMENT
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="rounded-full p-2 text-neutral-700"
              aria-label="Search"
            >
              <Search className="size-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-neutral-800"
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
            className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden"
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-neutral-100 py-2 text-sm font-semibold tracking-wide ${
                    item.href.startsWith("/") && pathname === item.href
                      ? "text-[#004438]"
                      : "text-neutral-800"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="size-4 opacity-60" aria-hidden />
                  )}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="#quote"
                  className="rounded-full bg-[#fbbf24] py-3 text-center text-sm font-bold text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                >
                  GET A QUOTE
                </Link>
                <Link
                  href="#tracking"
                  className="rounded-full bg-[#004438] py-3 text-center text-sm font-bold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  TRACK A SHIPMENT
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
