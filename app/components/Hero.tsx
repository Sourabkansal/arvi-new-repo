import { MapPin, Route, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://commons.wikimedia.org/wiki/Special:FilePath/J.B.%20Hunt%20intermodal%20semi%20truck.jpg";

const highlights = [
  { label: "FTL & dedicated", icon: Truck },
  { label: "Nationwide lanes", icon: Route },
  { label: "Vetted carriers", icon: ShieldCheck },
  { label: "24/7 load support", icon: MapPin },
];

export function Hero() {
  return (
    <section className="relative min-h-[min(82vh,820px)] w-full overflow-hidden sm:min-h-[min(76vh,760px)]">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Commercial trucks on a highway at dusk — freight and logistics"
          fill
          className="object-cover object-[center_35%] sm:object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-secondary-deep/92 via-secondary/70 to-primary/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-secondary-deep/85 via-transparent to-secondary/25"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(82vh,820px)] max-w-[1280px] min-w-0 flex-col px-4 pb-44 pt-12 sm:min-h-[min(76vh,760px)] sm:pb-36 sm:pt-16 lg:px-8">
        <div className="min-w-0 max-w-2xl">
          <p className="mb-4 inline-flex max-w-full items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm sm:tracking-[0.2em]">
            Freight brokerage · Logistics
          </p>
          <h1 className="text-[clamp(1.65rem,5.5vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Powering Your Supply Chain,
            <br />
            <span className="text-primary">Mile by Mile</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/90 sm:text-lg">
            From spot loads to contract freight, we connect shippers with
            reliable capacity—so your cargo keeps moving and your business
            stays on schedule.
          </p>

          <ul className="mt-8 mb-6 flex flex-wrap gap-3 sm:mb-0">
            {highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center px-3 sm:px-6 lg:px-8">
          {/* Mobile: push card further down so it sits on the canvas and clears hero tags/background */}
          <div className="pointer-events-auto w-full max-w-[1240px] translate-y-[58%] rounded-2xl bg-surface-card p-5 shadow-card-hover ring-1 ring-divider sm:translate-y-[40%] md:translate-y-1/3 sm:p-7 md:p-8">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="min-w-0">
                <p className="text-center text-sm font-medium leading-relaxed text-muted sm:text-base lg:text-left lg:text-lg">
                  Your freight, our expertise—delivering efficiency for shippers
                  and carriers alike.
                </p>
                <p className="mt-2 text-center text-xs text-muted sm:text-sm lg:text-left">
                  Dry van, refrigerated, flatbed, and more — tell us what you
                  need to move.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:w-auto lg:shrink-0 lg:justify-end">
                <Link
                  href="/contact"
                  className="w-full rounded-xl bg-primary px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-white shadow-md shadow-primary/30 transition hover:bg-primary-hover hover:shadow-lg sm:w-auto sm:min-w-[10rem] sm:px-8"
                >
                  Get a quote
                </Link>
                <Link
                  href="#shippers"
                  className="w-full rounded-xl border-2 border-secondary bg-surface-card px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-secondary shadow-sm transition hover:bg-secondary/5 sm:w-auto sm:min-w-[10rem] sm:px-8"
                >
                  Haul with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra canvas strip on mobile so the lowered card clears the hero image */}
      <div className="h-28 bg-canvas sm:h-24" aria-hidden />
    </section>
  );
}
