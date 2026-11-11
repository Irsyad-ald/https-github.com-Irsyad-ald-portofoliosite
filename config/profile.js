/**
 * ==============================================================================
 * PORTFOLIO MASTER CONFIGURATION (config/profile.js)
 * ==============================================================================
 * Pusat konfigurasi data terpadu untuk: AHMAD IRSYAD ALD
 * 100% Bahasa Indonesia
 * ==============================================================================
 */

export const personalInfo = {
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

  // ============================================================================
  // PANDUAN MENGGANTI FOTO PROFIL UTAMA (HALAMAN ABOUT / INTRO):
  // 1. Cara Cepat: Timpa langsung file `/static/images/intro.webp` (1400x800 px)
  //    untuk Desktop dan `/static/images/intro-sp.webp` (750x1000 px) untuk Mobile.
  // 2. Cara Kustom: Simpan gambar baru di `/static/images/` lalu ubah path di bawah:
  // ============================================================================
  images: {
    introDesktop: '/images/intro.webp',
    introMobile: '/images/intro-sp.webp',
  },
}

export const socialLinks = {
  twitter: 'https://twitter.com/ahmadirsyadald',
  github: 'https://github.com/ahmadirsyadald',
  codepen: 'https://codepen.io/ahmadirsyadald',
  linkedin: 'https://linkedin.com/in/ahmadirsyadald',
  email: 'mailto:ahmadirsyadald@gmail.com',
}

/**
 * Kartu Kontak & Kolaborasi (Section Footer)
 */
