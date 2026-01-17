"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleJoinNow = () => {
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

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate to home
      router.push("/");
    }
  };

  const handleNavLink = (sectionId: string) => {
    if (pathname === "/") {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with section hash
      router.push(`/#${sectionId}`);
    }
  };
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="relative h-15 w-20">
            <Image
              src="/brand/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold tracking-wide text-white/90">
            Netflix
          </span>
        </button>

        {/* Middle: Links */}
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <button onClick={handleLogoClick} className="hover:text-white cursor-pointer">
            Home
          </button>
          <button onClick={() => handleNavLink("trending")} className="hover:text-white cursor-pointer">
            Trending
          </button>
          <button onClick={() => handleNavLink("categories")} className="hover:text-white cursor-pointer">
            Categories
          </button>
          <button onClick={() => handleNavLink("plans")} className="hover:text-white cursor-pointer">
            Plans
          </button>
        </nav>

        {/* Right: CTA */}
        <button onClick={handleJoinNow} className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
          Join Now
        </button>
      </div>
    </header>
  );
}
