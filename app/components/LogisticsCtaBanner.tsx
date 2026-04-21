import defaultBannerBg from "@/Images/Logistics and warehousing in action.png";
import { Phone } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

const DEFAULT_HEADLINE = "Logistics that Work as Hard as You Do.";
const DEFAULT_SUBHEADING = "Tailored Freight Solutions for Every Business.";
const DEFAULT_BUTTON = "Talk to a logistics expert";

export interface LogisticsCtaBannerProps {
  /** Main headline (white, bold). */
  headline?: string;
  /**
   * Secondary line under the headline. Pass `null` to hide (single-line layout).
   * Omit to use the default subheading.
   */
  subheading?: string | null;
  /** CTA label; shown in uppercase via styling. */
  buttonText?: string;
  /** Override background; defaults to logistics warehouse imagery. */
  backgroundImage?: StaticImageData;
}

export function LogisticsCtaBanner({
  headline = DEFAULT_HEADLINE,
  subheading = DEFAULT_SUBHEADING,
  buttonText = DEFAULT_BUTTON,
  backgroundImage = defaultBannerBg,
}: LogisticsCtaBannerProps) {
  const showSubheading = subheading !== null && subheading !== "";

  return (
    <section className="bg-canvas py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-divider sm:rounded-3xl">
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-secondary-deep/75"
              aria-hidden
            />
          </div>

          <div className="relative z-10 flex flex-col items-stretch gap-6 px-5 py-9 sm:gap-8 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-14">
            <div className="min-w-0 max-w-2xl text-white">
              <p className="text-lg font-bold leading-snug sm:text-2xl lg:text-[1.65rem] lg:leading-tight">
                {headline}
              </p>
              {showSubheading ? (
                <p className="mt-3 text-base font-normal leading-relaxed text-white/95 sm:text-lg">
                  {subheading}
                </p>
              ) : null}
            </div>

            <div className="flex w-full shrink-0 justify-stretch sm:justify-center lg:w-auto lg:justify-end">
              <Link
                href="tel:+12012599223"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-primary/30 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:scale-[1.02] hover:bg-primary-hover hover:shadow-lg motion-reduce:transition-colors motion-reduce:duration-200 motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-deep/50 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                <Phone
                  className="size-[18px] shrink-0 sm:size-5"
                  aria-hidden
                  strokeWidth={2}
                />
                <span className="text-left leading-tight">{buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
