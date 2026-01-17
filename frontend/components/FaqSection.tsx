const faqs = [
  {
    q: "What is this project?",
    a: "This is a Netflix-inspired premium streaming UI rebrand built with Next.js + Tailwind, using AI tools (Durable + Adobe Firefly) for branding and layout inspiration.",
  },
  {
    q: "Can I watch on multiple devices?",
    a: "Yes. Depending on the plan, you can stream on 1 to 4 devices simultaneously.",
  },
  {
    q: "Is this an official Netflix site?",
    a: "No. This is an internship/portfolio project demonstrating full-stack web development and AI-assisted design.",
  },
  {
    q: "Will it include dynamic content?",
    a: "Yes. We will integrate Firebase/Strapi so content like movies and blogs can be managed dynamically.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white/90 md:text-2xl">FAQ</h2>
        <p className="mt-1 text-sm text-white/60">
          Quick answers to common questions.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-white/85">
              {item.q}
              <span className="float-right text-white/50 group-open:text-white">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-white/65">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
