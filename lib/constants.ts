export const SITE_URL = "https://lumea.com.ar";
export const SITE_NAME = "Lumea";

export const WHATSAPP_NUMBER = "5491164831145";
export const CONTACT_EMAIL = "hola@lumea.com.ar";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
