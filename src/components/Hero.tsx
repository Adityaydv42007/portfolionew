import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/aditya_profile.jpg';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Briefcase, 
  TrendingUp, 
  FileSpreadsheet, 
  Target, 
  Compass, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Introductory text (Zero-pill text styling) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>BBA STUDENT</span>
              <span aria-hidden="true" className="text-slate-600">|</span>
              <span>BUSINESS & DIGITAL SKILLS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-indigo-300">Aditya Yadav</span>.
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug text-balance">
              Building my future at the intersection of Business, Marketing & Finance.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I'm a Business Administration student developing practical skills in digital marketing,
              financial accounting, business operations, and data-driven problem-solving.
              I'm eager to learn, collaborate, and contribute to meaningful business projects.
            </p>

            {/* Primary, Secondary & Subtle Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Action */}
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Explore My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Action: Download Resume */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="Aditya_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:border-slate-600 hover:-translate-y-0.5 whitespace-nowrap shadow-sm"
                title="Download Official Resume PDF"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              {/* Subtle Action: Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* In-app preview prompt */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Want to read the credentials directly?{' '}
                <button
                  onClick={onOpenResume}
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2 font-medium cursor-pointer"
                >
                  Preview ATS Resume View
                </button>
              </span>
            </div>

          </div>

          {/* Right Column: Professional Portrait & Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient geometric frame */}
            <div className="relative w-full max-w-[390px] rounded-3xl p-1 bg-gradient-to-b from-sky-500/20 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-black/80">
              
              <div className="w-full rounded-[22px] bg-slate-950/90 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden flex flex-col">
                
                {/* Photo frame with graceful gradient lighting */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Aditya Yadav - BBA Student, Allenhouse Business School"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback to public profile if needed
                      (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}profile.jpg`;
                    }}
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                  {/* Bottom Nameplate Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                        Available for Internships
                      </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-white tracking-tight">
                      Aditya Yadav
                    </h2>
                    <p className="text-xs text-sky-400 font-medium">
                      BBA Student · Allenhouse Business School
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Kanpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Floating focus cards (Business, Marketing, Finance, Analytics) */}
                <div className="absolute -top-3 -left-3 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl backdrop-blur-md z-20">
                  <Briefcase className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Business Mgmt</span>
                </div>

                <div className="absolute top-12 -right-3 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl backdrop-blur-md z-20">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Digital Mktg</span>
                </div>

                <div className="absolute top-1/2 -left-3 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl backdrop-blur-md z-20">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Finance & Tally</span>
                </div>

                <div className="absolute top-2/3 -right-3 bg-slate-900/95 border border-slate-700/80 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl backdrop-blur-md z-20">
                  <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Operations</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 4-Item Quick-Glance Indicator Strip below the Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Degree Enrollment</span>
            <span className="text-base sm:text-lg font-bold text-white">BBA (2025–2028)</span>
            <span className="text-xs text-slate-400">Allenhouse Business School</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Skills & Certifications</span>
            <span className="text-base sm:text-lg font-bold text-white">4 Specialized Programs</span>
            <span className="text-xs text-slate-400">Excel, Tally, Digital Mktg & AI</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Target Focus</span>
            <span className="text-base sm:text-lg font-bold text-white">Marketing, Finance & Ops</span>
            <span className="text-xs text-slate-400">Business Analysis & Strategy</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Availability</span>
            <span className="text-base sm:text-lg font-bold text-sky-400">Open for Opportunities</span>
            <span className="text-xs text-slate-400">Internships, Part-Time & Remote</span>
          </div>
        </div>

      </div>
    </section>
  );
};
