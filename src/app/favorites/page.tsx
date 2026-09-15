"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/components/FavoritesProvider";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const saved = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-700">Your collection</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Favorites</h1>
      {saved.length ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-slate-100 py-24 text-center">
          <p className="text-xl font-bold text-slate-950">Your favorites are waiting</p>
          <p className="mt-2 text-slate-600">Tap the heart on an experience to save it here.</p>
        </div>
      )}
    </div>
  );
}
