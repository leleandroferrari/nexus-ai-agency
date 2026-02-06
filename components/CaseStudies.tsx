import React from 'react';

const PROJECTS = [
  {
    client: "Zenith SaaS",
    metric: "450% Boost",
    stat: "In Qualified Meetings",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    client: "FlowState Ecom",
    metric: "2.1M Rev",
    stat: "Attributed to AI UGC",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
  },
  {
    client: "HealthSync",
    metric: "60% Drop",
    stat: "In Cost-Per-Acquisition",
    img: "/healthsync.png"
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Battle-Tested.</h2>
        <p className="text-lg text-slate-600">Real numbers from real partnerships. No vanity metrics.</p>
      </div>

      <div className="flex gap-8 overflow-x-auto hide-scrollbar px-4 md:px-[calc(50vw-580px)] pb-10 snap-x">
        {PROJECTS.map((p, idx) => (
          <div key={idx} className="min-w-[320px] md:min-w-[450px] snap-center group">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mb-6">
              <img src={p.img} alt={p.client} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2">{p.client}</div>
                <div className="text-4xl font-black mb-1">{p.metric}</div>
                <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">{p.stat}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[320px] md:min-w-[450px] flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="text-7xl font-bold text-slate-200">?</div>
            <div className="text-xl font-bold text-slate-400">Your Success Story <br /> Starts Here</div>
            <a href="#book" className="inline-block text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-500 hover:border-indigo-500">Book Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};