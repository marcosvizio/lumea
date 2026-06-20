/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-19 22:15:55
 Last Modification Date: 2026-06-19 22:25:51

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

"use client";

import { useState } from "react";

const faqs = [
    {
        q: "¿Cuánto tarda en estar lista mi web?",
        a: "Entre 7 y 14 días según el paquete, desde que recibimos el contenido (textos, fotos, logo). Si no tenés todo listo, te ayudamos a armarlo sin sumar demoras grandes.",
    },
    {
        q: "¿Necesito tener todo el contenido antes de empezar?",
        a: "No. En el diagnóstico inicial te decimos exactamente qué necesitamos y te ayudamos a redactar lo que falte.",
    },
    {
        q: "¿Qué pasa después de la entrega?",
        a: "Incluimos soporte post-entrega según el plan elegido. Después podés contratar mantenimiento mensual o seguir solo: la web queda funcionando igual.",
    },
    {
        q: "¿Trabajan con negocios fuera de Buenos Aires?",
        a: "Sí. Todo el proceso se puede hacer a distancia, por videollamada y WhatsApp. La mayoría de nuestros clientes arrancan así.",
    },
    {
        q: "¿Cómo se paga?",
        a: "50% para arrancar el proyecto y 50% contra entrega. Para los servicios mensuales (SEO, Ads), se factura por mes adelantado.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
    <div className="border-t border-line">
        {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
                <div key={item.q} className="border-b border-line">
                    <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left font-display text-[18px] text-ink"
                    >
                        {item.q}
                        <span
                            className={`ml-5 shrink-0 text-xl text-olive transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                            }`}
                        >
                            +
                        </span>
                    </button>
                    <div
                    className="overflow-hidden transition-[max-height] duration-300"
                    style={{ maxHeight: isOpen ? "200px" : "0px" }}
                    >
                        <p className="max-w-160 pb-5 text-[14.5px] text-ink-soft">
                            {item.a}
                        </p>
                    </div>
                </div>
            );
        })}
    </div>
  );
}