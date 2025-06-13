// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps } : AppProps) {
  return (
<div
  className="relative min-h-screen bg-scroll bg-cover bg-top bg-center text-[#E5E5E5]"
  style={{ backgroundImage: "url('/images/hero-bbg.jpg')", 
    backgroundSize: "120%"
   }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  <div className="relative z-10">
    <Component {...pageProps} />
  </div>
</div>
  );
}