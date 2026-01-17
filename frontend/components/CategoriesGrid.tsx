"use client";

import { useEffect, useState } from "react";
import { Category, getCategories } from "@/lib/firestore";

export default function CategoriesGrid() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-24">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-xl font-bold text-white/90 md:text-2xl">
          Browse Categories
        </h2>
        <p className="text-sm text-white/50">Discover your vibe</p>
      </div>

      {loading ? (
        <p className="text-sm text-white/60">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
            >
              <p className="text-base font-semibold text-white/90">
                {cat.name}
              </p>
              <p className="mt-1 text-xs text-white/60">{cat.countText}</p>

              <div className="mt-4 h-[2px] w-10 rounded-full bg-[var(--accent)] opacity-40 transition group-hover:opacity-90" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
