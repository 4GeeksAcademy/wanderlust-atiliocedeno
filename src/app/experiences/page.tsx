"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/useExperiences";
import { useFavorites } from "@/components/FavoritesProvider";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import ExperienceCard from "@/components/ExperienceCard";

function ExperiencesContent() {
  const params = useSearchParams();
  const results = useExperiences(experiences, {
    search: params.get("search") ?? "",
    category: params.get("category") ?? "",
    destination: params.get("destination") ?? "",
  });
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-700">
          Find your next story
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Explore experiences
        </h1>
        <p className="mt-3 max-w-xl text-slate-600">
          From local flavors to wild horizons, discover something worth traveling for.
        </p>
      </div>
      <div className="mb-8 flex flex-col gap-3 rounded-3xl bg-slate-100 p-3 md:flex-row">
        <SearchBar />
        <FilterBar />
      </div>
      <p className="mb-5 text-sm font-semibold text-slate-600">
        {results.length} experiences found
      </p>
      {results.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 py-24 text-center">
          <p className="text-xl font-bold text-slate-950">No se encontraron resultados</p>
          <p className="mt-2 text-slate-600">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-5 py-24 text-slate-700">Loading experiences…</div>
      }
    >
      <ExperiencesContent />
    </Suspense>
  );
}
