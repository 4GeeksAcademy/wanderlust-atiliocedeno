import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-28">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[.25em] text-teal-700">
            Travel, beautifully curated
          </p>
          <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">
            Go somewhere that changes you.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Discover meaningful experiences, local stories, and unforgettable moments around the
            world.
          </p>
          <Link
            href="/experiences"
            className="mt-9 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-teal-700"
          >
            Explore experiences <span className="ml-3">→</span>
          </Link>
        </div>
        <div className="relative h-[440px] overflow-hidden rounded-[2.5rem] bg-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
            alt="A beautiful mountain landscape"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-700">
              Today&apos;s inspiration
            </p>
            <p className="mt-1 font-bold text-slate-950">The world is waiting.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="grid gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:grid-cols-3">
          <p>
            <strong className="block text-2xl text-slate-950">100</strong> handpicked experiences
          </p>
          <p>
            <strong className="block text-2xl text-slate-950">35+</strong> destinations to explore
          </p>
          <p>
            <strong className="block text-2xl text-slate-950">4.8</strong> average guest rating
          </p>
        </div>
      </section>
    </div>
  );
}
