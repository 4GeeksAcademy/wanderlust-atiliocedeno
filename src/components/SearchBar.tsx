"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const DEBOUNCE_MS = 350;

export default function SearchBar() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchParam = params.get("search") ?? "";
  const [inputValue, setInputValue] = useState(searchParam);
  const lastCommittedSearch = useRef(searchParam);
  const pendingSearchFromInput = useRef<string | null>(null);

  useEffect(() => {
    if (pendingSearchFromInput.current === searchParam) {
      pendingSearchFromInput.current = null;
      return;
    }

    if (searchParam !== lastCommittedSearch.current) {
      lastCommittedSearch.current = searchParam;
      setInputValue(searchParam);
    }
  }, [searchParam]);

  useEffect(() => {
    if (inputValue === lastCommittedSearch.current) {
      return;
    }

    const timeoutId = setTimeout(() => {
      pendingSearchFromInput.current = inputValue;
      lastCommittedSearch.current = inputValue;
      const query = new URLSearchParams(params.toString());
      if (inputValue) {
        query.set("search", inputValue);
      } else {
        query.delete("search");
      }
      router.replace(`${pathname}?${query.toString()}`, { scroll: false });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeoutId);
  }, [inputValue, params, pathname, router]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="relative flex-1">
      <span className="pointer-events-none absolute left-4 top-3.5 text-lg text-slate-700">
        ⌕
      </span>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Search experiences by title..."
        className="w-full rounded-2xl border border-slate-300 bg-white px-11 py-3.5 text-sm font-medium text-slate-950 placeholder:text-slate-600 outline-none ring-teal-600 transition focus:ring-2"
      />
    </div>
  );
}
