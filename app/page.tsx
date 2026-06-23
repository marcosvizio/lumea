import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(216,90,48,0.07), transparent 45%), radial-gradient(circle at 10% 85%, rgba(59,109,17,0.06), transparent 40%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-270 px-6">
          <div className="max-w-185">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Para restaurantes, consultorios y comercios locales
            </p>
            <h1 className="font-display text-[38px] font-medium leading-tight sm:text-[54px]">
              Tu negocio,{" "}
              <span className="underline-brand">
                visible 
              </span> donde te buscan.
            </h1>
            <p className="mt-6 max-w-130 text-[16px] text-ink-soft sm:text-[18px]">
              Construimos webs, posicionamiento en Google y automatización de
              leads para negocios que tienen clientes pero no tienen sistema.
              Resultados en 30 días, sin vueltas técnicas.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-olive px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-olive-deep"
              >
                Quiero mi diagnóstico gratis
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-md border-[1.5px] border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Ver servicios
              </Link>
            </div>
            <p className="mt-3.5 text-[13px] text-ink-soft">
              15 minutos. Sin compromiso. Te mostramos exactamente qué te está
              costando no aparecer en Google.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {[
              { num: "14 días", label: "Plazo promedio de entrega" },
              { num: "+30", label: "Leads nuevos en el primer mes*" },
              { num: "100%", label: "Proyectos con métricas reales" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 py-5 ${
                  i < 2 ? "sm:border-r border-line border-b sm:border-b-0" : ""
                }`}
              >
                <div className="tabular font-display text-[32px] font-medium text-olive-deep">
                  {stat.num}
                </div>
                <div className="mt-1 text-[13px] text-ink-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-cream-deep py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
                <span className="inline-block h-px w-3.5 bg-olive-deep" />
                El problema real
              </p>
              <h2 className="mb-7 max-w-105 font-display text-[30px] font-medium">
                Tenés clientes. No tenés sistema.
              </h2>
              <div className="flex flex-col gap-7">
                {[
                  {
                    title: "Te buscan y no te encuentran",
                    body: "Alguien escribe \"tu rubro cerca de mí\" en Google y aparece cualquiera, menos vos.",
                  },
                  {
                    title: "Instagram no alcanza",
                    body: "Tenés buen contenido, pero sin web propia perdés cada consulta que no llega por ahí.",
                  },
                  {
                    title: "No sabés qué funciona",
                    body: "No hay métricas, no hay forma de saber cuántos clientes nuevos te trae cada peso invertido.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="font-display text-xl italic text-terracota">
                      &quot;
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[17px] font-medium">
                        {item.title}
                      </h3>
                      <p className="text-[14.5px] text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[10px] border border-line bg-white p-8">
              <p className="font-display text-[22px] italic leading-relaxed">
                &quot;Casi 8 de cada 10 negocios locales en Argentina tienen
                Instagram activo, pero no tienen una web propia donde alguien
                pueda encontrarlos buscando en Google.&quot;
              </p>
              <p className="mt-4.5 text-[13px] text-ink-soft">
                — Lo que vemos en cada diagnóstico que hacemos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="mb-14 max-w-150">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Qué hacemos
            </p>
            <h2 className="font-display text-[36px] font-medium">
              Tres formas de resolverlo
            </h2>
            <p className="mt-3.5 text-ink-soft">
              No vendemos tecnología. Vendemos que te encuentren, te elijan y
              vuelvan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {[
              {
                num: "Uno",
                title: "Web profesional",
                body: "Tu sitio, rápido y bien hecho, con WhatsApp y formulario integrados desde el primer día.",
              },
              {
                num: "Dos",
                title: "Posicionamiento local",
                body: "Que aparezcas cuando alguien busca tu rubro en tu zona. Google Business + SEO técnico.",
              },
              {
                num: "Tres",
                title: "Automatización de leads",
                body: "Cada consulta llega directo a tu WhatsApp, sin que se te pierda ni una.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-cream p-8 transition-colors hover:bg-white"
              >
                <span className="mb-4.5 block font-display text-sm italic text-olive-deep">
                  {s.num}
                </span>
                <h3 className="mb-2.5 text-[19px] font-medium">{s.title}</h3>
                <p className="text-sm text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO TRABAJAMOS */}
      <section className="py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="mb-14 max-w-150">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Cómo trabajamos
            </p>
            <h2 className="font-display text-[36px] font-medium">
              Tres pasos, sin sorpresas
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Hablamos",
                body: "Diagnóstico gratuito de 15 minutos. Vemos dónde estás hoy y qué te conviene primero.",
              },
              {
                num: "02",
                title: "Diseñamos",
                body: "Te mostramos la propuesta visual en 48 horas. Vos decidís, nosotros ajustamos.",
              },
              {
                num: "03",
                title: "Publicamos",
                body: "En 14 días tu web está online, indexada en Google y lista para recibir consultas.",
              },
            ].map((step) => (
              <div key={step.num}>
                <div className="mb-3.5 font-display text-[42px] font-medium leading-none text-terracota opacity-85">
                  {step.num}
                </div>
                <h3 className="mb-2 text-[18px] font-medium">{step.title}</h3>
                <p className="text-[14.5px] text-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="bg-ink py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="mb-14 max-w-150">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Resultados
            </p>
            <h2 className="font-display text-[36px] font-medium text-cream">
              Lo que pasa cuando aparecés
            </h2>
            <p className="mt-3.5 text-[#A9B097]">
              Números reales de los primeros proyectos. Cada cliente recibe un
              reporte mensual con los suyos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                tag: "Restaurante — Villa del Parque",
                num: "+45",
                body: "Reservas mensuales generadas desde la web, antes inexistentes.",
              },
              {
                tag: "Consultorio — CABA",
                num: "3.2x",
                body: "Aumento en consultas por WhatsApp tras el lanzamiento del sitio.",
              },
              {
                tag: "Estudio contable — Caballito",
                num: "#2",
                body: "Posición en Google para su búsqueda local principal, antes ni aparecía.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="rounded-[10px] border border-white/10 bg-white/5 p-7"
              >
                <span className="mb-4 block text-xs uppercase tracking-wide text-[#A9B097]">
                  {c.tag}
                </span>
                <div className="tabular font-display text-[38px] text-[#E8E2D0]">
                  {c.num}
                </div>
                <p className="mt-2 text-sm text-[#C7CCB6]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="mb-14 max-w-150">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Precios claros
            </p>
            <h2 className="font-display text-[36px] font-medium">
              Elegí cómo empezar
            </h2>
            <p className="mt-3.5 text-ink-soft">
              Precios fijos, sin sorpresas. Pagás por lo que necesitás hoy,
              escalás cuando quieras.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-line bg-white p-8">
              <div className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                Starter
              </div>
              <div className="mb-1 font-display text-[34px]">USD 299</div>
              <p className="mb-5.5 text-[13.5px] text-ink-soft">
                Para arrancar con presencia online real.
              </p>
              <ul className="mb-6.5 flex flex-1 flex-col gap-2.5 text-[13.5px]">
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Landing page profesional
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Formulario + WhatsApp integrado
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Google Analytics configurado
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Entrega en 7 días
                </li>
              </ul>
              <Link
                href="/contacto"
                className="rounded-md border-[1.5px] border-ink px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-ink hover:text-cream"
              >
                Elegir Starter
              </Link>
            </div>

            <div className="relative flex flex-col rounded-xl border-2 border-olive bg-white p-8">
              <span className="absolute -top-3 left-7 rounded-full bg-olive px-3 py-1 text-[11px] font-semibold text-cream">
                Más elegido
              </span>
              <div className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                Growth
              </div>
              <div className="mb-1 font-display text-[34px]">USD 499</div>
              <p className="mb-5.5 text-[13.5px] text-ink-soft">
                La opción completa para crecer en serio.
              </p>
              <ul className="mb-6.5 flex flex-1 flex-col gap-2.5 text-[13.5px]">
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Web completa (5 a 8 páginas)
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  SEO local básico incluido
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Automatización de leads
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  1 mes de soporte post-entrega
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Entrega en 14 días
                </li>
              </ul>
              <Link
                href="/contacto"
                className="rounded-md bg-olive px-5 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-olive-deep"
              >
                Elegir Growth
              </Link>
            </div>

            <div className="flex flex-col rounded-xl border border-line bg-white p-8">
              <div className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                Premium
              </div>
              <div className="mb-1 font-display text-[34px]">USD 1.199</div>
              <p className="mb-5.5 text-[13.5px] text-ink-soft">
                Para negocios que quieren escalar con pauta.
              </p>
              <ul className="mb-6.5 flex flex-1 flex-col gap-2.5 text-[13.5px]">
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Web completa a medida
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  SEO local por 3 meses
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  Setup de Google Ads
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  CRM simple de seguimiento
                </li>
                <li className="relative pl-5">
                  <span className="absolute left-0 text-olive">—</span>
                  3 meses de soporte
                </li>
              </ul>
              <Link
                href="/contacto"
                className="rounded-md border-[1.5px] border-ink px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-ink hover:text-cream"
              >
                Elegir Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-22">
        <div className="mx-auto max-w-270 px-6">
          <div className="mb-14 max-w-150">
            <p className="mb-3.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-olive-deep">
              <span className="inline-block h-px w-3.5 bg-olive-deep" />
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-[36px] font-medium">
              Antes de que preguntes
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}