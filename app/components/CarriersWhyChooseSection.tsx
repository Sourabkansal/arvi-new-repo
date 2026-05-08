import carrierSideImage from "@/Images/carrier p image.jpg";
import { Handshake, MapPinned, Truck } from "lucide-react";
import Image from "next/image";

const CARD_BG = "#FFF7ED";
const CARD_BORDER = "#FED7AA";
const ICON_COLOR = "#F97316";

type CardIconVariant = "lanes" | "freight" | "partnership";

const CARDS: {
  title: string;
  body: string;
  icon: CardIconVariant;
}[] = [
  {
    icon: "lanes",
    title: "Steady Freight Opportunities",
    body: "Access consistent load availability through a strong nationwide shipping network designed to reduce empty miles and improve profitability.",
  },
  {
    icon: "freight",
    title: "Freight That Fits Your Business",
    body: "Whether you specialize in truckload, LTL, intermodal, drayage, or flatbed transportation, we help connect you with freight aligned to your preferred lanes and equipment.",
  },
  {
    icon: "partnership",
    title: "Long-Term Logistics Partnerships",
    body: "We focus on building strong carrier relationships through dependable freight, transparent communication, and consistent opportunities that help your business grow.",
  },
];

function CardIcon({ variant }: { variant: CardIconVariant }) {
  const common = "shrink-0";
  const stroke = 2;

  if (variant === "lanes") {
    return (
      <MapPinned
        className={common}
        style={{ color: ICON_COLOR }}
        strokeWidth={stroke}
        size={48}
        aria-hidden
      />
    );
  }

  if (variant === "freight") {
    return (
      <Truck
        className={common}
        style={{ color: ICON_COLOR }}
        strokeWidth={stroke}
        size={48}
        aria-hidden
      />
    );
  }

  return (
    <Handshake
      className={common}
      style={{ color: ICON_COLOR }}
      strokeWidth={stroke}
      size={48}
      aria-hidden
    />
  );
}

export function CarriersWhyChooseSection() {
  return (
    <section
      className="bg-surface-card py-16 sm:py-20 lg:py-24"
      aria-labelledby="carriers-why-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2
          id="carriers-why-heading"
          className="max-w-4xl text-left text-[clamp(1.45rem,4.2vw,1.85rem)] font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
        >
          Why Carriers Partner With Us
        </h2>

        <div className="mt-10 grid items-stretch gap-10 sm:mt-12 sm:gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
          <ul className="flex list-none flex-col gap-4 p-0 sm:gap-5">
            {CARDS.map(({ icon, title, body }) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl border p-6 shadow-card sm:gap-5 sm:p-7"
                style={{
                  backgroundColor: CARD_BG,
                  borderColor: CARD_BORDER,
                }}
              >
                <div className="flex shrink-0 items-start pt-0.5 sm:items-center sm:pt-0">
                  <CardIcon variant={icon} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-secondary sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-muted sm:text-[15px] sm:leading-[1.65]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="relative min-h-[260px] w-full overflow-hidden rounded-xl border shadow-card sm:min-h-[300px] lg:min-h-full"
            style={{ borderColor: CARD_BORDER }}
          >
            <Image
              src={carrierSideImage}
              alt="Container yard with stacked shipping containers and handling equipment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
