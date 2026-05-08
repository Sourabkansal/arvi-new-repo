"use client";

import warehouseAislesImg from "@/Images/Warehouse section small aisles.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

const ACCENT = "text-secondary";

const WAREHOUSE_WHY_ITEMS: readonly { title: string; description: string }[] =
  [
    {
      title: "Flexible Storage Options",
      description:
        "Customized short-term and long-term storage solutions designed to match changing inventory and operational demands.",
    },
    {
      title: "Live Inventory Visibility",
      description:
        "Stay informed with accurate inventory monitoring and real-time updates across receiving, storage, and outbound movement.",
    },
    {
      title: "Connected Fulfillment Operations",
      description:
        "Storage, order processing, and distribution work together seamlessly to improve delivery speed and efficiency.",
    },
    {
      title: "Fast Cross-Docking & Transfers",
      description:
        "Reduce delays with streamlined freight transfers between transportation modes and delivery networks.",
    },
    {
      title: "Safe & Monitored Facilities",
      description:
        "Secure warehouse environments with controlled access and continuous monitoring to protect your inventory.",
    },
    {
      title: "Scalable Capacity Support",
      description:
        "Easily adapt to seasonal demand spikes and business growth with flexible warehouse capacity.",
    },
    {
      title: "Complete Logistics Coordination",
      description:
        "Warehousing integrated with transportation services to ensure smooth handling, staging, and final delivery.",
    },
  ];

export function WarehouseServicesSection() {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const headerId = `${baseId}-why-header`;
  const panelId = `${baseId}-why-panel`;

  return (
    <section
      className="bg-surface-card py-12 sm:py-16 lg:py-20"
      aria-labelledby="warehouse-solutions-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div>
            <h2
              id="warehouse-solutions-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[2rem] lg:leading-[1.15]"
            >
              Warehouse Solutions
            </h2>
            <p className="mt-4 text-sm font-medium leading-snug text-muted sm:text-base sm:leading-relaxed">
              Strong logistics begin with efficient storage and inventory
              management. We provide secure and scalable warehouse solutions
              tailored to modern supply chain needs—whether you require temporary
              storage, dedicated distribution support, or overflow capacity
              during peak seasons.
            </p>
            <p className="mt-3 text-sm font-medium leading-snug text-muted sm:mt-4 sm:text-base sm:leading-relaxed">
              Our connected warehouse network and logistics partnerships allow
              businesses to position inventory strategically, improve fulfillment
              speed, and maintain smooth operations across key transportation
              routes.
            </p>
            <p className="mt-4 text-sm font-medium leading-snug text-muted sm:mt-5 sm:text-base sm:leading-relaxed">
              From receiving and storage to inventory handling and outbound
              coordination, we help streamline every stage of the warehousing
              process with reliability and operational efficiency.
            </p>
          </div>

          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-2xl shadow-card ring-1 ring-divider sm:aspect-[3/2] lg:mx-0 lg:aspect-[16/9] lg:max-h-[280px] lg:max-w-none xl:max-h-[300px]">
            <Image
              src={warehouseAislesImg}
              alt="Warehouse aisle with tall racking and stored inventory"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
              Why Businesses Trust Our Warehousing Solutions
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
                  {WAREHOUSE_WHY_ITEMS.map((item, index) => {
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
                  From inbound receiving to outbound shipping, every shipment is
                  managed with accuracy, care, and operational efficiency.
                  Combined with our transportation capabilities—including
                  truckload, partial freight, intermodal, and port logistics—we
                  create dependable supply chain solutions that keep your
                  business running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
