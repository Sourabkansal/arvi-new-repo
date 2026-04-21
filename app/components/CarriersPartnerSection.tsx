import truckImage from "@/Images/Arvi truck.png";
import Image from "next/image";
import Link from "next/link";

const DOT_BG =
  "radial-gradient(circle 1px at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)";

function EdgeDotFade({ side }: { side: "left" | "right" }) {
  const mask =
    side === "left"
      ? "linear-gradient(to right, black 0%, transparent 88%)"
      : "linear-gradient(to left, black 0%, transparent 88%)";

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 w-[min(44vw,340px)] max-w-full opacity-[0.2] sm:opacity-[0.28] ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        backgroundImage: DOT_BG,
        backgroundSize: "16px 16px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
      aria-hidden
    />
  );
}

export function CarriersPartnerSection() {
  return (
    <section
      id="carriers"
      className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-deep to-[#1a3052] text-white"
      aria-labelledby="carriers-partner-heading"
    >
      <EdgeDotFade side="left" />
      <EdgeDotFade side="right" />

      <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <h2
              id="carriers-partner-heading"
              className="text-[clamp(1.45rem,4.2vw,1.9rem)] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
            >
              <span className="block">Drive More. Earn More.</span>
              <span className="mt-2 block text-primary">Partner with ARVI Logistics.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-base">
              Join our trusted carrier network and keep your wheels moving with
              consistent, high-paying freight. With a decade-old MC, fast payouts
              in just 15–20 days, and loads tailored to your schedule, we make
              it easy to stay on the road. Whether you haul FTL, LTL, drayage,
              or flatbed, you&apos;ll get steady freight, responsive support,
              and a partner invested in your growth.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex origin-center items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:scale-[1.03] hover:bg-primary-hover hover:shadow-xl motion-reduce:transition-colors motion-reduce:duration-200 motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-deep sm:px-10 sm:py-4"
            >
              Get started
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-card-hover ring-1 ring-white/15 sm:aspect-[4/3] lg:min-h-[340px] lg:aspect-[16/11]">
              <Image
                src={truckImage}
                alt="ARVI Logistics semi-truck with city skyline"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
