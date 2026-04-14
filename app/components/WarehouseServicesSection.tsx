"use client";

import warehouseAislesImg from "@/Images/Warehouse section small aisles.png";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

const TEAL = "text-[#004438]";
const TEAL_ICON = "text-[#004438]";

const LOCATIONS = ["Edison, NJ", "Harrison, NJ", "Chino, CA"] as const;

const WAREHOUSE_WHY_ITEMS: readonly { title: string; description: string }[] =
  [
    {
      title: "Short-Term & Long-Term Storage",
      description:
        "Tailored options to meet your operational needs—from surge space to steady-state programs.",
    },
    {
      title: "Real-Time Inventory Tracking",
      description:
        "Accurate, up-to-date reporting for full visibility across inbound, storage, and outbound.",
    },
    {
      title: "Integrated Fulfillment",
      description:
        "Seamlessly combines storage with shipping and distribution for faster order cycles.",
    },
    {
      title: "Cross-Docking & Transloading",
      description:
        "Efficient handling for faster throughput between modes and final-mile carriers.",
    },
    {
      title: "Secure Facilities",
      description:
        "24/7 monitoring and disciplined access controls help keep inventory safe and well-managed.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Handle seasonal surges and high-demand periods with capacity aligned to your forecast.",
    },
    {
      title: "End-to-End Logistics",
      description:
        "Warehousing coordinated with transportation so staging, handling, and delivery stay in sync.",
    },
  ];

export function WarehouseServicesSection() {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const headerId = `${baseId}-why-header`;
  const panelId = `${baseId}-why-panel`;

  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="warehouse-services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div>
            <h2
              id="warehouse-services-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl lg:text-[2rem] lg:leading-[1.15]"
            >
              Warehouse Services
            </h2>
            <p className="mt-4 text-sm font-medium leading-snug text-neutral-900 sm:text-base sm:leading-relaxed">
              Efficient shipping starts with the right storage strategy. At ARVI
              Logistics, we provide secure, flexible warehousing solutions
              designed to support your supply chain end to end—whether you need
              short-term storage, long-term distribution support, or seasonal
              surge capacity.
            </p>
            <p className="mt-3 text-sm font-medium leading-snug text-neutral-900 sm:mt-4 sm:text-base sm:leading-relaxed">
              We combine a nationwide partner warehouse network with affiliated
              facilities so shippers get the flexibility and reliability they need
              in key markets.
            </p>

            <p className="mt-5 text-sm font-bold text-neutral-900 sm:mt-6 sm:text-base">
              Our key warehouse locations:
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7">
              {LOCATIONS.map((loc) => (
                <li
                  key={loc}
                  className="flex items-center gap-2 text-sm font-bold text-neutral-900 sm:text-base"
                >
                  <MapPin
                    className={`size-[1.15rem] shrink-0 sm:size-5 ${TEAL_ICON}`}
                    aria-hidden
                    strokeWidth={2}
                  />
                  {loc}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-medium leading-snug text-neutral-900 sm:text-base sm:leading-relaxed">
              These strategic sites help businesses stage inventory closer to
              customers, reduce transit times, and streamline distribution
              across major U.S. corridors.
            </p>
          </div>

          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:aspect-[3/2] sm:rounded-[22px] lg:mx-0 lg:aspect-[16/9] lg:max-h-[280px] lg:max-w-none xl:max-h-[300px]">
            <Image
              src={warehouseAislesImg}
              alt="Warehouse aisle with tall racking and stored inventory"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-[#e9e9e9] ring-1 ring-black/[0.06] sm:mt-9 sm:rounded-2xl">
          <button
            type="button"
            id={headerId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5 sm:py-3.5"
          >
            <span
              className={`text-sm font-extrabold leading-snug sm:text-[0.95rem] ${TEAL}`}
            >
              Why Shippers Choose Our Warehousing Services:
            </span>
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-300/90 bg-white shadow-sm transition-transform duration-300 ease-out motion-reduce:transition-none sm:size-10"
              aria-hidden
            >
              {open ? (
                <ChevronUp className="size-[18px] text-neutral-800" />
              ) : (
                <ChevronDown className="size-[18px] text-neutral-800" />
              )}
            </span>
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden" {...(!open ? { inert: true } : {})}>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={`border-t border-neutral-300/50 px-4 pb-4 pt-0.5 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:px-5 sm:pb-5 sm:pt-1 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0 motion-reduce:translate-y-0"
                }`}
              >
                <ol className="mt-2 list-none space-y-2.5 sm:space-y-3">
                  {WAREHOUSE_WHY_ITEMS.map((item, index) => {
                    const n = index + 1;
                    return (
                      <li
                        key={item.title}
                        className="text-sm font-semibold leading-snug text-neutral-900 sm:text-[15px] sm:leading-relaxed"
                      >
                        <span className="font-extrabold text-neutral-900">
                          {n}. {item.title}:{" "}
                        </span>
                        <span className="font-semibold text-neutral-800">
                          {item.description}
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-5 text-sm font-semibold leading-snug text-neutral-900 sm:mt-6 sm:text-[15px] sm:leading-relaxed">
                  From pallet in to pallet out, every product is handled with
                  care and precision. By combining warehousing with our
                  transportation services—including LTL, FTL, drayage, and
                  intermodal—we deliver a seamless logistics strategy that keeps
                  your business moving efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
