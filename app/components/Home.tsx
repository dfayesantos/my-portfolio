import React from 'react';
import chicagoBackdropHome from '../images/Bean backdrop home photo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text column */}
        <div className="text-center md:text-left order-1 md:order-none">
          <h1 className="text-6xl md:text-8xl tracking-tight text-slate-900">DIANNE<br/>SANTOS</h1>
            <h2 className="mt-4 flex items-center justify-center md:justify-start text-lg md:text-2xl font-semibold text-slate-700">
              <span className="flex-none text-5xl md:text-6xl leading-none mr-3 md:mr-4" style={{ color: '#D3A877' }}>*</span>
              <span className="leading-tight">Chicago Based Software Engineer</span>
            </h2>
        </div>
        {/* Text column */}
        <div className="flex items-center justify-center order-2 md:order-none">
          <Image src={chicagoBackdropHome} alt="Chicago Bean Backdrop" width={800} height={900} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
