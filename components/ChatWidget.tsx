"use client";

import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";
import { CHAT_WELCOME, chatOptions, type ChatOption } from "@/lib/chatbot-data";
import { LogoMark } from "@/components/Logo";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: CHAT_WELCOME },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  function handleOption(option: ChatOption) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option.label },
      { from: "bot", text: option.answer },
    ]);

    if (option.isWhatsAppHandoff) {
      window.open(
        getWhatsAppUrl(`Hola! Vengo del chat de la web y quiero hablar con un asesor.`),
        "_blank"
      );
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-60 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Asistente virtual de Lumea"
          className="flex h-[70vh] max-h-125 w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_32px_rgba(35,41,31,0.18)] sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-line bg-olive px-5 py-4">
            <div className="flex items-center gap-3">
              <LogoMark variant="onDark" size={30} />
              <div>
                <p className="font-display text-base text-cream">Asistente Lumea</p>
                <p className="text-[12px] text-[#D9E3C8]">Respuestas al instante</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-cream transition-colors hover:bg-white/15"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13.5px] ${
                    message.from === "user"
                      ? "bg-olive text-cream"
                      : "bg-cream-deep text-ink"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-line px-4 py-4">
            {chatOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleOption(option)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  option.isWhatsAppHandoff
                    ? "border-olive bg-olive text-cream hover:bg-olive-deep"
                    : "border-line bg-cream text-ink-soft hover:border-olive hover:text-ink"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream shadow-[0_4px_16px_rgba(35,41,31,0.25)] transition-transform hover:scale-[1.06]"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <LogoMark variant="onDark" size={30} />
        )}
      </button>
    </div>
  );
}
