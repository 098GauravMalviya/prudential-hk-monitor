import { CompanyMaster } from '../types';

export const COMPANIES: Record<string, CompanyMaster> = {
  prudential: {
    id: 'prudential',
    name: 'Prudential HK',
    fullName: 'Prudential Hong Kong Limited',
    role: 'Reference brand',
    accentColor: '#ED1B2D', // Prudential Red
    themeColor: 'bg-red-600',
    textColor: 'text-red-700',
    badgeBg: 'bg-red-50 text-red-700 border-red-200',
    badgeBorder: 'border-red-500',
    officialDomain: 'https://www.prudential.com.hk/en/',
    hkEntity: 'Prudential Hong Kong Limited / 保誠保險有限公司',
    officialSocials: {
      facebook: 'https://www.facebook.com/prudentialhk',
      instagram: 'https://www.instagram.com/prudential.hongkong',
      youtube: 'https://www.youtube.com/prudentialhk',
      linkedin: 'https://www.linkedin.com/company/prudential-hong-kong-limited/home/',
    },
    mobileApps: {
      name: 'PRU (formerly Pulse)',
      iosUrl: 'https://apps.apple.com/hk/app/pulse-by-prudential/id1485609386',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.prudential.pulse',
    },
  },
  aia: {
    id: 'aia',
    name: 'AIA Hong Kong',
    fullName: 'AIA International Limited (Hong Kong Branch)',
    role: 'Competitor 1',
    accentColor: '#D31145', // AIA Crimson
    themeColor: 'bg-rose-700',
    textColor: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    badgeBorder: 'border-rose-600',
    officialDomain: 'https://www.aia.com.hk/en/',
    hkEntity: 'AIA International Limited / 友邦保險（國際）有限公司',
    officialSocials: {
      facebook: 'https://www.facebook.com/AIAHongKong/',
      instagram: 'https://www.instagram.com/aiahongkong/',
      youtube: 'https://www.youtube.com/@AIAHongKong/featured',
      linkedin: 'https://www.linkedin.com/company/aia-hong-kong-&-macau/home/',
    },
    mobileApps: {
      name: 'AIA+',
      iosUrl: 'https://apps.apple.com/hk/app/aia/id1527785461',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.aia.hk.aiaplus',
    },
  },
  manulife: {
    id: 'manulife',
    name: 'Manulife HK',
    fullName: 'Manulife (International) Limited',
    role: 'Competitor 2',
    accentColor: '#00A758', // Manulife Green
    themeColor: 'bg-emerald-600',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badgeBorder: 'border-emerald-600',
    officialDomain: 'https://www.manulife.com.hk/en/',
    hkEntity: 'Manulife (International) Limited / 宏利人壽保險（國際）有限公司',
    officialSocials: {
      facebook: 'https://www.facebook.com/manulifehongkong/',
      instagram: 'https://www.instagram.com/manulife_hongkong/',
      youtube: 'https://www.youtube.com/@Manulife_HongKong',
      linkedin: 'https://www.linkedin.com/company/manulife-hong-kong-and-macau/home/',
      wechat: 'https://www.manulife.com.hk/en/individual/wechat.html',
    },
    mobileApps: {
      name: 'Manulife Hong Kong Customer App',
      iosUrl: 'https://apps.apple.com/hk/app/manulife-hong-kong/id1450201633',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.manulife.hk.customer',
    },
  },
  axa: {
    id: 'axa',
    name: 'AXA Hong Kong',
    fullName: 'AXA China Region Insurance Company (Bermuda) Limited / AXA General Insurance HK',
    role: 'Competitor 3',
    accentColor: '#00008F', // AXA Blue
    themeColor: 'bg-blue-800',
    textColor: 'text-blue-800',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
    badgeBorder: 'border-blue-700',
    officialDomain: 'https://www.axa.com.hk/en',
    hkEntity: 'AXA China Region Insurance Company Limited / 安盛保險有限公司',
    officialSocials: {
      facebook: 'https://www.facebook.com/AXAHongKong',
      instagram: 'https://www.instagram.com/axahongkong',
      youtube: 'https://www.youtube.com/c/AXAHongKongVideos',
      linkedin: 'https://www.linkedin.com/company/axahongkong',
    },
    mobileApps: {
      name: 'Emma by AXA',
      iosUrl: 'https://apps.apple.com/hk/app/emma-by-axa/id1453282218',
      androidUrl: 'https://play.google.com/store/apps/details?id=hk.com.axa.emma',
    },
  },
};
