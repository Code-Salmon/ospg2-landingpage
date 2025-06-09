// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-10 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} <span className="text-salmon font-semibold">Code Salmon</span>. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="underline mx-2 hover:text-salmon">GitHub</a>
        <a href="#" className="underline mx-2 hover:text-salmon">Contact</a>
        <a href="#" className="underline mx-2 hover:text-salmon">Privacy</a>
      </div>
    </footer>
  );
}