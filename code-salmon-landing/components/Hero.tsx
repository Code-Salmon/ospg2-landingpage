export default function Hero() {
  return (
<section className="text-text text-center py-12 px-6">
  <h1 className="text-5xl font-extrabold mb-4 text-salmon">CODE SALMON</h1>
  <p className="text-xl mb-6 max-w-2xl mx-auto">
    Investigate contract drift before it escapes into production.
  </p>
  <div className="flex justify-center gap-4">
    <a
      href="/documentation"
      className="bg-salmon text-white px-6 py-3 rounded-lg font-semibold hover:text-highlight transition"
    >
      Documentation
    </a>
    <a
      href="#"
      className="border border-border px-6 py-3 rounded-lg font-semibold hover:text-highlight transition"
    >
      GitHub Repo
    </a>
  </div>
</section>
  );
}
