"use client";

import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types/experience";

interface Props { experience: Experience; isFavorite: boolean; onToggleFavorite: (id: string) => void; }
export default function ExperienceCard({ experience, isFavorite, onToggleFavorite }: Props) {
  return <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-56 overflow-hidden"><Image src={experience.imageUrl} alt={experience.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><button aria-label={isFavorite ? "Remove favorite" : "Add favorite"} onClick={() => onToggleFavorite(experience.id)} className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xl shadow-sm transition hover:scale-110">{isFavorite ? "♥" : "♡"}</button></div><div className="p-5"><div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-teal-700"><span>{experience.category}</span><span>★ {experience.rating}</span></div><h2 className="text-xl font-bold text-slate-950">{experience.title}</h2><p className="mt-1 text-sm text-slate-500">{experience.destination}</p><div className="mt-5 flex items-center justify-between"><p className="font-bold text-slate-950">${experience.price} <span className="font-normal text-slate-500">/ person</span></p><Link href={`/experiences/${experience.id}`} className="text-sm font-bold text-teal-700 hover:text-teal-900">View details →</Link></div></div></article>;
}
