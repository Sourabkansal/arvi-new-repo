import { NextResponse } from "next/server";

import { validateContactPayload } from "@/lib/contact/validateContactForm";
import type { ContactFormPayload } from "@/lib/contact/types";

const DEFAULT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycby7HBoLwMQiGHHuG7mnIbleWSvfOZU42rbMkf9KdMFRrsX_XhavUTQUGI_vPNmiRIr5/exec";

function getWebhookUrl(): string {
  return (
    process.env.GOOGLE_SCRIPT_CONTACT_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK_URL
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid payload." }, { status: 400 });
  }

  const data = body as Partial<ContactFormPayload>;
  const validation = validateContactPayload(data);
  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  const payload: ContactFormPayload = {
    firstName: String(data.firstName).trim(),
    lastName: String(data.lastName).trim(),
    email: String(data.email).trim(),
    phone: String(data.phone).trim(),
    service: String(data.service).trim(),
    company: String(data.company).trim(),
    message: String(data.message).trim(),
  };

  const url = getWebhookUrl();

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          message:
            "The form service returned an error. Please try again later or email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        message:
          "Could not submit your request. Please try again or contact us by phone or email.",
      },
      { status: 503 },
    );
  }
}
