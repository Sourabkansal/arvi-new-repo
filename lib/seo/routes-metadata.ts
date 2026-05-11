import { joinKeywords, LOCAL_SEO_KEYWORDS, PRIMARY_KEYWORDS } from "@/lib/seo/keywords";
import type { Metadata } from "next";

const kwCommon = `${joinKeywords(LOCAL_SEO_KEYWORDS)}, ${PRIMARY_KEYWORDS.slice(0, 11).join(", ")}`;

/** Central route definitions → titles, descriptions, keywords for App Router metadata. */
export interface RouteMetaDef {
  path: string;
  title: string;
  /** ≤ ~160 chars preferred for snippets */
  description: string;
  keywords: string;
}

export const ROUTE_META: Record<string, RouteMetaDef> = {
  "/": {
    path: "/",
    title:
      "ARVI Logistics | Freight Broker & Transportation Solutions Nationwide | Hazle Township PA",
    description:
      "ARVI Logistics is a Hazle Township, Pennsylvania–based freight broker and logistics company offering truckload, LTL, intermodal, warehousing, refrigerated, flatbed, drayage, and nationwide shipping for shippers and carriers.",
    keywords:
      PRIMARY_KEYWORDS.slice(0, 15).join(", ") +
      ", freight brokerage, ship freight USA, owner-operators Pennsylvania",
  },
  "/contact": {
    path: "/contact",
    title: "Contact ARVI Logistics | Freight Quote & Hazle Township PA HQ",
    description:
      "Contact ARVI Logistics for truckload & LTL quotes, warehousing questions, carrier onboarding, or intermodal freight in Pennsylvania and nationwide. Fast response—Hazle Township headquarters.",
    keywords: `${kwCommon}, contact freight broker, freight quote Hazle Township`,
  },
  "/carriers": {
    path: "/carriers",
    title: "Carrier Network & Freight Opportunities | ARVI Logistics Pennsylvania",
    description:
      "Partner with ARVI Logistics for dependable truckload, partial freight, port logistics, flatbed freight, and scalable capacity for Hazle Township, PA carriers and owner-operators across the USA.",
    keywords: `${kwCommon}, trucking partner PA, freight loads for carriers`,
  },
  "/warehouse": {
    path: "/warehouse",
    title: "Warehousing & Distribution | ARVI Logistics | Hazle Township PA Storage",
    description:
      "Secure warehousing and distribution from ARVI Logistics—storage, fulfillment, visibility, cross-docking, and coordinated transportation across Pennsylvania and the United States.",
    keywords: `${kwCommon}, secure warehousing Northeast, distribution center Hazle Township`,
  },
  "/intermodal": {
    path: "/intermodal",
    title: "Intermodal Shipping | Rail & Port Freight | ARVI Logistics USA",
    description:
      "Coordinate rail, port, and truck moves with multimodal freight from ARVI Logistics—coverage across corridors, milestones, and long-haul container shipping for nationwide shippers.",
    keywords: `${kwCommon}, intermodal rail trucking, multimodal freight`,
  },
  "/over-the-road": {
    path: "/over-the-road",
    title:
      "Over-The-Road Freight | Truckload, LTL, Flatbed & Drayage | ARVI Logistics",
    description:
      "Over-the-road freight—partial freight (LTL), dedicated truckload, port logistics, open-deck/OS&D—with ARVI Logistics. Hazle Township brokerage serving nationwide shippers and vetted carriers.",
    keywords: `${kwCommon}, truckload brokerage, LTL brokerage USA, flatbed drayage`,
  },
  "/careers": {
    path: "/careers",
    title: "Careers | Logistics & Logistics Technology | ARVI Logistics Hazle Township PA",
    description:
      "Build your career at ARVI Logistics—roles in Hazle Township, PA spanning logistics engineering, technology, freight sales, and supply chain coordination for nationwide clients.",
    keywords: `${joinKeywords(LOCAL_SEO_KEYWORDS)}, logistics careers PA, trucking industry jobs Northeast`,
  },
};

export function mergeDefaultOpenGraph(
  route: RouteMetaDef,
): NonNullable<Metadata["openGraph"]> {
  return {
    title: route.title.slice(0, 70),
    description: route.description,
    siteName: "ARVI Logistics",
    locale: "en_US",
    type: "website",
  };
}
