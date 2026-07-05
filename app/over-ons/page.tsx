import type { Metadata } from "next";
import { InfoCard } from "@/components/InfoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { highlights, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over ons"
};

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Over ons"
            title="Een eigentijdse vrouwenvereniging in Goes"
            description="Vrouwengilde Goes is een vereniging waar vrouwen elkaar kunnen ontmoeten, samen activiteiten ondernemen en aandacht hebben voor creativiteit, ontspanning, bewustwording en persoonlijke ontwikkeling."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl text-lg leading-8 text-ink/76">
            <p>
              De vereniging wil een warme en betrouwbare plek zijn. Er is ruimte
              voor gesprek, gezelligheid, creatief bezig zijn en activiteiten
              die inspireren. Nieuwe leden en geïnteresseerden kunnen op een
              laagdrempelige manier kennismaken.
            </p>
            <p className="mt-5">
              Net als op de oude website blijft het idee van ontmoeting,
              ontspanning en vorming centraal staan. De praktische gegevens,
              contributie en contactpersonen worden hier pas ingevuld wanneer
              deze actueel zijn bevestigd.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[...highlights, ...values].slice(0, 4).map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
