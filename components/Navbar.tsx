/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-19 18:13:27
 Last Modification Date: 2026-06-19 19:26:10

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

import Link from "next/link";

const WHATSAPP_NUMBER = "5491164831145";

export default function Navbar({ active }: { active?: string }) {
    
    const links = [
        { href: "/servicios", label: "Servicios", key: "servicios" },
        { href: "/#casos", label: "Casos", key: "casos" },
        { href: "/#precios", label: "Precios", key: "precios" },
        { href: "/contacto", label: "Contacto", key: "contacto" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4">
                <Link href="/" className="font-display text-[22px] font-semibold tracking-tight">
                    lum<span className="text-olive">e</span>a
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                        key={link.key}
                        href={link.href}
                        className={`text-sm transition-colors ${
                            active === link.key
                            ? "font-medium text-ink"
                            : "text-ink-soft hover:text-ink"
                        }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-olive px-5 py-[11px] text-sm font-medium text-cream transition-colors hover:bg-olive-deep"
                >
                Hablemos
                </a>            
            </nav>
        </header>   
    );
};