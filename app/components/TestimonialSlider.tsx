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
    <div className="flex justify-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-6 text-primary"
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
      className="relative overflow-x-clip bg-secondary py-12 sm:py-14"
      aria-label="Testimonials"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary-deep/50 via-transparent to-secondary-deep/50"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            Hauling Freight. Earning Confidence. Every Load Matters.
          </h2>
          <div className="mt-3">
            <StarRating />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="z-30 flex size-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 sm:size-10 sm:min-h-0 sm:min-w-0"
          >
            <ChevronLeft className="size-5 sm:size-5" />
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

            <div className="relative z-20 min-w-0 flex shrink-0 justify-center">
              <div
                className="relative w-full max-w-[min(100vw-5rem,440px)] origin-center scale-[1.03] rounded-2xl bg-surface-card px-5 py-6 shadow-card-hover ring-1 ring-divider transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-100 sm:max-w-[420px] sm:scale-[1.1] sm:px-8 sm:py-8 lg:max-w-[480px] lg:scale-[1.14] lg:px-9 lg:py-9"
              >
                <span
                  className="absolute -top-0.5 left-6 font-heading text-5xl font-bold leading-none text-primary/90 sm:text-6xl lg:left-7 lg:text-[4rem]"
                  aria-hidden
                >
                  &ldquo;&ldquo;
                </span>
                <div
                  key={active}
                  className="testimonial-animate-center"
                >
                  <p className="mt-6 text-center text-[13px] leading-relaxed text-muted sm:mt-7 sm:text-[15px] lg:text-base">
                    {TESTIMONIALS[active].quote}
                  </p>
                  <div className="mt-5 text-center sm:mt-6">
                    <span className="inline-block h-px w-10 bg-divider" />
                    <p className="mt-2 text-sm font-semibold text-ink sm:text-base">
                      ~ {TESTIMONIALS[active].author}
                    </p>
                  </div>
                </div>
              </div>
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
            className="z-30 flex size-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 sm:size-10 sm:min-h-0 sm:min-w-0"
          >
            <ChevronRight className="size-5 sm:size-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2 sm:mt-9">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === active
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
