import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="text-3xl font-extrabold tracking-tighter text-white">
            NEXUS<span className="text-indigo-500">AI</span>
          </div>
          <p className="max-w-sm leading-relaxed text-sm">
            Based in the nexus of logic and growth. We deploy custom AI architectures to solve the hardest problem in business: consistent lead flow.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#cases" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#book" className="hover:text-white transition-colors">Book Call</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-xs gap-4">
        <p>&copy; 2024 Nexus AI Solutions. All rights reserved. Designed for scale.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};