// ============================================================================
// Technical Implementation Brief: Prudential HK Competitive Intelligence Monitor
// Data Models & Entity Types (Sections 4, 7, 8, 11)
// ============================================================================

export type BrandId = 'prudential' | 'aia' | 'manulife' | 'axa';

export type ActivityType =
  | 'Product Launch'
  | 'Strategic Partnership'
  | 'Marketing Campaign'
  | 'Corporate Announcement'
  | 'Service Enhancement'
  | 'Wellness Initiative'
  | 'Agency Initiative'
  | 'Recruitment Signal';

export type ProductCategory =
  | 'Health and medical'
  | 'Critical illness'
  | 'Life protection'
  | 'Retirement'
  | 'Savings and wealth'
  | 'SME / corporate'
  | 'Wellness'
  | 'Digital experience'
  | 'Distribution and talent';

export type ContentTheme =
  | 'Health and wellness'
  | 'Medical/hospitalisation'
  | 'Critical illness'
  | 'Life protection'
  | 'Retirement and wealth planning'
  | 'Family/lifestyle'
  | 'Customer education'
  | 'Corporate/SME insurance'
  | 'Brand awareness'
  | 'Digital services and innovation';

export type PlatformType =
  | 'Official Website'
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'YouTube'
  | 'TikTok'
  | 'WeChat'
  | 'Apple App Store'
  | 'Google Play'
  | 'Meta Ad Library';

export interface CompanyMaster {
  id: BrandId;
  name: string;
  fullName: string;
  role: 'Reference brand' | 'Competitor 1' | 'Competitor 2' | 'Competitor 3';
  accentColor: string;
  themeColor: string;
  textColor: string;
  badgeBg: string;
  badgeBorder: string;
  officialDomain: string;
  hkEntity: string;
  officialSocials: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
    wechat?: string;
  };
  mobileApps: {
    name: string;
    iosUrl: string;
    androidUrl: string;
  };
}

// 8.1 & 8.4: Granular Evidence Record
export interface EvidenceRecord {
  recordId: string;
  brand: BrandId;
  module: 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';
  activityType: ActivityType;
  topicCategory: ProductCategory | ContentTheme | string;
  title: string;
  description: string;
  originalContentZh: string; // Original Hong Kong Traditional Chinese
  translatedSummaryEn: string; // Standard English translation/summary
  publicationDate: string; // YYYY-MM-DD
  captureTimestamp: string; // ISO datetime
  sourceName: string;
  sourceUrl: string;
  evidenceRef: string;
  hkMarketRelevance: string;
  productCampaignAssociation?: string;
  confidence: 'High (Official Source)' | 'Medium (Corroborated Media)' | 'Verified Regulatory';
}

// Module 1: Competitor Activity Record
export interface CompetitorActivityRecord {
  id: string;
  evidenceId: string;
  brand: BrandId;
  activityDate: string; // YYYY-MM-DD
  month: string; // e.g. "Aug 2026"
  quarter: string; // e.g. "Q3 2026"
  title: string;
  activityType: ActivityType;
  category: ProductCategory;
  strategicTheme: string;
  description: string;
  hkMarketRelevance: string;
  prudentialRelevance: string; // What this means for Prudential
  threatLevel: 'High' | 'Medium' | 'Low' | 'Neutral';
  sourceUrl: string;
  sourceName: string;
  isNew: boolean;
}

// Module 2: Campaign & Social Record (Granular post-level)
export interface CampaignRecord {
  id: string;
  evidenceId: string;
  brand: BrandId;
  platform: PlatformType;
  postDate: string; // YYYY-MM-DD
  month: string;
  campaignName: string;
  theme: ContentTheme;
  keyMessage: string;
  valueProposition: string;
  cta: string;
  productCategory: ProductCategory;
  format: 'Video' | 'Image Carousel' | 'Single Image' | 'Article/Post' | 'Ad Campaign';
  metrics: {
    postCount: number;
    likes: number | null;
    comments: number | null;
    shares: number | null;
    views: number | null;
    followersAtTime: number | null;
    followerEngagementRate: number | null;
    reachOrImpressions: number | null;
    isUnavailable?: boolean;
  };
  creativeAsset: {
    headline: string;
    subheadlineZh: string;
    summaryEn: string;
    visualPreviewDesc: string;
    tagline: string;
  };
  sourceUrl: string;
}

