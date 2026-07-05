import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  const contactItems = [
    { label: "E-mail", value: site.contact.email, icon: Mail },
    { label: "Telefoon", value: site.contact.phone, icon: Phone },
    { label: "Secretariaat", value: site.contact.address, icon: Building2 },
    { label: "Postcode en plaats", value: site.contact.postalCity, icon: MapPin },
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
            description="Heeft u een vraag of wilt u kennismaken? Gebruik de contactgegevens hieronder om contact op te nemen met het secretariaat."
          />
        </div>
      </section>
      <section className="bg-white py-18">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <aside className="rounded-lg bg-cream p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-ink">Contactgegevens</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
        </div>
      </section>
    </>
  );
}
