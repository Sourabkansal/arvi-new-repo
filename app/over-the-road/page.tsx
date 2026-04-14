import { Header } from "../components/Header";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import { OverTheRoadServicesAccordion } from "../components/OverTheRoadServicesAccordion";
import overTheRoadBg from "@/Images/over-the-road-truck.jpg";
import tailoredFreightImg from "@/Images/rightloding-column-img.webp";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over the Road | ARVI Logistics",
  description:
    "End-to-end over-the-road shipping solutions tailored to your business. ARVI Logistics.",
};

export default function OverTheRoadPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
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
              <h1
                id="otr-hero-heading"
                className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
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
                  className="inline-flex rounded-full bg-[#004438] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/25 transition-colors duration-200 hover:bg-[#fbbf24] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]/80"
                >
                  Request quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="otr-tailored-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div>
                <h2
                  id="otr-tailored-heading"
                  className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
                >
                  Tailored Freight Solutions for Modern Businesses
                </h2>
                <p className="mt-6 text-base leading-[1.65] text-neutral-800 sm:text-lg">
                  At ARVI Logistics, we design shipping strategies around your
                  operations. Whether it&apos;s local distribution or long-haul
                  transport, we connect you with the right resources to ensure
                  speed, efficiency, and complete visibility at every step.
                </p>
              </div>
              <div>
                <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[24px] shadow-lg ring-1 ring-black/5 sm:aspect-[5/4] lg:mx-0 lg:max-w-none lg:min-h-[min(100%,420px)]">
                  <Image
                    src={tailoredFreightImg}
                    alt="Commercial truck and shipping containers — freight and logistics"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <OverTheRoadServicesAccordion />

        <LogisticsCtaBanner
          headline="Get secure, on-time delivery with our truckload services—start now."
          subheading={null}
          buttonText="Talk to an expert"
          backgroundImage={overTheRoadBg}
        />
      </main>
    </div>
  );
}
