const features = [
  {
    title: 'Operation: Drift Recon',
    desc: 'Our scanner doesn’t wait for permission. It goes undercover in your TypeScript monorepo, tails every API call, and uncovers structural drifts that others miss.',
  },
  {
    title: 'Response Decoding',
    desc: "Think of it as wiretapping for your endpoints. For each API call we detect, we run a live trace and interrogate the response against your app’s schema. Silent Assassins are exposed and must await trial for their crimes.",
  },
  {
    title: 'Intel Breach Detection',
    desc: 'We keep a close tail on every contract. If the response strays from the script, our scanners light up and drop an alert. No bad actors reach production on our watch.',
  },
];

export default function Features() {
  return (
    <section className="text-text py-20 px-6 font-body">
      <h2 className="text-3xl font-bold font-subheader text-center mb-12 text-white">
        Spec Ops Toolkit
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div
            key={f.title}
            className="relative bg-white text-gray-800 pl-12 font-subheader border border-gray-300 p-6 shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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