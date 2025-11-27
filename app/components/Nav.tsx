"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../images/santoslogo.png';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#F5F5EF]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <div className="flex items-center">
            <a href="#home" aria-label="Go to home">
              <Image src={logo} alt="Dianne Santos Logo" width={180} height={48} />
            </a>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center text-slate-700 h-10">
              <li><a href="#home" className="hover:text-slate-900">HOME</a></li>
              <li><a href="#resume" className="hover:text-slate-900">RESUME</a></li>
              <li><a href="#contact" className="hover:text-slate-900">CONTACT</a></li>
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(prev => !prev)}
              className="p-2 rounded-md focus:outline-none"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu panel */}
          {open && (
            <div className="absolute right-4 top-full mt-2 w-44 bg-white border border-slate-200 rounded-md shadow-lg md:hidden">
              <ul className="flex flex-col">
                <li><a href="#home" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-slate-50">HOME</a></li>
                <li><a href="#resume" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-slate-50">RESUME</a></li>
                <li><a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-slate-50">CONTACT</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
