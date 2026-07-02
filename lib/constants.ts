export const SITE_URL = "https://agencialumea.com.ar";
export const SITE_NAME = "Lumea";

export const WHATSAPP_NUMBER = "5491164831145";
export const CONTACT_EMAIL = "lumeasolutionsit@gmail.com";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
