// Single source for showroom contact details used by the header card and WhatsApp button.
export const PHONE_DISPLAY = "+971 4 123 4567";
export const PHONE_TEL = "+97141234567";
export const WHATSAPP_NUMBER = "97141234567";

// 0 = Sunday … 6 = Saturday, times in UAE local time (Asia/Dubai). Matches the Contact page.
const HOURS: Record<number, [number, number]> = {
  0: [10, 18],
  1: [9, 20],
  2: [9, 20],
  3: [9, 20],
  4: [9, 20],
  5: [9, 20],
  6: [9, 20],
};
export const HOURS_LINES = ["Mon–Sat: 9:00 AM – 8:00 PM", "Sun: 10:00 AM – 6:00 PM"];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function showroomStatus(now = new Date()): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dubai", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) + Number(parts.find((p) => p.type === "minute")?.value ?? 0) / 60;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const [start, end] = HOURS[day];
  const fmt = (h: number) => `${((h + 11) % 12) + 1}:00 ${h < 12 ? "AM" : "PM"}`;
  if (hour >= start && hour < end) return { open: true, label: `Open now · until ${fmt(end)}` };
  const nextDay = hour < start ? day : (day + 1) % 7;
  return { open: false, label: `Closed · opens ${hour < start ? "today" : "tomorrow"} at ${fmt(HOURS[nextDay][0])}` };
}
