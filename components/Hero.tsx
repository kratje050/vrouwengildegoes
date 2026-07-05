import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-18">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-sage">
            Ontmoeting, creativiteit en gezelligheid
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Welkom bij Vrouwengilde Goes
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/76 sm:text-xl">
            Een eigentijdse vrouwenvereniging in Goes waar vrouwen elkaar
            ontmoeten, samen activiteiten doen en ruimte vinden voor ontspanning,
            bewustwording en persoonlijke ontwikkeling.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/activiteiten">Bekijk activiteiten</Button>
            <Button href="/lid-worden" variant="secondary">
              Lid worden
            </Button>
          </div>
        </div>
        <div className="relative z-0">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-sage/18" />
          <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-rose-soft/35" />
          <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white shadow-xl shadow-rose-deep/10">
            <Image
              src="/images/hero-vrouwengilde-goes.png"
              alt="Een warme tafelsetting met koffie, thee, bloemen en creatieve materialen"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
