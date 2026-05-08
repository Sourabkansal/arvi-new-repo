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

const ICONS = [ICON_1, ICON_2, ICON_3] as const;

const RESUME_MAILTO =
  "mailto:Inquiry@arvilogisticsinc.com?subject=Resume%20-%20Careers%20Application";

const VALUE_CARDS: {
  title: string;
  body: string;
  iconIndex: 0 | 1 | 2;
  iconAlt: string;
}[] = [
  {
    iconIndex: 0,
    iconAlt: "Innovation",
    title: "Innovation That Drives Progress",
    body: "At ARVI Logistics, we embrace modern technology and smarter logistics solutions to create faster, more efficient operations for both our customers and our team.",
  },
  {
    iconIndex: 1,
    iconAlt: "Recognition and rewards",
    title: "Recognition That Matters",
    body: "We value dedication and performance by offering competitive compensation, strong benefits, and a workplace culture that recognizes hard work and commitment.",
  },
  {
    iconIndex: 2,
    iconAlt: "Career growth",
    title: "Opportunities for Career Growth",
    body: "We invest in our people through continuous learning, mentorship, and career development programs designed to help you grow professionally and personally.",
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
          Why Build Your Career With ARVI Logistics?
        </h2>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {VALUE_CARDS.map(({ iconIndex, iconAlt, title, body }) => {
            const iconSrc = ICONS[iconIndex];
            return (
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
            );
          })}
        </div>

        <div className="mt-12 flex w-full justify-center px-1 sm:mt-14 sm:px-0">
          <Link
            href={RESUME_MAILTO}
            className="inline-flex w-full max-w-lg justify-center rounded-xl bg-primary px-5 py-3.5 text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-white shadow-md shadow-primary/25 transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:w-auto sm:max-w-3xl sm:px-8 sm:py-4 sm:text-xs lg:text-[13px]"
          >
            Ready to join ARVI Logistics? Submit your resume today.
          </Link>
        </div>
      </div>
    </section>
  );
}
