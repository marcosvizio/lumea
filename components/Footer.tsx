import Link from "next/link";
import { CONTACT_EMAIL, getWhatsAppUrl } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="border-t border-line py-14">
            <div className="mx-auto max-w-270 px-6">
                <div className="flex flex-wrap items-start justify-between gap-8">
                    <div>
                        <Link href="/">
                            <Logo />
                        </Link>
                        <p className="mt-2.5 max-w-70 text-[13.5px] text-ink-soft">
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
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-2.5 block text-sm"
                            >
                                WhatsApp
                            </a>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="mb-2.5 block text-sm">
                                {CONTACT_EMAIL}
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
    );
}