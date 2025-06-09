const features = [
  {
    title: 'Schema Drift Detection',
    desc: 'Deep structural diffing of Fetch API responses — no OpenAPI spec needed. It parses your TypeScript monorepo, identifies API usage, and extracts each endpoint call.',
  },
  {
    title: 'Automated test requests & response analysis',
    desc: "For every detected API call, it sends a live test request and compares the actual response to your app's expected structure -checking for missing fields, type mismatches, or structural changes.",
  },
  {
    title: 'Contract drift alerting',
    desc: 'When it finds discrepancies between expected and actual API responses, it flags them—helping you catch upstream contract changes early and avoid runtime surprises.',
  },
];

export default function Features() {
  return (
    <section className='text-text py-20 px-6 font-detective'>
      <h2 className='text-3xl font-bold text-center mb-12 text-white'>
        Capabilities
      </h2>
      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {features.map((f) => (
          <div
            key={f.title}
            className='relative text-white border border-border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105'
            style={{ backgroundColor: 'rgba(255, 107, 107, 0.85)' }}
          >
            <div className='relative z-10 text-center'>
              <h3 className='text-xl font-semibold mb-2 text-background'>
                {f.title}
              </h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
