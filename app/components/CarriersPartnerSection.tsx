import truckImage from "@/Images/Arvi truck.png";
import Image from "next/image";
import Link from "next/link";

const DOT_BG =
  "radial-gradient(circle 1px at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)";

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
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="carriers-partner-heading"
    >
      <EdgeDotFade side="left" />
      <EdgeDotFade side="right" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <h2
              id="carriers-partner-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
            >
              <span className="block">Drive More. Earn More.</span>
              <span className="mt-2 block">Partner with ARVI Logistics.</span>
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
              href="#quote"
              className="mt-8 inline-flex origin-center items-center justify-center rounded-full bg-[#004438] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-[transform,box-shadow,background-color,color] duration-300 ease-out hover:scale-[1.06] hover:bg-[#fbbf24] hover:text-neutral-900 hover:shadow-xl motion-reduce:transition-colors motion-reduce:duration-200 motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbf24] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-10 sm:py-4"
            >
              Get started
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[20px] shadow-2xl ring-1 ring-white/10 sm:aspect-[4/3] lg:min-h-[340px] lg:aspect-[16/11]">
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
