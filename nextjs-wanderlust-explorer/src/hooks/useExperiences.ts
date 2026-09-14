"use client";

import { useMemo } from "react";
import { Experience } from "@/types/experience";

interface Filters {
  search?: string;
  category?: string;
  destination?: string;
}

export function useExperiences(experiences: Experience[], filters: Filters) {
  return useMemo(() => {
    const term = filters.search?.trim() ?? "";
    const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

    return experiences.filter((experience) => {
      const matchesSearch = !term || regex.test(experience.title);
      const matchesCategory = !filters.category || filters.category === "All" || experience.category === filters.category;
      const matchesDestination = !filters.destination || experience.destination === filters.destination;
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [experiences, filters.search, filters.category, filters.destination]);
}
