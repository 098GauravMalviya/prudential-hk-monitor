import { MobileAppStats, WebsiteFeatureCapability } from '../types';

export const MOBILE_APP_STATS: MobileAppStats[] = [
  {
    brand: 'prudential',
    appName: 'PRU (formerly Pulse by Prudential)',
    platform: 'iOS',
    latestVersion: 'v4.18.2',
    lastUpdateDate: '2026-09-12',
    rating: 4.4,
    reviewCount: 18450,
    downloadUrl: 'https://apps.apple.com/hk/app/pulse-by-prudential/id1485609386',
    recurringPositiveThemes: [
      'Fast optical receipt OCR for outpatient clinics (<10 min approval)',
      'Clean interface for checking policy details and payment schedules',
      'Informative health assessment quizzes and wellness challenges',
    ],
    recurringNegativeThemes: [
      'Occasional biometric FaceID logout during high server loads',
      'Redirects to external browser for certain complex fund switches',
      'Requires separate credentials for general vs life policies historically',
    ],
    featureChecklist: {
      policyManagement: true,
      claimsSubmissionTracking: true,
      eHealthCard: true,
      medicalNetworkSearch: true,
      wellnessLoyalty: true,
      financialPlanningTools: true,
      aiVirtualAssistant: true,
      telemedicineIntegration: true,
      biometricLogin: true,
    },
    requiresPolicyholderLoginForFullFeatures: true,
  },
  {
    brand: 'aia',
    appName: 'AIA+',
    platform: 'iOS',
    latestVersion: 'v4.8.4',
    lastUpdateDate: '2026-08-11',
    rating: 4.6,
    reviewCount: 32600,
    downloadUrl: 'https://apps.apple.com/hk/app/aia/id1527785461',
    recurringPositiveThemes: [
      'Seamless AIA Vitality step sync and Starbucks/coupon rewards',
      'Instant private hospital pre-admission approval directly in app',
      'Dynamic security QR code on e-Health Card prevents fraud',
    ],
    recurringNegativeThemes: [
      'Large app storage size (~280MB) and battery drain with background step tracking',
      'Strict password reset protocols requiring SMS OTP delays',
      'Push notification frequency perceived as excessive by some users',
    ],
    featureChecklist: {
      policyManagement: true,
      claimsSubmissionTracking: true,
      eHealthCard: true,
      medicalNetworkSearch: true,
      wellnessLoyalty: true,
      financialPlanningTools: true,
      aiVirtualAssistant: true,
      telemedicineIntegration: true,
      biometricLogin: true,
    },
    requiresPolicyholderLoginForFullFeatures: true,
  },
  {
    brand: 'manulife',
    appName: 'Manulife Hong Kong Customer App',
    platform: 'iOS',
    latestVersion: 'v5.2.1',
    lastUpdateDate: '2026-06-20',
    rating: 3.9,
    reviewCount: 14200,
    downloadUrl: 'https://apps.apple.com/hk/app/manulife-hong-kong/id1450201633',
    recurringPositiveThemes: [
      'Clear breakdown of MPF pension fund performance and portfolio allocation',
      'ManuBot AI assistant quickly answers routine balance queries in Cantonese',
      'Straightforward hospital cash claim upload flow',
    ],
    recurringNegativeThemes: [
      'Legacy design elements in certain sub-menus',
      'Slow PDF statement rendering on cellular data connections',
      'Occasional login session timeouts during document uploads',
    ],
    featureChecklist: {
      policyManagement: true,
      claimsSubmissionTracking: true,
      eHealthCard: true,
      medicalNetworkSearch: true,
      wellnessLoyalty: true, // ManulifeMOVE
      financialPlanningTools: true,
      aiVirtualAssistant: true,
      telemedicineIntegration: false, // Redirects to third-party clinic partners
      biometricLogin: true,
    },
    requiresPolicyholderLoginForFullFeatures: true,
  },
  {
    brand: 'axa',
    appName: 'Emma by AXA',
    platform: 'iOS',
    latestVersion: 'v3.6.5',
    lastUpdateDate: '2026-08-04',
    rating: 4.5,
    reviewCount: 19800,
    downloadUrl: 'https://apps.apple.com/hk/app/emma-by-axa/id1453282218',
    recurringPositiveThemes: [
      'Best-in-class integrated telemedicine: video doctor consultation in app with 4-hr drug delivery',
      'Comprehensive Mind Health mental wellness score and therapy booking',
      'Modern, uncluttered aesthetic and intuitive card navigation',
    ],
    recurringNegativeThemes: [
      'Telemedicine doctor availability during Sunday evening peak hours',
      'Requires separate PDF export for cross-border hospital documents',
      'E-claims occasionally prompt for physical receipt follow-up if image is blurry',
    ],
    featureChecklist: {
      policyManagement: true,
      claimsSubmissionTracking: true,
      eHealthCard: true,
      medicalNetworkSearch: true,
      wellnessLoyalty: true,
      financialPlanningTools: false, // Limited in-app investment calculators
      aiVirtualAssistant: true,
      telemedicineIntegration: true,
      biometricLogin: true,
    },
    requiresPolicyholderLoginForFullFeatures: true,
  },
];

