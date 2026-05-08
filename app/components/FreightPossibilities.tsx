"use client";

import freightColumnImage from "@/Images/right image hero second.png";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  return (
    <div
      id={anchorId}
      className={`scroll-mt-28 border-b border-divider last:border-b-0 sm:scroll-mt-32 ${
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
        {isOpen ? (
          <ChevronUp
            className="size-5 shrink-0 text-primary sm:size-6"
            aria-hidden
          />
        ) : (
          <ChevronDown
            className="size-5 shrink-0 text-primary sm:size-6"
            aria-hidden
          />
        )}
      </button>
      {isOpen && children ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-4 pb-6 pt-0 sm:px-5 sm:pb-8"
        >
          {children}
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
      className="bg-surface-card py-16 sm:py-24 lg:py-28"
      aria-labelledby="freight-possibilities-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="flex flex-col lg:col-span-6">
            <h2
              id="freight-possibilities-heading"
              className="max-w-xl text-[clamp(1.35rem,4.5vw,1.75rem)] font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.25rem] lg:leading-[1.2]"
            >
              Connecting Your Freight to the Right Capacity—Every Time.
            </h2>

            <div className="mt-10 overflow-hidden rounded-none border border-divider bg-surface-card shadow-card sm:rounded-xl">
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
                  className="flex flex-nowrap gap-2 overflow-x-auto pb-2 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 sm:pt-0 [&::-webkit-scrollbar]:hidden"
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
                        className={`relative rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition-colors sm:px-5 sm:text-sm ${
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
                  className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-ink sm:text-base"
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
                <p className="max-w-2xl text-sm leading-relaxed text-ink sm:text-base">
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
                <p className="max-w-2xl text-sm leading-relaxed text-ink sm:text-base">
                  {INTERMODAL_BODY}
                </p>
              </AccordionItem>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-6 lg:h-full lg:min-h-0">
            <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-divider shadow-card ring-1 ring-divider lg:aspect-auto lg:min-h-0 lg:flex-1">
              <Image
                src={freightColumnImage}
                alt="Forklift loading palletized freight into a shipping container"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
