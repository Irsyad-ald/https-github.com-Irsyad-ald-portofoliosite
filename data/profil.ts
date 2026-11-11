/**
 * ==============================================================================
 * MASTER DATA PORTOFOLIO (data/profil.ts)
 * ==============================================================================
 * Pusat konfigurasi data profil lengkap untuk: AHMAD IRSYAD ALD
 * 100% Bahasa Indonesia
 * ==============================================================================
 */

export interface LogoConfig {
  initial: string
  scrolled: string
}

export interface PersonalInfo {
  fullName: string
  firstName: string
  lastName: string
  nickName: string
  birthDate: string
  logo: LogoConfig
  jobTitle: string
  company: string
  yearStarted: string
  location: string
  email: string
  skills: string[]
  bioLead: string[]
  bioLeadMobile: string[]
  bioStory: string
  images: {
    introDesktop: string
    introMobile: string
  }
}

export interface SocialLinks {
  twitter: string
  github: string
  codepen: string
  linkedin: string
  email: string
}

export interface ContactCardItem {
  list01: { link: string; text: string }
  list02: { link: string; text: string }
  list03: { link: string; text: string }
  mainTitle: {
    title: string
    link: string
    subtitle: string
  }
}

export interface AwardItem {
  group: string
  title: string
  rank: string
  date: string
  modifier: string
}

export interface ProjectItem {
  id: string
  title: { full: string; short: string }
  desc: string
  siteColor: {
    bodyContentsColor: string
    allTextColor: string
    mvTextColor: string
    shadowColor: string
  }
  siteLink: string
  client: string
  freeArea: string
  heroImg: {
    pc: { url: string; width: number; height: number }
    sp: { url: string; width: number; height: number }
  }
  hambergerMenuImg: {
    url: string
    width: number
    height: number
  }
  movie: {
    pc: { url: string }
    sp: { url: string }
  }
  contentsImg: Array<{
    fieldId: string
    object: { url: string; width: number; height: number }
  }>
  aboutImages: {
    img01: { url: string; width: number; height: number }
    img02: { url: string; width: number; height: number }
  }
  detailsMainTextPc: { fieldId: string; text01: string; text02: string }
  detailsMainDescPc: { fieldId: string; text01: string }
  detailsMainTextSp: { fieldId: string; text01: string; text02: string }
  detailsMainDescSp: { fieldId: string; text01: string }
  projectNum: { rotate: number; xspeed: number; yspeed: number }
  pickup: {
    pickupFlag: boolean
    text: Array<{ fieldId: string; text01: string; text02: string }>
    title: Array<{ fieldId: string; text01: string; text02: string }>
  }
}

export const personalInfo: PersonalInfo = {
  // Identitas Utama
  fullName: 'AHMAD IRSYAD ALD',
  firstName: 'AHMAD',
  lastName: 'IRSYAD ALD',
  nickName: 'AIRSYAD',
  birthDate: '1996',
  logo: {
    initial: 'AHMAD IRSYAD ALD',
    scrolled: 'ALD',
  },

  // Peran, Domisili & Afiliasi
  jobTitle: 'PENGEMBANG WEB KREATIF & REKAYASAWAN TEKNOLOGI',
  company: 'INDONESIA',
  yearStarted: '2020',
  location: 'INDONESIA',
  email: 'ahmadirsyadald@gmail.com',

  // Keahlian & Teknologi Utama
  skills: [
    'HTML / CSS / TYPESCRIPT',
    'VUE / NUXT / THREE.JS',
    'GSAP / TAILWIND CSS',
  ],

  // Narasi Hero / Tentang Saya (100% Bahasa Indonesia Profesional & Estetis)
  bioLead: [
    'HALO, SAYA BERDEDIKASI MEMBANGUN',
    'PENGALAMAN DIGITAL YANG BERSIH, INTER',
    'AKTIF, DAN BERPERFORMA TINGGI DENGAN',
    'PERHATIAN PENUH PADA DETAIL ESTETIKA',
    'SERTA STANDAR WEB MODERN.',
  ],
  bioLeadMobile: [
    'HALO! SAYA FOKUS',
    'MEMBANGUN PENGALAMAN',
    'DIGITAL YANG BERSIH,',
    'INTERAKTIF & HALUS',
    'DENGAN DETAIL TINGGI',
    'PADA SETIAP PIXEL.',
  ],
  bioStory:
    'Berawal dari antusiasme mendalam terhadap cara visual estetik bertemu dengan kode tangguh di web modern, saya konsisten mengeksplorasi interaksi kreatif, WebGL, dan animasi yang mengalir halus. Fokus utama saya adalah merancang pengalaman digital berstandar tinggi yang tidak cuma memikat mata, tetapi juga menghadirkan performa cepat serta alur kerja yang rapi. Terbuka untuk diskusi ide, kolaborasi proyek inovatif, maupun peluang proyek lepas!',

  // Aset gambar utama
  images: {
    introDesktop: '/images/intro.webp',
    introMobile: '/images/intro-sp.webp',
  },
}

