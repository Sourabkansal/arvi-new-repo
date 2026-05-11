import { buildRouteMetadata } from "@/lib/seo/metadata";
import { ROUTE_META } from "@/lib/seo/routes-metadata";
import Link from "next/link";

import { CarriersPartnerSection } from "./components/CarriersPartnerSection";
import { FreightPossibilities } from "./components/FreightPossibilities";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LogisticsCtaBanner } from "./components/LogisticsCtaBanner";
import { IndustryExpertise } from "./components/IndustryExpertise";
import { TestimonialSlider } from "./components/TestimonialSlider";

export const metadata = buildRouteMetadata(ROUTE_META["/"]);

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <Hero />
        <FreightPossibilities />
        <LogisticsCtaBanner sectionId="tracking" />
        <CarriersPartnerSection />
        <IndustryExpertise />
        <TestimonialSlider />
        <section
          id="quote"
          className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          aria-labelledby="home-quote-heading"
        >
          <h2 id="home-quote-heading" className="text-lg font-bold text-ink sm:text-2xl">
            Request a quote
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            Tell us about your freight on our contact form—we&apos;ll respond as soon as we can.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full max-w-xs justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:w-auto sm:max-w-none"
          >
            Get in touch
          </Link>
        </section>
      </main>
    </div>
  );
}
