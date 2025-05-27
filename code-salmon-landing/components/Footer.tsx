export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-10 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Code Salmon. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="underline mx-2">GitHub</a>
        <a href="#" className="underline mx-2">Contact</a>
        <a href="#" className="underline mx-2">Privacy</a>
      </div>
    </footer>
  );
}
