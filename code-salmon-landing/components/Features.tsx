const features = [
  {
    title: "Schema Drift Detection",
    desc: "Deep structural diffing of Fetch API responses — no OpenAPI spec needed. It parses your TypeScript monorepo, identifies API usage, and extracts each endpoint call.",
  },
  {
    title: "Automated test requests & response analysis",
    desc: "For every detected API call, it sends a live test request and compares the actual response to your app’s expected structure—checking for missing fields, type mismatches, or structural changes.",
  },
  {
    title: "Contract drift alerting",
    desc: "When it finds discrepancies between expected and actual API responses, it flags them—helping you catch upstream contract changes early and avoid runtime surprises.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-salmon">What Code Salmon Does</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
