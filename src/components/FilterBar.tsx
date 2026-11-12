import React from 'react';
import { Filter, RotateCcw, Search } from 'lucide-react';
import { FilterState, BrandId, ProductCategory, PlatformType } from '../types';
import { PRODUCT_CATEGORIES } from '../data/productData';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onReset: () => void;
  activeCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  onReset,
  activeCount,
}) => {
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const platforms: PlatformType[] = [
    'Official Website',
    'Facebook',
    'Instagram',
    'LinkedIn',
    'YouTube',
    'Apple App Store',
    'Google Play',
  ];

  return (
    <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 shadow-xs">
      <div className="max-w-[1700px] mx-auto flex flex-wrap items-center gap-3">
        {/* Date Filter */}
        <div className="flex flex-col min-w-[170px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Date Window
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 text-slate-800 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium cursor-pointer"
          >
            <option value="all-12m">Full 12 Months (Nov 25 – Oct 26)</option>
            <option value="last-90d">Rolling 90 Days (Aug – Oct 2026)</option>
            <option value="q3-2026">Q3 2026 (Jul – Sep 2026)</option>
            <option value="q2-2026">Q2 2026 (Apr – Jun 2026)</option>
            <option value="q1-2026">Q1 2026 (Jan – Mar 2026)</option>
            <option value="q4-2025">Q4 2025 (Nov – Dec 2025)</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div className="flex flex-col min-w-[160px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Brand
          </label>
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-300 text-slate-800 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium cursor-pointer"
          >
            <option value="all">All Insurers (4)</option>
            <option value="prudential">Prudential HK (Reference)</option>
            <option value="aia">AIA Hong Kong</option>
            <option value="manulife">Manulife Hong Kong</option>
            <option value="axa">AXA Hong Kong</option>
          </select>
        </div>

        {/* Module Filter */}
        <div className="flex flex-col min-w-[150px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Module Scope
          </label>
          <select
            value={filters.module}
            onChange={(e) => handleFilterChange('module', e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-300 text-slate-800 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium cursor-pointer"
          >
            <option value="all">All Modules (M1–M6)</option>
            <option value="M1">M1: Competitor Activity</option>
            <option value="M2">M2: Brand & Campaigns</option>
            <option value="M3">M3: Products & Propositions</option>
            <option value="M4">M4: Digital Experience</option>
            <option value="M5">M5: Distribution & Talent</option>
            <option value="M6">M6: Competitive Insights</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col min-w-[160px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-300 text-slate-800 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium cursor-pointer"
          >
            <option value="all">All Categories</option>
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Platform Filter */}
        <div className="flex flex-col min-w-[150px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Platform
          </label>
          <select
            value={filters.platform}
            onChange={(e) => handleFilterChange('platform', e.target.value as any)}
            className="text-xs bg-slate-50 border border-slate-300 text-slate-800 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium cursor-pointer"
          >
            <option value="all">All Platforms</option>
            {platforms.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Search Keyword
          </label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              placeholder="e.g. Cancer, Annuity, Emma, GBA..."
              className="text-xs w-full bg-slate-50 border border-slate-300 rounded pl-8 pr-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-end gap-2 pt-4">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-medium transition cursor-pointer"
            title="Reset to default filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};
