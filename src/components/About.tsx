import React from 'react';
import { ABOUT_CARDS, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Compass, Wrench, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const cardIcons = [
    GraduationCap,
    Compass,
    Wrench,
    Target
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            A curious mind. A business-focused approach.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a Bachelor of Business Administration (BBA) undergraduate at Allenhouse Business School,
            dedicated to understanding the practical engines that power sustainable business enterprises.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              My academic journey is anchored in curiosity: how do organizations design value propositions,
              navigate competitive marketplaces, coordinate supply chains, and translate financial numbers
              into smart strategic decisions?
            </p>
            <p>
              Rather than confining myself to abstract classroom theory, I prioritize hands-on skill acquisition.
              I am actively learning <strong className="text-white font-semibold">Financial Accounting & Tally</strong> at VCEC Tally Academy,
              studying <strong className="text-white font-semibold">Digital Marketing fundamentals</strong> through specialized training at Allenhouse,
              and sharpening spreadsheet modeling through formal <strong className="text-white font-semibold">MS Excel training</strong>.
            </p>
            <p>
              Additionally, having earned IBM SkillsBuild certification in <strong className="text-white font-semibold">AI Fundamentals</strong>,
              I actively explore how artificial intelligence and workflow automation can assist in modern market research,
              data structuring, and operational productivity.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Active Learner</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Kanpur, UP</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Open to Relocation / Remote</span>
              </span>
            </div>
          </div>

          {/* Quick Context Summary Box */}
          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4 tracking-tight flex items-center justify-between">
              <span>Candidate Snapshot</span>
              <span className="text-xs font-mono text-sky-400">Allenhouse '28</span>
            </h3>

            <dl className="space-y-4 text-sm">
              <div className="flex flex-col border-b border-slate-800/80 pb-3">
                <dt className="text-slate-400 text-xs">Full Name</dt>
                <dd className="font-semibold text-slate-100 mt-0.5">{PERSONAL_INFO.name}</dd>
              </div>

              <div className="flex flex-col border-b border-slate-800/80 pb-3">
                <dt className="text-slate-400 text-xs">Undergraduate Major</dt>
                <dd className="font-semibold text-slate-100 mt-0.5">Bachelor of Business Administration (BBA)</dd>
              </div>

              <div className="flex flex-col border-b border-slate-800/80 pb-3">
                <dt className="text-slate-400 text-xs">University College</dt>
                <dd className="font-semibold text-slate-100 mt-0.5">Allenhouse Business School, Kanpur</dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-slate-400 text-xs">Seeking Roles In</dt>
                <dd className="font-semibold text-sky-400 mt-0.5">Marketing, Sales, Finance, Business Operations & Strategy</dd>
              </div>
            </dl>
          </div>

        </div>

        {/* Four Core Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CARDS.map((card, index) => {
            const IconComponent = cardIcons[index] || Target;
            return (
              <div
                key={card.title}
                className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-sky-500/40 group-hover:text-sky-400 transition-colors text-slate-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-sky-400 tracking-wide uppercase">
                    {card.title}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-1 tracking-tight">
                    {card.subtitle}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {card.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