export const socialLinks: SocialLinks = {
  twitter: 'https://twitter.com/ahmadirsyadald',
  github: 'https://github.com/ahmadirsyadald',
  codepen: 'https://codepen.io/ahmadirsyadald',
  linkedin: 'https://linkedin.com/in/ahmadirsyadald',
  email: 'mailto:ahmadirsyadald@gmail.com',
}

/**
 * Kartu Kontak & Kolaborasi (Section Footer)
 */
export const contacts: ContactCardItem[] = [
  {
    list01: { link: 'https://github.com/ahmadirsyadald', text: 'GITHUB' },
    list02: { link: 'https://twitter.com/ahmadirsyadald', text: 'TWITTER' },
    list03: { link: 'https://codepen.io/ahmadirsyadald', text: 'CODEPEN' },
    mainTitle: {
      title: 'AHMAD IRSYAD ALD',
      link: 'mailto:ahmadirsyadald@gmail.com',
      subtitle: 'DIRANCANG OLEH (PENGEMBANG WEB KREATIF)',
    },
  },
  {
    list01: { link: 'mailto:ahmadirsyadald@gmail.com', text: 'KIRIM EMAIL' },
    list02: { link: 'https://linkedin.com/in/ahmadirsyadald', text: 'LINKEDIN' },
    list03: { link: 'https://instagram.com/ahmadirsyadald', text: 'INSTAGRAM' },
    mainTitle: {
      title: 'MARI BERKOLABORASI',
      link: 'mailto:ahmadirsyadald@gmail.com',
      subtitle: 'TERSEDIA UNTUK PROYEK LEPAS & KERJA SAMA TERPILIH',
    },
  },
]

/**
 * Riwayat Penghargaan & Pencapaian Industri
 */
