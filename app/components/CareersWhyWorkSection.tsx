import Image from "next/image";
import Link from "next/link";

const DOT_BG =
  "radial-gradient(circle 1px at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)";

const ICON_1 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Careers-Icon-Image-1.webp";
const ICON_2 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Careers-Icon-Image-2.webp";
const ICON_3 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Careers-Icon-Image-3.webp";

const RESUME_MAILTO =
  "mailto:HR@arvilogistics.com?subject=Resume%20-%20Careers%20Application";

const VALUE_CARDS: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  body: string;
}[] = [
  {
    iconSrc: ICON_1,
    iconAlt: "Innovation",
    title: "Innovation in Motion",
    body: "We're driven by progress. At ARVI Logistics, we constantly invest in smarter systems and new technology to make logistics simpler, faster, and more efficient—for our partners and our people.",
  },
  {
    iconSrc: ICON_2,
    iconAlt: "Recognition and rewards",
    title: "Rewarding Careers",
    body: "We believe great work deserves great rewards. That's why we offer competitive pay, dependable benefits, and recognition programs that celebrate performance and commitment.",
  },
  {
    iconSrc: ICON_3,
    iconAlt: "Career growth",
    title: "Growth That Moves You Forward",
    body: "We're not just moving freight—we're growing futures. Our team members find real opportunities to learn, lead, and advance through continuous training, mentorship, and long-term career development.",
  },
];

export function CareersWhyWorkSection() {
  return (
    <section
      className="py-14 sm:py-16 lg:py-20"
      aria-labelledby="careers-why-work-heading"
      style={{
        backgroundColor: "#f0f2f1",
        backgroundImage: DOT_BG,
        backgroundSize: "10px 10px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="careers-why-work-heading"
          className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-[2.1rem]"
        >
          Why work at ARVI Logistics?
        </h2>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-5 lg:gap-8">
          {VALUE_CARDS.map(({ iconSrc, iconAlt, title, body }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.06]"
            >
              <div className="flex items-center gap-3 bg-[#004438] px-4 py-4 sm:gap-4 sm:px-5 sm:py-[1.125rem]">
                <Image
                  src={iconSrc}
                  alt={iconAlt}
                  width={48}
                  height={48}
                  className="size-11 shrink-0 object-contain object-left sm:size-12"
                  sizes="48px"
                />
                <p className="text-left text-sm font-bold leading-snug text-white sm:text-base">
                  {title}
                </p>
              </div>
              <div className="border-t border-neutral-100 px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-sm leading-relaxed text-neutral-900 sm:text-[15px] sm:leading-[1.65]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href={RESUME_MAILTO}
            className="inline-flex max-w-full rounded-full bg-[#004438] px-6 py-3.5 text-center text-[10px] font-bold uppercase leading-snug tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-[#fbbf24] hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 sm:px-8 sm:py-4 sm:text-xs lg:max-w-3xl lg:text-[13px]"
          >
            Ready to join the team? Share your resume with us today.
          </Link>
        </div>
      </div>
    </section>
  );
}
