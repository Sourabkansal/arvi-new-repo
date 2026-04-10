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
    <section className="relative min-h-[min(76vh,760px)] w-full overflow-hidden">
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
          className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0a1628]/55 to-[#004438]/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/20"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(76vh,760px)] max-w-7xl flex-col px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/95 backdrop-blur-sm sm:text-sm">
            Freight brokerage · Logistics
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Powering Your Supply Chain,
            <br />
            <span className="text-emerald-100">Mile by Mile</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            From spot loads to contract freight, we connect shippers with
            reliable capacity—so your cargo keeps moving and your business
            stays on schedule.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
              >
                <Icon className="size-4 shrink-0 text-emerald-200" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto w-full max-w-6xl translate-y-1/3 rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 ring-1 ring-neutral-200/90 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div>
                <p className="text-center text-base font-medium leading-relaxed text-neutral-700 lg:text-left lg:text-lg">
                  Your freight, our expertise—delivering efficiency for shippers
                  and carriers alike.
                </p>
                <p className="mt-2 text-center text-sm text-neutral-500 lg:text-left">
                  Dry van, refrigerated, flatbed, and more — tell us what you
                  need to move.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:shrink-0 lg:justify-end">
                <Link
                  href="#quote"
                  className="rounded-full bg-[#004438] px-8 py-3.5 text-center text-sm font-bold tracking-wide text-white shadow-md shadow-[#004438]/25 transition hover:bg-[#00352c]"
                >
                  REQUEST QUOTE
                </Link>
                <Link
                  href="#haul"
                  className="rounded-full border-2 border-[#004438] bg-white px-8 py-3.5 text-center text-sm font-bold tracking-wide text-[#004438] transition hover:bg-emerald-50"
                >
                  HAUL WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 bg-neutral-100 sm:h-16" aria-hidden />
    </section>
  );
}
