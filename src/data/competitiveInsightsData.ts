import { CrossModuleSynthesis, PrudentialSWOT, BrandId } from '../types';

export const CROSS_MODULE_SYNTHESIS: CrossModuleSynthesis[] = [
  {
    id: 'SYNTH-001',
    competitor: 'aia',
    strategicThrustTitle: 'AIA Oncology & Price-Accessible Critical Illness Thrust',
    convergingModules: {
      m1Activity: 'Announced participation in Insurance Authority AI Cohort (Apr 2026) and standalone drug focus.',
      m2Campaign: 'High-engagement social campaign framing non-formulary cancer drugs as a ruinous family expense (Oct 2026).',
      m3Product: 'Launched FutureShield Cancer Drug Plan covering up to HK$5,000,000 in self-financed drugs from HK$1/day (Oct 2026).',
      m4Digital: 'AIA+ v4.8 rolled out real-time private hospital admission pre-authorisation and QR e-Health card (Aug 2026).',
      m5Distribution: 'AIA Premier Academy expanded to recruit 1,500 young bilingual consultants for MDRT qualification (Aug 2026).',
    },
    strategicIntentInterpretation:
      'AIA is executing an aggressive wedge strategy: using micro-cost cancer drug insurance (HK$30/mo) as an acquisition engine to capture young and middle-income families, subsequently cross-selling whole-life protection through its elite MDRT agency.',
    threatLevel: 'High',
    prudentialCounterStrategy:
      'Prudential HK Product Team should formulate an unbundled "PRUOncology Direct" rider to attach to basic VHIS policies, neutralizing AIA’s price hook while protecting core PRUHealth multi-care CI bundles.',
    supportingEvidenceIds: ['EV-AIA-002', 'EV-AIA-003', 'EV-AIA-004', 'EV-AIA-005', 'EV-DIS-AIA-001'],
  },
  {
    id: 'SYNTH-002',
    competitor: 'axa',
    strategicThrustTitle: 'AXA GBA Healthcare & Closed-Loop Telemedicine Ecosystem',
    convergingModules: {
      m1Activity: 'Completed full corporate re-domiciliation to Hong Kong to eliminate offshore jurisdiction friction (Jan 2026).',
      m2Campaign: 'Viral "Make Time for Me-Time" Mind Health campaign generating 245,000+ views on YouTube (May 2026).',
      m3Product: 'Debuted GBA EverGuard Medical with Grade 3A hospital direct billing & post-discharge Traditional Chinese Medicine (Sep 2026).',
      m4Digital: 'Emma by AXA v3.6 integrated direct video doctor consultations and 4-hour home medication delivery in HK (Aug 2026).',
      m5Distribution: 'Partnered with local pharmacy courier networks and established dedicated family office desk in Two ifc (Jun-Aug 2026).',
    },
    strategicIntentInterpretation:
      'AXA is differentiating through superior healthcare customer convenience: building a closed-loop digital outpatient journey in HK while anchoring cross-border medical coverage in Guangdong Province.',
    threatLevel: 'High',
    prudentialCounterStrategy:
      'Accelerate deployment of MediConCen cashless outpatient billing directly into the PRU Mobile App, and partner with accredited HK/Shenzhen TCM clinics to neutralize AXA’s rehabilitation edge.',
    supportingEvidenceIds: ['EV-AXA-001', 'EV-AXA-004', 'EV-AXA-005', 'EV-AXA-003', 'EV-DIS-AXA-002'],
  },
  {
    id: 'SYNTH-003',
    competitor: 'manulife',
    strategicThrustTitle: 'Manulife Silver Longevity & Premium Financing Arbitrage',
    convergingModules: {
      m1Activity: 'Partnered with Standard Chartered HK to deploy automated digital group medical onboarding for SMEs (Aug 2026).',
      m2Campaign: 'Annual Hong Kong Retirement Readiness Index 2026 campaign warning of inflation eroding pension savings (Jul 2026).',
      m3Product: 'Rolled out GoldenStart immediate annuity with dementia top-up, and Genesis Centurion with 85% Day-1 surrender value (Jan-Apr 2026).',
      m4Digital: 'ManuBot bilingual AI virtual assistant deployed inside customer app v5.2 for instant policy inquiries (Jun 2026).',
      m5Distribution: 'Mandatory silver economy re-skilling for 11,000 MPF agents and enhanced broker commission financing incentives (Jun-Aug 2026).',
    },
    strategicIntentInterpretation:
      'Manulife is monetizing its dominant #1 Hong Kong MPF retirement base by funnelling maturing pension balances into immediate annuities, while capturing broker volume through unmatched Day-1 loan liquidity.',
    threatLevel: 'High',
    prudentialCounterStrategy:
      'Equip agency leaders and external brokers with side-by-side dividend fulfillment audits proving Prudential Everlasting Wealth delivers superior compound IRR compared to Manulife’s tranches.',
    supportingEvidenceIds: ['EV-MAN-001', 'EV-MAN-002', 'EV-MAN-003', 'EV-MAN-004', 'EV-DIS-MAN-001'],
  },
  {
    id: 'SYNTH-004',
    competitor: 'prudential',
    strategicThrustTitle: 'Prudential First-Mover Play in TTPS Talent & Cashless Billing',
    convergingModules: {
      m1Activity: 'Pioneered tripartite cashless outpatient direct billing with MediConCen and Mastercard virtual cards (Oct 2026).',
      m2Campaign: 'High-visibility "Hear Your Health" preventive screening campaign in Central Hong Kong MTR stations (May 2026).',
      m3Product: 'Launched PRUChoice Hong Kong Stay (talent scheme plan) and PRUChoice Power Up Go (youth/gig economy) (Mar-Aug 2026).',
      m4Digital: 'PRU Mobile App upgraded with OCR receipt scanning (<10 min approval) and medical network GPS discovery (Jul 2026).',
      m5Distribution: 'Equipped 20,000+ consultants with PRUForce AI Copilot and placed wealth teams in 25 SCB priority branches (Jul-Sep 2026).',
    },
    strategicIntentInterpretation:
      'Prudential has successfully seized the high-earning incoming talent demographic under HK government schemes, while laying the infrastructure for zero-out-of-pocket clinic visits.',
    threatLevel: 'Emerging',
    prudentialCounterStrategy:
      'Move swiftly to secure institutional distribution contracts with talent relocation firms and mainland alumni associations before AIA and Manulife launch copycat newcomer packages.',
    supportingEvidenceIds: ['EV-PRU-001', 'EV-PRU-002', 'EV-PRU-003', 'EV-PRU-004', 'EV-DIS-PRU-001'],
  },
];

