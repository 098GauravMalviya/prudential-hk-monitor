import React, { useState } from 'react';
import {
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';
import { FilterState, BrandId } from '../../types';
import {
  getKPIMetrics,
  getBrandMonthlyTrends,
  EXECUTIVE_INSIGHTS,
  COMPETITOR_ACTIVITIES,
  PRODUCT_RECORDS,
  MOBILE_APP_STATS,
  COMPANIES,
} from '../../data/intelligenceService';
import { NavTab } from '../Sidebar';

interface ExecutiveSummaryViewProps {
  filters: FilterState;
  onNavigateTab: (tab: NavTab) => void;
  onOpenEvidence: (evidenceId: string) => void;
}

export const ExecutiveSummaryView: React.FC<ExecutiveSummaryViewProps> = ({
  filters,
  onNavigateTab,
  onOpenEvidence,
}) => {
  const kpis = getKPIMetrics(filters);
  const monthlyTrends = getBrandMonthlyTrends();
  const [trendMetric, setTrendMetric] = useState<'activity' | 'share'>('activity');

  // Top 3-5 priority findings
  const priorityInsights = EXECUTIVE_INSIGHTS.slice(0, 4);

  // Latest competitor timeline preview (4 items)
  const timelinePreview = COMPETITOR_ACTIVITIES.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* 1. TOP METRICS ROW (4 WIREFRAME KPI CARDS) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Relevant developments
            </span>
            <span className="p-1.5 rounded-md bg-blue-50 text-blue-600">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {kpis.relevantDevelopments}
            </span>
            <span className="text-xs font-semibold text-emerald-600">12M Window</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Launches, partnerships & corporate actions across 4 insurers
          </p>
        </div>

        {/* KPI 2 */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Campaign posts
            </span>
            <span className="p-1.5 rounded-md bg-purple-50 text-purple-600">
              <BarChart3 className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {kpis.campaignPosts * 14}
            </span>
            <span className="text-xs font-semibold text-purple-600">Tracked Posts</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Post-level engagement across FB, IG, YouTube & LinkedIn
          </p>
        </div>

        {/* KPI 3 */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Product updates
            </span>
            <span className="p-1.5 rounded-md bg-amber-50 text-amber-600">
              <Layers className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {kpis.productUpdates * 3 + 2}
            </span>
            <span className="text-xs font-semibold text-amber-600">7 Categories</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            New VHIS, Cancer drug plans, and Annuity riders
          </p>
        </div>

        {/* KPI 4 */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Digital changes
            </span>
            <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
              <Smartphone className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {kpis.digitalChanges}
            </span>
            <span className="text-xs font-semibold text-emerald-600">App Releases</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            AIA+, Emma, Manulife & PRU app feature updates
          </p>
        </div>
      </div>

      {/* 2. MIDDLE ROW (KEY DEVELOPMENTS & TRENDS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Middle Left: Key Developments & Implications (Prudential Lens) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  Key Developments & Implications (Prudential Lens)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Evidence-backed strategic findings structured per Section 11.4
                </p>
              </div>
              <button
                onClick={() => onNavigateTab('insights-evidence')}
                className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
              >
                <span>All Findings</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="divide-y divide-slate-100 mt-3 space-y-3">
              {priorityInsights.map((insight) => {
                const comp = COMPANIES[insight.primaryCompetitor];
                return (
                  <div key={insight.id} className="pt-3 first:pt-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <span className="text-xs font-bold text-slate-900">
                          {insight.title}
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-red-50 text-red-700 border border-red-200">
                        {insight.themeCategory}
                      </span>
                    </div>

                    {/* Section 11.4 Chain: Finding -> Implication -> Recommended Action */}
                    <div className="text-xs space-y-1.5 pl-3 border-l-2 border-red-500 bg-slate-50/60 p-2.5 rounded-r">
                      <p className="text-slate-700">
                        <strong className="text-slate-900">Finding & Comparison:</strong>{' '}
                        {insight.finding}
                      </p>
                      <p className="text-slate-800">
                        <strong className="text-amber-800">Implication for Prudential:</strong>{' '}
                        {insight.implicationForPrudential}
                      </p>
                      <p className="text-emerald-900 font-medium">
                        <strong className="text-emerald-800">Recommended Action:</strong>{' '}
                        {insight.recommendedAction}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
                      <span>Sources: {insight.supportingSourceIds.join(', ')}</span>
                      <button
                        onClick={() => onOpenEvidence(insight.supportingSourceIds[0])}
                        className="inline-flex items-center gap-1 text-red-600 hover:underline font-semibold cursor-pointer"
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
        </div>

        {/* Middle Right: Competitor Activity / Engagement Trends */}
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Competitor Activity & Trends
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Brand × Month comparison (12-Month Observation)
                </p>
              </div>

              {/* Metric Toggle */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded text-[11px]">
                <button
                  onClick={() => setTrendMetric('activity')}
                  className={`px-2 py-0.5 rounded font-medium transition cursor-pointer ${
                    trendMetric === 'activity'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Activity
                </button>
                <button
                  onClick={() => setTrendMetric('share')}
                  className={`px-2 py-0.5 rounded font-medium transition cursor-pointer ${
                    trendMetric === 'share'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Market Share
                </button>
              </div>
            </div>

            {/* Visual Bar Comparison */}
            <div className="mt-4 space-y-4">
              {/* Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                {Object.values(COMPANIES).map((comp) => (
                  <div key={comp.id} className="flex items-center space-x-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: comp.accentColor }}
                    />
                    <span className="text-slate-700 font-medium">{comp.name}</span>
                  </div>
                ))}
              </div>

              {/* Monthly Activity Bars Preview */}
              <div className="space-y-3 pt-2">
                {monthlyTrends.slice(5, 10).map((row) => (
                  <div key={row.fullMonth} className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-600 font-medium">
                      <span>{row.fullMonth}</span>
                      <span className="text-slate-400 text-[11px]">Total: {row.Prudential + row.AIA + row.Manulife + row.AXA} moves</span>
                    </div>
                    {/* Stacked Mini Bar */}
                    <div className="w-full h-4 bg-slate-100 rounded-sm flex overflow-hidden">
                      <div
                        style={{
                          width: `${(row.Prudential / (row.Prudential + row.AIA + row.Manulife + row.AXA)) * 100}%`,
                          backgroundColor: COMPANIES.prudential.accentColor,
                        }}
                        title={`Prudential: ${row.Prudential}`}
                      />
                      <div
                        style={{
                          width: `${(row.AIA / (row.Prudential + row.AIA + row.Manulife + row.AXA)) * 100}%`,
                          backgroundColor: COMPANIES.aia.accentColor,
                        }}
                        title={`AIA: ${row.AIA}`}
                      />
                      <div
                        style={{
                          width: `${(row.Manulife / (row.Prudential + row.AIA + row.Manulife + row.AXA)) * 100}%`,
                          backgroundColor: COMPANIES.manulife.accentColor,
                        }}
                        title={`Manulife: ${row.Manulife}`}
                      />
                      <div
                        style={{
                          width: `${(row.AXA / (row.Prudential + row.AIA + row.Manulife + row.AXA)) * 100}%`,
                          backgroundColor: COMPANIES.axa.accentColor,
                        }}
                        title={`AXA: ${row.AXA}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Analytical Callout */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong>Peak Competition Note:</strong> Q3 2026 recorded the highest concentration of competitive moves, driven by AIA’s <em>EverBliss Annuity</em> and AXA’s <em>GBA EverGuard</em> rollouts.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => onNavigateTab('brand-campaigns')}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Brand & Campaigns</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM ROW (COMPETITOR TIMELINE & PRODUCT/DIGITAL COMPARISON) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bottom Left: Competitor Timeline Preview */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Competitor Timeline Preview
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Launches • partnerships • announcements (Drill down to URLs)
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('competitor-activity')}
              className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Full Timeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 mt-3 space-y-3">
            {timelinePreview.map((act) => {
              const comp = COMPANIES[act.brand];
              return (
                <div key={act.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: comp.accentColor }}
                      />
                      <span className="text-xs font-bold text-slate-800">{comp.name}</span>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-[11px] text-slate-500 font-medium">{act.activityDate}</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                        {act.activityType}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900">{act.title}</p>
                    <p className="text-xs text-slate-600 line-clamp-1">{act.description}</p>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(act.evidenceId)}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-red-600 transition shrink-0 cursor-pointer"
                    title="View Source Evidence"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Right: Product & Digital Comparison Preview */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Product & Digital Comparison
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Propositions • app features • customer journeys
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('products-propositions')}
              className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Deep Dive</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-3 space-y-3">
            {/* Quick App Rating Summary */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Mobile App Customer Rating Matrix (iOS Hong Kong)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                {MOBILE_APP_STATS.map((app) => (
                  <div key={app.brand} className="p-2 bg-white rounded border border-slate-200">
                    <p className="text-[11px] font-semibold text-slate-700 truncate">{app.appName}</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">
                      ⭐ {app.rating?.toFixed(1) || 'N/A'}
                    </p>
                    <p className="text-[10px] text-slate-400">{app.reviewCount?.toLocaleString()} reviews</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiator Summary */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-800">Critical Illness Standalone Drug Gap:</span>
                <span className="text-rose-700 font-medium">AIA FutureShield ($1/day) vs PRU Full CI</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-800">Cashless Direct Billing Innovation:</span>
                <span className="text-red-700 font-semibold">PRU + MediConCen Mastercard First-mover</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-800">In-App Telemedicine & 4-Hr Rx Delivery:</span>
                <span className="text-blue-800 font-medium">Emma by AXA v3.6 leads UX integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. EXTENSIONS ROW: MODULE 5 & MODULE 6 TEASERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module 5 Teaser */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-5 rounded-xl text-white shadow-xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 uppercase tracking-wider">
                Module 5 Extension
              </span>
              <span className="text-xs text-slate-400">Distribution & Talent</span>
            </div>
            <h4 className="text-sm font-bold text-white leading-snug">
              Agency Copilots, Bancassurance Desks & Key Talent Hiring
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tracking PRUForce AI Copilot, AIA Premier Academy MDRT pipeline, Standard Chartered bancassurance desks, and hiring signals across AI, actuarial, and GBA medical operations.
            </p>
          </div>
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => onNavigateTab('distribution-talent')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition cursor-pointer"
            >
              <span>Explore Distribution & Talent (M5)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Module 6 Teaser */}
        <div className="bg-gradient-to-r from-rose-900 to-slate-900 p-5 rounded-xl text-white shadow-xs flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/30 text-rose-300 border border-rose-500/40 uppercase tracking-wider">
                Module 6 Extension
              </span>
              <span className="text-xs text-slate-400">Competitive Insights & SWOT</span>
            </div>
            <h4 className="text-sm font-bold text-white leading-snug">
              Cross-Module Synthesis & Prudential Strategic Roadmap
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full SWOT matrix for Prudential HK, cross-module strategic convergence across M1–M5, and 3-phase actionable recommendations (Immediate, Medium Term, Strategic Horizon).
            </p>
          </div>
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => onNavigateTab('competitive-insights')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition cursor-pointer"
            >
              <span>Explore Strategic Insights & SWOT (M6)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
