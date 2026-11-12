import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Building,
  Handshake,
  AlertTriangle,
  ExternalLink,
  Calendar,
  Sparkles,
  Search,
  Filter,
  Layers,
  GraduationCap,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { FilterState, DistributionChannelType } from '../../types';
import {
  filterDistributionTalent,
  DISTRIBUTION_CHANNELS,
  COMPANIES,
} from '../../data/intelligenceService';

interface DistributionTalentViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const DistributionTalentView: React.FC<DistributionTalentViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const items = filterDistributionTalent(filters).filter((item) => {
    if (selectedChannel !== 'all' && item.channelType !== selectedChannel) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Module 5 Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
              MODULE 5 (OPTIONAL EXTENSION)
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Distribution, Partnerships and Talent
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tracking agency forces, bancassurance alliances, broker channels, and key recruitment in tech, analytics & wealth.
          </p>
        </div>

        {/* Channel Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedChannel('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition cursor-pointer ${
              selectedChannel === 'all'
                ? 'bg-indigo-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Channels ({items.length})
          </button>
          {DISTRIBUTION_CHANNELS.map((ch) => (
            <button
              key={ch}
              onClick={() => setSelectedChannel(ch)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition cursor-pointer ${
                selectedChannel === ch
                  ? 'bg-indigo-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {/* Cautionary Analytical Guidance Alert (Section 4, Module 5) */}
      <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs text-amber-900 shadow-2xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold tracking-wide uppercase text-[11px] text-amber-950">
            Analytical Principle & Methodology Caution (Section 4 Brief Requirement)
          </span>
          <p className="text-amber-800 leading-relaxed">
            <strong>Treat hiring patterns as indicative signals, not proof of business strategy.</strong> Observable public job openings and distribution tie-ups indicate operational scaling and channel experimentation rather than verified internal strategic targets.
          </p>
        </div>
      </div>

      {/* Channel Landscape Comparison Matrix */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="pb-3 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Handshake className="w-4 h-4 text-indigo-600" />
            Distribution Channel Structure & Strategic Alliances in Hong Kong
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Comparing agency size, exclusive bank partners, broker emphasis, and InsurTech distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Prudential HK */}
          <div className="p-4 rounded-xl border border-red-200 bg-red-50/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-red-900">Prudential HK (Ref)</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700">
                Agency & Bancassurance
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Agency Force:</span>
                <p className="text-[11px] text-slate-600">~20,000 consultants; deployment of PRUForce AI Copilot for compliance & instant quotes.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Key Bank Partners:</span>
                <p className="text-[11px] text-slate-600">Standard Chartered Bank (deepened wealth desks for TTPS incoming talent).</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Broker & IFA:</span>
                <p className="text-[11px] text-slate-600">PRUSelect platform for External Asset Managers (EAMs).</p>
              </div>
            </div>
          </div>

          {/* AIA HK */}
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-rose-900">AIA Hong Kong</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                #1 MDRT Agency
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Agency Force:</span>
                <p className="text-[11px] text-slate-600">Market leader in MDRT count; AIA Premier Academy 18-month talent subsidies.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Key Bank Partners:</span>
                <p className="text-[11px] text-slate-600">Exclusive 15-year partnership with The Bank of East Asia (BEA) with in-app mobile binding.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Broker & IFA:</span>
                <p className="text-[11px] text-slate-600">High-volume corporate brokers for participating whole-life protection.</p>
              </div>
            </div>
          </div>

          {/* Manulife HK */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-emerald-900">Manulife HK</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                #1 MPF Force
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Agency Force:</span>
                <p className="text-[11px] text-slate-600">~11,000 advisers; mandatory certification to convert mature MPF into GoldenStart annuities.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Key Bank Partners:</span>
                <p className="text-[11px] text-slate-600">Standard Chartered Bank (digital SME employee benefits and group medical integration).</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Broker & IFA:</span>
                <p className="text-[11px] text-slate-600">Aggressive broker incentives for 85% Day-1 cash surrender Genesis Centurion.</p>
              </div>
            </div>
          </div>

          {/* AXA HK */}
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-blue-900">AXA Hong Kong</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                UHNW & Healthcare
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Agency Force:</span>
                <p className="text-[11px] text-slate-600">Multidisciplinary agency focusing on VHIS, life protection, and commercial general business.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Strategic Desk:</span>
                <p className="text-[11px] text-slate-600">AXA Global Private family office desk in Two ifc for fine art & luxury asset insurance.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Healthcare Network:</span>
                <p className="text-[11px] text-slate-600">Direct courier alliances for 4-hr telemedicine delivery and mainland Grade 3A hospitals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment & Talent Heatmap (Indicative Signals) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              Recruitment & Strategic Talent Trends (Observable Job Signals)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Auditing observable postings in Digital, Analytics, Tech, Product & Wealth Management
            </p>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
            Source: LinkedIn & Career Portals
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-900 block">Digital, Analytics & Tech</span>
            <ul className="space-y-1 text-xs text-slate-600">
              <li>• <strong>Prudential:</strong> Lead Data Scientist (Medical Claims AI)</li>
              <li>• <strong>AIA:</strong> Head of AI Governance & Ethics (IA Sandbox)</li>
              <li>• <strong>AXA:</strong> Telehealth Integration Software Engineer</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-900 block">High-Net-Worth & Wealth</span>
            <ul className="space-y-1 text-xs text-slate-600">
              <li>• <strong>Manulife:</strong> Director, Multi-Hub Wealth (HK/SG)</li>
              <li>• <strong>AXA:</strong> Family Office Underwriting Director</li>
              <li>• <strong>Prudential:</strong> Opus Wealth Relationship Managers</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-900 block">Healthcare & Network</span>
            <ul className="space-y-1 text-xs text-slate-600">
              <li>• <strong>AXA:</strong> Head of GBA Provider Relations (Guangdong)</li>
              <li>• <strong>Prudential:</strong> Cashless Direct Billing Operations Lead</li>
              <li>• <strong>AIA:</strong> Oncology Network Coordinator</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-900 block">Agency Leadership</span>
            <ul className="space-y-1 text-xs text-slate-600">
              <li>• <strong>AIA:</strong> Premier Academy Executive Coaches</li>
              <li>• <strong>Manulife:</strong> District Directors for MPF Conversion</li>
              <li>• <strong>Prudential:</strong> PRUExecutive Talent Acquisition Leads</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dated Distribution & Talent Event Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold uppercase tracking-wider">
          <span>Distribution & Talent Chronological Timeline ({items.length} Developments)</span>
          <span>Brand × Activity Type × Month</span>
        </div>

        <div className="space-y-3">
          {items.map((event) => {
            const comp = COMPANIES[event.brand];
            return (
              <div
                key={event.id}
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
                      {event.date}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">
                      {event.channelType}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">
                    Partner / Role: {event.partnerOrInstitution}
                  </span>
                </div>

                <div className="py-3 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-[11px] text-slate-500 italic">
                    Cautionary Context: {event.indicativeSignalCaution}
                  </p>
                </div>

                {/* Prudential Strategic Implication */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-indigo-900 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Prudential Strategic Takeaway:</span>
                  </div>
                  <p className="text-slate-800 pl-5">
                    {event.prudentialImplication}
                  </p>
                  <p className="text-slate-500 text-[11px] pl-5 mt-1">
                    <strong>HK Market Relevance:</strong> {event.hkMarketRelevance}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    Source: {event.sourceName}
                  </span>
                  <button
                    onClick={() => onOpenEvidence(event.evidenceId)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                  >
                    <span>Verify Source Record</span>
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
