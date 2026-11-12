import React, { useState } from 'react';
import {
  Megaphone,
  Share2,
  Heart,
  MessageCircle,
  Eye,
  ExternalLink,
  Tag,
  BarChart2,
  TrendingUp,
  Image as ImageIcon,
  CheckCircle,
} from 'lucide-react';
import { FilterState, ContentTheme } from '../../types';
import {
  filterCampaigns,
  CONTENT_THEMES,
  getThemeDistribution,
  COMPANIES,
} from '../../data/intelligenceService';

interface BrandCampaignsViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const BrandCampaignsView: React.FC<BrandCampaignsViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const campaigns = filterCampaigns(filters).filter((item) => {
    if (selectedTheme !== 'all' && item.theme !== selectedTheme) return false;
    return true;
  });

  const themeDistribution = getThemeDistribution();

  return (
    <div className="space-y-6">
      {/* Module 2 Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800">
              MODULE 2
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Brand, Campaigns and Customer Messaging
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tracking campaign themes, creative messaging, calls-to-action & post-level social engagement across Hong Kong channels.
          </p>
        </div>

        {/* Theme Taxonomy Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-500">Theme Taxonomy:</label>
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 font-medium focus:ring-1 focus:ring-purple-500 cursor-pointer"
          >
            <option value="all">All 10 Themes</option>
            {CONTENT_THEMES.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 10-Theme Taxonomy Distribution Chart */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-purple-600" />
              Content Theme Distribution (Share of Voice by Insurer)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Standardized 10-theme taxonomy across Hong Kong campaigns (Section 4, Module 2)
            </p>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-3 text-xs">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {themeDistribution.map((item) => (
            <div
              key={item.theme}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5"
            >
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">{item.theme}</span>
                <span className="text-slate-500 text-[11px] font-mono">
                  {item.total > 0 ? `${item.total} tracked campaigns` : 'Low current activity'}
                </span>
              </div>

              {/* Progress representation */}
              <div className="w-full h-3 bg-slate-200 rounded overflow-hidden flex">
                <div
                  style={{
                    width: item.total > 0 ? `${(item.prudential / item.total) * 100}%` : '25%',
                    backgroundColor: COMPANIES.prudential.accentColor,
                  }}
                  title={`Prudential: ${item.prudential}`}
                />
                <div
                  style={{
                    width: item.total > 0 ? `${(item.aia / item.total) * 100}%` : '25%',
                    backgroundColor: COMPANIES.aia.accentColor,
                  }}
                  title={`AIA: ${item.aia}`}
                />
                <div
                  style={{
                    width: item.total > 0 ? `${(item.manulife / item.total) * 100}%` : '25%',
                    backgroundColor: COMPANIES.manulife.accentColor,
                  }}
                  title={`Manulife: ${item.manulife}`}
                />
                <div
                  style={{
                    width: item.total > 0 ? `${(item.axa / item.total) * 100}%` : '25%',
                    backgroundColor: COMPANIES.axa.accentColor,
                  }}
                  title={`AXA: ${item.axa}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Metrics & Follower Engagement Benchmark Table */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Social Engagement Benchmark Table (Post-Level Granularity)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Follower-based Rate = (Likes + Comments + Shares) / Followers × 100%. Unavailable metrics displayed as N/A.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">Brand & Platform</th>
                <th className="py-2.5 px-3">Campaign Name & Theme</th>
                <th className="py-2.5 px-3">Post Date</th>
                <th className="py-2.5 px-3 text-right">Likes</th>
                <th className="py-2.5 px-3 text-right">Comments</th>
                <th className="py-2.5 px-3 text-right">Shares</th>
                <th className="py-2.5 px-3 text-right">Views</th>
                <th className="py-2.5 px-3 text-right">Follower Eng. Rate</th>
                <th className="py-2.5 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {campaigns.map((camp) => {
                const comp = COMPANIES[camp.brand];
                return (
                  <tr key={camp.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-3">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <div>
                          <p className="font-bold text-slate-900">{comp.name}</p>
                          <span className="text-[10px] text-slate-500">{camp.platform}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <p className="font-semibold text-slate-900">{camp.campaignName}</p>
                      <span className="inline-block mt-0.5 text-[10px] px-1.5 py-0.2 rounded bg-purple-50 text-purple-700">
                        {camp.theme}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600 font-medium">
                      {camp.postDate}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-800">
                      {camp.metrics.likes?.toLocaleString() ?? 'N/A'}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-800">
                      {camp.metrics.comments?.toLocaleString() ?? 'N/A'}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-800">
                      {camp.metrics.shares?.toLocaleString() ?? 'N/A'}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-800">
                      {camp.metrics.views ? `${(camp.metrics.views / 1000).toFixed(0)}k` : 'N/A'}
                    </td>
                    <td className="py-3 px-3 text-right">
                      {camp.metrics.followerEngagementRate !== null ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded font-bold text-xs bg-emerald-50 text-emerald-700">
                          {camp.metrics.followerEngagementRate.toFixed(2)}%
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs italic">N/A</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => onOpenEvidence(camp.evidenceId)}
                        className="p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-purple-700 transition cursor-pointer"
                        title="View Source Evidence"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Representative Creative Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold uppercase tracking-wider">
          <span>Creative Showcase & Messaging Cards ({campaigns.length} Campaigns)</span>
          <span>Bilingual Copy & Call to Action</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((camp) => {
            const comp = COMPANIES[camp.brand];
            return (
              <div
                key={camp.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden hover:border-slate-300 transition"
              >
                {/* Visual Header Mock */}
                <div className="p-4 bg-slate-900 text-white relative">
                  <div className="flex justify-between items-start gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: comp.accentColor }}
                    >
                      {comp.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {camp.format} • {camp.platform}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2.5 leading-snug">
                    {camp.creativeAsset.headline}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                    {camp.creativeAsset.visualPreviewDesc}
                  </p>
                </div>

                {/* Content Details */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Chinese Copy */}
                    <div className="p-2.5 bg-amber-50/70 border border-amber-200/60 rounded text-xs text-slate-800 leading-relaxed font-sans">
                      <p className="text-[10px] font-bold text-amber-900 uppercase mb-0.5">
                        Traditional Chinese Copy (香港繁體):
                      </p>
                      {camp.creativeAsset.subheadlineZh}
                    </div>

                    {/* Value Proposition */}
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-slate-800">Value Proposition:</p>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        {camp.valueProposition}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="text-xs space-y-1 p-2 bg-slate-50 rounded border border-slate-200">
                      <p className="font-semibold text-slate-800 text-[11px]">Observable CTA:</p>
                      <p className="text-purple-700 font-medium text-[11px]">
                        {camp.cta}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{camp.month}</span>
                    <button
                      onClick={() => onOpenEvidence(camp.evidenceId)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-purple-700 hover:underline cursor-pointer"
                    >
                      <span>Verify Evidence</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
