import type { Metadata } from "next";
import { PhotoGrid } from "@/components/PhotoGrid";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Foto's"
};

export default function FotosPage() {
  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Foto's"
            title="Ruimte voor herinneringen"
            description="Hier kunnen later echte foto's van activiteiten, uitstapjes, creatieve middagen en jaarmomenten worden geplaatst."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <PhotoGrid />
        </div>
      </section>
    </>
  );
}