export const awards: AwardItem[] = [
  { group: 'AWWWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'HONORABLE MENTION', date: '2024.03', modifier: '01' },
  { group: 'AWWWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'MOBILE EXCELLENCE', date: '2024.03', modifier: '02' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'SPECIAL KUDOS', date: '2024.03', modifier: '03' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'UI DESIGN AWARD', date: '2024.03', modifier: '04' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'UX DESIGN AWARD', date: '2024.03', modifier: '05' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'INNOVATION AWARD', date: '2024.03', modifier: '06' },
  { group: 'CSS WINNER', title: 'Portofolio Ahmad Irsyad Ald', rank: 'SITE OF THE DAY', date: '2024.03', modifier: '07' },
]

/**
 * 7 Proyek Unggulan (Karya Pilihan) dengan Copywriting Bahasa Indonesia
 */
export const projects: ProjectItem[] = [
  {
    id: 'asovision',
    title: { full: 'ASOVISION', short: 'ASO' },
    desc: 'PENGALAMAN WEB RESMI DIVISI BISNIS INOVATIF BANDAI',
    siteColor: {
      bodyContentsColor: '#12131C',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#1a1c29',
    },
    siteLink: 'https://asovision.com',
    client: 'BANDAI CO., LTD.',
    freeArea: 'Platform digital resmi divisi hiburan inovatif Bandai dengan arsitektur interaktif dan eksplorasi WebGL kelas dunia.',
    heroImg: {
      pc: { url: '/images/poster-asovision.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-asovision.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-asovision.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/asovision.mp4' },
      sp: { url: '/movie/asovision.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-asovision.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-asovision.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-asovision.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'ASOVISION', text02: 'HIBURAN' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'DIVISI BISNIS INOVATIF BANDAI' },
    detailsMainTextSp: { fieldId: 'text', text01: 'ASOVISION', text02: 'HIBURAN' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'DIVISI BISNIS INOVATIF BANDAI' },
    projectNum: { rotate: -6, xspeed: 0.12, yspeed: -0.15 },
    pickup: {
      pickupFlag: true,
      text: [{ fieldId: 'text', text01: 'PUSAT KREATIF', text02: 'SITUS RESMI' }],
      title: [{ fieldId: 'title', text01: 'ASOVISION', text02: 'BANDAI' }],
    },
  },
  {
    id: 'basta',
    title: { full: 'BASTA', short: 'BST' },
    desc: 'SITUS PAMER KARYA STUDIO PRODUKSI KREATIF',
    siteColor: {
      bodyContentsColor: '#1A181B',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#2b262d',
    },
    siteLink: 'https://basta.co.jp',
    client: 'BASTA INC.',
    freeArea: 'Portofolio dan identitas interaktif agensi kreatif digital dengan desain gerak presisi dan tata letak dinamis.',
    heroImg: {
      pc: { url: '/images/poster-basta.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-basta.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-basta.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/basta.mp4' },
      sp: { url: '/movie/basta.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-basta.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-basta.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-basta.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'BASTA', text02: 'STUDIO KREATIF' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'IDENTITAS DIGITAL & INTERAKSI' },
    detailsMainTextSp: { fieldId: 'text', text01: 'BASTA', text02: 'STUDIO KREATIF' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'IDENTITAS DIGITAL & INTERAKSI' },
    projectNum: { rotate: 8, xspeed: -0.14, yspeed: 0.18 },
    pickup: {
      pickupFlag: true,
      text: [{ fieldId: 'text', text01: 'STUDIO PRODUKSI', text02: 'PAMER KARYA' }],
      title: [{ fieldId: 'title', text01: 'BASTA', text02: 'STUDIO' }],
    },
  },
  {
    id: 'frontier',
    title: { full: 'FRONTIER', short: 'FRN' },
    desc: 'PLATFORM INTERAKTIF REKRUTMEN & BRAND PERUSAHAAN',
    siteColor: {
      bodyContentsColor: '#0E1726',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#162238',
    },
    siteLink: 'https://frontier-direct.co.jp',
    client: 'FRONTIER CORP.',
    freeArea: 'Pengalaman rekrutmen interaktif yang imersif dan dinamis untuk menjangkau talenta kreatif masa depan.',
    heroImg: {
      pc: { url: '/images/poster-frontier.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-frontier.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-frontier.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/frontier.mp4' },
      sp: { url: '/movie/frontier.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-frontier.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-frontier.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-frontier.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'FRONTIER', text02: 'PENGALAMAN BRAND' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'REKRUTMEN & WEB INTERAKTIF' },
    detailsMainTextSp: { fieldId: 'text', text01: 'FRONTIER', text02: 'PENGALAMAN BRAND' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'REKRUTMEN & WEB INTERAKTIF' },
    projectNum: { rotate: -4, xspeed: 0.15, yspeed: -0.12 },
    pickup: {
      pickupFlag: true,
      text: [{ fieldId: 'text', text01: 'BRAND PERUSAHAAN', text02: 'PENGALAMAN' }],
      title: [{ fieldId: 'title', text01: 'FRONTIER', text02: 'KORPORASI' }],
    },
  },
  {
    id: 'ketakuma',
    title: { full: 'KETAKUMA', short: 'KTK' },
    desc: 'SITUS PROMOSI RESMI MERCHANDISE KETAKUMA',
    siteColor: {
      bodyContentsColor: '#1F1A14',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#2b2319',
    },
    siteLink: 'https://ketakuma.jp',
    client: 'KETAKUMA PROJECT',
    freeArea: 'Web portal interaktif untuk karakter animasi populer dengan sentuhan mikro animasi yang ceria dan responsif.',
    heroImg: {
      pc: { url: '/images/poster-ketakuma.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-ketakuma.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-ketakuma.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/ketakuma.mp4' },
      sp: { url: '/movie/ketakuma.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-ketakuma.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-ketakuma.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-ketakuma.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'KETAKUMA', text02: 'PROMOSI RESMI' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'SITUS PROMOSI MERCHANDISE' },
    detailsMainTextSp: { fieldId: 'text', text01: 'KETAKUMA', text02: 'PROMOSI RESMI' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'SITUS PROMOSI MERCHANDISE' },
    projectNum: { rotate: 10, xspeed: -0.16, yspeed: 0.14 },
    pickup: {
      pickupFlag: false,
      text: [{ fieldId: 'text', text01: 'PORTAL KARAKTER', text02: 'SITUS RESMI' }],
      title: [{ fieldId: 'title', text01: 'KETAKUMA', text02: 'ANIMASI' }],
    },
  },
  {
    id: 'mtrust',
    title: { full: 'M TRUST', short: 'MTR' },
    desc: 'SITUS KORPORAT PROPERTI DENGAN PANDANGAN MASA DEPAN',
    siteColor: {
      bodyContentsColor: '#121E1E',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#172B2B',
    },
    siteLink: 'https://m-trust.co.jp',
    client: 'M TRUST CO., LTD.',
    freeArea: 'Website korporat properti yang mengedepankan kepercayaan, elegansi arsitektural, dan visual flow.',
    heroImg: {
      pc: { url: '/images/poster-mtrust.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-mtrust.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-mtrust.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/mtrust.mp4' },
      sp: { url: '/movie/mtrust.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-mtrust.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-mtrust.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-mtrust.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'M TRUST', text02: 'PROPERTI' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'SITUS KORPORAT RESMI' },
    detailsMainTextSp: { fieldId: 'text', text01: 'M TRUST', text02: 'PROPERTI' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'SITUS KORPORAT RESMI' },
    projectNum: { rotate: -8, xspeed: 0.11, yspeed: -0.16 },
    pickup: {
      pickupFlag: false,
      text: [{ fieldId: 'text', text01: 'PROPERTI MODERN', text02: 'SITUS BRAND' }],
      title: [{ fieldId: 'title', text01: 'M TRUST', text02: 'KORPORASI' }],
    },
  },
  {
    id: 'redandgreen',
    title: { full: 'RED & GREEN', short: 'R&G' },
    desc: 'SITUS KAMPANYE PRODUK MUSIMAN KREATIF',
    siteColor: {
      bodyContentsColor: '#211315',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#30181B',
    },
    siteLink: 'https://red-and-green.com',
    client: 'RED & GREEN COLLABORATION',
    freeArea: 'Kampanye promosi visual ekspresif yang memadukan estetika warna berani dengan interaksi waktu nyata responsif.',
    heroImg: {
      pc: { url: '/images/poster-redandgreen.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-redandgreen.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-redandgreen.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/redandgreen.mp4' },
      sp: { url: '/movie/redandgreen.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-redandgreen.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-redandgreen.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-redandgreen.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'RED & GREEN', text02: 'KAMPANYE' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'PROMOSI PRODUK INTERAKTIF' },
    detailsMainTextSp: { fieldId: 'text', text01: 'RED & GREEN', text02: 'KAMPANYE' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'PROMOSI PRODUK INTERAKTIF' },
    projectNum: { rotate: 6, xspeed: -0.13, yspeed: 0.15 },
    pickup: {
      pickupFlag: false,
      text: [{ fieldId: 'text', text01: 'PROMOSI', text02: 'KAMPANYE' }],
      title: [{ fieldId: 'title', text01: 'RED & GREEN', text02: 'INTERAKTIF' }],
    },
  },
  {
    id: 'yakudoh',
    title: { full: 'YAKUDOH', short: 'YKD' },
    desc: 'SITUS KELOMPOK MEDIS & PELAYANAN KESEHATAN INOVATIF',
    siteColor: {
      bodyContentsColor: '#171B24',
      allTextColor: '#e5e7eb',
      mvTextColor: '#ffffff',
      shadowColor: '#1D2533',
    },
    siteLink: 'https://yakudoh.jp',
    client: 'YAKUDOH MEDICAL GROUP',
    freeArea: 'Produksi digital berbasis WebGL yang memamerkan perpaduan inovatif antara desain futuristik dan rekayasa kode.',
    heroImg: {
      pc: { url: '/images/poster-yakudoh.webp', width: 1400, height: 800 },
      sp: { url: '/images/poster-yakudoh.webp', width: 750, height: 1000 },
    },
    hambergerMenuImg: {
      url: '/images/poster-yakudoh.webp',
      width: 180,
      height: 180,
    },
    movie: {
      pc: { url: '/movie/yakudoh.mp4' },
      sp: { url: '/movie/yakudoh.mp4' },
    },
    contentsImg: [
      { fieldId: '01', object: { url: '/images/poster-yakudoh.webp', width: 1400, height: 800 } },
    ],
    aboutImages: {
      img01: { url: '/images/poster-yakudoh.webp', width: 560, height: 410 },
      img02: { url: '/images/poster-yakudoh.webp', width: 560, height: 410 },
    },
    detailsMainTextPc: { fieldId: 'text', text01: 'YAKUDOH', text02: 'LAYANAN MEDIS' },
    detailsMainDescPc: { fieldId: 'desc', text01: 'SITUS RESMI PELAYANAN MEDIS' },
    detailsMainTextSp: { fieldId: 'text', text01: 'YAKUDOH', text02: 'LAYANAN MEDIS' },
    detailsMainDescSp: { fieldId: 'desc', text01: 'SITUS RESMI PELAYANAN MEDIS' },
    projectNum: { rotate: -7, xspeed: 0.14, yspeed: -0.13 },
    pickup: {
      pickupFlag: false,
      text: [{ fieldId: 'text', text01: 'LAYANAN MEDIS', text02: 'SITUS RESMI' }],
      title: [{ fieldId: 'title', text01: 'YAKUDOH', text02: 'KREATIF' }],
    },
  },
]
