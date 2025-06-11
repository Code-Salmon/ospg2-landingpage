const features = [
  {
    title: 'Schema Drift Detection',
    desc: 'Deep structural diffing of Fetch API responses: no OpenAPI spec needed. It parses your TypeScript monorepo, identifies API usage, and extracts each endpoint call.',
  },
  {
    title: 'Automated test requests & response analysis',
    desc: "For every detected API call, it sends a live test request and compares the actual response to your app's expected structure checking for missing fields, type mismatches, or structural changes.",
  },
  {
    title: 'Contract drift alerting',
    desc: 'When it finds discrepancies between expected and actual API responses, it flags them. Helping you catch upstream contract changes early and avoid runtime surprises.',
  },
];

export default function Features() {
  return (
    <section className="text-text py-20 px-6 font-body">
      <h2 className="text-3xl font-bold font-subheader text-center mb-12 text-white">
        Capabilities
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div
            key={f.title}
            className="relative bg-white text-gray-800 font-subheader border border-gray-300 p-6 rounded-md shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Red margin line (like index card) */}
            <div className="absolute top-0 bottom-0 left-10 w-[2px] bg-red-400 opacity-40 z-0" />

            {/* Horizontal ruled lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-4 right-4 h-[1px] bg-gray-200"
                  style={{ top: `${60 + i * 24}px` }} // adjust spacing here
                />
              ))}
            </div>

            {/* Card content */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}