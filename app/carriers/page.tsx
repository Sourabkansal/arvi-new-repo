import { CarriersWhyChooseSection } from "../components/CarriersWhyChooseSection";
import { Header } from "../components/Header";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import carriersHeroBg from "@/Images/Carriers hero image.jpg";
import { buildRouteMetadata } from "@/lib/seo/metadata";
import { ROUTE_META } from "@/lib/seo/routes-metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildRouteMetadata(ROUTE_META["/carriers"]);

export default function CarriersPage() {
  return (
    <div className="min-h-screen bg-canvas">
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
              className="absolute inset-0 bg-gradient-to-r from-secondary-deep/92 via-secondary/70 to-secondary/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary-deep/85 via-transparent to-secondary/35"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto flex min-h-[min(54vh,510px)] max-w-[1280px] flex-col justify-center px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">
                Carriers
              </p>
              <h1
                id="carriers-hero-heading"
                className="mt-3 text-[clamp(1.45rem,4.8vw,1.85rem)] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md sm:mt-4 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
              >
                <span className="block">
                  Keep Your Trucks Moving With Reliable Freight Opportunities
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-base font-bold leading-snug text-white/95 sm:mt-4 sm:text-lg lg:mt-5 lg:text-xl lg:leading-snug">
                From truckload and partial freight to port logistics and flatbed
                hauling—we connect carriers with loads that match their routes,
                equipment, and business needs.
              </p>

              <div className="mt-8 sm:mt-9">
                <Link
                  href="/contact"
                  className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-deep/80"
                >
                  Drive with us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CarriersWhyChooseSection />

        <LogisticsCtaBanner
          headline="Join our carrier network—let's find the right freight for your fleet."
          subheading={null}
          buttonText="Get started"
          backgroundImage={carriersHeroBg}
        />
      </main>
    </div>
  );
}
