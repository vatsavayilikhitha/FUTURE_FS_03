"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getTrendingMovies, Movie } from "@/lib/firestore";

export default function TrendingRow() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getTrendingMovies();
      setMovies(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="trending" className="mx-auto max-w-6xl px-4 pb-12 scroll-mt-24">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-bold text-white/90 md:text-2xl">
          Trending Now
        </h2>
        <p className="text-sm text-white/50">Swipe →</p>
      </div>

      {loading ? (
        <p className="text-sm text-white/60">Loading trending movies...</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {movies.map((item) => (
            <div
              key={item.id}
                className="group relative min-w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:min-w-[190px]"
            >
              <div className="relative h-[220px] sm:h-[260px]">
                <Image
                  src={item.posterUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div className="p-3">
                <p className="text-sm font-semibold text-white/90 line-clamp-1">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-white/60">{item.genre}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
