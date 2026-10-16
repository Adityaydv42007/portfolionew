import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Briefcase, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  Users,
  Compass,
  Lightbulb,
  BarChart3,
  GraduationCap,
  FileSpreadsheet,
  Palette,
  Bot,
  Calculator,
  Megaphone,
  Receipt,
  Settings
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map skill names to icons for refined visual polish
  const getSkillIcon = (name: string) => {
    if (name.includes('Communication')) return MessageSquare;
    if (name.includes('Teamwork')) return Users;
    if (name.includes('Adaptability')) return Compass;
    if (name.includes('Problem-Solving')) return Lightbulb;
    if (name.includes('Analytical')) return BarChart3;
    if (name.includes('Learning')) return GraduationCap;
    if (name.includes('Excel')) return FileSpreadsheet;
    if (name.includes('Canva')) return Palette;
    if (name.includes('AI')) return Bot;
    if (name.includes('Tally')) return Calculator;
    if (name.includes('Marketing')) return Megaphone;
    if (name.includes('Accounting')) return Receipt;
    if (name.includes('Operations')) return Settings;
    return Briefcase;
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-3">
              SKILLS & EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A balanced toolkit for business growth.
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Categorized by applied competencies, certified software tools, and ongoing academic learning.
              No arbitrary percentage meters—only authentic capabilities.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto self-start md:self-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-sky-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-sky-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {category.skills.length} competencies
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = getSkillIcon(skill.name);
                  return (
                    <div
                      key={skill.name}
                      className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-500/40 transition-all shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-medium text-slate-400 text-right">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-base font-semibold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed mt-2">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-slate-800/50 flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Resume Verified Credential</span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
