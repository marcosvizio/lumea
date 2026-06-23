/*

 Author: Marcos Vizio
 Email: marcosfvizio@gmail.com

 Creation Date: 2026-06-20 22:57:41
 Last Modification Date: 2026-06-20 23:12:32

 Another File Header is a Visual Studio Code extension to automatically or by command insert a header to your files.

*/

"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5491164831145";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rubro, setRubro] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Hola! Soy ${nombre} (${rubro}). ${
      mensaje ? mensaje : "Quiero pedir mi diagnóstico gratuito."
    } Mi WhatsApp: ${telefono}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-9"
    >
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-md border border-line bg-cream px-3.5 py-3 text-sm focus:border-olive focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
            WhatsApp
          </label>
          <input
            id="telefono"
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+54 9 11..."
            className="w-full rounded-md border border-line bg-cream px-3.5 py-3 text-sm focus:border-olive focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="rubro" className="mb-1.5 block text-sm font-medium">
          Rubro de tu negocio
        </label>
        <select
          id="rubro"
          required
          value={rubro}
          onChange={(e) => setRubro(e.target.value)}
          className="w-full rounded-md border border-line bg-cream px-3.5 py-3 text-sm focus:border-olive focus:outline-none"
        >
          <option value="" disabled>
            Elegí una opción
          </option>
          <option>Restaurante o bar</option>
          <option>Consultorio o clínica</option>
          <option>Estudio profesional</option>
          <option>Peluquería o estética</option>
          <option>Gimnasio o centro deportivo</option>
          <option>Otro</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Contanos tu situación actual
        </label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="¿Tenés web hoy? ¿Qué te gustaría lograr?"
          className="min-h-22.5 w-full resize-y rounded-md border border-line bg-cream px-3.5 py-3 text-sm focus:border-olive focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-olive py-3.5 text-sm font-medium text-cream transition-colors hover:bg-olive-deep active:scale-[0.98]"
      >
        Pedir diagnóstico gratuito
      </button>
      <p className="mt-3.5 text-center text-xs text-ink-soft">
        Te contactamos por WhatsApp en menos de 24 horas hábiles.
      </p>
    </form>
  );
}