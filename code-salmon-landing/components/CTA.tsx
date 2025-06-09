// components/CTA.tsx
export default function CTA() {
  const team = [
    {
      name: "Marin Minamiya",
      role: "Full Stack Software Engineer",
      image: "images/Marin.JPG",
    },
    {
      name: "Jamie Tait",
      role: "Full Stack Software Engineer",
      image: "/images/alex.jpeg",
    },
    {
      name: "Everett Merril",
      role: "Full Stack Software Engineer",
      image: "/images/sarah.jpeg",
    },
    {
      name: "Anne Salim",
      role: "Full Stack Software Engineer",
      image: "/images/david.jpeg",
    },
  ];

  return (
    <section className="bg-black text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-4">Ready to Stop Silent Failures?</h2>
      <p className="text-lg mb-12 max-w-xl mx-auto">
        Explore the people behind the product and reach out.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((person) => (
          <div key={person.name} className="text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-3 border-2 border-white"
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-sm text-white/80">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}