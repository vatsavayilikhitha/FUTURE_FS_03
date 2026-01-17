"use client";

import { useEffect, useState } from "react";
import { getPlans, Plan } from "@/lib/firestore";
import Link from "next/link";

export default function PlansSection() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getPlans();
      setPlans(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="plans" className="mx-auto max-w-6xl px-4 pb-16 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white/90 md:text-2xl">
          Subscription Plans
        </h2>
        <p className="mt-1 text-sm text-white/60">
          Choose a plan that fits your streaming style.
        </p>
      </div>

      {loading ? (
        <p className="text-sm text-white/60">Loading plans...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => {
            const isActive = hoveredId ? hoveredId === plan.id : plan.highlight;

            return (
                <Link
                  key={plan.id}
                  href={plan?.id ? `/checkout/${plan.id}` : "/"}
                  className={`group relative block cursor-pointer overflow-hidden rounded-3xl border p-6 transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/70 ${
                    isActive
                      ? "border-[var(--accent)] bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-[var(--accent)] hover:bg-white/10"
                  }`}
                >
                <div
                  className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-[var(--accent)]/60" />
                  <div className="absolute -inset-12 bg-[radial-gradient(circle_at_30%_0%,rgba(124,58,237,0.35),transparent_55%)]" />
                </div>
                {isActive && plan.highlight && (
                  <div className="mb-4 inline-flex rounded-full bg-[var(--accent)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    Most Popular
                  </div>
                )}

                <h3
                  className={`font-bold text-white/90 transition-all duration-300 ${
                    isActive ? "text-xl" : "text-lg"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-white/60">{plan.desc}</p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-white/60">/ month</span>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white ${
                    isActive
                      ? "bg-[var(--primary)] hover:opacity-90"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
