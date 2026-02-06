"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Bot, Target, Clock, Zap } from "lucide-react";

const agencyCards = [
    {
        icon: <Bot className="size-4 text-emerald-300" />,
        title: "Autonomous Agents",
        description: "Prospecting while you sleep",
        date: "Active now",
        iconClassName: "text-emerald-500",
        titleClassName: "text-emerald-500",
        className:
            "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-slate-900 border-slate-700",
    },
    {
        icon: <Target className="size-4 text-sky-300" />,
        title: "Precision Targeting",
        description: "Identify high-intent leads",
        date: "98% Accuracy",
        iconClassName: "text-sky-500",
        titleClassName: "text-sky-500",
        className:
            "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 bg-slate-800 border-slate-600",
    },
    {
        icon: <Clock className="size-4 text-amber-300" />,
        title: "24/7 Outreach",
        description: "Never miss an opportunity",
        date: "Always On",
        iconClassName: "text-amber-500",
        titleClassName: "text-amber-500",
        className:
            "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 bg-slate-950 border-slate-800",
    },
];

export function AgencyCards() {
    return (
        <div className="flex min-h-[500px] w-full items-center justify-center py-36 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-3xl relative z-10 flex flex-col items-center gap-28">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold text-xs tracking-wide uppercase">
                        <Zap className="w-3 h-3 text-amber-500" />
                        Nexus Technology
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Built for <span className="text-cta">Hyper-Growth</span>
                    </h2>
                    <p className="text-slate-600 max-w-lg mx-auto">
                        Our proprietary card stack technology allows you to visualize your dashboard workflow in real-time.
                    </p>
                </div>

                <DisplayCards cards={agencyCards} />
            </div>
        </div>
    );
}
