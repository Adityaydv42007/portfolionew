import React from 'react';
import { PERSONAL_INFO, EDUCATION_LIST, CERTIFICATIONS_LIST, INDUSTRIAL_EXPOSURE, WORKSHOPS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl } = useProfilePhoto();
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative my-auto">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-slate-200">
              ATS-Standard Resume Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Aditya_Yadav_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors"
              title="Direct Download"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body (Styled with high-contrast, clean ATS typography) */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-100 space-y-7 text-sm font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-700 shrink-0 bg-slate-900 shadow-sm">
                <img
                  src={photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}profile.jpg`;
                  }}
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-sky-400 mt-0.5">
                  BBA Student · Business Administration, Marketing & Finance
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Allenhouse Business School
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 text-xs text-slate-400 space-y-1 sm:text-right">
              <div>{PERSONAL_INFO.location}</div>
              <div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-300 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>{PERSONAL_INFO.phone}</div>
              <div>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>linkedin.com/in/adityayadav42007</span>
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 mb-2.5">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.shortBio} Actively pursuing specialized certifications in Financial Accounting, Digital Marketing, MS Excel, and AI Fundamentals to bridge classroom concepts with corporate execution. Seeking competitive internships, part-time opportunities, or entry-level positions where I can contribute to business operations and continuous growth.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className="font-bold text-white text-sm">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {edu.timeline}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-300 mb-1">
                    {edu.institution} · {edu.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 mt-1">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 mb-3">
              Certifications & Applied Training
            </h2>
            <div className="space-y-3">
              {CERTIFICATIONS_LIST.map((cert) => (
                <div key={cert.title} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white">
                      {cert.title} — <span className="text-slate-300">{cert.issuer}</span>
                    </span>
                    <span className="text-slate-400 font-mono text-[11px] shrink-0 ml-2">
                      {cert.status} ({cert.year})
                    </span>
                  </div>
                  <p className="text-slate-400 mt-0.5">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Exposure & Seminars */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 mb-3">
              Industrial Exposure & Campus Engagements
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-white">
                  <span>{INDUSTRIAL_EXPOSURE.title}</span>
                  <span className="text-slate-400 font-mono text-[11px]">Industrial Immersion</span>
                </div>
                <p className="text-slate-400 mt-0.5">
                  Observed large-scale dairy supply chain operations, pasteurization processing, automated robotic distribution workflows, and stringent food-safety quality control checkpoints.
                </p>
              </div>

              {WORKSHOPS_LIST.map((w) => (
                <div key={w.title}>
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{w.title} — {w.institution}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{w.type} ({w.year})</span>
                  </div>
                  <p className="text-slate-400 mt-0.5">
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1 mb-2.5">
              Core Skills & Tools
            </h2>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p>
                <strong className="text-white">Software & Digital Tools:</strong> Microsoft Excel, Canva, Tally, AI-assisted research and productivity tools.
              </p>
              <p>
                <strong className="text-white">Business Competencies:</strong> Verbal and written communication, teamwork, adaptability, critical problem-solving, analytical thinking, business operations, and financial accounting principles.
              </p>
              <p>
                <strong className="text-white">Areas of Study:</strong> Digital marketing fundamentals, brand positioning, market research, working capital, and supply chain logistics.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 rounded-b-2xl">
          <span>Grounded strictly in verified academic and training records.</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-medium cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
