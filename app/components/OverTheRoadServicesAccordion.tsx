"use client";

import warehouseImg from "@/Images/Warehouse worker loading truck at sunset.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

const TEAL_TITLE = "text-[#0d5d52]";
const TEAL_LIST = "text-[#0f6b5e]";

type ServicePanel = {
  id: string;
  title: string;
  intro: string[];
  whyHeading: string;
  points: string[];
};

const SERVICES: ServicePanel[] = [
  {
    id: "ltl",
    title: "Less-Than-Truckload (LTL) Shipping",
    intro: [
      "Our LTL network consolidates partial shipments alongside compatible freight so you pay only for the space and weight you use—without sacrificing transit predictability. From regional distribution to long-haul linehaul, we match your freight profile to the right carrier mix and service level.",
      "Expect disciplined pickup windows, transparent milestones, and proactive communication when exceptions arise. We treat every pallet as mission-critical, whether you move a few skids a week or high-frequency replenishment programs.",
    ],
    whyHeading: "Why shippers choose our LTL capabilities:",
    points: [
      "Intelligent consolidation across vetted partner lanes",
      "Coast-to-coast and regional density you can plan around",
      "Appointment-friendly delivery and consistent transit",
      "Standard, guaranteed, and expedited service tiers",
      "Digital visibility from pickup through proof of delivery",
      "Named operations support aligned to your supply chain",
    ],
  },
  {
    id: "ftl",
    title: "Full Truckload (FTL) Shipping",
    intro: [
      "When your freight warrants an entire trailer, we secure dedicated capacity aligned to your loading schedule, commodity requirements, and delivery window. Ideal for high-cube loads, sensitive cargo, or shipments where co-mingling is not an option.",
      "Our team validates equipment type, driver qualifications, and routing constraints before dispatch—so your product moves under a single bill of lading with minimal handling and maximum control.",
    ],
    whyHeading: "Why shippers choose our FTL program:",
    points: [
      "Exclusive use of trailer from origin to destination",
      "Commitment-based scheduling for time-sensitive freight",
      "Van, refrigerated, and specialized equipment matching",
      "Domestic and cross-border execution with one point of contact",
      "GPS and milestone reporting throughout transit",
      "Scalable programs for seasonal surges and project peaks",
    ],
  },
  {
    id: "drayage",
    title: "Drayage Services",
    intro: [
      "Drayage is the critical link between ocean terminals, rail ramps, and your warehouse floor. We coordinate container pulls, chassis availability, and gate appointments so imports and exports keep moving without costly idle time.",
      "Whether you are balancing intermodal handoffs or recovering containers under tight free-time windows, our dispatch team prioritizes compliance, documentation accuracy, and predictable handoffs to over-the-road or warehouse teams.",
    ],
    whyHeading: "Why shippers choose our drayage network:",
    points: [
      "Rapid turnarounds at major ports and inland ramps",
      "Coverage across high-volume coastal and interior markets",
      "Terminal, TWIC, and port-specific regulatory familiarity",
      "Strategies to reduce demurrage, per diem, and storage exposure",
      "Seamless connection to long-haul and transload partners",
      "Exception alerts before issues become detention events",
    ],
  },
  {
    id: "flatbed",
    title: "Flatbed Shipping",
    intro: [
      "Oversized, heavy, or non-enumerable freight demands open-deck capacity and disciplined securement. We source flatbed, step-deck, lowboy, and multi-axle solutions for steel, machinery, building products, and industrial modules.",
      "From route surveys and permit coordination to on-site load supervision, we align equipment, escorts, and delivery appointments so your cargo arrives intact and on schedule.",
    ],
    whyHeading: "Why shippers choose our flatbed operations:",
    points: [
      "Engineered tie-down and blocking plans for OD commodities",
      "Permitting and pilot car coordination where required",
      "Project-style planning for plant relocations and capital equipment",
      "Access to extendable, RGN, and multi-axle configurations",
      "Curated carrier base with documented safety performance",
      "Direct dialogue between dispatch and your site teams",
    ],
  },
];

const DOT_BG =
  "radial-gradient(circle 1px at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)";

export function OverTheRoadServicesAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(SERVICES[0].id);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24"
      aria-labelledby="otr-services-heading"
      style={{
        backgroundColor: "#f0f2f1",
        backgroundImage: DOT_BG,
        backgroundSize: "10px 10px",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          id="otr-services-heading"
          className={`text-center text-2xl font-bold tracking-tight sm:text-3xl ${TEAL_TITLE}`}
        >
          Over-The-Road
        </h2>

        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-3.5">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;
            const panelId = `${baseId}-panel-${service.id}`;
            const headerId = `${baseId}-header-${service.id}`;

            return (
              <div
                key={service.id}
                className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/[0.04]"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenId((prev) => (prev === service.id ? "" : service.id))
                  }
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                >
                  <span
                    className={`text-sm font-bold leading-snug sm:text-base ${
                      isOpen ? "text-neutral-900" : TEAL_TITLE
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm"
                    aria-hidden
                  >
                    {isOpen ? (
                      <ChevronUp className="size-4 text-neutral-800" />
                    ) : (
                      <ChevronDown className="size-4 text-neutral-800" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    className="min-h-0 overflow-hidden"
                    {...(!isOpen ? { inert: true } : {})}
                  >
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      aria-hidden={!isOpen}
                      className={`border-t border-neutral-100 px-4 pb-6 pt-2 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:px-6 sm:pb-8 sm:pt-4 ${
                        isOpen
                          ? "translate-y-0 opacity-100 motion-reduce:translate-y-0"
                          : "pointer-events-none -translate-y-1 opacity-0 motion-reduce:translate-y-0"
                      }`}
                    >
                      <div className="grid gap-8 lg:grid-cols-[1fr_min(42%,420px)] lg:items-start lg:gap-12">
                        <div>
                          {service.intro.map((para, idx) => (
                            <p
                              key={`${service.id}-intro-${idx}`}
                              className={`text-sm leading-relaxed text-neutral-800 sm:text-[15px] ${idx > 0 ? "mt-4" : ""}`}
                            >
                              {para}
                            </p>
                          ))}
                          <p
                            className={`mt-5 text-sm font-bold sm:text-[15px] ${TEAL_TITLE}`}
                          >
                            {service.whyHeading}
                          </p>
                          <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {service.points.map((point, i) => (
                              <li
                                key={point}
                                className={`flex gap-2 text-sm font-semibold leading-snug sm:text-[15px] ${TEAL_LIST}`}
                              >
                                <span className="shrink-0 font-bold">
                                  {i + 1}.
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:max-w-[380px] lg:mx-0 lg:max-w-none">
                          <Image
                            src={warehouseImg}
                            alt="Warehouse worker loading freight onto a truck at sunset"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 380px, 420px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