export const PRUDENTIAL_SWOT: PrudentialSWOT = {
  strengths: [
    {
      id: 'S-01',
      title: 'First-Mover Proposition in Top Talent Scheme (TTPS)',
      description: 'PRUChoice Hong Kong Stay is the only dedicated retail proposition in HK tailored specifically for incoming talent under government schemes, paired with the PruLivingHK concierge platform.',
      evidenceRef: 'EV-PRU-002',
      actionableStep: 'Fortify talent agency and university relocation partnerships.',
      competitorsInvolved: ['prudential'],
    },
    {
      id: 'S-02',
      title: 'Landmark Cashless Direct Billing via Mastercard Virtual Cards',
      description: 'Collaboration with MediConCen and Mastercard establishes the market’s first automated outpatient pre-authorisation and instant virtual credit card clinic settlement.',
      evidenceRef: 'EV-PRU-001',
      actionableStep: 'Scale clinic terminal onboarding to 1,000+ private practices.',
      competitorsInvolved: ['prudential'],
    },
    {
      id: 'S-03',
      title: 'Historical Dividend Fulfillment Credibility',
      description: 'Prudential retains industry-leading historical fulfillment ratios on participating wealth plans, creating deep trust among Mainland Chinese visitors (MCV).',
      evidenceRef: 'EV-REG-001',
      actionableStep: 'Highlight audited fulfillment track records in broker toolkits.',
      competitorsInvolved: ['manulife', 'aia'],
    },
    {
      id: 'S-04',
      title: 'AI Agency Enablement with PRUForce Copilot',
      description: 'Equipping 20,000+ financial consultants with AI quotation and compliance tools improves client response speed during in-person consultations.',
      evidenceRef: 'EV-DIS-PRU-001',
      actionableStep: 'Expand automated bilingual recommendation letter generation.',
      competitorsInvolved: ['prudential', 'aia'],
    },
  ],
  weaknesses: [
    {
      id: 'W-01',
      title: 'Lack of Unbundled Micro-Premium Cancer Drug Plan',
      description: 'Prudential packages oncology coverage inside comprehensive whole-life critical illness policies, exposing a gap against AIA FutureShield (HK$1/day standalone drug coverage).',
      evidenceRef: 'EV-AIA-002',
      actionableStep: 'Develop standalone PRUOncology rider for VHIS policyholders.',
      competitorsInvolved: ['aia'],
    },
    {
      id: 'W-02',
      title: 'Absence of Automated Neurodegenerative Payout Triggers in QDAP Annuities',
      description: 'Both AIA (EverBliss) and Manulife (GoldenStart) offer automatic 50% payout boosts for Alzheimer’s/Parkinson’s; Prudential’s QDAP lacks this cognitive illness trigger.',
      evidenceRef: 'EV-AIA-001',
      actionableStep: 'Introduce a "Dementia Care Top-up" option on PRUDeferred Annuity.',
      competitorsInvolved: ['aia', 'manulife'],
    },
    {
      id: 'W-03',
      title: 'In-App Telemedicine Medicine Delivery Gap',
      description: 'AXA’s Emma app delivers video doctor consultations with 4-hour home medication delivery, whereas Prudential’s telemedicine redirects to third-party provider platforms.',
      evidenceRef: 'EV-AXA-005',
      actionableStep: 'Integrate direct pharmacy delivery courier APIs into PRU App.',
      competitorsInvolved: ['axa'],
    },
    {
      id: 'W-04',
      title: 'Day-1 Cash Surrender Values in Premium Financing',
      description: 'Manulife Genesis Centurion offers up to 85% guaranteed cash value on Day 1, making bank financing loan calculations more attractive to private wealth brokers.',
      evidenceRef: 'EV-MAN-001',
      actionableStep: 'Review premium financing tranches for ultra-high-net-worth policies.',
      competitorsInvolved: ['manulife'],
    },
  ],
  opportunities: [
    {
      id: 'O-01',
      title: 'Greater Bay Area (GBA) Traditional Chinese Medicine (TCM) Integration',
      description: 'Consumer demand for post-surgery TCM rehabilitation is accelerating across HK and Guangdong; incorporating certified TCM clinics into PRUMedical direct billing addresses a major lifestyle preference.',
      evidenceRef: 'EV-AXA-001',
      actionableStep: 'Certify 50 top TCM bone-setting and acupuncture clinics in HK/Shenzhen.',
      competitorsInvolved: ['axa'],
    },
    {
      id: 'O-02',
      title: 'Gen Z Modular Subscription Cross-Selling',
      description: 'PRUChoice Power Up Go successfully engages gig workers and younger adults; create automated upgrade paths to full VHIS when policyholders turn 30.',
      evidenceRef: 'EV-PRU-003',
      actionableStep: 'Automate lifecycle email/app nudges offering guaranteed VHIS conversion.',
      competitorsInvolved: ['prudential'],
    },
    {
      id: 'O-03',
      title: 'Cross-Border Wealth Desk Expansion in GBA Hubs',
      description: 'Build on Parkway Shanghai direct billing success by expanding dedicated medical concierge lounges in Guangzhou, Shenzhen, and Zhuhai.',
      evidenceRef: 'EV-DIS-PRU-002',
      actionableStep: 'Partner with Tier 3A hospitals in Guangdong for instant cashless admissions.',
      competitorsInvolved: ['axa', 'aia'],
    },
    {
      id: 'O-04',
      title: 'Tax Season QDAP Cognitive Health Campaign',
      description: 'Promote tax-deductible annuities paired with free cognitive health screenings for aging parents ahead of the March Hong Kong tax filing deadline.',
      evidenceRef: 'EV-AIA-001',
      actionableStep: 'Launch "Protect Family Memories" seasonal campaign.',
      competitorsInvolved: ['aia', 'manulife'],
    },
  ],
  threats: [
    {
      id: 'T-01',
      title: 'Manulife Automated MPF Retirement Account Rollover Pipeline',
      description: 'Manulife’s 11,000 advisers systematically transition aging MPF account balances into GoldenStart immediate annuities upon age 65, creating an internal captive pipeline.',
      evidenceRef: 'EV-DIS-MAN-001',
      actionableStep: 'Create competitive MPF-to-Annuity cash rebate incentives for transfers.',
      competitorsInvolved: ['manulife'],
    },
    {
      id: 'T-02',
      title: 'AIA & BEA In-App Digital Bancassurance Exclusivity',
      description: 'AIA’s deep digital integration inside Bank of East Asia’s Cyberbanking app creates seamless digital conversion across 60+ HK branches without advisor intervention.',
      evidenceRef: 'EV-DIS-AIA-002',
      actionableStep: 'Accelerate digital self-service policy sales on Standard Chartered HK app.',
      competitorsInvolved: ['aia'],
    },
    {
      id: 'T-03',
      title: 'AIA Price Disruption in Critical Illness Category',
      description: 'FutureShield cancer drug policy threatens to degrade consumer willingness to purchase full-priced comprehensive critical illness plans.',
      evidenceRef: 'EV-AIA-002',
      actionableStep: 'Campaign on the difference between drug reimbursement and multi-care cash.',
      competitorsInvolved: ['aia'],
    },
    {
      id: 'T-04',
      title: 'AXA Corporate Domiciliation & High-Net-Worth Family Office Pull',
      description: 'AXA’s completed re-domiciliation to HK and physical family office center in Two ifc attracts substantial capital under the Capital Investment Entrant Scheme.',
      evidenceRef: 'EV-AXA-003',
      actionableStep: 'Enhance Prudential Opus private client privileges in Central Hong Kong.',
      competitorsInvolved: ['axa'],
    },
  ],
};

