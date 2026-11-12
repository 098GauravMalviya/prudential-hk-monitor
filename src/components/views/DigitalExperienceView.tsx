import React from 'react';
import {
  Smartphone,
  Globe,
  Star,
  Check,
  X,
  Lock,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  Bot,
  Video,
  CreditCard,
  Search,
  Sparkles,
  Info,
} from 'lucide-react';
import { FilterState } from '../../types';
import {
  filterApps,
  filterWebsites,
  COMPANIES,
} from '../../data/intelligenceService';

interface DigitalExperienceViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const DigitalExperienceView: React.FC<DigitalExperienceViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const apps = filterApps(filters);
  const websites = filterWebsites(filters);

  return (
    <div className="space-y-6">
      {/* Module 4 Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
              MODULE 4
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Digital Experience and Customer Services
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Auditing publicly observable customer-facing mobile applications, website discovery journeys, e-claims & InsurTech innovations.
          </p>
        </div>

        {/* Disclaimer / Compliance Notice (Section 4, Module 4) */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>Publicly observable features only. Proprietary login features flagged.</span>
        </div>
      </div>

      {/* 4.2 Mobile Applications Hub (Side-by-Side Comparison) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold uppercase tracking-wider">
          <span>Official Hong Kong Mobile Applications ({apps.length} Apps Tracked)</span>
          <span>Apple App Store & Google Play HK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map((app) => {
            const comp = COMPANIES[app.brand];
            return (
              <div
                key={app.brand}
                className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition"
              >
                <div>
                  {/* App Header */}
                  <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center space-x-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0"
                        style={{ backgroundColor: comp.accentColor }}
                      >
                        {comp.name.substring(0, 3)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {app.appName}
                        </h4>
                        <p className="text-[10px] text-slate-500">{comp.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* App Store Rating & Version */}
                  <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Rating</span>
                      <span className="text-sm font-extrabold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {app.rating?.toFixed(1) || 'N/A'}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        {app.reviewCount?.toLocaleString()} reviews
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Version</span>
                      <span className="text-xs font-mono font-bold text-slate-800 block mt-0.5">
                        {app.latestVersion}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        Updated {app.lastUpdateDate}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 py-1">
                    <span className="text-[11px] font-bold text-slate-600 block mb-1">
                      Observable In-App Capabilities:
                    </span>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-700">
                        <span>eHealth Dynamic Card</span>
                        {app.featureChecklist.eHealthCard ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>OCR e-Claims & Tracking</span>
                        {app.featureChecklist.claimsSubmissionTracking ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Telemedicine Consultation</span>
                        {app.featureChecklist.telemedicineIntegration ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>AI Virtual Assistant</span>
                        {app.featureChecklist.aiVirtualAssistant ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Medical Network Map</span>
                        {app.featureChecklist.medicalNetworkSearch ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Review Themes */}
                  <div className="mt-3 space-y-2 pt-2 border-t border-slate-100 text-[11px]">
                    <div className="space-y-1">
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" /> Positive Themes:
                      </span>
                      <p className="text-slate-600 leading-tight">
                        {app.recurringPositiveThemes[0]}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-semibold text-rose-700 flex items-center gap-1">
                        <ThumbsDown className="w-3 h-3" /> Friction Themes:
                      </span>
                      <p className="text-slate-600 leading-tight">
                        {app.recurringNegativeThemes[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    Policyholder Auth
                  </span>
                  <a
                    href={app.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    <span>Store Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4.1 Website Experience & Feature Comparison Matrix */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="pb-3 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-600" />
            Website Experience & Digital Journey Comparison Matrix
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit of official web domains: online quotation, self-service portals, chatbots, and discovery journeys
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">Insurer & Domain</th>
                <th className="py-2.5 px-3 text-center">Instant Quotation</th>
                <th className="py-2.5 px-3 text-center">Direct E-Purchase</th>
                <th className="py-2.5 px-3 text-center">Product Comparison</th>
                <th className="py-2.5 px-3 text-center">Customer Portal</th>
                <th className="py-2.5 px-3">Live Chatbot / AI</th>
                <th className="py-2.5 px-3 text-center">Journey UX</th>
                <th className="py-2.5 px-3">Observable Features & Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {websites.map((site) => {
                const comp = COMPANIES[site.brand];
                return (
                  <tr key={site.brand} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-3">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <div>
                          <p className="font-bold text-slate-900">{comp.name}</p>
                          <a
                            href={site.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-blue-600 hover:underline flex items-center gap-0.5"
                          >
                            <span>Official Portal</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-center">
                      {site.instantQuotation ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>

                    <td className="py-3 px-3 text-center">
                      {site.instantPurchaseJourney ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">
                          Advisor Route
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-3 text-center">
                      {site.productComparisonTool ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>

                    <td className="py-3 px-3 text-center">
                      {site.customerPortalAccess ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 mx-auto" />
                      )}
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 font-medium text-slate-800">
                        <Bot className="w-3.5 h-3.5 text-purple-600" />
                        <span>{site.chatbotName}</span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          site.simplificationScore === 'High'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {site.simplificationScore}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-slate-600 text-[11px] leading-relaxed max-w-xs">
                      {site.notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
