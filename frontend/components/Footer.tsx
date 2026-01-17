export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-base font-bold text-white/90">Netflix Rebrand</h3>
          <p className="mt-3 text-sm text-white/60">
            A premium streaming platform redesign built using Next.js + Tailwind
            with AI branding assets.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Trending</li>
            <li>Categories</li>
            <li>Plans</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Help Center</li>
            <li>Contact</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Built With</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Durable (AI Layout)</li>
            <li>Adobe Firefly (AI Branding)</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Netflix Rebrand • Future Interns Internship Project
      </div>
    </footer>
  );
}
