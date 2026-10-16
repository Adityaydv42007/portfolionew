import React, { useState } from 'react';
import { INDUSTRIAL_EXPOSURE } from '../data/portfolioData';
import { Factory, Truck, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import factoryImage from '../assets/images/amul_industrial_exposure_1792129162596.jpg';

export const IndustrialExposure: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const takeawayIcons = [
    Truck,
    Factory,
    ShieldCheck,
    Cpu,
    ArrowUpRight
  ];

  return (
    <section id="industrial-exposure" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            INDUSTRIAL EXPOSURE & FIELD STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Direct observational immersion in large-scale dairy production, automated distribution workflows,
            and enterprise quality control at the Amul Dairy Factory.
          </p>
        </div>

        {/* 2-Column Split: Image Visual + Takeaways */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Showcase Container */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 flex flex-col justify-between group min-h-[360px]">
              {imageLoaded ? (
                <img
                  src={factoryImage}
                  alt="Industrial Automation and Dairy Processing Facility Visit"
                  referrerPolicy="no-referrer"
                  onError={() => setImageLoaded(false)}
                  className="w-full h-full object-cover object-center absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 flex items-center justify-center p-8 text-center">
                  <Factory className="w-16 h-16 text-sky-400/50 mb-3" />
                  <p className="text-sm font-semibold text-slate-300">Amul Dairy Factory Industrial Immersion</p>
                </div>
              )}

              {/* Scrim overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Overlay Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  Field Immersion
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Amul Dairy Factory Visit
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Gujarat Cooperative Milk Marketing Federation Operations
                </p>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                  <span>Industrial Study Visit</span>
                  <span className="font-mono text-sky-400">Academic Immersion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Operational Learnings */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Operational Highlights & Key Observations
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Analyzing end-to-end operational efficiency, continuous assembly lines, and precision management:
              </p>

              <div className="space-y-4">
                {INDUSTRIAL_EXPOSURE.takeaways.map((item, idx) => {
                  const Icon = takeawayIcons[idx] || CheckCircle2;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note clarifying academic nature */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span>{INDUSTRIAL_EXPOSURE.academicNote}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
