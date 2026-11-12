import { FilterState, BrandId, EvidenceRecord } from '../types';
import { COMPANIES } from './companies';
import { EVIDENCE_REPOSITORY } from './evidenceRepository';
import { COMPETITOR_ACTIVITIES } from './competitorActivityData';
import { CAMPAIGN_RECORDS, CONTENT_THEMES, getThemeDistribution } from './campaignData';
import { PRODUCT_RECORDS, PRODUCT_CATEGORIES } from './productData';
import { MOBILE_APP_STATS, WEBSITE_CAPABILITIES } from './digitalExperienceData';
import { DISTRIBUTION_TALENT_RECORDS, DISTRIBUTION_CHANNELS } from './distributionTalentData';
import { CROSS_MODULE_SYNTHESIS, PRUDENTIAL_SWOT, STRATEGIC_ACTION_ROADMAP } from './competitiveInsightsData';
import { EXECUTIVE_INSIGHTS } from './executiveInsights';

export function filterActivities(filters: FilterState) {
  return COMPETITOR_ACTIVITIES.filter((item) => {
    // Brand
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    // Category
    if (filters.category !== 'all' && item.category !== filters.category) return false;
    // Search
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchPrud = item.prudentialRelevance.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchPrud) return false;
    }
    return true;
  });
}

export function filterCampaigns(filters: FilterState) {
  return CAMPAIGN_RECORDS.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    if (filters.category !== 'all' && item.productCategory !== filters.category) return false;
    if (filters.platform !== 'all' && item.platform !== filters.platform) return false;
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = item.campaignName.toLowerCase().includes(q);
      const matchKey = item.keyMessage.toLowerCase().includes(q);
      const matchAsset = item.creativeAsset.subheadlineZh.includes(q) || item.creativeAsset.headline.toLowerCase().includes(q);
      if (!matchName && !matchKey && !matchAsset) return false;
    }
    return true;
  });
}

export function filterProducts(filters: FilterState) {
  return PRODUCT_RECORDS.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    if (filters.category !== 'all' && item.category !== filters.category) return false;
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchName = item.productName.toLowerCase().includes(q) || item.productNameZh.includes(q);
      const matchTarget = item.targetAudience.toLowerCase().includes(q);
      if (!matchName && !matchTarget) return false;
    }
    return true;
  });
}

export function filterApps(filters: FilterState) {
  return MOBILE_APP_STATS.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      return item.appName.toLowerCase().includes(q);
    }
    return true;
  });
}

export function filterWebsites(filters: FilterState) {
  return WEBSITE_CAPABILITIES.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    return true;
  });
}

export function filterDistributionTalent(filters: FilterState) {
  return DISTRIBUTION_TALENT_RECORDS.filter((item) => {
    if (filters.brand !== 'all' && item.brand !== filters.brand) return false;
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchPart = item.partnerOrInstitution.toLowerCase().includes(q);
      const matchRole = item.targetAudienceOrRole.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchPart && !matchRole) return false;
    }
    return true;
  });
}

export function getKPIMetrics(filters: FilterState) {
  const acts = filterActivities(filters);
  const camps = filterCampaigns(filters);
  const prods = filterProducts(filters);
  const apps = filterApps(filters);

  return {
    relevantDevelopments: acts.length,
    campaignPosts: camps.reduce((sum, c) => sum + c.metrics.postCount, 0),
    productUpdates: prods.length,
    digitalChanges: apps.length + 8, // App releases + Web portals updates
  };
}

// Brand x Month aggregation for Charts (Section 8.2)
export function getBrandMonthlyTrends() {
  const months = ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026'];
  
  return months.map((month) => {
    const pCount = COMPETITOR_ACTIVITIES.filter((a) => a.month === month && a.brand === 'prudential').length +
      CAMPAIGN_RECORDS.filter((c) => c.month === month && c.brand === 'prudential').length;
    
    const aCount = COMPETITOR_ACTIVITIES.filter((a) => a.month === month && a.brand === 'aia').length +
      CAMPAIGN_RECORDS.filter((c) => c.month === month && c.brand === 'aia').length;
      
    const mCount = COMPETITOR_ACTIVITIES.filter((a) => a.month === month && a.brand === 'manulife').length +
      CAMPAIGN_RECORDS.filter((c) => c.month === month && c.brand === 'manulife').length;
      
    const xCount = COMPETITOR_ACTIVITIES.filter((a) => a.month === month && a.brand === 'axa').length +
      CAMPAIGN_RECORDS.filter((c) => c.month === month && c.brand === 'axa').length;

    return {
      month: month.split(' ')[0],
      fullMonth: month,
      Prudential: pCount,
      AIA: aCount,
      Manulife: mCount,
      AXA: xCount,
    };
  });
}

export function getEvidenceById(recordId: string): EvidenceRecord | undefined {
  return EVIDENCE_REPOSITORY.find((e) => e.recordId === recordId);
}

export {
  COMPANIES,
  EVIDENCE_REPOSITORY,
  COMPETITOR_ACTIVITIES,
  CAMPAIGN_RECORDS,
  CONTENT_THEMES,
  getThemeDistribution,
  PRODUCT_RECORDS,
  PRODUCT_CATEGORIES,
  MOBILE_APP_STATS,
  WEBSITE_CAPABILITIES,
  DISTRIBUTION_TALENT_RECORDS,
  DISTRIBUTION_CHANNELS,
  CROSS_MODULE_SYNTHESIS,
  PRUDENTIAL_SWOT,
  STRATEGIC_ACTION_ROADMAP,
  EXECUTIVE_INSIGHTS,
};
