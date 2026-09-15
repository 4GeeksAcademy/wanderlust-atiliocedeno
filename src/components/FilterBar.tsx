"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories, destinations } from "@/data/experiences";

export default function FilterBar() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function update(key: string, value: string) {
    const query = new URLSearchParams(params.toString());
    if (value && value !== "All" && value !== "All destinations") {
      query.set(key, value);
    } else {
      query.delete(key);
    }
    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <select
        aria-label="Category"
        value={params.get("category") ?? "All"}
        onChange={(e) => update("category", e.target.value)}
        className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none focus:ring-2 focus:ring-teal-600"
      >
        <option>All</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <select
        aria-label="Destination"
        value={params.get("destination") ?? "All destinations"}
        onChange={(e) => update("destination", e.target.value)}
        className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none focus:ring-2 focus:ring-teal-600"
      >
        <option>All destinations</option>
        {destinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
}
