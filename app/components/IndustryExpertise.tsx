import Image from "next/image";

const NAVY = "#2B4C7E";

interface IndustryCard {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const INDUSTRIES: IndustryCard[] = [
  {
    title: "Automotive",
    description:
      "Transport of vehicle parts, tires, and complete units with utmost care and speed.",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/expert-icon2.png",
    iconAlt: "Automotive freight",
  },
  {
    title: "Paper & Packaging",
    description:
      "Reliable service shipping large rolls, corrugated boxes, and industrial packaging supplies.",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/expert-icon4.png",
    iconAlt: "Paper and packaging shipping",
  },
  {
    title: "Manufacturing",
    description:
      "End-to-end freight for raw materials, machinery, tools, and finished products.",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/expert-icon5.png",
    iconAlt: "Manufacturing freight",
  },
  {
    title: "Recycling & Waste Management",
    description:
      "Streamlined transport for scrap metal, paper, plastics, and recyclables.",
    iconSrc:
      "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/expert-icon8.png",
    iconAlt: "Recycling and waste management transport",
  },
];

function ExpertiseCard({ title, description, iconSrc, iconAlt }: IndustryCard) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-divider bg-surface-card shadow-card">
      <div className="flex min-h-[118px] flex-[1.15] items-center justify-center border-b border-divider px-4 py-6 sm:min-h-[128px]">
        <div className="relative size-16 shrink-0 sm:size-[72px]">
          <Image
            src={iconSrc}
            alt={iconAlt}
            fill
            className="object-contain"
            sizes="72px"
          />
        </div>
      </div>

      <div
        className="border-b border-secondary/20 px-3 py-3 sm:px-4 sm:py-3.5"
        style={{ backgroundColor: NAVY }}
      >
        <h3 className="text-center text-[13px] font-bold leading-snug text-white sm:text-sm">
          {title}
        </h3>
      </div>

      <div className="flex flex-[1.4] flex-col justify-center px-4 py-5 sm:px-5 sm:py-6">
        <p className="text-center text-[13px] leading-relaxed text-muted sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

export function IndustryExpertise() {
  return (
    <section
      id="industry-expertise"
      className="bg-canvas py-16 sm:py-20 lg:py-24"
      aria-labelledby="industry-expertise-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2
          id="industry-expertise-heading"
          className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[1.75rem] lg:leading-snug"
        >
          Where Industry Expertise Meets Business Performance
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted sm:text-base">
          We serve a wide range of sectors with logistics solutions tailored to
          meet unique freight demands. From time-sensitive shipments to
          high-volume hauls – we deliver with precision.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {INDUSTRIES.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