export const WEBSITE_CAPABILITIES: WebsiteFeatureCapability[] = [
  {
    brand: 'prudential',
    websiteUrl: 'https://www.prudential.com.hk/en/',
    instantQuotation: true,
    instantPurchaseJourney: true, // Direct online buy for travel, personal accident & youth plans
    productComparisonTool: true,
    customerPortalAccess: true, // PRUAccess
    eClaimsPublicGuidelines: true,
    liveChatbot: true,
    chatbotName: 'Ask PRU / Virtual Assistant',
    telemedicineEcosystem: true,
    bilingualToggle: true, // English & Traditional Chinese (HK)
    simplificationScore: 'High',
    notes: 'Well-structured consumer journeys with dedicated microsites for VHIS, Talent, and Cancer protection. High transparency on claim guides.',
  },
  {
    brand: 'aia',
    websiteUrl: 'https://www.aia.com.hk/en/',
    instantQuotation: true,
    instantPurchaseJourney: true, // AIA Direct online store
    productComparisonTool: true,
    customerPortalAccess: true, // AIA+ Web Portal
    eClaimsPublicGuidelines: true,
    liveChatbot: true,
    chatbotName: 'AIA Assistant',
    telemedicineEcosystem: true,
    bilingualToggle: true,
    simplificationScore: 'High',
    notes: 'Robust interactive premium and retirement calculators. Extensive video tutorials explaining claim procedures and Hospital Authority drug lists.',
  },
  {
    brand: 'manulife',
    websiteUrl: 'https://www.manulife.com.hk/en/',
    instantQuotation: true,
    instantPurchaseJourney: false, // Mostly lead capture forms routed to financial advisors
    productComparisonTool: true,
    customerPortalAccess: true, // Manulife e-Services / MPF Portal
    eClaimsPublicGuidelines: true,
    liveChatbot: true,
    chatbotName: 'ManuBot Online',
    telemedicineEcosystem: false,
    bilingualToggle: true,
    simplificationScore: 'Moderate',
    notes: 'Heavily optimized for MPF fund price performance tables and advisor recruitment, slightly more complex retail product self-discovery.',
  },
  {
    brand: 'axa',
    websiteUrl: 'https://www.axa.com.hk/en',
    instantQuotation: true,
    instantPurchaseJourney: true, // Instant buy for Emma direct plans
    productComparisonTool: true,
    customerPortalAccess: true, // Emma Web
    eClaimsPublicGuidelines: true,
    liveChatbot: true,
    chatbotName: 'Emma Assistant',
    telemedicineEcosystem: true,
    bilingualToggle: true,
    simplificationScore: 'High',
    notes: 'Modern minimalist layout prioritizing GBA medical networks, mental health self-assessments, and instant doctor booking instructions.',
  },
];
