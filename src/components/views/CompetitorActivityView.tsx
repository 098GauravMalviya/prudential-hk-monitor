import React, { useState } from 'react';
import {
  Calendar,
  ExternalLink,
  ShieldAlert,
  Tag,
  Sparkles,
  Filter,
  CheckCircle2,
  Clock,
  Building2,
  Info,
} from 'lucide-react';
import { FilterState, ActivityType, ProductCategory } from '../../types';
import { filterActivities, COMPANIES } from '../../data/intelligenceService';

interface CompetitorActivityViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const CompetitorActivityView: React.FC<CompetitorActivityViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const activities = filterActivities(filters).filter((item) => {
    if (selectedType !== 'all' && item.activityType !== selectedType) return false;
    return true;
  });

  const activityTypes: ActivityType[] = [
    'Product Launch',
    'Strategic Partnership',
    'Marketing Campaign',
    'Corporate Announcement',
    'Service Enhancement',
  ];

  return (
    <div className="space-y-6">
      {/* Module 1 Header & Quick Stats */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800">
              MODULE 1
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Competitor Activity & Strategic Moves
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Chronological monitoring of competitor launches, partnerships, regulatory milestones & corporate actions in Hong Kong.
          </p>
        </div>

        {/* Activity Type Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition cursor-pointer ${
              selectedType === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Types ({activities.length})
          </button>
          {activityTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition cursor-pointer ${
                selectedType === type
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Strategic Focus Summary Box */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50/70 border border-red-200/80 p-4 rounded-xl">
          <span className="text-xs font-bold text-red-900 block mb-1">Prudential Focus</span>
          <p className="text-xs text-red-800 leading-relaxed">
            Talent scheme healthcare (TTPS), Youth lifestyle protection, and automated cashless outpatient billing via Mastercard virtual cards.
          </p>
        </div>

        <div className="bg-rose-50/70 border border-rose-200/80 p-4 rounded-xl">
          <span className="text-xs font-bold text-rose-900 block mb-1">AIA HK Focus</span>
          <p className="text-xs text-rose-800 leading-relaxed">
            Catastrophic cancer drug affordability ($1/day), dementia-boosted retirement annuities, and AI Cohort regulatory leadership.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200/80 p-4 rounded-xl">
          <span className="text-xs font-bold text-emerald-900 block mb-1">Manulife HK Focus</span>
          <p className="text-xs text-emerald-800 leading-relaxed">
            85% Day-1 cash surrender values for premium financing, MPF rollover annuities, and SME group banking distribution.
          </p>
        </div>

        <div className="bg-blue-50/70 border border-blue-200/80 p-4 rounded-xl">
          <span className="text-xs font-bold text-blue-900 block mb-1">AXA HK Focus</span>
          <p className="text-xs text-blue-800 leading-relaxed">
            GBA Grade 3A cross-border hospitals with post-surgery TCM care, UHNW art insurance, and in-app telemedicine consultations.
          </p>
        </div>
      </div>

      {/* Chronological Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold uppercase tracking-wider">
          <span>Dated Activity Timeline ({activities.length} Events)</span>
          <span>Prudential Impact Lens</span>
        </div>

        <div className="space-y-3">
          {activities.map((act) => {
            const comp = COMPANIES[act.brand];
            return (
              <div
                key={act.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: comp.accentColor }}
                    />
                    <span className="text-xs font-extrabold text-slate-900">
                      {comp.name}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {act.activityDate}
                    </span>
                    {act.isNew && (
                      <span className="px-1.5 py-0.2 bg-red-100 text-red-700 text-[10px] font-bold rounded">
                        NEW
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {act.activityType}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {act.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        act.threatLevel === 'High'
                          ? 'bg-rose-100 text-rose-800'
                          : act.threatLevel === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Threat: {act.threatLevel}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="py-3 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Tag className="w-3.5 h-3.5 text-slate-400" />
                    <span>Strategic Theme: <strong className="text-slate-700">{act.strategicTheme}</strong></span>
                  </div>
                </div>

                {/* Prudential Relevance & Implications Callout (Section 11.1) */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-red-700 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Prudential Strategic Implication:</span>
                  </div>
                  <p className="text-slate-800 pl-5">
                    {act.prudentialRelevance}
                  </p>
                  <p className="text-slate-500 text-[11px] pl-5 mt-1">
                    <strong>HK Market Relevance:</strong> {act.hkMarketRelevance}
                  </p>
                </div>

                {/* Footer with Traceable Evidence Button */}
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    Source: {act.sourceName}
                  </span>
                  <button
                    onClick={() => onOpenEvidence(act.evidenceId)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
                  >
                    <span>Inspect Verified Evidence & Chinese Text</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
