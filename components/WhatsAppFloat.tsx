/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-19 19:29:03
 Last Modification Date: 2026-06-19 19:29:55

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

const WHATSAPP_NUMBER = "5491164831145";

export default function WhatsAppFloat() {
    return (
        <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 z-60 flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream shadow-[0_4px_16px_rgba(35,41,31,0.25)] transition-transform hover:scale-[1.06]"
        >
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.4z" />
                <path d="M9 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
                <path d="M9.5 13.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" />
            </svg>
        </a>
    );
}