export const contacts = [
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
export const awards = [
  { group: 'AWWWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'HONORABLE MENTION', date: '2024.03', modifier: '01' },
  { group: 'AWWWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'MOBILE EXCELLENCE', date: '2024.03', modifier: '02' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'SPECIAL KUDOS', date: '2024.03', modifier: '03' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'UI DESIGN AWARD', date: '2024.03', modifier: '04' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'UX DESIGN AWARD', date: '2024.03', modifier: '05' },
  { group: 'CSS DESIGN AWARDS', title: 'Portofolio Ahmad Irsyad Ald', rank: 'INNOVATION AWARD', date: '2024.03', modifier: '06' },
  { group: 'CSS WINNER', title: 'Portofolio Ahmad Irsyad Ald', rank: 'SITE OF THE DAY', date: '2024.03', modifier: '07' },
]

/**
 * ==============================================================================
 * 7 Proyek Unggulan (Karya Pilihan)
 * ==============================================================================
 * PANDUAN MENGGANTI GAMBAR & VIDEO PROYEK:
 * - Simpan file gambar baru di `/static/images/` (Rekomendasi: 1400x800 px .webp)
 * - Simpan file video preview di `/static/movie/` (Rekomendasi: 720p .mp4)
 * - Ubah properti `url` pada `heroImg`, `hambergerMenuImg`, `contentsImg`, dan `aboutImages`
 *   di masing-masing objek proyek di bawah ini.
 * ==============================================================================
 */
export const projects = [
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

/**
 * Daftar Keahlian Teknis & Teknologi yang Digunakan dalam Proyek-Proyek Pilihan
 */
export const technicalSkills = [
  {
    id: 'threejs',
    name: 'THREE.JS',
    category: '3D & WEBGL',
    proficiency: 'TINGKAT LANJUT',
    role: 'Rendering scene 3D interaktif, kamera prosedural, dynamic lighting, dan manajemen mesh objek 3D kompleks.',
    projects: ['ASOVISION', 'YAKUDOH', 'FRONTIER', 'RED & GREEN'],
    metrics: '4 Proyek Unggulan',
    highlights: 'Interactive 3D Meshes, Camera Controls, Custom Materials',
  },
  {
    id: 'webgl',
    name: 'WEBGL & GLSL',
    category: 'SHADER & GPU',
    proficiency: 'TINGKAT LANJUT',
    role: 'Fragment & vertex shader kustom, efek distorsi cairan real-time, displacement mapping, dan akselerasi GPU murni.',
    projects: ['ASOVISION', 'RED & GREEN', 'YAKUDOH'],
    metrics: '3 Proyek Unggulan',
    highlights: 'Fragment Shaders, Vertex Displacement, GPU Computation',
  },
  {
    id: 'vue-nuxt',
    name: 'VUE.JS & NUXT.JS',
    category: 'FRAMEWORK & SSR',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Arsitektur komponen modular reaktif, Server-Side Rendering (SSR), transisi halaman mulus, dan manajemen state Vuex.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Pondasi 7 Proyek Pilihan',
    highlights: 'Universal SSR, Vuex Architecture, Page Transitions',
  },
  {
    id: 'gsap',
    name: 'GSAP & SCROLLTRIGGER',
    category: 'MOTION & KINETIK',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Koreografi timeline presisi, animasi berbasis scroll, fisika interaksi kursor mikro, dan tipografi kinetik dinamis.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Standar Animasi Utama',
    highlights: 'ScrollTrigger, Timeline Choreography, Kinetic Typography',
  },
  {
    id: 'typescript',
    name: 'TYPESCRIPT',
    category: 'BAHASA & LOGIKA',
    proficiency: 'TINGKAT LANJUT',
    role: 'Pengembangan kode terstruktur dengan type-safety ketat, kalkulasi vektor koordinat 3D yang aman, dan arsitektur kokoh.',
    projects: ['FRONTIER', 'YAKUDOH', 'ASOVISION'],
    metrics: '3 Proyek Unggulan',
    highlights: 'Strict Type-Safety, Vector Math, Scalable Architecture',
  },
  {
    id: 'javascript',
    name: 'JAVASCRIPT (ES6+)',
    category: 'BAHASA & LOGIKA',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Manipulasi DOM performa tinggi, orkestrasi asinkron, Canvas API, dan integrasi modul modern tanpa overhead.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Pondasi Kode Inti',
    highlights: 'Modern ESNext, Asynchronous Pipelines, Event Systems',
  },
  {
    id: 'scss',
    name: 'SCSS / SASS & CSS3',
    category: 'STYLING & LAYOUT',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Arsitektur BEM, fluid vw typography calculation, mixin responsif multi-breakpoint, dan CSS Grid presisi.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Sistem Gaya Menyeluruh',
    highlights: 'Fluid Typography, BEM Convention, Responsive Breakpoints',
  },
  {
    id: 'tailwind',
    name: 'TAILWIND CSS',
    category: 'DESIGN SYSTEM',
    proficiency: 'TINGKAT LANJUT',
    role: 'Penyusunan antarmuka responsif cepat, standarisasi token desain visual, utility-first UI, dan atomic styles konsisten.',
    projects: ['M TRUST', 'SISTEM DESAIN PORTOFOLIO'],
    metrics: '2 Proyek Terintegrasi',
    highlights: 'Design Tokens, Utility-First Layout, Dark-Theme Aesthetics',
  },
  {
    id: 'html5-canvas',
    name: 'HTML5 & CANVAS API',
    category: 'WEB STANDARDS',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Struktur semantik standar W3C, 2D interactive canvas drawing, rendering video/audio terintegrasi, dan aksesibilitas tinggi.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Pondasi Standar Web',
    highlights: 'Semantic Web, 2D Canvas Surface, High-DPI Rendering',
  },
  {
    id: 'lenis-scroll',
    name: 'LENIS & ASSCROLL',
    category: 'FISIKA & SCROLL',
    proficiency: 'TINGKAT LANJUT',
    role: 'Sinkronisasi inersia gulir 60fps, normalisasi momentum kursor lintas browser, dan integrasi WebGL viewport lancar.',
    projects: ['BASTA', 'ASOVISION', 'PORTOFOLIO MASTER'],
    metrics: '3 Proyek Utama',
    highlights: '60fps Inertia Scroll, Momentum Normalization, Touch Support',
  },
  {
    id: 'webpack-tools',
    name: 'WEBPACK & NODE.JS',
    category: 'BUILD & RUNTIME',
    proficiency: 'MENENGAH-LANJUT',
    role: 'Optimasi aset gambar WebP otomatis, pemuatan shader GLSL (glslify), kompilasi SCSS, dan pipeline bundling cepat.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Lingkungan Build Produksi',
    highlights: 'GLSL Loader, WebP Optimization, Bundle Splitting',
  },
  {
    id: 'git-github',
    name: 'GIT & WORKFLOW',
    category: 'KONTROL VERSI',
    proficiency: 'SPESIALISASI UTAMA',
    role: 'Manajemen branching profesional, automasi deployment, pelacakan riwayat kode, dan kolaborasi terstruktur.',
    projects: ['SEMUA PROYEK (7 KARYA)'],
    metrics: 'Alur Kerja Repositori',
    highlights: 'Git Flow, CI/CD Pipeline, Version Auditing',
  },
]

