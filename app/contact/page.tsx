import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  const contactItems = [
    { label: "E-mail", value: site.contact.email, icon: Mail },
    { label: "Telefoon", value: site.contact.phone, icon: Phone },
    { label: "Locatie", value: site.contact.location, icon: MapPin },
    { label: "Contactpersoon", value: site.contact.person, icon: UserRound }
  ];

  return (
    <>
      <section className="bg-linen py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Neem gerust contact op"
            description="Heeft u een vraag of wilt u kennismaken? Gebruik het formulier of de contactgegevens hieronder. De verzendfunctie van het formulier wordt later gekoppeld."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg bg-cream p-6">
            <h2 className="text-2xl font-bold text-ink">Contactgegevens</h2>
            <div className="mt-6 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="flex gap-4" key={item.label}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-rose-deep">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{item.label}</p>
                      <p className="text-ink/72">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
