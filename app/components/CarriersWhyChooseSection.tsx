import carrierSideImage from "@/Images/carrier p image.jpg";
import {
  CheckCircle2,
  CircleDollarSign,
  Headset,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const CARD_BG = "#FFF7ED";
const CARD_BORDER = "#FED7AA";
const ICON_COLOR = "#F97316";

const CARDS: {
  title: string;
  body: string;
  icon: "lanes" | "payouts" | "support";
}[] = [
  {
    icon: "lanes",
    title: "Consistent Freight, Less Empty Miles",
    body: "With our nationwide shipper network, you'll find steady loads that fit your lanes, equipment, and schedule—helping you maximize earnings and minimize deadhead.",
  },
  {
    icon: "payouts",
    title: "Fast Payouts You Can Count On",
    body: "Our decade-old MC and reputation for reliability mean you get paid on time—typically within 15–20 days. No chasing payments, no added stress.",
  },
  {
    icon: "support",
    title: "Dedicated Support, Every Step",
    body: "From dispatch to delivery, our responsive carrier relations team is here to back you up. Whether you're hauling FTL, LTL, drayage, or flatbed—we keep your trucks loaded and your business moving.",
  },
];

function CardIcon({ variant }: { variant: "lanes" | "payouts" | "support" }) {
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

  if (variant === "payouts") {
    return (
      <span className="relative inline-flex shrink-0" aria-hidden>
        <CircleDollarSign
          className={common}
          style={{ color: ICON_COLOR }}
          strokeWidth={stroke}
          size={48}
        />
        <TrendingUp
          className="absolute -right-1 -top-1 drop-shadow-sm"
          style={{ color: ICON_COLOR }}
          strokeWidth={stroke}
          size={22}
        />
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex size-[52px] shrink-0 items-center justify-center"
      aria-hidden
    >
      <Headset
        className={common}
        style={{ color: ICON_COLOR }}
        strokeWidth={stroke}
        size={44}
      />
      <CheckCircle2
        className="absolute -bottom-0.5 -right-0.5 drop-shadow-sm"
        style={{ color: ICON_COLOR }}
        strokeWidth={2}
        size={22}
        fill={CARD_BG}
      />
    </span>
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
          Why Carriers Choose ARVI Logistics
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
