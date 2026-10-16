import React from 'react';
import { WORKSHOPS_LIST } from '../data/portfolioData';
import { BookOpen, Presentation, Calendar, School } from 'lucide-react';

export const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            CAMPUS LEARNING & ACADEMIC ENGAGEMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Workshops & Seminars
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Participating in specialized student seminars and brand strategy sessions at Allenhouse Business School.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHOPS_LIST.map((item) => {
            const isWorkshop = item.type === 'Workshop';
            return (
              <div
                key={item.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      {isWorkshop ? (
                        <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                      ) : (
                        <Presentation className="w-3.5 h-3.5 text-indigo-400" />
                      )}
                      <span>{item.type}</span>
                    </span>

                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 mt-1 mb-3 flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.institution}</span>
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                </div>

                {/* Key Topics */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Core Topics Covered
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                    {item.keyTopics.map((topic) => (
                      <span key={topic} className="flex items-center gap-1.5">
                        <span className="text-sky-400 font-bold">·</span>
                        <span className="text-slate-300">{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
