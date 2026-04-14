import { Header } from "../components/Header";
import { IntermodalShippingSection } from "../components/IntermodalShippingSection";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import intermodalHeroBg from "@/Images/intermodal image hero.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intermodal | ARVI Logistics",
  description:
    "Rail, truck, and port connections coordinated for efficient, mode-optimized freight. ARVI Logistics intermodal solutions.",
};

export default function IntermodalPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <section
          className="relative min-h-[min(44.8vh,448px)] w-full overflow-hidden"
          aria-labelledby="intermodal-hero-heading"
        >
          <div className="absolute inset-0">
            <Image
              src={intermodalHeroBg}
              alt="Intermodal terminal with stacked shipping containers and port equipment"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-neutral-950/60"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/35 to-neutral-950/25"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto flex min-h-[min(44.8vh,448px)] max-w-7xl flex-col items-center justify-center px-4 pb-11 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-11 lg:px-8 lg:pb-16 lg:pt-12">
            <h1
              id="intermodal-hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem]"
            >
              Intermodal
            </h1>
            <p className="mt-3 max-w-3xl text-xl font-bold leading-snug text-white sm:mt-4 sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
              Seamless Rail, Truck, and Port Connections
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg">
              Your freight, optimized across modes for smarter shipping.
            </p>
            <div className="mt-9 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#004438] px-9 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/25 transition-colors duration-200 hover:bg-[#fbbf24] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900/80"
              >
                Explore intermodal
              </Link>
            </div>
          </div>
        </section>

        <IntermodalShippingSection />

        <LogisticsCtaBanner
          headline="Ready to simplify rail, truck, and port moves?"
          subheading="Tell us about your lanes and equipment—we’ll help you plan the right intermodal path."
          buttonText="Talk to an expert"
          backgroundImage={intermodalHeroBg}
        />
      </main>
    </div>
  );
}
