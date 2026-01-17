"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTrendingMovies } from "@/lib/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";

type Movie = {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  trending: boolean;
};

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const data = await getTrendingMovies();
      setMovies(data);
      setLoading(false);
    }
    loadMovies();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white/90 md:text-5xl">
            All Movies
          </h1>
          <p className="mt-2 text-white/60">
            Watch your favorite movies and shows.
          </p>
        </div>

        {loading ? (
          <p className="text-white/60">Loading movies...</p>
        ) : movies.length === 0 ? (
          <p className="text-white/60">No movies available.</p>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition cursor-pointer"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={movie.posterUrl}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-sm font-bold text-white">{movie.title}</h3>
                  <p className="text-xs text-white/70">{movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
