"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
    <div className="border-t border-line">
        {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
                <div key={item.q} className="border-b border-line">
                    <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
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
                    id={panelId}
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <p className="max-w-160 pb-5 text-[14.5px] text-ink-soft">
                                {item.a}
                            </p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  );
}