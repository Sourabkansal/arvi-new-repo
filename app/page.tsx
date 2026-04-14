import Link from "next/link";
import { CarriersPartnerSection } from "./components/CarriersPartnerSection";
import { DeliveringExcellence } from "./components/DeliveringExcellence";
import { FreightPossibilities } from "./components/FreightPossibilities";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LogisticsCtaBanner } from "./components/LogisticsCtaBanner";
import { IndustryExpertise } from "./components/IndustryExpertise";
import { TestimonialSlider } from "./components/TestimonialSlider";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <Hero />
        <FreightPossibilities />
        <DeliveringExcellence />
        <LogisticsCtaBanner />
        <CarriersPartnerSection />
        <WhyChooseUs />
        <IndustryExpertise />
        <TestimonialSlider />
        <section
          id="quote"
          className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8"
        >
          <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            Request a quote
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-neutral-600 sm:text-base">
            Tell us about your freight on our contact form — we&apos;ll respond
            as soon as we can.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#004438] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#fbbf24] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
          >
            Get in touch
          </Link>
        </section>
      </main>
    </div>
  );
}
