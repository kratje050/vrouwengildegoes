import type { Metadata } from "next";
import { ActivityCard } from "@/components/ActivityCard";
import { SectionTitle } from "@/components/SectionTitle";
import { activities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Activiteiten"
};

export default function ActiviteitenPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Activiteiten / programma"
            title="Voorbeeldactiviteiten voor ontmoeting en ontspanning"
            description="De actuele planning wordt later aangevuld. Deze pagina laat alvast zien welke soorten activiteiten bij Vrouwengilde Goes passen."
          />
        </div>
      </section>
      <section className="bg-cream py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
