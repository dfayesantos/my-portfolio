"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/santoslogo.png";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F5EF]">
      {/* OUTER BAR: full width */}
      <div className="w-full">
        {/* INNER WRAPPER: max-width but flex left->right */}
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center">

          {/* LEFT: logo */}
          <a href="#home" aria-label="Go to home" className="flex items-center">
            <Image src={logo} alt="Logo" width={180} height={48} />
          </a>

          {/* RIGHT GROUP — ml-auto forces far right */}
          <div className="ml-auto flex items-center gap-6">

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-slate-700">
                <li><a href="#home" className="hover:text-black">HOME</a></li>
                <li><a href="#resume" className="hover:text-black">RESUME</a></li>
                <li><a href="#contact" className="hover:text-black">CONTACT</a></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen((prev) => !prev)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                {open ? (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown */}
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
