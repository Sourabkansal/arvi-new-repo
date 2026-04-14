import { CarriersWhyChooseSection } from "../components/CarriersWhyChooseSection";
import { Header } from "../components/Header";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import carriersHeroBg from "@/Images/Carriers hero image.jpg";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carriers | ARVI Logistics",
  description:
    "Partner with ARVI Logistics: steady freight, fair rates, and support that keeps you moving from FTL and LTL to drayage and flatbed.",
};

export default function CarriersPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <section
          className="relative min-h-[min(54vh,510px)] w-full overflow-hidden"
          aria-labelledby="carriers-hero-heading"
        >
          <div className="absolute inset-0 min-h-[min(54vh,510px)] w-full">
            <Image
              src={carriersHeroBg}
              alt="Multi-modal logistics: ship, air, and over-the-road freight"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/65 to-[#0a1628]/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-transparent to-[#0a1628]/30"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto flex min-h-[min(54vh,510px)] max-w-7xl flex-col justify-center px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">
                Carriers
              </p>
              <h1
                id="carriers-hero-heading"
                className="mt-3 text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md sm:mt-4 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
              >
                <span className="block">
                  Keep Rolling With Reliable Loads and a Team That Has Your Back
                </span>
                <span className="mt-2 block text-base font-bold leading-snug text-white/95 sm:mt-3 sm:text-lg lg:mt-4 lg:text-xl lg:leading-snug">
                  From FTL to LTL, drayage to flatbed—we connect you with freight
                  that fits your lanes and your business goals.
                </span>
              </h1>

              <div className="mt-8 sm:mt-9">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#004438] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/25 transition-colors duration-200 hover:bg-[#fbbf24] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]/80"
                >
                  Haul with us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CarriersWhyChooseSection />

        <LogisticsCtaBanner
          headline="Join our carrier network—let’s find the right freight for your fleet."
          subheading={null}
          buttonText="Get started"
          backgroundImage={carriersHeroBg}
        />
      </main>
    </div>
  );
}
