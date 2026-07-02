import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Pedí tu diagnóstico gratis | Lumea",
  description:
    "Hablá con Lumea por WhatsApp o completá el formulario. Diagnóstico gratuito de 15 minutos sobre tu presencia en Google, sin compromiso. Respuesta en el día.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <Navbar active="contacto" />

      <section className="pt-16">
        <div className="mx-auto max-w-270 px-6">
          <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
            <span className="inline-block h-px w-3.5 bg-olive-deep" />
            Contacto
          </p>
          <h1 className="max-w-140 font-display text-[30px] font-medium sm:text-[42px]">
            Contanos tu situación. Te respondemos hoy mismo.
          </h1>
          <p className="mt-3.5 max-w-125 text-[16px] text-ink-soft">
            15 minutos por WhatsApp o el formulario de abajo. Sin compromiso,
            sin presión de venta.
          </p>
        </div>
      </section>

      <section className="py-12 pb-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.15fr]">
            <div>
              <a
                href={getWhatsAppUrl("Hola! Quiero pedir mi diagnóstico gratuito")}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 flex items-center gap-3.5 rounded-xl bg-olive px-6 py-5.5 text-cream transition-colors hover:bg-olive-deep"
              >
                <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full bg-cream/15">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.4z" />
                    <path d="M9 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
                    <path d="M9.5 13.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base text-cream">
                    Escribinos ahora
                  </h3>
                  <p className="text-[13px] text-[#D9E3C8]">
                    Respuesta en el día
                  </p>
                </div>
              </a>

              <div className="rounded-xl border border-line bg-white p-7">
                {[
                  { label: "Email", value: CONTACT_EMAIL },
                  {
                    label: "Zona de trabajo",
                    value: "Buenos Aires y todo el país, a distancia",
                  },
                  { label: "Horario de respuesta", value: "Lunes a viernes, 9 a 19h" },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    className={`flex gap-3.5 ${
                      i < arr.length - 1 ? "mb-4.5" : ""
                    }`}
                  >
                    <span className="shrink-0 font-display text-base italic text-terracota">
                      &quot;
                    </span>
                    <div>
                      <h4 className="mb-0.5 text-sm font-medium">
                        {item.label}
                      </h4>
                      <p className="text-[13.5px] text-ink-soft">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}