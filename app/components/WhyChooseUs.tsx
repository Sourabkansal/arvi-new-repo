import Image from "next/image";

/**
 * Rounded hexagon path for viewBox "0 0 192 220"
 * Vertices (before rounding):
 *   Top (96,2)  Upper-right (190,56)  Lower-right (190,164)
 *   Bottom (96,218)  Lower-left (2,164)  Upper-left (2,56)
 *
 * Corner radius r=14. Each vertex is replaced by:
 *   – a point r-units before the vertex (along the incoming edge)
 *   – a CCW arc (sweep=0) of radius 14 to a point r-units after the vertex
 * This gives the rounded-corner hexagon that matches the reference design.
 */
const HEX_PATH =
  "M 83.9,9 A 14,14 0 0,0 108.1,9 " +
  "L 177.9,49 A 14,14 0 0,0 190,70 " +
  "L 190,150 A 14,14 0 0,0 177.9,171 " +
  "L 108.1,211 A 14,14 0 0,0 83.9,211 " +
  "L 14.1,171 A 14,14 0 0,0 2,150 " +
  "L 2,70 A 14,14 0 0,0 14.1,49 " +
  "Z";

const CARDS = [
  {
    id: "transparent",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/choose-info-icon1.png",
    banner: "TRANSPARENT",
    sublabel: "QUOTES",
    iconAlt: "Transparent quotes icon",
  },
  {
    id: "dedicated",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/choose-info-icon2.png",
    banner: "DEDICATED",
    sublabel: "SUPPORT",
    iconAlt: "Dedicated support icon",
  },
  {
    id: "reliable",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/choose-info-icon3.png",
    banner: "RELIABLE",
    sublabel: "SERVICE",
    iconAlt: "Reliable service icon",
  },
] as const;

interface HexCardProps {
  id: string;
  iconSrc: string;
  banner: string;
  sublabel: string;
  iconAlt: string;
}

/*
 * Layout within viewBox 192×220 (1px = 1 SVG unit):
 *   Icon centre    ≈ y 82  (top 36px + half of 60px icon = 66... but SVG units scale)
 *   Green band     y 116 → 158  (42px tall)
 *   Sublabel       ≈ y 178
 *
 * The absolute overlay matches these positions because the SVG fills the container
 * and the overlay uses inset-0, making 1 CSS px ≈ 1 SVG unit at the card's render size.
 * Cards render at w-[192px] so the mapping is exact at default size.
 */
function HexCard({ id, iconSrc, banner, sublabel, iconAlt }: HexCardProps) {
  const clipId = `hex-clip-${id}`;
  return (
    <div className="relative mx-auto w-[192px] [filter:drop-shadow(0_6px_18px_rgba(0,0,0,0.13))]">
      {/* SVG draws the rounded hex outline + gray divider + green band */}
      <svg
        viewBox="0 0 192 220"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-hidden
      >
        <defs>
          {/* Clip path uses the same rounded hex so the green rect stays inside */}
          <clipPath id={clipId}>
            <path d={HEX_PATH} />
          </clipPath>
        </defs>

        {/* 1. White fill with rounded green border */}
        <path d={HEX_PATH} fill="white" stroke="#004438" strokeWidth="2.5" />

        {/* 2. Light gray separator line just above the green band (y=115) */}
        <line
          x1="2"
          y1="115"
          x2="190"
          y2="115"
          stroke="#d1d5db"
          strokeWidth="1"
        />

        {/* 3. Green banner clipped to rounded hex */}
        <rect
          x="0"
          y="116"
          width="192"
          height="42"
          fill="#004438"
          clipPath={`url(#${clipId})`}
        />
      </svg>

      {/* Text + icon overlay, absolutely positioned over the SVG */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Icon — top of icon at ~36px, matches SVG upper third */}
        <div className="relative mt-9 size-[60px] shrink-0">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            className="object-contain"
            sizes="60px"
          />
        </div>

        {/* Spacer: icon bottom (36+60=96px) → band top (116px) = 20px gap */}
        {/* Band container height matches green rect (42px) */}
        <div className="mt-5 flex h-[42px] w-full items-center justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            {banner}
          </p>
        </div>

        {/* Sublabel below band, centred in lower hex section */}
        <p className="mt-5 text-[11px] font-normal uppercase tracking-[0.18em] text-neutral-800">
          {sublabel}
        </p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="why-choose-heading"
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Why Choose ARVI Logistics?
        </h2>

        <div className="mt-12 flex flex-col items-center gap-14 sm:mt-14 sm:flex-row sm:justify-center sm:gap-10 lg:mt-16 lg:gap-14">
          {CARDS.map((card) => (
            <HexCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
