"use client";

import { useFavorites } from "@/components/FavoritesProvider";

export default function ProfilePage() { const { favoriteIds } = useFavorites(); return <div className="mx-auto max-w-3xl px-5 py-16"><div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12"><div className="flex items-center gap-5"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-400 text-3xl font-black text-slate-950">AM</div><div><p className="text-sm font-bold uppercase tracking-widest text-teal-300">Traveler profile</p><h1 className="mt-1 text-3xl font-black">Alex Morgan</h1></div></div><p className="mt-10 max-w-xl text-lg leading-8 text-slate-300">Curious about food, thoughtful design, and the road less traveled. Always looking for the next beautiful detour.</p><div className="mt-10 border-t border-white/20 pt-6"><p className="text-4xl font-black text-teal-300">{favoriteIds.length}</p><p className="mt-1 text-slate-400">saved experiences</p></div></div></div>; }
