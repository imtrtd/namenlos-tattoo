import { SITE } from "@/lib/site";
import type { BookingInput } from "@/lib/booking";
import { buildTelegramText } from "@/lib/booking";

function env(name: string): string | undefined {
  if (typeof process === "undefined") return undefined;
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

async function sendTelegram(text: string): Promise<boolean> {
  const token = env("TELEGRAM_BOT_TOKEN");
  const chatId = env("TELEGRAM_CHAT_ID");
  if (!token || !chatId) return false;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `${text}\n\n${SITE.url}/book`,
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`telegram ${res.status} ${body.slice(0, 240)}`);
  }
  return true;
}

async function sendWebhook(data: BookingInput, text: string): Promise<boolean> {
  const url = env("BOOKING_WEBHOOK_URL");
  if (!url) return false;

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "namenlos.tattoo",
      kind: data.kind,
      name: data.name,
      contact: data.contact,
      instagram: data.instagram,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`webhook ${res.status} ${body.slice(0, 240)}`);
  }
  return true;
}

/** Fire-and-forget studio alerts. Never throw to the booking form. */
export async function notifyNewBooking(data: BookingInput): Promise<void> {
  const text = buildTelegramText(data);
  const jobs = [sendTelegram(text), sendWebhook(data, text)];
  const results = await Promise.allSettled(jobs);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[notify] failed", result.reason);
    }
  }
}
