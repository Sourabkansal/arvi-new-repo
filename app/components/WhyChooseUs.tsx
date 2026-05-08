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

const NAVY_STROKE = "#2B4C7E";
const NAVY_BAND = "#2B4C7E";

const CARDS = [
  {
    id: "transparent",
    banner: "TRANSPARENT",
    sublabel: "QUOTES",
  },
  {
    id: "dedicated",
    banner: "DEDICATED",
    sublabel: "SUPPORT",
  },
  {
    id: "reliable",
    banner: "RELIABLE",
    sublabel: "SERVICE",
  },
] as const;

interface HexCardProps {
  id: string;
  banner: string;
  sublabel: string;
}

function HexCard({ id, banner, sublabel }: HexCardProps) {
  const clipId = `hex-clip-${id}`;
  return (
    <div className="relative mx-auto w-full max-w-[192px] [filter:drop-shadow(0_8px_20px_rgba(43,76,126,0.12))]">
      <svg
        viewBox="0 0 192 220"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-hidden
      >
        <defs>
          <clipPath id={clipId}>
            <path d={HEX_PATH} />
          </clipPath>
        </defs>

        <path
          d={HEX_PATH}
          fill="white"
          stroke={NAVY_STROKE}
          strokeWidth="2.5"
        />

        <line
          x1="2"
          y1="115"
          x2="190"
          y2="115"
          stroke="#e5e7eb"
          strokeWidth="1"
        />

        <rect
          x="0"
          y="116"
          width="192"
          height="42"
          fill={NAVY_BAND}
          clipPath={`url(#${clipId})`}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center pt-[116px]">
        <div className="flex h-[42px] w-full items-center justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            {banner}
          </p>
        </div>

        <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
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
      className="bg-surface-card py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2
          id="why-choose-heading"
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Built on Trust. Backed by ARVI Logistics
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-12 lg:mt-16 lg:gap-16">
          {CARDS.map((card) => (
            <HexCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
