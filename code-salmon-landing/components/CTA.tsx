// components/CTA.tsx
export default function CTA() {
  const team = [
    {
      name: 'Everett Merrill',
      role: 'Full Stack Software Engineer',
      image: '/images/everett.png',
      linkedin: 'https://www.linkedin.com/in/everett-merrill/',
      github: 'https://github.com/everettmerrill',
    },
    {
      name: 'Marin Minamiya',
      role: 'Full Stack Software Engineer',
      image: 'images/Marin.JPG',
      linkedin: 'https://www.linkedin.com/in/marin-minamiya/',
      github: 'https://github.com/minamarin',
    },
    {
      name: 'Anne Salim',
      role: 'Full Stack Software Engineer',
      image: '/images/anne.png',
      linkedin: 'https://www.linkedin.com/in/annesalim/',
      github: 'https://github.com/annesalim',
    },
    {
      name: 'Jamie Tait',
      role: 'Full Stack Software Engineer',
      image: '/images/jamie.png',
      linkedin: 'ttps://www.linkedin.com/in/jamiejtait/',
      github: 'https://github.com/jamjota',
    },
  ];

  return (
    <section className='text-white text-center py-20 px-6'>
      <h2 className='text-3xl text-salmon font-subheader font-bold mb-4'>
        Prevent Silent Assassins from Killing your API Responses!
      </h2>
      <p className='text-lg mb-12 font-subheader max-w-xl mx-auto'>
        CLI Gadget Creators:
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
       {team.map((person) => (
  <div key={person.name} className='text-center'>
    <a href={person.linkedin} target='_blank' rel='noopener noreferrer'>
      <img
        src={person.image}
        alt={person.name}
        className='w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-3 border-2 border-white hover:opacity-80 transition'
      />
    </a>
    <h3 className='text-lg font-semibold'>{person.name}</h3>
    <p className='text-sm text-white/80'>{person.role}</p>
    {person.github && (
      <a
        href={person.github}
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm text-blue-300 hover:underline'
      >
        GitHub
      </a>
    )}
  </div>
))}
      </div>
    </section>
  );
}
