"use client";

import freightColumnImage from "@/Images/new gen right side blue truck.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState, type ReactNode } from "react";

type CategoryId = "overTheRoad" | "warehouse" | "intermodal";

type SubTabId = "ltl" | "ftl" | "drayage" | "flatbed";

const OTR_COPY: Record<SubTabId, string> = {
  ltl: "Shipment between 150-15,000 lbs? LTL keeps it cost-efficient. You pay only for the space you use – safe, on-time, and budget-friendly.",
  ftl: "Got a full load or sensitive freight? FTL delivers direct.\nOne truck, minimal handling, secure transit – point A to B, no fuss.",
  drayage:
    "Need cargo moved between ports, rail, or warehouses? That’s drayage.\nWe handle short hauls fast so your supply chain never stalls.",
  flatbed:
    "Oversized, heavy, or irregular freight? Flatbed is the answer.\nFrom steel beams to machinery, we load it secure and move it safely.",
};

const WAREHOUSE_BODY =
  "Full-service warehousing built around your freight—receiving, storage, cross-dock, and outbound coordination. We keep your inventory organized and your loads moving on schedule.";

const INTERMODAL_BODY =
  "Seamlessly connect rail, ocean, and over-the-road moves with one coordinated plan. Our intermodal network balances cost, capacity, and transit time so your containers keep moving from port to final mile.";

interface AccordionItemProps {
  label: string;
  anchorId?: string;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
  children?: ReactNode;
}

function AccordionItem({
  label,
  anchorId,
  isOpen,
  onToggle,
  panelId,
  buttonId,
  children,
}: AccordionItemProps) {
  const hasPanel = children != null;

  return (
    <div
      id={anchorId}
      className={`scroll-mt-28 border-b border-divider last:border-b-0 transition-colors duration-200 sm:scroll-mt-32 ${
        isOpen ? "bg-canvas" : "bg-surface-card"
      }`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
      >
        <span className="text-base font-bold tracking-tight text-ink sm:text-lg">
          {label}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:size-6 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden
        />
      </button>
      {hasPanel ? (
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
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
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="px-4 pb-6 pt-0 sm:px-5 sm:pb-8"
            >
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function categoryFromHash(hash: string): CategoryId | null {
  const h = hash.replace(/^#/, "");
  if (h === "warehouse") return "warehouse";
  if (h === "intermodal") return "intermodal";
  if (h === "over-the-road" || h === "shippers") return "overTheRoad";
  return null;
}

export function FreightPossibilities() {
  const baseId = useId();
  const [openCategory, setOpenCategory] =
    useState<CategoryId>("overTheRoad");
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>("ltl");

  useEffect(() => {
    const apply = () => {
      const next = categoryFromHash(window.location.hash);
      if (next) setOpenCategory(next);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const subTabs: { id: SubTabId; label: string }[] = [
    { id: "ltl", label: "Partial Freight Solutions" },
    { id: "ftl", label: "Dedicated Truckload Services" },
    { id: "drayage", label: "Port & Rail Logistics" },
    { id: "flatbed", label: "Open Deck Transport" },
  ];

  return (
    <section
      id="shippers"
      className="bg-surface-card py-12 sm:py-16 lg:py-24 xl:py-28"
      aria-labelledby="freight-possibilities-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col lg:col-span-5">
            <h2
              id="freight-possibilities-heading"
              className="w-full max-w-xl text-balance text-[clamp(1.25rem,5vw,1.75rem)] font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.25rem] lg:leading-[1.2]"
            >
              Connecting Your Freight to the Right Capacity—Every Time.
            </h2>

            <div className="mt-8 w-full min-w-0 overflow-hidden rounded-none border border-divider bg-surface-card shadow-card sm:mt-10 sm:rounded-xl">
              <AccordionItem
                label="Over-The-Road"
                anchorId="over-the-road"
                isOpen={openCategory === "overTheRoad"}
                onToggle={() => {
                  setOpenCategory("overTheRoad");
                }}
                panelId={`${baseId}-otr-panel`}
                buttonId={`${baseId}-otr-btn`}
              >
                <div
                  role="tablist"
                  aria-label="Over-the-road services"
                  className="grid grid-cols-1 gap-2 pb-2 pt-0.5 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-2 sm:pb-0 sm:pt-0"
                >
                  {subTabs.map((tab) => {
                    const selected = activeSubTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        id={`${baseId}-tab-${tab.id}`}
                        aria-controls={`${baseId}-tabpanel-otr`}
                        onClick={() => setActiveSubTab(tab.id)}
                        className={`relative min-h-[44px] w-full touch-manipulation rounded-xl px-3 py-2.5 text-left text-xs font-semibold leading-snug tracking-wide transition-colors min-[380px]:min-h-0 sm:w-auto sm:px-5 sm:text-sm ${
                          selected
                            ? "bg-primary text-white shadow-md shadow-primary/25"
                            : "border border-divider bg-surface-card text-ink hover:border-secondary/30"
                        }`}
                      >
                        {tab.label}
                        {selected ? (
                          <span
                            className="absolute left-1/2 top-full z-10 -mt-px -translate-x-1/2 border-[7px] border-transparent border-t-primary"
                            aria-hidden
                          />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
                <div
                  id={`${baseId}-tabpanel-otr`}
                  role="tabpanel"
                  aria-labelledby={`${baseId}-tab-${activeSubTab}`}
                  className="mt-5 max-w-full min-w-0 whitespace-pre-line text-sm leading-relaxed text-ink sm:mt-6 sm:text-base"
                >
                  {OTR_COPY[activeSubTab]}
                </div>
              </AccordionItem>

              <AccordionItem
                label="Warehouse"
                anchorId="warehouse"
                isOpen={openCategory === "warehouse"}
                onToggle={() => {
                  setOpenCategory("warehouse");
                }}
                panelId={`${baseId}-wh-panel`}
                buttonId={`${baseId}-wh-btn`}
              >
                <p className="min-w-0 max-w-2xl break-words text-sm leading-relaxed text-ink sm:text-base">
                  {WAREHOUSE_BODY}
                </p>
              </AccordionItem>

              <AccordionItem
                label="Intermodal"
                anchorId="intermodal"
                isOpen={openCategory === "intermodal"}
                onToggle={() => {
                  setOpenCategory("intermodal");
                }}
                panelId={`${baseId}-im-panel`}
                buttonId={`${baseId}-im-btn`}
              >
                <p className="min-w-0 max-w-2xl break-words text-sm leading-relaxed text-ink sm:text-base">
                  {INTERMODAL_BODY}
                </p>
              </AccordionItem>
            </div>
          </div>

          <div className="flex min-h-0 w-full min-w-0 flex-col lg:col-span-7 lg:h-full lg:min-h-0">
            <div className="relative aspect-[5/4] w-full min-w-0 shrink-0 overflow-hidden rounded-xl bg-secondary-deep shadow-card ring-1 ring-divider sm:aspect-video sm:rounded-2xl lg:aspect-auto lg:min-h-[min(480px,58vh)] lg:flex-1">
              <Image
                src={freightColumnImage}
                alt="Forklift loading palletized freight into a shipping container"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
