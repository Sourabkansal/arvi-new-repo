/**
 * Payload sent to the Google Apps Script webhook (JSON body keys).
 */
export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  company: string;
  message: string;
}

export type ContactValidationResult =
  | { ok: true }
  | { ok: false; message: string };
