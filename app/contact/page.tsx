import { ContactFormSection } from "../components/ContactFormSection";
import { Header } from "../components/Header";
import { buildRouteMetadata } from "@/lib/seo/metadata";
import { ROUTE_META } from "@/lib/seo/routes-metadata";

export const metadata = buildRouteMetadata(ROUTE_META["/contact"]);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <ContactFormSection />
      </main>
    </div>
  );
}
