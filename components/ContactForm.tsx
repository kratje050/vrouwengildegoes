"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Bedankt voor uw bericht. De verzendfunctie wordt binnenkort gekoppeld.");
  }

  return (
    <form
      className="rounded-lg border border-rose-deep/10 bg-white p-6 shadow-sm shadow-rose-deep/5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 font-semibold text-ink" htmlFor="name">
          Naam
          <input
            className="focus-ring min-h-12 rounded-lg border border-rose-deep/15 bg-cream px-4 text-base font-normal"
            id="name"
            name="name"
            placeholder="Uw naam"
            type="text"
          />
        </label>
        <label className="grid gap-2 font-semibold text-ink" htmlFor="email">
          E-mailadres
          <input
            className="focus-ring min-h-12 rounded-lg border border-rose-deep/15 bg-cream px-4 text-base font-normal"
            id="email"
            name="email"
            placeholder="uw@email.nl"
            type="email"
          />
        </label>
        <label className="grid gap-2 font-semibold text-ink" htmlFor="message">
          Bericht
          <textarea
            className="focus-ring min-h-36 rounded-lg border border-rose-deep/15 bg-cream px-4 py-3 text-base font-normal"
            id="message"
            name="message"
            placeholder="Waarmee kunnen wij helpen?"
          />
        </label>
        <button
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-rose-deep px-5 py-3 text-base font-semibold text-white transition hover:bg-mulberry"
          type="submit"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          Verzenden
        </button>
      </div>
      {message ? (
        <p className="mt-5 rounded-lg bg-sage/12 p-4 font-semibold text-sage" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
