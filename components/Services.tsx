import React from 'react';
import { Mail, Video, Database, LineChart } from 'lucide-react';

const SERVICE_ITEMS = [
  {
    title: "Cold E-mail Mastery",
    desc: "Bespoke outbound campaigns that feel personal because they are—powered by fine-tuned LLMs.",
    icon: <Mail className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "AI UGC Ads",
    desc: "Generate high-converting video creative at scale using AI avatars and voice-cloning technology.",
    icon: <Video className="w-6 h-6 text-white" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Automated CRM",
    desc: "A self-healing pipeline that updates itself, qualifies leads, and triggers perfect follow-ups.",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "AI SEO Engine",
    desc: "Programmatic content strategy that dominates search intent and outpaces human competitors.",
    icon: <LineChart className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-indigo-600"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Our Expertise</div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">The Nexus <br /> Ecosystem</h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm leading-relaxed">Modular AI solutions designed to fit seamlessly into your existing growth stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_ITEMS.map((item, idx) => (
            <div key={idx} className="border-beam group hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-slate-200/40">
              <div className="p-10 h-full flex flex-col relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <div className="text-indigo-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                  Explore Automation <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};