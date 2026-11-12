import React from 'react';
import {
  LayoutDashboard,
  Activity,
  Megaphone,
  Layers,
  Smartphone,
  FileCheck2,
  Building2,
  Info,
  Handshake,
  Compass,
} from 'lucide-react';
import { BrandId } from '../types';
import { COMPANIES } from '../data/companies';

export type NavTab =
  | 'executive-summary'
  | 'competitor-activity'
  | 'brand-campaigns'
  | 'products-propositions'
  | 'digital-experience'
  | 'distribution-talent'
  | 'competitive-insights'
  | 'insights-evidence';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  brandCounts?: Record<BrandId, number>;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  const navItems = [
    {
      id: 'executive-summary' as NavTab,
      label: 'Executive Summary',
      badge: 'Prudential Lens',
      icon: LayoutDashboard,
      description: 'Key insights, trends & high-level comparisons',
    },
    {
      id: 'competitor-activity' as NavTab,
      label: 'Competitor Activity',
      badge: 'Module 1',
      icon: Activity,
      description: 'Dated timeline of launches, partnerships & announcements',
    },
    {
      id: 'brand-campaigns' as NavTab,
      label: 'Brand & Campaigns',
      badge: 'Module 2',
      icon: Megaphone,
      description: 'Themes, creative formats, CTAs & social engagement',
    },
    {
      id: 'products-propositions' as NavTab,
      label: 'Products & Propositions',
      badge: 'Module 3',
      icon: Layers,
      description: '7 category comparisons, launch tracker & riders',
    },
    {
      id: 'digital-experience' as NavTab,
      label: 'Digital Experience',
      badge: 'Module 4',
      icon: Smartphone,
      description: 'Mobile apps (AIA+, Emma, Manulife) & web portals',
    },
    {
      id: 'distribution-talent' as NavTab,
      label: 'Distribution & Talent',
      badge: 'Module 5',
      icon: Handshake,
      description: 'Agency, bancassurance, broker alliances & talent signals',
    },
    {
      id: 'competitive-insights' as NavTab,
      label: 'Competitive Insights',
      badge: 'Module 6',
      icon: Compass,
      description: 'Cross-module synthesis, Prudential SWOT & action roadmap',
    },
    {
      id: 'insights-evidence' as NavTab,
      label: 'Insights & Evidence',
      badge: 'Traceability',
      icon: FileCheck2,
      description: 'Original Chinese/English records & source URLs',
    },
  ];

  return (
    <aside className="w-full lg:w-72 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 shadow-xs">
      <div className="p-4 space-y-4">
        {/* Navigation Label */}
        <div className="px-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            NAVIGATION
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left flex items-start space-x-3 p-3 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon
                  className={`w-5 h-5 mt-0.5 shrink-0 ${
                    isActive ? 'text-red-400' : 'text-slate-500'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm truncate font-medium">{item.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? 'bg-slate-800 text-red-300'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] truncate mt-0.5 ${
                      isActive ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Insurers Tracked Reference */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
            INSURERS IN SCOPE
          </p>
          <div className="space-y-2">
            {Object.values(COMPANIES).map((comp) => (
              <div
                key={comp.id}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs"
              >
                <div className="flex items-center space-x-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: comp.accentColor }}
                  />
                  <span className="font-semibold text-slate-800">{comp.name}</span>
                </div>
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    comp.role === 'Reference brand'
                      ? 'bg-red-100 text-red-700 font-bold'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {comp.role === 'Reference brand' ? 'REFERENCE' : 'COMPETITOR'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance / Brief Note */}
      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <div className="flex items-start space-x-2 text-[11px] text-slate-600">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
          <p>
            Evidence-led POC. Original source URLs & capture timestamps retained. Chinese & English preserved.
          </p>
        </div>
      </div>
    </aside>
  );
};
