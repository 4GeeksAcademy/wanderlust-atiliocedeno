"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "./FavoritesProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();
  const links: [string, string][] = [
    ["Home", "/"],
    ["Explore", "/experiences"],
    ["Favorites", "/favorites"],
    ["Profile", "/profile"],
  ];

  return (
    <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-950">
          wanderlust<span className="text-teal-700">.</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                pathname === href
                  ? "bg-slate-950 text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {label}
              {href === "/favorites" && favoriteIds.length > 0 ? ` ${favoriteIds.length}` : ""}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
