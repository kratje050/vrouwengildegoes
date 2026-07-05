import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy"
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Privacy"
            title="Korte privacyverklaring"
            description="Vrouwengilde Goes gaat zorgvuldig om met gegevens die via deze website worden gedeeld."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-3xl px-6 text-lg leading-8 text-ink/76 sm:px-8">
          <h2 className="text-2xl font-bold text-ink">Welke gegevens?</h2>
          <p className="mt-3">
            Wanneer u zelf contact opneemt met Vrouwengilde Goes, kunnen de
            gegevens die u deelt worden gebruikt om uw vraag te beantwoorden.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink">Gebruik van gegevens</h2>
          <p className="mt-3">
            Gegevens worden alleen gebruikt om contact op te nemen naar aanleiding
            van een vraag of bericht. Gegevens worden niet commercieel gedeeld of
            verkocht.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink">Inzage of verwijdering</h2>
          <p className="mt-3">
            Leden en geïnteresseerden kunnen vragen om inzage, correctie of
            verwijdering van hun gegevens via {site.contact.email}.
          </p>
        </div>
      </section>
    </>
  );
}
