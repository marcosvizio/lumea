"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Navbar({ active }: { active?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/servicios", label: "Servicios", key: "servicios" },
        { href: "/#casos", label: "Casos", key: "casos" },
        { href: "/#precios", label: "Precios", key: "precios" },
        { href: "/contacto", label: "Contacto", key: "contacto" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
            <nav className="mx-auto flex max-w-270 items-center justify-between px-6 py-4">
                <Link href="/">
                    <Logo />
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
                <div className="flex items-center gap-2">
                    <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-md bg-olive px-5 py-2.75 text-sm font-medium text-cream transition-colors hover:bg-olive-deep sm:inline-flex"
                    >
                    Hablemos
                    </a>
                    <button
                    type="button"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="border-t border-line bg-cream px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                            key={link.key}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm transition-colors ${
                                active === link.key
                                ? "font-medium text-ink"
                                : "text-ink-soft hover:text-ink"
                            }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-olive px-5 py-2.75 text-sm font-medium text-cream transition-colors hover:bg-olive-deep"
                        >
                        Hablemos
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}