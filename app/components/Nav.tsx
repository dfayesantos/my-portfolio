import React from 'react';
import Image from 'next/image';
import logo from '../images/santoslogo.png';

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#F5F5EF]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={logo} alt="Dianne Santos logo" width={180} height={48} />
          </div>
          <nav>
            <ul className="flex gap-6 items-center text-slate-700 h-10">
              <li className="flex"><a href="#home" className="flex-1 flex items-center justify-center hover:text-slate-900">Home</a></li>
              <li className="flex"><a href="#resume" className="flex-1 flex items-center justify-center hover:text-slate-900">Resume</a></li>
              <li className="flex"><a href="#contact" className="flex-1 flex items-center justify-center hover:text-slate-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
