import React from 'react';
import chicagoBackdropHome from '../images/Bean backdrop home photo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text column */}
        <div className="text-center md:text-left order-1 md:order-none">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900">DIANNE<br/>SANTOS</h1>
          <h2>Chicago Based Software Engineer</h2>
        </div>
        {/* Text column */}
        <div className="flex items-center justify-center order-2 md:order-none">
          <Image src={chicagoBackdropHome} alt="Chicago Bean Backdrop" width={400} height={300} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
