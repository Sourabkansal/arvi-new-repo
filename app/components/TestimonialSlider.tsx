"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Working with Arvi Logistics has been a great experience. Their team is highly professional, responsive, and always ensures smooth communication throughout the process. Shipments are handled efficiently, and deadlines are always met. I truly appreciate their commitment to quality service.",
    author: "Rahul Mehta",
  },
  {
    id: 2,
    quote:
      "Arvi Logistics is a reliable partner for all our transportation needs. Their competitive pricing, timely deliveries, and excellent customer support make them stand out. The team is always proactive and ensures everything runs seamlessly from start to finish.",
    author: "Sneha Kapoor",
  },
  {
    id: 3,
    quote:
      "We've been working with Arvi Logistics for a while now, and they consistently deliver top-notch service. Their attention to detail, transparency, and dedication to customer satisfaction is impressive. Highly recommended for anyone looking for dependable logistics solutions.",
    author: "Aman Verma",
  },
];

const TOTAL = TESTIMONIALS.length;

function StarRating() {
  return (
    <div className="flex justify-center gap-1 sm:gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-5 text-primary sm:size-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Shared ≥44×44 carousel controls (accessible tap targets). */
const navArrowClass =
  "z-30 flex size-11 min-h-[44px] min-w-[44px] shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/25 active:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

interface CenterSlideProps {
  slideIndex: number;
  /** Larger body text on phones for readability */
  bodySize?: "mob" | "desk";
}

function CenterTestimonialCard({ slideIndex, bodySize = "desk" }: CenterSlideProps) {
  const t = TESTIMONIALS[slideIndex];
  const isMob = bodySize === "mob";

  return (
    <div
      className={`relative z-20 w-full min-w-0 ${
        isMob ? "" : "sm:mx-auto sm:max-w-[420px] lg:max-w-[480px]"
      }`}
    >
      <div
        className={`relative mx-auto w-full rounded-2xl bg-surface-card shadow-card-hover ring-1 ring-divider transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-100 ${
          isMob
            ? "scale-100 px-5 py-7"
            : "origin-center scale-[1.1] px-8 py-8 sm:rounded-3xl sm:scale-[1.1] lg:scale-[1.14] lg:px-9 lg:py-9"
        }`}
      >
        <span
          className={`absolute top-0 font-heading font-bold leading-none text-primary/90 sm:-top-0.5 sm:text-6xl lg:text-[4rem] ${
            isMob ? "left-4 text-[2.85rem]" : "left-6 text-[4rem]"
          }`}
          aria-hidden
        >
          &ldquo;&ldquo;
        </span>
        <div key={slideIndex} className="testimonial-animate-center">
          <p
            className={`text-center leading-relaxed text-muted ${
              isMob
                ? "mt-16 px-0.5 text-[15px]"
                : "mt-6 text-[13px] sm:mt-7 sm:text-[15px] lg:text-base"
            }`}
          >
            {t.quote}
          </p>
          <div className="mt-5 text-center">
            <span className="inline-block h-px w-10 bg-divider" />
            <p
              className={`mt-2 font-semibold text-ink ${
                isMob ? "text-[15px]" : "text-sm sm:text-base"
              }`}
            >
              ~ {t.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setActive((a) => (a + 1) % TOTAL);
  const prev = () => setActive((a) => (a - 1 + TOTAL) % TOTAL);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 3000);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };
  const handleDot = (i: number) => {
    setActive(i);
    resetTimer();
  };

  const leftIdx = (active - 1 + TOTAL) % TOTAL;
  const rightIdx = (active + 1) % TOTAL;

  return (
    <section
      className="relative overflow-x-clip bg-secondary py-10 sm:py-14"
      aria-label="Testimonials"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary-deep/50 via-transparent to-secondary-deep/50"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1280px] min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mx-auto max-w-[22rem] px-1 text-balance text-[clamp(1.05rem,4.2vw,1.5rem)] font-bold leading-snug text-white sm:max-w-none sm:text-2xl lg:text-3xl">
            Hauling Freight. Earning Confidence. Every Load Matters.
          </h2>
          <div className="mt-4 sm:mt-3">
            <StarRating />
          </div>
        </div>

        {/* Mobile (sm): stacked card + arrows beneath — no squeezed side gutters */}
        <div className="flex flex-col gap-6 sm:hidden">
          <CenterTestimonialCard slideIndex={active} bodySize="mob" />
          <div className="flex items-center justify-center gap-14 px-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className={navArrowClass}
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className={navArrowClass}
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </div>
        </div>

        {/* Tablet / desktop carousel */}
        <div className="hidden items-center justify-center gap-3 sm:flex sm:gap-4 lg:gap-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className={navArrowClass}
          >
            <ChevronLeft className="size-5 sm:size-5" aria-hidden />
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:max-w-[min(100%,920px)] sm:gap-3 lg:gap-5">
            <div
              className="hidden origin-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-100 motion-reduce:opacity-100 sm:flex sm:w-[min(200px,22vw)] sm:shrink-0 sm:scale-[0.88] sm:opacity-[0.62] lg:w-[min(228px,20vw)] lg:scale-[0.9]"
            >
              <div
                key={leftIdx}
                className="testimonial-animate-side-left flex w-full flex-col justify-center rounded-xl border border-white/15 bg-white/10 px-3 py-4 lg:px-4 lg:py-5"
              >
                <p className="line-clamp-5 text-center text-[11px] leading-relaxed text-white/70 lg:text-[12px]">
                  {TESTIMONIALS[leftIdx].quote}
                </p>
                <p className="mt-2.5 text-center text-[10px] text-white/50 lg:text-[11px]">
                  ~ {TESTIMONIALS[leftIdx].author}
                </p>
              </div>
            </div>

            <div className="relative min-w-0 flex shrink-0 justify-center">
              <CenterTestimonialCard slideIndex={active} bodySize="desk" />
            </div>

            <div
              className="hidden origin-center transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-100 motion-reduce:opacity-100 sm:flex sm:w-[min(200px,22vw)] sm:shrink-0 sm:scale-[0.88] sm:opacity-[0.62] lg:w-[min(228px,20vw)] lg:scale-[0.9]"
            >
              <div
                key={rightIdx}
                className="testimonial-animate-side-right flex w-full flex-col justify-center rounded-xl border border-white/15 bg-white/10 px-3 py-4 lg:px-4 lg:py-5"
              >
                <p className="line-clamp-5 text-center text-[11px] leading-relaxed text-white/70 lg:text-[12px]">
                  {TESTIMONIALS[rightIdx].quote}
                </p>
                <p className="mt-2.5 text-center text-[10px] text-white/50 lg:text-[11px]">
                  ~ {TESTIMONIALS[rightIdx].author}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className={navArrowClass}
          >
            <ChevronRight className="size-5 sm:size-5" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Testimonial slides"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 py-1 sm:mt-9 sm:gap-3"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDot(i)}
              aria-current={i === active ? "true" : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
              className="flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-full p-3 transition-all duration-500 ease-out hover:bg-white/5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${
                  i === active ? "w-5 bg-primary" : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
