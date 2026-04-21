"use client";

import intermodalPortImg from "@/Images/Intermodal p image.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

const ACCENT = "text-secondary";

const INTERMODAL_WHY_ITEMS: readonly { title: string; description: string }[] =
  [
    {
      title: "Extensive Rail Partnerships",
      description:
        "Nationwide reach for efficient freight movement across major corridors and ramps.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Lower transportation costs compared to long-haul trucking alone, without sacrificing control.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Reduced carbon footprint with fuel-efficient rail segments on longer hauls.",
    },
    {
      title: "Scalable Capacity",
      description:
        "Handle seasonal surges and high-volume shipments with capacity that flexes to your plan.",
    },
    {
      title: "Seamless Integration",
      description:
        "Coordinate with drayage and over-the-road services for smooth, end-to-end execution.",
    },
  ];

export function IntermodalShippingSection() {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const headerId = `${baseId}-intermodal-why-header`;
  const panelId = `${baseId}-intermodal-why-panel`;

  return (
    <section
      className="bg-surface-card py-12 sm:py-16 lg:py-20"
      aria-labelledby="intermodal-shipping-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
          <div className="text-left">
            <h2
              id="intermodal-shipping-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[2rem] lg:leading-[1.15]"
            >
              Intermodal Shipping
            </h2>
            <p className="mt-3 text-base font-bold leading-snug text-ink sm:mt-4 sm:text-lg">
              Efficient Intermodal Shipping Solutions for Cost-Effective Freight
              Movement
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-muted sm:text-base sm:leading-[1.65]">
              ARVI Logistics combines rail, truck, and port transportation into
              coordinated intermodal programs—so your freight moves efficiently
              across modes with clear milestones from origin to destination.
            </p>

            <h3 className="mt-7 text-base font-bold text-secondary sm:mt-8 sm:text-lg">
              Nationwide Intermodal Network
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base sm:leading-[1.65]">
              Gain access to strategic rail ramps, ports, and drayage partners
              through a nationwide network built for reliable, door-to-door
              intermodal solutions.
            </p>
          </div>

          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-2xl shadow-card ring-1 ring-divider sm:aspect-[4/3] lg:mx-0 lg:aspect-[16/10] lg:max-h-[300px] lg:max-w-none xl:max-h-[320px]">
            <Image
              src={intermodalPortImg}
              alt="Aerial view of a container terminal with stacked shipping containers at sunset"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl bg-canvas ring-1 ring-divider sm:mt-12 sm:rounded-2xl">
          <button
            type="button"
            id={headerId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left sm:px-6 sm:py-4"
          >
            <span
              className={`text-sm font-extrabold leading-snug sm:text-[0.95rem] ${ACCENT}`}
            >
              Why Shippers Choose Intermodal with ARVI Logistics:
            </span>
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-divider bg-surface-card shadow-sm transition-transform duration-300 ease-out motion-reduce:transition-none sm:size-10"
              aria-hidden
            >
              {open ? (
                <ChevronUp className="size-[18px] text-secondary" />
              ) : (
                <ChevronDown className="size-[18px] text-secondary" />
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
                className={`border-t border-divider px-5 pb-5 pt-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:px-6 sm:pb-6 sm:pt-2 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0 motion-reduce:translate-y-0"
                }`}
              >
                <ol className="mt-2 list-none space-y-3 sm:space-y-3.5">
                  {INTERMODAL_WHY_ITEMS.map((item, index) => {
                    const n = index + 1;
                    return (
                      <li
                        key={item.title}
                        className="flex gap-3 text-sm font-medium leading-snug text-muted sm:text-[15px] sm:leading-relaxed"
                      >
                        <span
                          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm shadow-primary/25"
                          aria-hidden
                        >
                          {n}
                        </span>
                        <span className="min-w-0 pt-0.5">
                          <span className="font-bold text-ink">{item.title}: </span>
                          <span>{item.description}</span>
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <p className="mt-6 text-sm font-semibold leading-snug text-ink sm:mt-7 sm:text-[15px] sm:leading-relaxed">
                  With intermodal freight, you gain the ideal balance of cost
                  savings, reliable transit times, and sustainability — all
                  without compromising on service quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
