"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();

  const handleViewPlans = () => {
    if (pathname === "/") {
      // If on home page, scroll to plans section
      const plansSection = document.getElementById("plans");
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with plans hash
      router.push("/#plans");
    }
  };

  const handleStartWatching = () => {
    router.push("/movies");
  };

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/brand/hero-bg.png"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        {/* Foreground */}
        <div className="relative p-8 md:p-14">
          <p className="text-sm font-semibold text-white/70">
            AI Rebrand • Netflix • Premium Streaming
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Binge-worthy stories.
            <span className="text-[var(--accent)]"> Instantly.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            A sleek Netflix redesign with cinematic UI, trending carousels,
            smart discovery, and modern subscription plans — built using Next.js
            and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={handleStartWatching} className="rounded-2xl bg-[var(--primary)] px-6 py-3 font-semibold text-white hover:opacity-90">
              Start Watching
            </button>
            <button onClick={handleViewPlans} className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
              View Plans
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              4K + HDR
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              Multi-device
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              Curated picks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
