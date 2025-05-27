const features = [
  {
    title: "Schema Drift Detection",
    desc: "Deep structural diffing of API responses — no OpenAPI spec needed.",
  },
  {
    title: "AI Contract Analysis",
    desc: "LLM-backed logic validation of real-world API calls in your code.",
  },
  {
    title: "Git-aware Scanning",
    desc: "Only check what's changed — integrated with your existing PR flow.",
  },
];

export default function Features() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-salmon">What Code Salmon Does</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="border p-6 rounded-xl shadow-sm hover:shadow-md transition border-gray-200 hover:border-salmon">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}