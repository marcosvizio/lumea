import Link from "next/link";

type CTASectionProps = {
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    buttonHref?: string;
};

export default function CTASection({
    title = "¿Empezamos esta semana?",
    subtitle = "15 minutos. Sin compromiso. Te mostramos dónde estás parado hoy.",
    buttonLabel = "Quiero mi diagnóstico gratis",
    buttonHref = "/contacto",
}: CTASectionProps) {
    return (
        <section className="py-16">
            <div className="mx-4 rounded-2xl bg-olive px-8 py-16 text-center sm:mx-6 sm:px-14">
                <h2 className="font-display text-[26px] font-medium text-cream sm:text-[34px]">
                    {title}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[16px] text-[#D9E3C8]">
                    {subtitle}
                </p>
                {buttonHref.startsWith("/") ? (
                    <Link
                        href={buttonHref}
                        className="mt-7 inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 text-sm font-medium text-olive-deep transition-colors hover:bg-white"
                    >
                    {buttonLabel}
                    </Link>
                ) : (
                    <a
                        href={buttonHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 text-sm font-medium text-olive-deep transition-colors hover:bg-white"
                    >
                    {buttonLabel}
                    </a>
                )}
            </div>
        </section>
    );
}