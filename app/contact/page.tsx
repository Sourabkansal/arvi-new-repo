import { ContactFormSection } from "../components/ContactFormSection";
import { Header } from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ARVI Logistics",
  description:
    "Ask a question or request a quote. ARVI Logistics — freight brokerage and logistics.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <ContactFormSection />
      </main>
    </div>
  );
}
