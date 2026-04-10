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
          className="mx-auto max-w-7xl px-4 py-16 text-center text-neutral-600 sm:px-6 lg:px-8"
        >
          <p className="text-sm">
            Anchor sections for navigation — extend with your forms and content.
          </p>
        </section>
      </main>
    </div>
  );
}
