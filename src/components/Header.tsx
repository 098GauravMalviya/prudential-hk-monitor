import React from 'react';
import { Shield, Sparkles, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenEvidence: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvidence }) => {
  return (
    <header className="bg-[#002B49] text-white border-b border-slate-700 shadow-md">
      {/* Top Banner */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white shadow-inner flex-shrink-0 tracking-wider">
            PRU
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                PRUDENTIAL COMPETITIVE INTELLIGENCE MONITOR
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-300 border border-red-500/30">
                POC v1.0
              </span>
            </div>
            <p className="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
              <span>Reference Brand: <strong className="text-white">Prudential Hong Kong</strong></span>
              <span className="text-slate-500">•</span>
              <span>Competitors: <span className="text-slate-200">AIA, Manulife & AXA</span></span>
              <span className="text-slate-500">•</span>
              <span className="inline-flex items-center text-emerald-300 text-[11px]">
                <Calendar className="w-3 h-3 mr-1" />
                Observation Period: 1 Nov 2025 – 31 Oct 2026 (12 Months)
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span className="font-semibold tracking-wider text-slate-100">HONG KONG MARKET</span>
          </div>

          <button
            onClick={() => onOpenEvidence('EV-REG-001')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-600 transition"
            title="Inspect Insurance Authority Regulatory Baseline"
          >
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>IA HK Verified</span>
          </button>
        </div>
      </div>
    </header>
  );
};
