import Image from "next/image";
import Link from "next/link";

const DOT_BG =
  "radial-gradient(circle 1px at 1px 1px, rgba(43,76,126,0.07) 1px, transparent 0)";

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
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="careers-why-work-heading"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage: DOT_BG,
        backgroundSize: "10px 10px",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2
          id="careers-why-work-heading"
          className="text-center text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-[2.1rem]"
        >
          Why work at ARVI Logistics?
        </h2>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {VALUE_CARDS.map(({ iconSrc, iconAlt, title, body }) => (
            <div
              key={title}
              className="overflow-hidden rounded-xl bg-surface-card shadow-card ring-1 ring-divider"
            >
              <div className="flex items-center gap-3 bg-secondary px-5 py-4 sm:gap-4 sm:px-6 sm:py-5">
                <Image
                  src={iconSrc}
                  alt={iconAlt}
                  width={48}
                  height={48}
                  className="size-11 shrink-0 rounded-lg object-contain object-left sm:size-12"
                  sizes="48px"
                />
                <p className="text-left text-sm font-bold leading-snug text-white sm:text-base">
                  {title}
                </p>
              </div>
              <div className="border-t border-divider px-5 py-6 sm:px-6 sm:py-7">
                <p className="text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-[1.65]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex w-full justify-center px-1 sm:mt-14 sm:px-0">
          <Link
            href={RESUME_MAILTO}
            className="inline-flex w-full max-w-lg justify-center rounded-xl bg-primary px-5 py-3.5 text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-white shadow-md shadow-primary/25 transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:w-auto sm:max-w-3xl sm:px-8 sm:py-4 sm:text-xs lg:text-[13px]"
          >
            Ready to join the team? Share your resume with us today.
          </Link>
        </div>
      </div>
    </section>
  );
}
