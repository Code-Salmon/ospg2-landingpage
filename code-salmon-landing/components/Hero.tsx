export default function Hero() {
  return (
    <section
  className="text-text text-center py-24 px-6 font-detective"
  style={{
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h1 className="text-5xl font-extrabold mb-4 text-salmon">Meet Code Salmon 🕵️‍♀️</h1>
  <p className="text-xl mb-6 max-w-2xl mx-auto">
    Investigate contract drift before it escapes into production.
  </p>
  <div className="flex justify-center gap-4">
    <a
      href="/documentation"
      className="bg-salmon text-white px-6 py-3 rounded-lg font-semibold hover:bg-highlight transition"
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
