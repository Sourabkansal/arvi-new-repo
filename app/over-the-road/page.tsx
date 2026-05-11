import { Header } from "../components/Header";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import { OverTheRoadServicesAccordion } from "../components/OverTheRoadServicesAccordion";
import overTheRoadBg from "@/Images/over-the-road-truck.jpg";
import tailoredFreightImg from "@/Images/new gen right side blue truck.png";
import { buildRouteMetadata } from "@/lib/seo/metadata";
import { ROUTE_META } from "@/lib/seo/routes-metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildRouteMetadata(ROUTE_META["/over-the-road"]);

export default function OverTheRoadPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <section
          className="relative min-h-[min(54vh,510px)] w-full overflow-hidden"
          aria-labelledby="otr-hero-heading"
        >
          <div className="absolute inset-0">
            <Image
              src={overTheRoadBg}
              alt="Semi-truck on the highway — over-the-road freight"
              fill
              className="object-cover object-[center_40%] sm:object-center"
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
              <h1
                id="otr-hero-heading"
                className="text-[clamp(1.45rem,4.8vw,1.85rem)] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
              >
                <span className="block">
                  Driving Your Business Forward with Seamless Logistics
                </span>
                <span className="mt-2 block text-base font-bold leading-snug text-white/95 sm:mt-3 sm:text-lg lg:mt-4 lg:text-xl lg:leading-snug">
                  End-to-End Shipping Solutions Tailored to Your Needs
                </span>
              </h1>

              <div className="mt-8 sm:mt-9">
                <Link
                  href="/contact"
                  className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-deep/80"
                >
                  Request quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-surface-card py-16 sm:py-20 lg:py-24"
          aria-labelledby="otr-tailored-heading"
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-5">
                <h2
                  id="otr-tailored-heading"
                  className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
                >
                  Tailored Freight Solutions for Modern Businesses
                </h2>
                <p className="mt-6 text-base leading-[1.65] text-muted sm:text-lg">
                  At ARVI Logistics, we design shipping strategies around your
                  operations. Whether it&apos;s local distribution or long-haul
                  transport, we connect you with the right resources to ensure
                  speed, efficiency, and complete visibility at every step.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-7 lg:min-h-0">
                <div className="relative mx-auto aspect-video min-h-[280px] w-full overflow-hidden rounded-2xl bg-secondary-deep shadow-card ring-1 ring-divider sm:min-h-[320px] lg:mx-0 lg:min-h-[380px]">
                  <Image
                    src={tailoredFreightImg}
                    alt="Forklift loading palletized freight into a shipping container at a loading dock"
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <OverTheRoadServicesAccordion />

        <LogisticsCtaBanner
          headline="Moving your cargo safely, efficiently, and on schedule."
          subheading={null}
          buttonText="Talk to an expert"
          backgroundImage={overTheRoadBg}
        />
      </main>
    </div>
  );
}
