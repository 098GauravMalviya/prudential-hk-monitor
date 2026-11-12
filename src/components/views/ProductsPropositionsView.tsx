import React, { useState } from 'react';
import {
  Layers,
  Calendar,
  ExternalLink,
  CheckCircle2,
  FileText,
  Sparkles,
  Shield,
  Gift,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { FilterState, ProductCategory } from '../../types';
import {
  filterProducts,
  PRODUCT_CATEGORIES,
  COMPANIES,
} from '../../data/intelligenceService';

interface ProductsPropositionsViewProps {
  filters: FilterState;
  onOpenEvidence: (evidenceId: string) => void;
}

export const ProductsPropositionsView: React.FC<ProductsPropositionsViewProps> = ({
  filters,
  onOpenEvidence,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const products = filterProducts(filters).filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Module 3 Header */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
              MODULE 3
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Products and Propositions
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Tracking new product launches, coverage highlights, and direct proposition benchmarking against Prudential HK flagships.
          </p>
        </div>

        {/* 7 Category Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-500">Product Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 font-medium focus:ring-1 focus:ring-amber-500 cursor-pointer"
          >
            <option value="all">All 7 Categories</option>
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 7 Product Categories Overview Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {PRODUCT_CATEGORIES.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(isSelected ? 'all' : cat)}
              className={`p-3 rounded-lg border text-left transition cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <p className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>
                Category
              </p>
              <p className="text-xs font-bold truncate mt-0.5">{cat}</p>
              <p className={`text-[11px] mt-1 font-mono ${isSelected ? 'text-amber-100' : 'text-slate-500'}`}>
                {count} {count === 1 ? 'Product' : 'Products'}
              </p>
            </button>
          );
        })}
      </div>

      {/* Proposition Comparison Table (Direct Prudential Benchmark) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="pb-3 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Proposition Comparison Matrix (Benchmarked Against Prudential)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Side-by-side evaluation of competitor differentiators vs Prudential’s corresponding offerings
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">Insurer & Product</th>
                <th className="py-2.5 px-3">Category</th>
                <th className="py-2.5 px-3">Prudential Equivalent</th>
                <th className="py-2.5 px-3">Competitor Advantage</th>
                <th className="py-2.5 px-3">Prudential Advantage</th>
                <th className="py-2.5 px-3">Action for Prudential</th>
                <th className="py-2.5 px-3 text-center">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((p) => {
                const comp = COMPANIES[p.brand];
                return (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-3">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <div>
                          <p className="font-bold text-slate-900">{p.productName}</p>
                          <p className="text-[11px] text-slate-500 font-sans">{p.productNameZh}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        {p.category}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {p.prudentialComparison.prudentialEquivalentProduct}
                    </td>
                    <td className="py-3 px-3 text-rose-700 font-medium">
                      {p.prudentialComparison.competitorAdvantage}
                    </td>
                    <td className="py-3 px-3 text-emerald-700 font-medium">
                      {p.prudentialComparison.prudentialAdvantage}
                    </td>
                    <td className="py-3 px-3 text-slate-700 leading-tight">
                      {p.prudentialComparison.recommendedInvestigation}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => onOpenEvidence(p.evidenceId)}
                        className="p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-amber-700 transition cursor-pointer"
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

      {/* Product Launch Tracker Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold uppercase tracking-wider">
          <span>Product Launch Tracker ({products.length} Products)</span>
          <span>Coverage Highlights & Official Factsheets</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {products.map((p) => {
            const comp = COMPANIES[p.brand];
            return (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4 hover:border-slate-300 transition flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: comp.accentColor }}
                        />
                        <span className="text-xs font-bold text-slate-900">{comp.name}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] text-slate-500 font-medium">{p.launchDate}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">
                          {p.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {p.productName}
                      </h4>
                      <p className="text-xs text-slate-500 font-sans">{p.productNameZh}</p>
                    </div>

                    <a
                      href={p.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition flex items-center gap-1 text-[11px] font-medium shrink-0"
                      title="Download Official Factsheet PDF"
                    >
                      <FileText className="w-3.5 h-3.5 text-red-500" />
                      <span>Brochure</span>
                    </a>
                  </div>

                  {/* Target Audience & Benefits */}
                  <div className="py-3 space-y-3">
                    <div className="text-xs">
                      <span className="font-bold text-slate-700">Target Audience:</span>{' '}
                      <span className="text-slate-600">{p.targetAudience}</span>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-xs font-bold text-slate-700">Main Benefits & Highlights:</p>
                      <ul className="space-y-1">
                        {p.mainBenefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-600 gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Differentiating Claims */}
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs space-y-1">
                      <p className="font-bold text-slate-800 text-[11px]">Differentiating Claims:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                        {p.differentiatingClaims.map((claim, idx) => (
                          <li key={idx}>{claim}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Promotional Offer */}
                    {p.promotionalOffer && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50/70 p-2 rounded border border-amber-200/60 font-medium">
                        <Gift className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Promo: {p.promotionalOffer}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    Eligibility: {p.exclusionsOrEligibility.split('.')[0]}
                  </span>
                  <button
                    onClick={() => onOpenEvidence(p.evidenceId)}
                    className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 hover:underline cursor-pointer"
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