export const STRATEGIC_ACTION_ROADMAP = [
  {
    phase: 'Immediate (0 – 3 Months)',
    badge: 'Quick Wins',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    actions: [
      {
        action: 'Design "PRUOncology Direct" Standalone Cancer Drug Rider',
        objective: 'Neutralize AIA FutureShield ($1/day) without cannibalizing full CI plans.',
        targetModule: 'Module 3: Products',
        owner: 'Product Development & Actuarial',
      },
      {
        action: 'Integrate MediConCen Outpatient Booking in PRU Mobile App',
        objective: 'Expose cashless direct billing directly to retail customers on iOS and Android.',
        targetModule: 'Module 4: Digital',
        owner: 'Digital Customer Experience & IT',
      },
      {
        action: 'Launch TTPS Talent Relocation Channel Incentives',
        objective: 'Lock in incoming talent under government schemes via broker tie-ups.',
        targetModule: 'Module 5: Distribution',
        owner: 'Partnership Distribution',
      },
    ],
  },
  {
    phase: 'Medium Term (3 – 6 Months)',
    badge: 'Tactical Expansion',
    badgeColor: 'bg-blue-100 text-blue-800',
    actions: [
      {
        action: 'Introduce Dementia Care Income Booster on PRUDeferred Annuity',
        objective: 'Counter AIA EverBliss and Manulife GoldenStart cognitive illness features ahead of tax season.',
        targetModule: 'Module 3: Products',
        owner: 'Wealth & Retirement Actuarial',
      },
      {
        action: 'Accredit Traditional Chinese Medicine (TCM) Clinic Direct Billing',
        objective: 'Match AXA GBA EverGuard post-discharge acupuncture and herbal therapy coverage.',
        targetModule: 'Module 3 & 4',
        owner: 'Medical Network Operations',
      },
      {
        action: 'Scale Standard Chartered Priority Banking Digital Binding',
        objective: 'Match AIA-BEA in-app mobile banking bancassurance journeys.',
        targetModule: 'Module 5: Distribution',
        owner: 'Bancassurance Channel Management',
      },
    ],
  },
  {
    phase: 'Strategic Horizon (6 – 12 Months)',
    badge: 'Defensive Moats',
    badgeColor: 'bg-purple-100 text-purple-800',
    actions: [
      {
        action: 'Deploy Proprietary Telemedicine with 3-Hour Drug Courier in HK',
        objective: 'Surpass Emma by AXA (4-hour delivery) in customer-facing outpatient convenience.',
        targetModule: 'Module 4: Digital',
        owner: 'Health Ecosystem Strategy',
      },
      {
        action: 'High-Net-Worth Premium Financing Tranche Review for PRUWealth',
        objective: 'Compete directly with Manulife’s 85% Day-1 cash surrender ratio with private banks.',
        targetModule: 'Module 3: Products',
        owner: 'High-Net-Worth Opus Desk',
      },
      {
        action: 'Expanded Greater Bay Area Hospital Direct Billing Corridor',
        objective: 'Extend cashless hospital admissions from Parkway Shanghai to 30 Tier 3A hospitals in Guangdong.',
        targetModule: 'Module 1 & 5',
        owner: 'Regional Medical Strategy',
      },
    ],
  },
];
