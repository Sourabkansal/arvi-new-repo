"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { submitContactForm } from "@/lib/contact/submitContactForm";
import {
  toContactPayload,
  validateContactPayload,
} from "@/lib/contact/validateContactForm";

const SERVICE_OPTIONS = [
  { value: "", label: "-- Select Service --" },
  { value: "ftl", label: "Full Truckload (FTL)" },
  { value: "ltl", label: "Less-Than-Truckload (LTL)" },
  { value: "intermodal", label: "Intermodal" },
  { value: "warehouse", label: "Warehouse / Storage" },
  { value: "drayage", label: "Drayage" },
  { value: "flatbed", label: "Flatbed / Specialized" },
  { value: "other", label: "Other" },
] as const;

type FeedbackState = "idle" | "submitting" | "success";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  company: "",
  message: "",
};

export function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const update =
    (field: keyof typeof initialForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setErrorMessage(null);
      setFeedback((fb) => (fb === "success" ? "idle" : fb));
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const payload = toContactPayload(form);
    const validation = validateContactPayload(payload);
    if (!validation.ok) {
      setErrorMessage(validation.message);
      return;
    }

    setFeedback("submitting");

    const result = await submitContactForm(payload);

    if (result.ok) {
      setForm(initialForm);
      setFeedback("success");
      return;
    }

    setFeedback("idle");
    setErrorMessage(result.message);
  };

  const inputClass =
    "w-full rounded-lg border border-divider bg-surface-card px-4 py-3 text-[15px] leading-snug text-ink shadow-sm outline-none transition placeholder:text-muted/75 focus:border-secondary/40 focus:ring-2 focus:ring-secondary/15";

  const labelClass = "mb-2 block text-sm font-semibold tracking-tight text-ink";

  return (
    <section
      className="bg-canvas py-14 sm:py-20 lg:py-24"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-divider/80 bg-surface-card p-5 shadow-card ring-1 ring-secondary/5 sm:p-8 md:p-10 lg:p-12">
          <h1
            id="contact-form-heading"
            className="font-heading text-center text-2xl font-bold leading-tight tracking-tight text-secondary sm:text-3xl"
          >
            Feel Free To Ask A Question With Us!
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted sm:text-[15px]">
            Tell us what you need — we&apos;ll get back to you as soon as we can.
          </p>
          <div
            className="mx-auto mt-6 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-divider to-transparent"
            aria-hidden
          />

          <form
            className="mt-10 grid gap-6 sm:gap-7"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={update("firstName")}
                  className={inputClass}
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={update("lastName")}
                  className={inputClass}
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                  placeholder="(570) 330-6181"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className={labelClass}>
                Service <span className="text-red-600">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={update("service")}
                className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                }}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option
                    key={opt.value || "placeholder"}
                    value={opt.value}
                    disabled={opt.value === ""}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={update("company")}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Message / Tell us how we can help{" "}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update("message")}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="How can we help?"
              />
            </div>

            <div className="flex justify-center border-t border-divider/80 pt-8">
              <button
                type="submit"
                disabled={feedback === "submitting"}
                className="min-w-[200px] rounded-lg bg-primary px-10 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-primary/30 transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 focus-visible:ring-offset-2"
              >
                {feedback === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div
            className="mt-6 min-h-[1.25rem] space-y-3 transition-opacity duration-300"
            aria-live="polite"
          >
            {feedback === "success" ? (
              <p
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-900"
                role="status"
              >
                Thanks — we received your message. Our team will get back to you
                soon.
              </p>
            ) : null}
            {errorMessage ? (
              <p
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-900"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
          </div>

          <div className="mt-14 border-t border-divider pt-12">
            <h2 className="text-center text-lg font-bold text-secondary sm:text-xl">
              Get in touch
            </h2>
            <ul className="mt-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
              <li className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Phone className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <a
                  href="tel:+15703306181"
                  className="text-sm font-semibold text-ink transition hover:text-primary"
                >
                  (570) 330-6181
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Mail className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <a
                  href="mailto:Inquiry@arvilogisticsinc.com"
                  className="break-all text-sm font-semibold text-primary underline-offset-2 hover:underline"
                >
                  Inquiry@arvilogisticsinc.com
                </a>
              </li>
              <li className="flex max-w-xs items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <MapPin className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <span className="text-center text-sm font-semibold text-ink">
                  150 Dessen Drive, Suite B
                  <br />
                  Hazle Township, PA 18201
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