// Module 3: Product Record
export interface ProductRecord {
  id: string;
  evidenceId: string;
  brand: BrandId;
  productName: string;
  productNameZh: string;
  category: ProductCategory;
  launchDate: string;
  productType: string;
  targetAudience: string;
  mainBenefits: string[];
  coverageHighlights: string[];
  exclusionsOrEligibility: string;
  differentiatingClaims: string[];
  promotionalOffer: string;
  brochureUrl: string;
  officialProductPage: string;
  supportingAnnouncementUrl: string;
  prudentialComparison: {
    prudentialEquivalentProduct: string;
    keyDifferences: string;
    competitorAdvantage: string;
    prudentialAdvantage: string;
    recommendedInvestigation: string;
  };
}

// Module 4: Digital Experience Record
export interface MobileAppStats {
  brand: BrandId;
  appName: string;
  platform: 'iOS' | 'Android';
  latestVersion: string;
  lastUpdateDate: string;
  rating: number | null;
  reviewCount: number | null;
  downloadUrl: string;
  recurringPositiveThemes: string[];
  recurringNegativeThemes: string[];
  featureChecklist: {
    policyManagement: boolean;
    claimsSubmissionTracking: boolean;
    eHealthCard: boolean;
    medicalNetworkSearch: boolean;
    wellnessLoyalty: boolean;
    financialPlanningTools: boolean;
    aiVirtualAssistant: boolean;
    telemedicineIntegration: boolean;
    biometricLogin: boolean;
  };
  requiresPolicyholderLoginForFullFeatures: boolean;
}

export interface WebsiteFeatureCapability {
  brand: BrandId;
  websiteUrl: string;
  instantQuotation: boolean;
  instantPurchaseJourney: boolean;
  productComparisonTool: boolean;
  customerPortalAccess: boolean;
  eClaimsPublicGuidelines: boolean;
  liveChatbot: boolean;
  chatbotName: string;
  telemedicineEcosystem: boolean;
  bilingualToggle: boolean;
  simplificationScore: 'High' | 'Moderate' | 'Complex';
  notes: string;
}

// Module 5: Distribution, Partnerships and Talent Record
export type DistributionChannelType =
  | 'Agency & Adviser'
  | 'Bancassurance'
  | 'Broker & Intermediary'
  | 'Distribution Collaboration'
  | 'Recruitment & Talent';

export interface DistributionTalentRecord {
  id: string;
  evidenceId: string;
  brand: BrandId;
  date: string;
  month: string;
  channelType: DistributionChannelType;
  title: string;
  partnerOrInstitution: string;
  targetAudienceOrRole: string;
  departmentCategory?: 'Digital, Analytics & Tech' | 'Product & Actuarial' | 'Agency & Advisory' | 'HNW & Private Wealth';
  description: string;
  indicativeSignalCaution: string;
  hkMarketRelevance: string;
  prudentialImplication: string;
  sourceUrl: string;
  sourceName: string;
}

// Module 6: Cross-Module Synthesis & Strategic SWOT
export interface CrossModuleSynthesis {
  id: string;
  competitor: BrandId;
  strategicThrustTitle: string;
  convergingModules: {
    m1Activity: string;
    m2Campaign: string;
    m3Product: string;
    m4Digital: string;
    m5Distribution: string;
  };
  strategicIntentInterpretation: string;
  threatLevel: 'High' | 'Medium' | 'Emerging';
  prudentialCounterStrategy: string;
  supportingEvidenceIds: string[];
}

export interface SWOTItem {
  id: string;
  title: string;
  description: string;
  evidenceRef: string;
  actionableStep?: string;
  competitorsInvolved: BrandId[];
}

export interface PrudentialSWOT {
  strengths: SWOTItem[];
  weaknesses: SWOTItem[];
  opportunities: SWOTItem[];
  threats: SWOTItem[];
}

// Section 11.4: Key Insight Record Structure
export interface ExecutiveInsight {
  id: string;
  title: string;
  themeCategory: string;
  primaryCompetitor: BrandId;
  priorityRank: number;
  finding: string;
  evidence: string;
  comparisonWithPrudential: string;
  implicationForPrudential: string;
  recommendedAction: string;
  supportingSourceIds: string[];
  confidence: 'High' | 'Medium';
}

// Filter State Model
export interface FilterState {
  dateRange: 'all-12m' | 'last-90d' | 'q3-2026' | 'q2-2026' | 'q1-2026' | 'q4-2025';
  brand: 'all' | BrandId;
  module: 'all' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';
  category: 'all' | ProductCategory;
  platform: 'all' | PlatformType;
  searchQuery: string;
}
