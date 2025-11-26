import React from 'react';

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-sm bg-white/60 dark:bg-black/60 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-bold text-slate-900">DIANNE SANTOS</div>
          <nav>
            <ul className="flex gap-6 items-center text-slate-700">
              <li><a href="#home" className="hover:text-slate-900">Home</a></li>
              <li><a href="#resume" className="hover:text-slate-900">Resume</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
