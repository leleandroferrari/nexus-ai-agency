import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-emerald-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Team Workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/50 max-w-[240px]">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <span key={i} className="text-amber-500">★</span>)}
            </div>
            <p className="text-sm font-medium text-slate-800">"Nexus AI didn't just give us a tool; they gave us a competitive moat."</p>
            <p className="text-xs font-bold text-slate-400 mt-2">— Mark Thorne, CEO @ CloudNet</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Engineered for <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Precision.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded in 2023, Nexus AI was born from a simple realization: Most lead generation is noise. We decided to build the signal.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our approach blends deep linguistic psychology with autonomous AI agents. We don't spam; we spark high-value business conversations.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600">92%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Inbox Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-indigo-600">3.8x</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Avg Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};