import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Bot, Zap, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column: Text & Form */}
        <motion.div
          className="space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-cta font-semibold text-xs tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
            </span>
            New: Agent V2.0 Live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Scale Leads <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-indigo-600">
              Without Limits.
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            The first autonomous AI agent that hunts, qualifies, and books meetings while you sleep. Stop manual outreach forever.
          </p>

          {/* Lead Magnet Form */}
          <div className="max-w-md mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-xl bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg group">
              Get Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>No credit card required</span>
            <span className="mx-2">•</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Used by 500+ agencies</span>
          </p>
        </motion.div>

        {/* Right Column: Visual/Dashboard Mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs font-medium text-slate-400 ml-2">Nexus Agent Dashboard</div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Active Campaigns</div>
                  <div className="text-2xl font-bold text-slate-900">12 Running</div>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">Lead Velocity</span>
                  <span className="text-emerald-600 font-bold">+124%</span>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[40, 60, 45, 70, 85, 60, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-slate-900 rounded-t-lg opacity-80 hover:opacity-100 hover:bg-cta transition-colors"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Activity</div>
                {[
                  { icon: Bot, text: "AI qualified 'TechCorp'", time: "2m ago" },
                  { icon: BarChart3, text: "Campaign 'SaaS Outreach' optimized", time: "15m ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <item.icon className="w-4 h-4 text-cta" />
                    </div>
                    <div className="flex-1 text-sm font-medium text-slate-700">{item.text}</div>
                    <div className="text-xs text-slate-400">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Elements (Parallax feel) */}
          <motion.div
            className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Meeting Booked</div>
                <div className="text-xs text-slate-500">Just now</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};