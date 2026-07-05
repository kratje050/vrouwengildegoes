"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rose-deep/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="focus-ring rounded-lg text-xl font-bold text-mulberry"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>
        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname === `${item.href}/`;
            return (
              <Link
                className={`focus-ring rounded-lg px-2.5 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-linen text-mulberry"
                    : "text-ink/75 hover:bg-white/80 hover:text-mulberry"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-rose-deep/15 bg-white text-mulberry xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Mobiele navigatie"
          className="border-t border-rose-deep/10 bg-cream px-6 py-4 xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                className="focus-ring rounded-lg px-4 py-3 text-base font-semibold text-ink hover:bg-white"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
