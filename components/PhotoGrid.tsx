import Image from "next/image";
import { photoCategories } from "@/lib/content";

export function PhotoGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {photoCategories.map((photo) => (
        <article
          className="overflow-hidden rounded-lg border border-rose-deep/10 bg-white shadow-sm shadow-rose-deep/5"
          key={photo.title}
        >
          <Image
            alt={photo.alt}
            className="aspect-[4/3] w-full object-cover"
            height={600}
            src={photo.image}
            width={800}
          />
          <div className="p-5">
            <h3 className="text-lg font-bold text-ink">{photo.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/68">
              Placeholder. Vervang dit beeld later door een echte foto.
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
