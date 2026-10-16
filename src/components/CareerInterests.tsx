import React from 'react';
import { CAREER_INTERESTS } from '../data/portfolioData';
import { 
  Megaphone, 
  TrendingUp, 
  PhoneCall, 
  LineChart, 
  DollarSign, 
  Users2, 
  Cog, 
  ArrowUpRight 
} from 'lucide-react';

export const CareerInterests: React.FC = () => {
  const getInterestIcon = (title: string) => {
    if (title.includes('Digital Marketing')) return Megaphone;
    if (title.includes('Marketing Strategy')) return TrendingUp;
    if (title.includes('Sales')) return PhoneCall;
    if (title.includes('Business Development')) return LineChart;
    if (title.includes('Finance')) return DollarSign;
    if (title.includes('Management')) return Users2;
    if (title.includes('Operations')) return Cog;
    return TrendingUp;
  };

  return (
    <section id="career-interests" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            TARGET ROLES & ASPIRATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Interests & Opportunity Fit
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Where my skills, academic focus, and enthusiasm converge. Actively seeking internship,
            part-time, remote, or entry-level opportunities across these domains.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_INTERESTS.map((interest) => {
            const Icon = getInterestIcon(interest.title);
            return (
              <div
                key={interest.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-500/40 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5 mb-4">
                    {interest.description}
                  </p>

                </div>

                {/* Relevance / Background Basis */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                    Academic & Training Grounding
                  </span>
                  <p className="text-xs text-slate-400 leading-normal">
                    {interest.relevance}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Opportunity Match Banner */}
        <div className="mt-12 bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 border border-sky-900/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Hiring for an Internship or Junior Business Role?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              I bring energy, strong work ethic, rapid learning ability, and a grounded foundation in management and modern tools.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-md shadow-sky-500/20 whitespace-nowrap self-start sm:self-auto shrink-0"
          >
            <span>Discuss Opportunities</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
