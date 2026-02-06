import React, { useEffect } from 'react';

export const Booking: React.FC = () => {
  useEffect(() => {
    // Inject Calendly Script on mount to ensure widget initialization
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="book" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
          Phase 1: Discovery Call
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none">
          Let's Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
            Growth Machine.
          </span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Book a 15-minute strategy audit. We'll analyze your current pipeline and show you exactly where AI can drive 10x efficiency.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-beam p-1 shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] bg-white/5">
          <div className="bg-white rounded-[calc(1rem-4px)] overflow-hidden">
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/leleandroferrari/leandro-ferrari" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Audit Current CRM", icon: "📋" },
            { label: "Predictive Lead Mapping", icon: "🗺️" },
            { label: "Automation Roadmap", icon: "🛤️" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold tracking-wide uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};