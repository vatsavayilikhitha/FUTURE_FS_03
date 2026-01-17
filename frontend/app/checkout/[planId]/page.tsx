"use client";

import Navbar from "@/components/Navbar";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type PlanType = {
  name: string;
  price: string;
  desc: string;
  highlight?: boolean;
  features?: string[];
  order?: number;
};

export default function CheckoutPage() {
  const params = useParams();
  const planId = params?.planId as string;
  const [plan, setPlan] = useState<PlanType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!planId) {
      setLoading(false);
      setError("No plan ID provided");
      return;
    }

    async function loadPlan() {
      setLoading(true);
      setError(null);

      try {
        // IMPORTANT: collection name must match exactly in Firestore ("plans")
        const planRef = doc(db, "plans", planId);
        const snap = await getDoc(planRef);

        if (!snap.exists()) {
          setPlan(null);
        } else {
          setPlan(snap.data() as PlanType);
        }
      } catch (err: any) {
        console.error("Checkout fetch error:", err);
        setError(err?.message || "Unknown Firestore error");
        setPlan(null);
      } finally {
        setLoading(false);
      }
    }

    loadPlan();
  }, [planId]);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Error box */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            <b>Firestore Error:</b> {error}
          </div>
        )}

        {loading ? (
          <p className="text-white/60">Loading checkout...</p>
        ) : !plan ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h1 className="text-2xl font-bold text-white/90">
              Plan not found ❌
            </h1>
            <p className="mt-2 text-white/60">
              This plan does not exist in Firebase OR Firestore permissions are
              blocking access.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-white/90">
              Checkout — {plan.name} Plan
            </h1>
            <p className="mt-2 text-white/60">
              Complete your subscription securely.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Plan details */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-bold text-white/90">Plan Summary</h2>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-white/60">Plan</p>
                  <p className="text-lg font-bold text-white">{plan.name}</p>

                  <p className="mt-3 text-sm text-white/60">Price</p>
                  <p className="text-3xl font-extrabold text-white">
                    {plan.price}
                    <span className="text-base font-semibold text-white/50">
                      {" "}
                      / month
                    </span>
                  </p>

                  <p className="mt-3 text-sm text-white/60">Description</p>
                  <p className="text-sm text-white/70">{plan.desc}</p>
                </div>

                <h3 className="mt-6 text-sm font-semibold text-white/80">
                  Included Features
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {(plan.features ?? []).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment section */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-bold text-white/90">Payment</h2>
                <p className="mt-2 text-sm text-white/60">
                  (Demo UI — no real payment gateway)
                </p>

                <form className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-white/70">
                      Name on Card
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
                      placeholder="Your name here"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/70">
                      Card Number
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-white/70">
                        Expiry
                      </label>
                      <input
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/70">
                        CVV
                      </label>
                      <input
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-3 w-full rounded-2xl bg-[var(--primary)] px-6 py-3 text-sm font-bold text-white hover:opacity-90"
                  >
                    Pay Now → {plan.price}/month
                  </button>

                  <p className="text-center text-xs text-white/40">
                    By continuing, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
