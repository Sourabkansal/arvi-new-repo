import carrierSideImage from "@/Images/carrier p image.jpg";
import Image from "next/image";

const ICON_1 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Carriers-Icon-Image-1.webp";
const ICON_2 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Carriers-Icon-Image-2.webp";
const ICON_3 =
  "https://www.sandsbrokerageinc.com/wp-content/uploads/2025/12/Carriers-Icon-Image-3.webp";

const CARDS: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  body: string;
}[] = [
  {
    iconSrc: ICON_1,
    iconAlt: "Routing and lane coverage",
    title: "Freight That Fits Your Lanes and Schedule",
    body: "With our nationwide shipper network, you'll find steady loads that fit your lanes, equipment, and schedule—helping you maximize earnings and minimize deadhead.",
  },
  {
    iconSrc: ICON_2,
    iconAlt: "Payments and settlements",
    title: "Fast, Dependable Payment Processing",
    body: "Our established brokerage and reputation for reliability mean you get paid on time—typically within 15–20 days. No chasing payments, no added stress.",
  },
  {
    iconSrc: ICON_3,
    iconAlt: "Carrier support",
    title: "Dedicated Support From Dispatch to Delivery",
    body: "From dispatch to delivery, our responsive carrier relations team is here to back you up. Whether you're hauling FTL, LTL, drayage, or flatbed—we keep your trucks loaded and your business moving.",
  },
];

export function CarriersWhyChooseSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="carriers-why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="carriers-why-heading"
          className="text-center text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
        >
          Why Carriers Choose ARVI Logistics
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <ul className="flex list-none flex-col gap-4 p-0 sm:gap-5">
            {CARDS.map(({ iconSrc, iconAlt, title, body }) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 sm:gap-5 sm:p-6"
              >
                <div className="flex size-[52px] shrink-0 items-center justify-center sm:size-14">
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={56}
                    height={56}
                    className="size-[52px] object-contain sm:size-14"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[15px] sm:leading-[1.65]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center lg:justify-end lg:pt-1">
            <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-md ring-1 ring-black/[0.04] sm:max-w-[280px] lg:max-w-[300px]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={carrierSideImage}
                  alt="Shipping yard with stacked containers and trucks at dusk"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 280px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
