"use client";

import { Mail, Phone, Printer } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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

type SubmitStatus = "idle" | "submitting" | "success";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  companyName: "",
  message: "",
};

export function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [fileLabel, setFileLabel] = useState("No file chosen");
  const [file, setFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  useEffect(() => {
    if (status !== "success") return;
    const dirty = Object.values(form).some((v) => v.trim() !== "");
    if (dirty) setStatus("idle");
  }, [form, status]);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFile(f ?? null);
    setFileLabel(f?.name ?? "No file chosen");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder until Google Sheets / Apps Script webhook is connected
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setForm(initialForm);
    setFile(null);
    setFileLabel("No file chosen");
    setFileInputKey((k) => k + 1);
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-[#004438] focus:ring-2 focus:ring-[#004438]/20";

  const labelClass = "mb-1.5 block text-sm font-semibold text-neutral-800";

  return (
    <section
      className="bg-neutral-100 py-12 sm:py-16 lg:py-20"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h1
            id="contact-form-heading"
            className="text-center text-xl font-bold leading-snug text-neutral-900 sm:text-2xl"
          >
            Feel Free To Ask A Question With Us!
          </h1>
          <div className="mx-auto mt-4 h-px max-w-md bg-neutral-200" aria-hidden />

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
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
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={update("lastName")}
                className={inputClass}
                placeholder="Last name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
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
                required
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
                className={inputClass}
                placeholder="(201) 555-0100"
              />
            </div>
            <div>
              <label htmlFor="service" className={labelClass}>
                Service <span className="text-red-600">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={update("service")}
                className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23525252' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
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
              <label htmlFor="companyName" className={labelClass}>
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                autoComplete="organization"
                value={form.companyName}
                onChange={update("companyName")}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <span className={labelClass}>File upload</span>
              <label className="flex cursor-pointer flex-wrap items-center gap-3">
                <span className="inline-flex rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100">
                  Choose File
                </span>
                <span className="text-sm text-neutral-500">{fileLabel}</span>
                <input
                  key={fileInputKey}
                  type="file"
                  name="attachment"
                  className="sr-only"
                  onChange={onFileChange}
                />
              </label>
              {file ? (
                <p className="mt-1 text-xs text-neutral-500">
                  {(file.size / 1024).toFixed(1)} KB — will be sent when backend is
                  connected.
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Message / Tell us how we can help
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

            {status === "success" ? (
              <p
                className="rounded-lg bg-emerald-50 px-3 py-2.5 text-center text-sm font-medium text-emerald-900"
                role="status"
              >
                Thanks — we received your message. We&apos;ll connect this form
                to our workflow soon; our team can also reach you at the email
                you provided.
              </p>
            ) : null}

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-[#004438] px-12 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-[#fbbf24] hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[#004438] disabled:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
              >
                {status === "submitting" ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>

          <div className="mt-12 border-t border-neutral-200 pt-10">
            <h2 className="text-center text-lg font-bold text-neutral-900 sm:text-xl">
              Get in touch
            </h2>
            <ul className="mt-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
              <li className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#004438]/10 text-[#004438]">
                  <Phone className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <a
                  href="tel:+12012599223"
                  className="text-sm font-semibold text-neutral-900 transition hover:text-[#004438]"
                >
                  (201) 259-9223
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#004438]/10 text-[#004438]">
                  <Mail className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <a
                  href="mailto:inquiry@sandsbrokerageinc.com"
                  className="break-all text-sm font-semibold text-[#004438] underline-offset-2 hover:underline"
                >
                  inquiry@sandsbrokerageinc.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#004438]/10 text-[#004438]">
                  <Printer className="size-5" aria-hidden strokeWidth={2} />
                </span>
                <a
                  href="tel:+12015375242"
                  className="text-sm font-semibold text-neutral-900 transition hover:text-[#004438]"
                >
                  (201) 537-5242
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
