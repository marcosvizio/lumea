import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import ChatWidget from "@/components/ChatWidget";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumea — Sitios Web, SEO y Automatización de Leads",
    template: "%s | Lumea",
  },
  description:
    "Diseño web, SEO local, chatbots de WhatsApp y automatización de leads para restaurantes, consultorios y comercios en Argentina. Resultados en 30 días, sin vueltas técnicas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Lumea — Sitios Web, SEO y Automatización de Leads",
    description:
      "Diseño web, SEO local, chatbots de WhatsApp y automatización de leads para restaurantes, consultorios y comercios en Argentina. Resultados en 30 días, sin vueltas técnicas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumea — Sitios Web, SEO y Automatización de Leads",
    description:
      "Diseño web, SEO local, chatbots de WhatsApp y automatización de leads para negocios en Argentina.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villa del Parque, CABA",
    addressCountry: "AR",
  },
  areaServed: "AR",
  priceRange: "USD 299-1199",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}