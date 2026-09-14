"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function SearchBar() {
  const params = useSearchParams(); const pathname = usePathname(); const router = useRouter();
  const value = params.get("search") ?? "";
  function update(next: string) { const query = new URLSearchParams(params.toString()); if (next) { query.set("search", next); } else { query.delete("search"); } router.replace(`${pathname}?${query.toString()}`, { scroll: false }); }
  return <div className="relative flex-1"><span className="pointer-events-none absolute left-4 top-3.5 text-lg text-slate-700">⌕</span><input value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => update(event.target.value)} placeholder="Search experiences by title..." className="w-full rounded-2xl border border-slate-300 bg-white px-11 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-600 outline-none ring-teal-500 transition focus:ring-2" /></div>;
}
