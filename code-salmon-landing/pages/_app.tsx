// pages/_app.tsx
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
<div
  className="relative min-h-screen bg-fixed bg-cover bg-center text-[#E5E5E5]"
  style={{ backgroundImage: "url('/images/hero-bbg.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  <div className="relative z-10">
    <Component {...pageProps} />
  </div>
</div>
  );
}