import React from 'react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import { Award, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            VERIFIED CREDENTIALS & TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Applied Training
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Professional skill programs pursued alongside university coursework to build real operational capabilities.
          </p>
        </div>

        {/* 2x2 Grid of Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_LIST.map((cert) => {
            const isCompleted = cert.status === 'Completed';
            return (
              <div
                key={cert.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Status Indicator & Year */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md ${
                      isCompleted 
                        ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/50' 
                        : 'bg-sky-950/70 text-sky-400 border border-sky-800/50'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      <span>{cert.status}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 mt-1 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                </div>

                {/* Skills Gained Tags (Zero-pill discipline: unboxed subtle text or clean quiet badges) */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Competencies
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span key={skill} className="flex items-center gap-1.5">
                        <span className="text-sky-400 font-bold">·</span>
                        <span className="text-slate-300">{skill}</span>
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
