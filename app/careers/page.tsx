import { CareersWhyWorkSection } from "../components/CareersWhyWorkSection";
import { Header } from "../components/Header";
import careersHeroBg from "@/Images/Carrers Page.png";
import type { Metadata } from "next";
import Image from "next/image";

const CARD_BORDER = "#E5E7EB";
const LINK_ACCENT = "text-primary";

const HR_EMAIL =
  "mailto:Inquiry@arvilogisticsinc.com?subject=Careers%20Application";

export const metadata: Metadata = {
  title: "Careers | ARVI Logistics",
  description:
    "Join ARVI Logistics. Explore current openings in engineering, technology, and logistics.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <section
          className="relative min-h-[min(44vh,420px)] w-full overflow-hidden sm:min-h-[min(48vh,460px)]"
          aria-labelledby="careers-hero-heading"
        >
          <div className="absolute inset-0">
            <Image
              src={careersHeroBg}
              alt="Professional office environment — ARVI Logistics careers"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-secondary-deep/68"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary-deep/82 via-secondary/42 to-secondary/28"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto flex min-h-[min(44vh,420px)] max-w-[1280px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[min(48vh,460px)] sm:py-20 lg:py-24">
            <h1
              id="careers-hero-heading"
              className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem]"
            >
              Careers
            </h1>
          </div>
        </section>

        <section
          className="bg-white py-12 sm:py-16 lg:py-20"
          aria-labelledby="careers-openings-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2
              id="careers-openings-heading"
              className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Current Openings
            </h2>

            <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
              <article
                className="rounded-xl border bg-surface-card p-6 shadow-card sm:p-8"
                style={{ borderColor: CARD_BORDER }}
              >
                <h3 className="text-lg font-bold text-ink sm:text-xl">
                  Engineering Professional
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink sm:text-[15px] sm:leading-[1.65]">
                  <p>
                    <span className="font-bold">Logistics Engineer (Hazle Township, PA):</span>{" "}
                    Develop and deploy optimization models to drive strategic and
                    tactical decisions across supply chain and logistics functions
                    for transportation brokerage services using various software
                    tools and platforms.
                  </p>
                  <p>
                    <span className="font-bold">Mailing address:</span> ARVI
                    Logistics, 150 Dessen Drive, Suite B, Hazle Township, PA
                    18201.
                  </p>
                  <p>
                    <span className="font-bold">Apply:</span>{" "}
                    <a
                      href={HR_EMAIL}
                      className={`font-semibold underline decoration-2 underline-offset-2 transition hover:text-primary-hover ${LINK_ACCENT}`}
                    >
                      Inquiry@arvilogisticsinc.com
                    </a>
                  </p>
                </div>
              </article>

              <article
                className="rounded-xl border bg-surface-card p-6 shadow-card sm:p-8"
                style={{ borderColor: CARD_BORDER }}
              >
                <h3 className="text-lg font-bold text-ink sm:text-xl">
                  IT Professional
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink sm:text-[15px] sm:leading-[1.65]">
                  <p>
                    <span className="font-bold">Computer Programmer:</span> Write
                    computer programs to store, locate, and retrieve specific
                    documents, data, and information using various software. Job
                    location in Hazle Township, PA.
                  </p>
                  <p>
                    <span className="font-bold">Mailing address:</span> ARVI
                    Logistics, 150 Dessen Drive, Suite B, Hazle Township, PA
                    18201.
                  </p>
                  <p>
                    <span className="font-bold">Apply:</span>{" "}
                    <a
                      href={HR_EMAIL}
                      className={`font-semibold underline decoration-2 underline-offset-2 transition hover:text-primary-hover ${LINK_ACCENT}`}
                    >
                      Inquiry@arvilogisticsinc.com
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <CareersWhyWorkSection />
      </main>
    </div>
  );
}
