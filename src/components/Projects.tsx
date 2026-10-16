import React, { useState } from 'react';
import { PROJECT_CONCEPTS } from '../data/portfolioData';
import { ProjectConcept } from '../types/portfolio';
import { 
  Megaphone, 
  BarChart4, 
  FileSearch, 
  Clock, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  ListChecks, 
  Sparkles,
  Layers
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<ProjectConcept | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'digital-marketing-plan':
        return Megaphone;
      case 'financial-dashboard':
        return BarChart4;
      case 'business-case-study':
        return FileSearch;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/30 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
            PROJECT SHOWCASE · IDEAS TO BUILD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proposed Frameworks & Concepts
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            As an ambitious BBA student, I believe in structured problem-solving. Below are three conceptual
            project frameworks currently in development, showcasing how I approach business strategy,
            financial modeling, and digital acquisition.
          </p>
        </div>

        {/* Status Callout Banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start sm:items-center gap-3 text-xs text-slate-400">
          <span className="p-1 rounded bg-sky-950 text-sky-400 border border-sky-800/60 shrink-0">
            <Clock className="w-4 h-4" />
          </span>
          <p>
            <strong className="text-slate-200">Recruiter Notice:</strong> In adherence to academic integrity, these project concepts represent active frameworks in progress rather than verified client engagements. Real outputs will replace these as milestones are reached.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECT_CONCEPTS.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
              >
                <div>
                  
                  {/* Top Bar: Icon & Status */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-950/50 text-amber-300 border border-amber-800/40">
                      <Clock className="w-3 h-3" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Objective */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Target Objective
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Skills Demonstrated */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Skills Demonstrated
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.demonstratedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveConcept(project)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Methodology Framework</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Methodology Detail Modal */}
      {activeConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setActiveConcept(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50">
                {activeConcept.status}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Concept Architecture
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
              {activeConcept.title}
            </h3>
            <p className="text-sm text-sky-400 mb-6 font-medium">
              {activeConcept.tagline}
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Project Objective
                </h4>
                <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {activeConcept.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Step-by-Step Execution Framework
                </h4>
                <div className="space-y-2.5">
                  {activeConcept.framework.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Planned Deliverables & Assets
                </h4>
                <div className="space-y-2">
                  {activeConcept.plannedOutputs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                      <ListChecks className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveConcept(null)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
              >
                Close Framework
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
