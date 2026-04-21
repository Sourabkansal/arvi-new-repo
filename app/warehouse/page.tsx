import { Header } from "../components/Header";
import { LogisticsCtaBanner } from "../components/LogisticsCtaBanner";
import { WarehouseServicesSection } from "../components/WarehouseServicesSection";
import warehouseHeroBg from "@/Images/warehouse Hero image.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warehouse | ARVI Logistics",
  description:
    "Secure storage and streamlined logistics—short-term, long-term, and seasonal warehousing to keep your supply chain moving.",
};

export default function WarehousePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <section
          className="relative min-h-[min(56vh,560px)] w-full overflow-hidden"
          aria-labelledby="warehouse-hero-heading"
        >
          <div className="absolute inset-0">
            <Image
              src={warehouseHeroBg}
              alt="Industrial warehouse with storage racks and inventory"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-secondary-deep/65"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary-deep/80 via-secondary/40 to-secondary/30"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto flex min-h-[min(56vh,560px)] max-w-[1280px] flex-col items-center justify-center px-4 pb-14 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
            <h1
              id="warehouse-hero-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem]"
            >
              Warehouse
            </h1>
            <p className="mt-3 max-w-3xl text-lg font-bold leading-snug text-white sm:mt-4 sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
              Secure Storage, Streamlined Logistics
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg">
              Short-term, long-term, or seasonal — our warehousing solutions
              keep your supply chain moving efficiently and reliably.
            </p>
            <div className="mt-9 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-primary px-9 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-deep/80"
              >
                Find a warehouse
              </Link>
            </div>
          </div>
        </section>

        <WarehouseServicesSection />

        <LogisticsCtaBanner
          headline="Need warehousing that fits your network?"
          subheading="Speak with our team about locations, handling, and integration with your transportation plan."
          buttonText="Call (201) 259-9223"
          backgroundImage={warehouseHeroBg}
        />
      </main>
    </div>
  );
}
