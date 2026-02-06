import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div className={`
          relative flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-300
          ${isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-slate-200/50'
            : 'bg-transparent border border-transparent'}
        `}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              NEXUS<span className="text-cta">AI</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Story', 'Services', 'Case Studies'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-cta transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-4 right-4 mt-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 md:hidden flex flex-col gap-4"
        >
          {['Story', 'Services', 'Case Studies'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="w-full text-center py-3 bg-slate-900 text-white rounded-xl font-semibold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};