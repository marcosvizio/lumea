/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-20 22:38:23
 Last Modification Date: 2026-06-20 22:51:11

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const servicios = [
  {
    index: "01",
    title: "Web profesional",
    body: "Tu sitio bien construido, rápido y con todo lo necesario para convertir visitas en consultas: formulario, WhatsApp directo y diseño pensado para tu rubro.",
    tags: ["WordPress o desarrollo a medida", "Responsive", "Hasta 8 páginas"],
    price: "USD 250",
    unit: "/ proyecto",
  },
  {
    index: "02",
    title: "Posicionamiento local (SEO)",
    body: "Optimizamos tu Google Business Profile y la estructura de tu web para que aparezcas cuando alguien busca tu rubro en tu zona. Sin esto, una web linda no sirve de mucho.",
    tags: ["Google Business", "Schema markup", "Gestión de reseñas"],
    price: "USD 150",
    unit: "/ mes",
  },
  {
    index: "03",
    title: "Automatización de leads",
    body: "Cada consulta del formulario llega directo a tu WhatsApp o email, sin que tengas que estar revisando la web todo el día. Configuramos también un registro simple de cada contacto.",
    tags: ["Zapier / n8n", "WhatsApp Business", "Notion o planilla"],
    price: "USD 200",
    unit: "setup + USD 50/mes",
  },
  {
    index: "04",
    title: "Mantenimiento y mejora continua",
    body: "Actualizamos tu web, corregimos lo que se rompe y la vamos mejorando con el tiempo: velocidad, contenido nuevo, ajustes según lo que pidan tus clientes.",
    tags: ["Actualizaciones", "Soporte por WhatsApp", "Mejoras mensuales"],
    price: "USD 100",
    unit: "/ mes",
  },
];

export default function Servicios() {
  return (
    <>
      <Navbar active="servicios" />

      <section className="py-18 pb-14">
        <div className="mx-auto max-w-270 px-6">
          <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
            <span className="inline-block h-px w-3.5 bg-olive-deep" />
            Servicios
          </p>
          <h1 className="max-w-170 font-display text-[32px] font-medium sm:text-[46px]">
            Lo que hacemos,{" "}
            <span className="underline-brand">explicado sin vueltas</span>.
          </h1>
          <p className="mt-4.5 max-w-140 text-[17px] text-ink-soft">
            Cinco servicios concretos, pensados para negocios chicos que
            necesitan resultados, no jerga técnica.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-270 px-6">
          {servicios.map((s) => (
            <div
              key={s.index}
              className="grid grid-cols-1 gap-4 border-t border-line py-12 last:border-b sm:grid-cols-[80px_1fr_280px] sm:gap-8"
            >
              <div className="font-display text-base italic text-terracota sm:text-xl">
                {s.index}
              </div>
              <div>
                <h2 className="mb-3 font-display text-[22px] font-medium sm:text-[26px]">
                  {s.title}
                </h2>
                <p className="mb-4.5 max-w-130 text-[15px] text-ink-soft">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-cream-deep px-3 py-1.5 text-xs text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[10px] border border-line bg-white p-5.5 text-left">
                <div className="mb-1.5 text-xs uppercase tracking-wide text-ink-soft">
                  Desde
                </div>
                <div className="mb-3.5 font-display text-2xl">
                  {s.price}{" "}
                  <span className="font-sans text-xs font-normal text-ink-soft">
                    {s.unit}
                  </span>
                </div>
                <Link
                  href="/contacto"
                  className="text-sm font-medium text-olive-deep hover:underline"
                >
                  Consultar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-deep py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
                <span className="inline-block h-px w-3.5 bg-olive-deep" />
                Honestidad ante todo
              </p>
              <h2 className="mb-6 font-display text-[28px] font-medium">
                Lo que todavía no ofrecemos
              </h2>
              <div className="flex flex-col gap-4.5">
                {[
                  {
                    strong: "Apps móviles nativas.",
                    rest: "Si tu negocio necesita una app, te derivamos a alguien especializado.",
                  },
                  {
                    strong: "Sistemas internos complejos (ERP, facturación).",
                    rest: "Nos enfocamos en presencia online, no en software de gestión interna.",
                  },
                  {
                    strong: "Diseño de identidad de marca desde cero.",
                    rest: "Trabajamos mejor cuando ya tenés un logo o una idea de marca definida.",
                  },
                ].map((item) => (
                  <div key={item.strong} className="flex items-start gap-3.5">
                    <span className="shrink-0 font-display text-lg italic text-terracota-deep">
                      ×
                    </span>
                    <p className="text-[14.5px] text-ink-soft">
                      <strong className="font-medium text-ink">
                        {item.strong}
                      </strong>{" "}
                      {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[10px] border border-line bg-white p-7">
              <p className="font-display text-[19px] italic leading-relaxed">
                &quot;Preferimos decirte que no hacemos algo, antes que
                hacerlo mal.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Cuál de estos servicios necesitás?"
        subtitle="Contanos tu situación y te decimos qué te conviene empezar primero."
        buttonLabel="Hablemos por WhatsApp"
        buttonHref="https://wa.me/5491164831145"
      />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}