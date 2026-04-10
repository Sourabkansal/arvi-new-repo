"use client";

import freightColumnImage from "@/Images/rightloding-column-img.webp";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
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

const WAREHOUSE_LOCATIONS = ["Edison, NJ", "Harrison, NJ", "Chino, CA"] as const;

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
      className={`scroll-mt-28 border-b border-neutral-200 last:border-b-0 sm:scroll-mt-32 ${
        isOpen ? "bg-[#f5f5f5]" : "bg-white"
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
        <span className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
          {label}
        </span>
        {isOpen ? (
          <ChevronUp
            className="size-5 shrink-0 text-[#004438] sm:size-6"
            aria-hidden
          />
        ) : (
          <ChevronDown
            className="size-5 shrink-0 text-[#004438] sm:size-6"
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
    { id: "ltl", label: "LTL" },
    { id: "ftl", label: "FTL" },
    { id: "drayage", label: "Drayage" },
    { id: "flatbed", label: "Flatbed" },
  ];

  return (
    <section
      id="shippers"
      className="bg-white py-14 sm:py-20 lg:py-24"
      aria-labelledby="freight-possibilities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="freight-possibilities-heading"
              className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.25rem] lg:leading-[1.2]"
            >
              Your Freight. Our Network. Unlimited Possibilities.
            </h2>

            <div className="mt-10 overflow-hidden rounded-none border border-neutral-200 bg-white sm:rounded-xl">
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
                  className="flex flex-wrap gap-2 sm:gap-3"
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
                        className={`relative rounded-full px-4 py-2.5 text-xs font-bold tracking-wide transition-colors sm:px-5 sm:text-sm ${
                          selected
                            ? "bg-[#004438] text-white shadow-sm"
                            : "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300"
                        }`}
                      >
                        {tab.label}
                        {selected ? (
                          <span
                            className="absolute left-1/2 top-full z-10 -mt-px -translate-x-1/2 border-[7px] border-transparent border-t-[#004438]"
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
                  className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-neutral-900 sm:text-base"
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
                <p className="max-w-2xl text-sm leading-relaxed text-neutral-900 sm:text-base">
                  {WAREHOUSE_BODY}
                </p>
                <p className="mt-6 text-sm font-bold text-neutral-900 sm:text-base">
                  Warehouses located in
                </p>
                <ul className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
                  {WAREHOUSE_LOCATIONS.map((loc) => (
                    <li
                      key={loc}
                      className="flex items-center gap-2 text-sm font-medium text-neutral-900 sm:text-base"
                    >
                      <MapPin
                        className="size-4 shrink-0 text-[#004438] sm:size-[18px]"
                        aria-hidden
                      />
                      {loc}
                    </li>
                  ))}
                </ul>
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
                <p className="max-w-2xl text-sm leading-relaxed text-neutral-900 sm:text-base">
                  {INTERMODAL_BODY}
                </p>
              </AccordionItem>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-neutral-200 shadow-lg ring-1 ring-black/5 sm:aspect-[3/4] lg:aspect-[4/5] lg:sticky lg:top-28">
              <Image
                src={freightColumnImage}
                alt="Forklift loading palletized freight into a shipping container"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
