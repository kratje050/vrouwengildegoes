import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { activities, highlights, newsItems, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Wat doen wij?"
            title="Samen actief, creatief en betrokken"
            description="Vrouwengilde Goes organiseert momenten waarop vrouwen elkaar kunnen ontmoeten, iets nieuws kunnen ontdekken en samen kunnen genieten van zinvolle vrije tijd."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Voor wie?"
            title="Voor vrouwen die verbinding zoeken"
            description="De vereniging staat open voor vrouwen die graag andere vrouwen ontmoeten, samen activiteiten doen en ruimte willen maken voor ontspanning en persoonlijke ontwikkeling."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {values.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Activiteiten"
              title="Een kleine preview van het programma"
              description="Actuele datums worden later ingevuld. Hieronder staat alvast een beeld van het soort activiteiten dat bij de vereniging past."
            />
            <Button href="/activiteiten" variant="secondary">
              Alle activiteiten
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activities.slice(0, 3).map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Nieuws"
              title="Laatste berichten"
              description="Hier delen we korte updates over de vereniging, het programma en praktische informatie."
            />
            <Button href="/nieuws" variant="secondary">
              Naar nieuws
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <InfoCard
                description={`${item.date} - ${item.description}`}
                icon={item.icon}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-18">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <SectionTitle
            eyebrow="Kom kennismaken"
            title="U bent welkom om rustig kennis te maken"
            description="Wilt u weten of Vrouwengilde Goes bij u past? Neem gerust contact op. We vertellen graag meer over de vereniging en de mogelijkheden om eens aan te sluiten."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Neem contact op</Button>
          </div>
        </div>
      </section>
    </>
  );
}
