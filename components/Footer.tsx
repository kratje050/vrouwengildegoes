import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-rose-deep/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold text-mulberry">{site.name}</h2>
          <p className="mt-4 max-w-md leading-7 text-ink/72">
            Een warme vrouwenvereniging in Goes voor ontmoeting, activiteiten,
            creativiteit en gezelligheid.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-sage">
            Navigatie
          </h3>
          <ul className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring rounded text-ink/75 hover:text-mulberry" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="focus-ring rounded text-ink/75 hover:text-mulberry" href="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-sage">
            Contact
          </h3>
          <ul className="mt-4 grid gap-3 text-ink/75">
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 text-rose-deep" />
              <span>{site.contact.email}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 text-rose-deep" />
              <span>{site.contact.phone}</span>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 text-rose-deep" />
              <span>{site.contact.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rose-deep/10 px-6 py-5 text-center text-sm text-ink/60">
        © 2026 Vrouwengilde Goes. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
