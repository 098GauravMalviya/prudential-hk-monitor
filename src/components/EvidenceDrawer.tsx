import React from 'react';
import { X, ExternalLink, Calendar, Clock, Globe, ShieldCheck, CheckCircle2, BookmarkCheck, FileText } from 'lucide-react';
import { getEvidenceById } from '../data/intelligenceService';
import { COMPANIES } from '../data/companies';

interface EvidenceDrawerProps {
  evidenceId: string | null;
  onClose: () => void;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({ evidenceId, onClose }) => {
  if (!evidenceId) return null;

  const record = getEvidenceById(evidenceId);
  if (!record) return null;

  const company = COMPANIES[record.brand];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-2.5">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: company?.accentColor || '#64748b' }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                  {record.recordId}
                </span>
                <span className="text-xs font-bold text-slate-700">
                  {company?.name}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
                  {record.module}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
            title="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6 flex-1">
          {/* Title & Classification */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
              <span>{record.activityType}</span>
              <span>•</span>
              <span className="text-red-700 font-semibold">{record.topicCategory}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {record.title}
            </h2>
          </div>

          {/* Verification Badge & Timestamps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div className="space-y-1">
              <div className="flex items-center text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                <span>Publication Date:</span>
              </div>
              <p className="font-semibold text-slate-800 pl-4">{record.publicationDate}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                <span>Capture Timestamp:</span>
              </div>
              <p className="font-mono text-[11px] text-slate-700 pl-4">
                {new Date(record.captureTimestamp).toLocaleString()}
              </p>
            </div>

            <div className="space-y-1 sm:col-span-2 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  <span className="font-medium">Data Confidence Rating:</span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                  {record.confidence}
                </span>
              </div>
            </div>
          </div>

          {/* Source Link & Evidence Reference */}
          <div className="p-4 bg-blue-50/70 rounded-lg border border-blue-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-700" />
                Verified Source Repository
              </span>
              <span className="text-[10px] font-mono text-blue-800 bg-blue-200/60 px-2 py-0.5 rounded">
                Ref: {record.evidenceRef}
              </span>
            </div>
            <p className="text-xs text-blue-900 font-medium">
              Source: <span className="font-semibold">{record.sourceName}</span>
            </p>
            <div className="pt-1">
              <a
                href={record.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline break-all"
              >
                <span>{record.sourceUrl}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Original Traditional Chinese Content */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-4 h-4 text-slate-500" />
                Original Hong Kong Traditional Chinese Content (香港繁體原文)
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                Verified verbatim
              </span>
            </div>
            <div className="p-3.5 bg-amber-50/60 border border-amber-200/70 rounded-lg text-slate-800 text-xs leading-relaxed font-sans">
              {record.originalContentZh}
            </div>
          </div>

          {/* English Translation / Structured Summary */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
              <BookmarkCheck className="w-4 h-4 text-slate-500" />
              English Structured Summary & Intelligence Translation
            </span>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs leading-relaxed">
              {record.translatedSummaryEn}
            </div>
          </div>

          {/* Hong Kong Relevance */}
          <div className="space-y-1.5 p-3.5 bg-slate-100/70 rounded-lg border border-slate-200">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Hong Kong Insurance Market Relevance
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {record.hkMarketRelevance}
            </p>
          </div>

          {/* Associated Product or Campaign */}
          {record.productCampaignAssociation && (
            <div className="text-xs text-slate-600 flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Associated Asset:</span>
              <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded font-medium">
                {record.productCampaignAssociation}
              </span>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-[11px] text-slate-500">
            Auditable Evidence Chain • BridgeAI Tech
          </p>
          <a
            href={record.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition cursor-pointer"
          >
            <span>Open Original Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
