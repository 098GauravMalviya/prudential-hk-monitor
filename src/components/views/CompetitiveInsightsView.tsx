import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  AlertOctagon,
  ShieldCheck,
  Compass,
  ArrowRight,
  ExternalLink,
  Target,
  CheckCircle,
  HelpCircle,
  Layers,
  ChevronRight,
  BarChart3,
  Calendar,
  Zap,
} from 'lucide-react';
import { FilterState, BrandId } from '../../types';
import {
  CROSS_MODULE_SYNTHESIS,
  PRUDENTIAL_SWOT,
  STRATEGIC_ACTION_ROADMAP,
  EXECUTIVE_INSIGHTS,
  COMPANIES,
} from '../../data/intelligenceService';

interface CompetitiveInsightsViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const CompetitiveInsightsView: React.FC<CompetitiveInsightsViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [activeTab, setActiveTab] = useState<'synthesis' | 'swot' | 'roadmap' | 'findings'>('synthesis');
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>('all');

  const filteredSynthesis = CROSS_MODULE_SYNTHESIS.filter((item) => {
    if (selectedCompetitor !== 'all' && item.competitor !== selectedCompetitor) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Module 6 Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800">
              MODULE 6 (ANALYTICAL SYNTHESIS)
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Competitive Insights & Strategic Recommendations
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Cross-module analytical synthesis across Modules 1–5 evaluating threats, market gaps, and actionable recommendations through Prudential’s lens.
          </p>
        </div>

        {/* Sub-view Navigation Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('synthesis')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              activeTab === 'synthesis'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cross-Module Synthesis
          </button>
          <button
            onClick={() => setActiveTab('swot')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              activeTab === 'swot'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Prudential SWOT
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Action Roadmap
          </button>
          <button
            onClick={() => setActiveTab('findings')}
            className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
              activeTab === 'findings'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Section 11.4 Chains
          </button>
        </div>
      </div>

      {/* 1. CROSS-MODULE CONVERGENCE SYNTHESIS */}
      {activeTab === 'synthesis' && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Cross-Module Strategic Convergence (Modules 1–5 Synthesis)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Connecting isolated announcements, campaigns, product riders, app updates, and hiring into macro competitor movements
              </p>
            </div>

            {/* Filter by competitor */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-500">Filter Thrust:</span>
              <select
                value={selectedCompetitor}
                onChange={(e) => setSelectedCompetitor(e.target.value)}
                className="bg-white border border-slate-300 rounded px-2.5 py-1 text-slate-800 font-medium"
              >
                <option value="all">All Competitors</option>
                <option value="aia">AIA Hong Kong</option>
                <option value="axa">AXA Hong Kong</option>
                <option value="manulife">Manulife Hong Kong</option>
                <option value="prudential">Prudential Hong Kong (Ref)</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredSynthesis.map((synth) => {
              const comp = COMPANIES[synth.competitor];
              return (
                <div
                  key={synth.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden"
                >
                  {/* Synthesis Banner */}
                  <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: comp.accentColor }}
                      />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {comp.name} Strategic Thrust
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {synth.strategicThrustTitle}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                          synth.threatLevel === 'High'
                            ? 'bg-rose-500 text-white'
                            : synth.threatLevel === 'Medium'
                            ? 'bg-amber-500 text-white'
                            : 'bg-emerald-500 text-white'
                        }`}
                      >
                        Threat to Prudential: {synth.threatLevel}
                      </span>
                    </div>
                  </div>

                  {/* 5-Module Convergence Grid */}
                  <div className="p-5 space-y-4">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Evidence Convergence Across Modules 1 to 5:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                      {/* M1 */}
                      <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-200/60 space-y-1">
                        <span className="text-[10px] font-bold text-blue-900 uppercase">M1: Activity</span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {synth.convergingModules.m1Activity}
                        </p>
                      </div>

                      {/* M2 */}
                      <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-200/60 space-y-1">
                        <span className="text-[10px] font-bold text-purple-900 uppercase">M2: Campaign</span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {synth.convergingModules.m2Campaign}
                        </p>
                      </div>

                      {/* M3 */}
                      <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60 space-y-1">
                        <span className="text-[10px] font-bold text-amber-900 uppercase">M3: Product</span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {synth.convergingModules.m3Product}
                        </p>
                      </div>

                      {/* M4 */}
                      <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200/60 space-y-1">
                        <span className="text-[10px] font-bold text-emerald-900 uppercase">M4: Digital</span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {synth.convergingModules.m4Digital}
                        </p>
                      </div>

                      {/* M5 */}
                      <div className="p-3 bg-indigo-50/60 rounded-lg border border-indigo-200/60 space-y-1">
                        <span className="text-[10px] font-bold text-indigo-900 uppercase">M5: Distribution</span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {synth.convergingModules.m5Distribution}
                        </p>
                      </div>
                    </div>

                    {/* Interpretation & Recommended Counter-Strategy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                        <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">
                          Strategic Intent Interpretation:
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {synth.strategicIntentInterpretation}
                        </p>
                      </div>

                      <div className="p-3.5 bg-red-50/70 rounded-lg border border-red-200/80 space-y-1 text-xs">
                        <span className="font-bold text-red-950 text-[11px] uppercase tracking-wide flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-red-600" />
                          Recommended Counter-Strategy for Prudential:
                        </span>
                        <p className="text-red-900 font-medium leading-relaxed">
                          {synth.prudentialCounterStrategy}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 text-[11px]">
                        Corroborating Evidence: {synth.supportingEvidenceIds.join(', ')}
                      </span>
                      <button
                        onClick={() => onOpenEvidence(synth.supportingEvidenceIds[0])}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
                      >
                        <span>Inspect Primary Evidence</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. PRUDENTIAL STRATEGIC SWOT MATRIX */}
      {activeTab === 'swot' && (
        <div className="space-y-4">
          <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Prudential Hong Kong Strategic SWOT Analysis
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Evidence-grounded strengths, competitive weaknesses, emerging opportunities, and competitor threats
              </p>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-red-100 text-red-800">
              Reference Brand Perspective
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* STRENGTHS */}
            <div className="bg-white rounded-xl border border-emerald-200 shadow-xs overflow-hidden">
              <div className="p-3.5 bg-emerald-600 text-white flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Strengths (Prudential HK Moats)
                </span>
                <span className="text-[11px] font-mono bg-emerald-700/80 px-2 py-0.5 rounded">
                  {PRUDENTIAL_SWOT.strengths.length} Core Moats
                </span>
              </div>
              <div className="p-4 space-y-3">
                {PRUDENTIAL_SWOT.strengths.map((s) => (
                  <div key={s.id} className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-950">{s.title}</span>
                      <button
                        onClick={() => onOpenEvidence(s.evidenceRef)}
                        className="text-[10px] text-emerald-700 hover:underline flex items-center gap-0.5"
                      >
                        <span>{s.evidenceRef}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">{s.description}</p>
                    <p className="text-emerald-800 font-medium text-[11px] pt-1">
                      <strong>Action:</strong> {s.actionableStep}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WEAKNESSES / COMPETITIVE GAPS */}
            <div className="bg-white rounded-xl border border-rose-200 shadow-xs overflow-hidden">
              <div className="p-3.5 bg-rose-600 text-white flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4" />
                  Weaknesses (Competitive Vulnerabilities)
                </span>
                <span className="text-[11px] font-mono bg-rose-700/80 px-2 py-0.5 rounded">
                  {PRUDENTIAL_SWOT.weaknesses.length} Gap Areas
                </span>
              </div>
              <div className="p-4 space-y-3">
                {PRUDENTIAL_SWOT.weaknesses.map((w) => (
                  <div key={w.id} className="p-3 bg-rose-50/50 rounded-lg border border-rose-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-950">{w.title}</span>
                      <button
                        onClick={() => onOpenEvidence(w.evidenceRef)}
                        className="text-[10px] text-rose-700 hover:underline flex items-center gap-0.5"
                      >
                        <span>{w.evidenceRef}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">{w.description}</p>
                    <p className="text-rose-800 font-medium text-[11px] pt-1">
                      <strong>Prudential Fix:</strong> {w.actionableStep}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* OPPORTUNITIES */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-xs overflow-hidden">
              <div className="p-3.5 bg-blue-600 text-white flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Opportunities (Growth Vectors)
                </span>
                <span className="text-[11px] font-mono bg-blue-700/80 px-2 py-0.5 rounded">
                  {PRUDENTIAL_SWOT.opportunities.length} Initiatives
                </span>
              </div>
              <div className="p-4 space-y-3">
                {PRUDENTIAL_SWOT.opportunities.map((o) => (
                  <div key={o.id} className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-950">{o.title}</span>
                      <button
                        onClick={() => onOpenEvidence(o.evidenceRef)}
                        className="text-[10px] text-blue-700 hover:underline flex items-center gap-0.5"
                      >
                        <span>{o.evidenceRef}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">{o.description}</p>
                    <p className="text-blue-800 font-medium text-[11px] pt-1">
                      <strong>Next Step:</strong> {o.actionableStep}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* THREATS */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-xs overflow-hidden">
              <div className="p-3.5 bg-amber-600 text-white flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Threats (Competitor Offensives)
                </span>
                <span className="text-[11px] font-mono bg-amber-700/80 px-2 py-0.5 rounded">
                  {PRUDENTIAL_SWOT.threats.length} Market Threats
                </span>
              </div>
              <div className="p-4 space-y-3">
                {PRUDENTIAL_SWOT.threats.map((t) => (
                  <div key={t.id} className="p-3 bg-amber-50/50 rounded-lg border border-amber-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-950">{t.title}</span>
                      <button
                        onClick={() => onOpenEvidence(t.evidenceRef)}
                        className="text-[10px] text-amber-700 hover:underline flex items-center gap-0.5"
                      >
                        <span>{t.evidenceRef}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <p className="text-slate-600 text-[11px]">{t.description}</p>
                    <p className="text-amber-900 font-medium text-[11px] pt-1">
                      <strong>Mitigation:</strong> {t.actionableStep}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. STRATEGIC ACTION ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Prudential Strategic Action Priority Roadmap
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Phased recommendations mapped to Product, Digital, and Distribution divisions
            </p>
          </div>

          <div className="space-y-4">
            {STRATEGIC_ACTION_ROADMAP.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="font-extrabold text-sm text-slate-900">{phase.phase}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${phase.badgeColor}`}>
                    {phase.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {phase.actions.map((act, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {act.targetModule}
                        </span>
                        <p className="font-bold text-slate-900 leading-snug">{act.action}</p>
                        <p className="text-slate-600 text-[11px] leading-relaxed">{act.objective}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-semibold">
                        Owner: {act.owner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. SECTION 11.4 INSIGHT CHAINS */}
      {activeTab === 'findings' && (
        <div className="space-y-4">
          <div className="pb-2 border-b border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Complete Section 11.4 Analytical Finding Chains
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Finding → Evidence → Comparison with Prudential → Implication → Action → Sources
            </p>
          </div>

          <div className="space-y-4">
            {EXECUTIVE_INSIGHTS.map((item) => {
              const comp = COMPANIES[item.primaryCompetitor];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: comp.accentColor }}
                      />
                      <span className="font-bold text-sm text-slate-900">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                      Rank #{item.priorityRank} • {item.themeCategory}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 block text-[11px]">1. Finding & Competitor Move:</span>
                      <p className="text-slate-700">{item.finding}</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 block text-[11px]">2. Collected Evidence:</span>
                      <p className="text-slate-700">{item.evidence}</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 block text-[11px]">3. Comparison with Prudential:</span>
                      <p className="text-slate-700">{item.comparisonWithPrudential}</p>
                    </div>

                    <div className="p-3 bg-amber-50/70 rounded border border-amber-200/70 space-y-1">
                      <span className="font-bold text-amber-900 block text-[11px]">4. Implication for Prudential:</span>
                      <p className="text-amber-950 font-medium">{item.implicationForPrudential}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/80 rounded border border-emerald-200/80 text-xs space-y-1">
                    <span className="font-bold text-emerald-950 block text-[11px]">5. Recommended Action:</span>
                    <p className="text-emerald-900 font-medium">{item.recommendedAction}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Sources: {item.supportingSourceIds.join(', ')}
                    </span>
                    <button
                      onClick={() => onOpenEvidence(item.supportingSourceIds[0])}
                      className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:underline cursor-pointer"
                    >
                      <span>Verify Evidence</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
