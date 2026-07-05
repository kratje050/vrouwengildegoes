import type { Metadata } from "next";
import { InfoCard } from "@/components/InfoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { newsItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nieuws"
};

export default function NieuwsPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Nieuws"
            title="Nieuws van Vrouwengilde Goes"
            description="Op deze pagina kunnen regelmatig nieuwe berichten worden geplaatst over de vereniging, activiteiten en praktische mededelingen."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                className="rounded-lg border border-rose-deep/10 bg-cream p-6 shadow-sm shadow-rose-deep/5"
                key={item.title}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-rose-deep">
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">
                  {item.date}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-ink">{item.title}</h2>
                <p className="mt-4 leading-7 text-ink/72">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
