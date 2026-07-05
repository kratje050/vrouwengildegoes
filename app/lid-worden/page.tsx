import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Lid worden"
};

export default function LidWordenPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Lid worden"
            title="Maak kennis met Vrouwengilde Goes"
            description="Bent u benieuwd naar de vereniging? Geïnteresseerden zijn welkom om contact op te nemen en rustig te ontdekken of Vrouwengilde Goes bij hen past."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg bg-cream p-8">
            <h2 className="text-2xl font-bold text-ink">Praktische informatie</h2>
            <p className="mt-4 leading-8 text-ink/76">
              Actuele contributie, voorwaarden en aanmeldinformatie worden later
              ingevuld. Er wordt op deze website geen bankrekeningnummer of
              betaalfunctionaliteit opgenomen.
            </p>
            <div className="mt-7">
              <Button href="/contact">Neem contact op</Button>
            </div>
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/76">
            <p>
              Een eerste kennismaking kan helpen om de sfeer te proeven en te
              horen welke activiteiten er binnenkort zijn.
            </p>
            <p>
              De vereniging draait om ontmoeting, aandacht voor elkaar,
              creativiteit en gezellige momenten in Goes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
