import type { ContactFormPayload } from "./types";

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; message: string };

/**
 * POST JSON to the Next.js API route (which proxies to Google Apps Script).
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let body: unknown = null;
    try {
      body = await res.json();
    } catch {
      body = null;
    }

    if (res.ok) {
      return { ok: true };
    }

    const message =
      typeof body === "object" &&
      body !== null &&
      "message" in body &&
      typeof (body as { message: unknown }).message === "string"
        ? (body as { message: string }).message
        : "Something went wrong. Please try again in a moment.";

    return { ok: false, message };
  } catch {
    return {
      ok: false,
      message:
        "We couldn’t reach the server. Check your connection and try again.",
    };
  }
}
