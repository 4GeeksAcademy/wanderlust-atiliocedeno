"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    document.title = favoriteIds.length
      ? `Wanderlust Explorer (${favoriteIds.length} saved)`
      : "Wanderlust Explorer";
  }, [favoriteIds.length]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
      isFavorite: (id: string) => favoriteIds.includes(id),
    }),
    [favoriteIds, toggleFavorite],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
