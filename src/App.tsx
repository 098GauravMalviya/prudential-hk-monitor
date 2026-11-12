import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { Sidebar, NavTab } from './components/Sidebar';
import { EvidenceDrawer } from './components/EvidenceDrawer';
import { ExecutiveSummaryView } from './components/views/ExecutiveSummaryView';
import { CompetitorActivityView } from './components/views/CompetitorActivityView';
import { BrandCampaignsView } from './components/views/BrandCampaignsView';
import { ProductsPropositionsView } from './components/views/ProductsPropositionsView';
import { DigitalExperienceView } from './components/views/DigitalExperienceView';
import { DistributionTalentView } from './components/views/DistributionTalentView';
import { CompetitiveInsightsView } from './components/views/CompetitiveInsightsView';
import { EvidenceRepositoryView } from './components/views/EvidenceRepositoryView';
import { AccessGate } from './components/AccessGate';
import { FilterState } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('executive-summary');
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | null>(null);

  const defaultFilters: FilterState = {
    dateRange: 'all-12m',
    brand: 'all',
    module: 'all',
    category: 'all',
    platform: 'all',
    searchQuery: '',
  };

  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setCurrentTab('executive-summary');
  };

  // Synchronize top module filter with sidebar tab
  useEffect(() => {
    if (filters.module === 'M1') setCurrentTab('competitor-activity');
    else if (filters.module === 'M2') setCurrentTab('brand-campaigns');
    else if (filters.module === 'M3') setCurrentTab('products-propositions');
    else if (filters.module === 'M4') setCurrentTab('digital-experience');
    else if (filters.module === 'M5') setCurrentTab('distribution-talent');
    else if (filters.module === 'M6') setCurrentTab('competitive-insights');
  }, [filters.module]);

  return (
    <AccessGate>
      <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-900 selection:bg-red-500 selection:text-white">
        {/* 1. Global Header Banner */}
        <Header onOpenEvidence={(id) => setSelectedEvidenceId(id)} />

        {/* 2. Top Universal Filter Bar */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onReset={handleResetFilters}
          activeCount={0}
        />

        {/* 3. Main Workspace: Left Sidebar + Active View */}
        <div className="flex-1 flex flex-col lg:flex-row max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6">
          {/* Navigation Sidebar */}
          <Sidebar currentTab={currentTab} onSelectTab={setCurrentTab} />

          {/* Content Pane */}
          <main className="flex-1 min-w-0">
            {currentTab === 'executive-summary' && (
              <ExecutiveSummaryView
                filters={filters}
                onNavigateTab={setCurrentTab}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'competitor-activity' && (
              <CompetitorActivityView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'brand-campaigns' && (
              <BrandCampaignsView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'products-propositions' && (
              <ProductsPropositionsView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'digital-experience' && (
              <DigitalExperienceView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'distribution-talent' && (
              <DistributionTalentView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'competitive-insights' && (
              <CompetitiveInsightsView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}

            {currentTab === 'insights-evidence' && (
              <EvidenceRepositoryView
                filters={filters}
                onOpenEvidence={(id) => setSelectedEvidenceId(id)}
              />
            )}
          </main>
        </div>

        {/* 4. Slide-Out Evidence & Traceability Drawer */}
        <EvidenceDrawer
          evidenceId={selectedEvidenceId}
          onClose={() => setSelectedEvidenceId(null)}
        />

        {/* Global Footer */}
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              Prudential Hong Kong Competitive Intelligence Monitor • Technical Proof of Concept (POC)
            </p>
            <p className="text-[11px] text-slate-400">
              Observation Period: 1 Nov 2025 – 31 Oct 2026 • Reference: Prudential HK • BridgeAI Tech
            </p>
          </div>
        </footer>
      </div>
    </AccessGate>
  );
}

export default App;
