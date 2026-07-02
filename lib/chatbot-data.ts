export type ChatOption = {
  id: string;
  label: string;
  answer: string;
  isWhatsAppHandoff?: boolean;
};

export const CHAT_WELCOME =
  "¡Hola! Soy el asistente virtual de Lumea 👋 Elegí una pregunta o escribinos directo por WhatsApp.";

export const chatOptions: ChatOption[] = [
  {
    id: "precio",
    label: "¿Cuánto cuesta?",
    answer:
      "Tenemos 3 planes: Starter USD 299, Growth USD 499 y Premium USD 1.199. El plan Growth es el más elegido para negocios que ya tienen clientes y quieren un sistema completo.",
  },
  {
    id: "tiempo",
    label: "¿Cuánto tarda mi web?",
    answer:
      "Entre 7 y 14 días según el plan, contados desde que recibimos tu contenido (textos, fotos, logo).",
  },
  {
    id: "seo",
    label: "¿Qué es el posicionamiento en Google?",
    answer:
      "Es lograr que tu negocio aparezca cuando alguien busca tu rubro en tu zona. Lo hacemos optimizando tu Google Business Profile y la estructura de tu web.",
  },
  {
    id: "contenido",
    label: "¿Necesito tener contenido listo?",
    answer:
      "No. En el diagnóstico gratuito te decimos exactamente qué necesitamos y te ayudamos a redactar lo que falte.",
  },
  {
    id: "zona",
    label: "¿Trabajan fuera de Buenos Aires?",
    answer:
      "Sí. Todo el proceso se hace a distancia, por videollamada y WhatsApp. La mayoría de nuestros clientes arrancan así.",
  },
  {
    id: "pago",
    label: "¿Cómo se paga?",
    answer:
      "50% para arrancar el proyecto y 50% contra entrega. Los servicios mensuales (SEO, mantenimiento) se facturan por mes adelantado.",
  },
  {
    id: "asesor",
    label: "Hablar con un asesor por WhatsApp",
    answer: "Te abrimos WhatsApp para seguir la charla con una persona del equipo.",
    isWhatsAppHandoff: true,
  },
];
