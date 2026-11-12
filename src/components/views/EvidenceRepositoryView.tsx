import React, { useState } from 'react';
import {
  FileCheck2,
  ExternalLink,
  Search,
  Download,
  Calendar,
  Clock,
  ShieldCheck,
  Tag,
  Building2,
  Languages,
} from 'lucide-react';
import { FilterState, EvidenceRecord } from '../../types';
import { EVIDENCE_REPOSITORY } from '../../data/evidenceRepository';
import { COMPANIES } from '../../data/companies';

interface EvidenceRepositoryViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const EvidenceRepositoryView: React.FC<EvidenceRepositoryViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');

  const filteredEvidence = EVIDENCE_REPOSITORY.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    if (selectedModule !== 'all' && item.module !== selectedModule) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchZh = item.originalContentZh.includes(q);
      const matchEn = item.translatedSummaryEn.toLowerCase().includes(q);
      const matchRef = item.recordId.toLowerCase().includes(q);
      if (!matchTitle && !matchZh && !matchEn && !matchRef) return false;
    }
    return true;
  });

  const exportToJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(filteredEvidence, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'prudential_hk_evidence_repository.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Evidence Repository Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-900 text-white">
              SECTION 8.4
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Source Evidence & Audit Repository
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Every metric, proposition, and insight links directly to verifiable Hong Kong insurer records with bilingual Chinese/English audit text.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Module Filter */}
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 font-medium focus:ring-1 focus:ring-slate-500 cursor-pointer"
          >
            <option value="all">All Modules</option>
            <option value="M1">Module 1: Competitor Activity</option>
            <option value="M2">Module 2: Campaigns & Social</option>
            <option value="M3">Module 3: Products & Propositions</option>
            <option value="M4">Module 4: Digital Experience</option>
            <option value="M5">Module 5: Distribution & Talent</option>
            <option value="M6">Module 6: Competitive Insights</option>
          </select>

          {/* Export JSON Button */}
          <button
            onClick={exportToJson}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition cursor-pointer"
            title="Download Normalised Records JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search records by Record ID, Chinese text, keyword, or URL..."
          className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
        />
      </div>

      {/* Granular Source-Level Data Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Granular Source-Level Observations ({filteredEvidence.length} Records)
          </span>
          <span className="text-xs text-slate-400">
            Click any row or button to open full bilingual audit drawer
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">Record ID & Brand</th>
                <th className="py-2.5 px-3">Module & Category</th>
                <th className="py-2.5 px-3">Observation Title</th>
                <th className="py-2.5 px-3">Publication & Capture</th>
                <th className="py-2.5 px-3">Original HK Chinese Content</th>
                <th className="py-2.5 px-3">Confidence</th>
                <th className="py-2.5 px-3 text-center">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEvidence.map((record) => {
                const comp = COMPANIES[record.brand];
                return (
                  <tr
                    key={record.recordId}
                    onClick={() => onOpenEvidence(record.recordId)}
                    className="hover:bg-slate-50/90 transition cursor-pointer"
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <div>
                          <p className="font-mono font-bold text-slate-900">{record.recordId}</p>
                          <span className="text-[10px] text-slate-500 font-medium">{comp.name}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="inline-block px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-100 text-blue-800 w-max">
                          {record.module}
                        </span>
                        <span className="text-[11px] text-slate-600 truncate max-w-[120px]">
                          {record.topicCategory}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-3 max-w-xs">
                      <p className="font-semibold text-slate-900 leading-snug line-clamp-2">
                        {record.title}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                        Source: {record.sourceName}
                      </p>
                    </td>

                    <td className="py-3 px-3 whitespace-nowrap">
                      <p className="font-medium text-slate-800 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {record.publicationDate}
                      </p>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {record.captureTimestamp.split('T')[0]}
                      </p>
                    </td>

                    <td className="py-3 px-3 max-w-sm">
                      <div className="p-2 bg-amber-50/60 rounded border border-amber-200/50 text-[11px] text-slate-800 font-sans line-clamp-2">
                        {record.originalContentZh}
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 whitespace-nowrap">
                        {record.confidence.split(' ')[0]}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEvidence(record.recordId);
                        }}
                        className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition"
                        title="View Full Source Evidence"
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
    </div>
  );
};
