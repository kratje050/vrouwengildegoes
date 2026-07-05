import type { Metadata } from "next";
import { HandHeart } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Goed doel"
};

export default function GoedDoelPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Goed doel"
            title="Samen betrokken bij een goed doel"
            description="Vrouwengilde Goes vindt het belangrijk om niet alleen naar binnen, maar ook naar buiten gericht te zijn."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="rounded-lg border border-rose-deep/10 bg-cream p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white text-rose-deep">
              <HandHeart aria-hidden="true" className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-ink">
              Momenteel steunen wij: [naam goed doel invullen]
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/76">
              De vereniging zet zich in voor een goed doel dat past bij haar
              betrokken karakter. De naam, toelichting en eventuele acties
              worden later aangevuld zodra deze actueel zijn bevestigd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
