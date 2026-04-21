import type { ContactFormPayload, ContactValidationResult } from "./types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/** Digits only, typical US/international lengths after stripping formatting. */
function normalizePhoneDigits(input: string): string {
  return input.replace(/\D/g, "");
}

export function validateContactPayload(
  data: Partial<ContactFormPayload>,
): ContactValidationResult {
  const fields: (keyof ContactFormPayload)[] = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "service",
    "company",
    "message",
  ];

  for (const key of fields) {
    const v = data[key];
    if (v === undefined || String(v).trim() === "") {
      return { ok: false, message: "Please fill in all required fields." };
    }
  }

  const email = String(data.email).trim();
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const digits = normalizePhoneDigits(String(data.phone));
  if (digits.length < 10 || digits.length > 15) {
    return {
      ok: false,
      message:
        "Phone must contain 10–15 digits (numbers only; you may use spaces or dashes).",
    };
  }

  return { ok: true };
}

export function toContactPayload(form: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  company: string;
  message: string;
}): ContactFormPayload {
  return {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    service: form.service.trim(),
    company: form.company.trim(),
    message: form.message.trim(),
  };
}
