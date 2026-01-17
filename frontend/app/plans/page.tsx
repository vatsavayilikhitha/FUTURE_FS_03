import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import Footer from "@/components/Footer";

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-bold text-white/90 md:text-5xl">
            Our Subscription Plans
          </h1>
          <p className="mt-2 text-white/60">
            Choose the perfect plan for your streaming needs.
          </p>
        </section>
        <PlansSection />
      </main>
      <Footer />
    </>
  );
}
