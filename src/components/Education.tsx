import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, School, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/30 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Formal educational foundations and ongoing undergraduate study. Grounded directly in verified academic records.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl">
          {/* Vertical spine */}
          <div className="absolute left-4 sm:left-7 top-4 bottom-4 w-px bg-slate-800" />

          <div className="space-y-10">
            {EDUCATION_LIST.map((edu, index) => {
              const isFirst = index === 0;
              return (
                <div key={edu.degree} className="relative flex items-start gap-6 sm:gap-10">
                  
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-9 h-9 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border ${
                    isFirst 
                      ? 'bg-sky-950/90 border-sky-400 text-sky-400 shadow-md shadow-sky-500/20' 
                      : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                    {isFirst ? (
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <School className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-colors">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                          {edu.status}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-1">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{edu.timeline}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{edu.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800/80">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Program Highlights & Academic Focus
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-sky-400/80 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
