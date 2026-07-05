import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { boardMembers, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bestuur"
};

export default function BestuurPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Bestuur"
            title="Het bestuur van Vrouwengilde Goes"
            description="Het bestuur zet zich in voor een goede gang van zaken, duidelijke communicatie en een passend programma voor de leden."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <article
                className="rounded-lg border border-rose-deep/10 bg-cream p-6 shadow-sm shadow-rose-deep/5"
                key={member.role}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-rose-deep">
                  <member.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">
                  {member.role}
                </p>
                <h2 className="mt-3 text-xl font-bold text-ink">{member.name}</h2>
                <p className="mt-4 leading-7 text-ink/72">{member.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-linen p-8">
            <h2 className="text-2xl font-bold text-ink">Contact met het bestuur</h2>
            <p className="mt-4 leading-8 text-ink/76">
              Voor algemene vragen kunt u contact opnemen met het secretariaat
              via {site.contact.email} of telefonisch via {site.contact.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
