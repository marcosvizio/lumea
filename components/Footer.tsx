/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-19 19:18:00
 Last Modification Date: 2026-06-19 19:25:03

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
        <div className="mx-auto max-w-[1080px] px-6">
            <div className="flex flex-wrap items-start justify-between gap-8">
                <div>
                    <Link href="/" className="font-display text-[22px] font-semibold">
                        lum<span className="text-olive">e</span>a
                    </Link>
                    <p className="mt-2.5 max-w-[280px] text-[13.5px] text-ink-soft">
                        Webs, SEO local y automatización de leads para negocios que
                        quieren crecer sin complicarse.
                    </p>
                </div>
                <div className="flex gap-14">
                    <div>
                        <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-ink-soft">
                            Navegación
                        </h4>
                        <Link href="/servicios" className="mb-2.5 block text-sm">
                            Servicios
                        </Link>
                        <Link href="/#precios" className="mb-2.5 block text-sm">
                            Precios
                        </Link>
                        <Link href="/contacto" className="mb-2.5 block text-sm">
                            Contacto
                        </Link>
                    </div>
                    <div>
                        <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-ink-soft">
                            Contacto
                        </h4>
                        <a
                            href="https://wa.me/5491164831145"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2.5 block text-sm"
                        >
                            WhatsApp
                        </a>
                        <a href="mailto:hola@lumea.com.ar" className="mb-2.5 block text-sm">
                            hola@lumea.com.ar
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-line pt-6 text-[13px] text-ink-soft">
                <span>© 2026 Lumea. Hecho en Buenos Aires.</span>
                <span>Villa del Parque, CABA</span>
            </div>
        </div>
    </footer>
)};