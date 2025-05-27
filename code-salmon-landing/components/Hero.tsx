export default function Hero() {
  return (
    <section className="bg-gray-900 text-white text-center py-24 px-6">
      <h1 className="text-5xl font-bold mb-4">Meet Code Salmon 🐟</h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Automatically flag REST API contract drift — before bugs hit production.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold">
          Join the Waitlist
        </a>
        <a href="#" className="border border-white px-6 py-3 rounded text-white font-semibold">
          View GitHub
        </a>
      </div>
    </section>
  );
}