import excellenceBg from "@/Images/Logistics and warehousing in action.png";
import Image from "next/image";

const ICON1 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/excellence-icon1.png";
const ICON2 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/excellence-icon2.png";
const ICON3 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/excellence-icon3.png";

/** House silhouette: peaked top, flat bottom (matches reference cards). */
const CLIP_HOUSE =
  "polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)" as const;

interface StatCardProps {
  iconSrc: string;
  label: string;
  value: string;
  iconAlt: string;
}

function StatCard({ iconSrc, label, value, iconAlt }: StatCardProps) {
  return (
    <div className="mx-auto flex w-full max-w-[280px] flex-col sm:max-w-[300px]">
      <div
        className="bg-[#004438]"
        style={{ clipPath: CLIP_HOUSE }}
      >
        <div
          className="m-[2px] flex flex-col items-center bg-white px-6 pb-8 pt-12 text-center"
          style={{ clipPath: CLIP_HOUSE }}
        >
          <div className="relative size-[72px] shrink-0 sm:size-20">
            <Image
              src={iconSrc}
              alt={iconAlt}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <p className="mt-6 text-center text-xs font-bold uppercase leading-snug tracking-wide text-[#004438] sm:text-[13px]">
            {label}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center rounded-b-xl border-2 border-t-0 border-[#004438] bg-[#004438] px-4 py-4 sm:py-5">
        <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {value}
        </p>
      </div>
    </div>
  );
}

export function DeliveringExcellence() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-labelledby="delivering-excellence-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={excellenceBg}
          alt=""
          fill
          className="object-cover object-center blur-sm sm:blur-[6px]"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-white/65 backdrop-blur-[2px]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="delivering-excellence-heading"
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Delivering Excellence
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          <StatCard
            iconSrc={ICON1}
            iconAlt="Loads delivered"
            label="Loads Delivered"
            value="500,000+"
          />
          <StatCard
            iconSrc={ICON2}
            iconAlt="Carrier partnerships"
            label="Carrier Partnerships"
            value="300+"
          />
          <StatCard
            iconSrc={ICON3}
            iconAlt="On-time delivery"
            label="On-Time Delivery"
            value="98%"
          />
        </div>
      </div>
    </section>
  );
}
