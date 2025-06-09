// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-salmon text-white text-center py-24 px-6">
      <h1 className="text-5xl font-extrabold mb-4">Meet Code Salmon 🐟</h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Automatically flag REST API contract drift — before bugs hit production.
      </p>
      <div className="flex justify-center gap-4">
       <Link
  href="/documentation"
  className="bg-white text-salmon px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition"
>
  Documentation
</Link>
        <a
          href="#"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-salmon transition"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}

