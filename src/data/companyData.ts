import type { NavItem, ServiceItem, PortfolioItem, TeamMember, StatItem, TestimonialItem, ProcessStep, FaqItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export const heroData = {
  tagline: 'Interior Architecture & Spatial Design',
  title: 'Creating Meaningful Spaces That Tell Your Story With Style',
  description:
    'Kami memadukan estetika, fungsionalitas, dan jiwa ke dalam interior yang abadi — dirancang khusus untuk meningkatkan cara Anda hidup, merasakan, dan terhubung dengan ruang Anda.',
  primaryCta: {
    label: "Konsultasi Sekarang",
    path: '/contact',
  },
  secondaryCta: {
    label: 'Lihat Portofolio',
    path: '/portfolio',
  },
  heroImage: '/images/hero_interior.jpg',
  heroVideo: '/footage-interior.mp4',
  floatingBadge: {
    label: 'Selected Residence',
    subtitle: 'Contemporary Warm Minimalist',
    location: 'Bandung, Indonesia',
  },
}

export const statsData: StatItem[] = [
  { value: '120+', label: 'Proyek Selesai' },
  { value: '8+', label: 'Tahun Pengalaman' },
  { value: '10+', label: 'Kota Dijangkau' },
  { value: '25+', label: 'Penghargaan Desain' },
]

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Interior Residensial',
    category: 'Residential',
    tag: 'Hunian Privat',
    popular: true,
    description: 'Perancangan hunian privat, villa, dan apartemen yang mengutamakan kenyamanan, fungsi, dan material alami.',
    features: ['Moodboard & 3D Render', 'Denah Tata Ruang', 'Material Alami'],
    duration: '4 - 8 Minggu',
    idealFor: 'Rumah, Villa & Apartemen',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'srv-2',
    title: 'Ruang Komersial',
    category: 'Commercial',
    tag: 'Komersial',
    popular: false,
    description: 'Desain café, restoran, dan kantor kreatif yang selaras dengan karakter brand dan alur ruang yang optimal.',
    features: ['Tata Sirkulasi Brand', 'Pencahayaan Khusus', 'Optimasi Ruang'],
    duration: '6 - 10 Minggu',
    idealFor: 'Café, Kantor & Butik',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'srv-3',
    title: 'Bespoke Furnitur',
    category: 'Custom Craft',
    tag: 'Kriya & Furnitur',
    popular: false,
    description: 'Pembuatan furnitur kustom presisi tinggi memadukan kayu solid, marmer alam, dan keahlian kriya lokal.',
    features: ['Furnitur Kustom', 'Kayu Solid & Marmer', 'Kurasi Dekorasi'],
    duration: '3 - 5 Minggu',
    idealFor: 'Meja Makan, Kabinet & Rak',
    iconName: 'PenTool',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'srv-4',
    title: 'Konsultasi Spasial',
    category: 'Consultation',
    tag: 'Konsultasi',
    popular: false,
    description: 'Audit tata ruang, optimalisasi pencahayaan alami, dan pendampingan supervisi pembangunan.',
    features: ['Audit Tata Ruang', 'Estimasi Anggaran (RAB)', 'Supervisi Lapangan'],
    duration: 'Fleksibel',
    idealFor: 'Pra-Konstruksi & Renovasi',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
]

export const designProcessData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Spatial Brief',
    subtitle: 'Mendengar & Memahami Kebutuhan Anda',
    description:
      'Kami mengawali perjalanan dengan sesi diskusi mendalam tentang gaya hidup, ritme harian, referensi estetika, dan ekspektasi anggaran Anda, dilanjutkan survei langsung ke tapak.',
    duration: 'Minggu 1 - 2',
    deliverables: ['Ringkasan Kebutuhan Ruang (Design Brief)', 'Analisis Tapak & Pencahayaan Alami', 'Moodboard Konsep Awal'],
  },
  {
    number: '02',
    title: 'Schematic Design & 3D Visual',
    subtitle: 'Mewujudkan Imajinasi Menjadi Visual Nyata',
    description:
      'Penyusunan denah tata letak sirkulasi 2D, eksplorasi proporsi volumetrik, dan visualisasi render 3D fotorealistis lengkap dengan material dan skema pencahayaan sirkadian.',
    duration: 'Minggu 3 - 5',
    deliverables: ['Denah Tata Ruang 2D Terukur', 'Render 3D Fotorealistis Resolusi Tinggi', 'Presentasi Material Board Digital & Fisik'],
  },
  {
    number: '03',
    title: 'Technical Documentation & BoQ',
    subtitle: 'Presisi Teknis & Anggaran yang Transparan',
    description:
      'Penyusunan gambar kerja detail (arsitektur, interior, elektrikal MEP) serta Bill of Quantities (BoQ) rinci untuk memastikan seluruh elemen dapat dieksekusi tanpa deviasi biaya.',
    duration: 'Minggu 6 - 7',
    deliverables: ['Buku Gambar Kerja Konstruksi Lengkap', 'Rencana Anggaran Biaya (RAB) Rinci', 'Spesifikasi Teknis Material & Vendor'],
  },
  {
    number: '04',
    title: 'Build Supervision & Styling Handover',
    subtitle: 'Supervisi Konstruksi hingga Siap Dihuni',
    description:
      'Pendampingan berkala selama masa pembangunan, supervisi fabrikasi kriya kayu, penataan dekorasi akhir (soft styling), hingga serah terima ruang yang siap menyambut Anda.',
    duration: 'Tahap Konstruksi',
    deliverables: ['Supervisi Kualitas di Lapangan', 'Pemasangan Furnitur & Aksesori Terkurasi', 'Buku Garansi & Panduan Perawatan Ruang'],
  },
]

export const faqData: FaqItem[] = [
  {
    question: 'Bagaimana alur awal konsultasi bersama Hasuna Studio?',
    answer:
      'Anda dapat mengawali dengan mengisi formulir di website kami atau menghubungi WhatsApp kami. Kami akan menjadwalkan sesi konsultasi awal gratis selama 45 menit (tatap muka di studio Bandung atau virtual) untuk membedah kebutuhan, ekspektasi ruang, dan estimasi rencana proyek Anda.',
    category: 'Konsultasi',
  },
  {
    question: 'Apakah Hasuna Studio menangani proyek di luar Kota Bandung?',
    answer:
      'Tentu! Kami secara reguler merancang dan mengawasi proyek residensial serta komersial di wilayah Jabodetabek, Bali, Surabaya, dan berbagai kota lain di Indonesia. Kami menerapkan sistem supervisi hibrida berkala serta koordinasi digital yang terbukti rapi dan efisien.',
    category: 'Wilayah Layanan',
  },
  {
    question: 'Berapa estimasi waktu yang dibutuhkan dari perancangan hingga siap bangun?',
    answer:
      'Untuk proyek residensial tipikal (150–350 m²), proses desain konseptual hingga paket gambar kerja teknis dan BoQ lengkap memerlukan waktu sekitar 4 hingga 8 minggu. Waktu ini mencakup sesi revisi dan penyesuaian material secara intensif.',
    category: 'Durasi',
  },
  {
    question: 'Apakah Hasuna Studio juga mengerjakan konstruksi dan fabrikasi furnitur?',
    answer:
      'Ya. Selain jasa perancangan arsitektur interior, kami memiliki mitra workshop kriya kayu kustom untuk pembuatan built-in cabinet dan furniture loose, serta jaringan kontraktor rekanan terverifikasi yang kami supervisi secara langsung.',
    category: 'Layanan',
  },
  {
    question: 'Bagaimana sistem transparansi biaya proyek di Hasuna Studio?',
    answer:
      'Kami menjunjung tinggi etika transparansi. Biaya jasa perancangan ditetapkan jelas di muka berdasarkan luasan dan kompleksitas. Untuk tahap konstruksi, kami menyusun BoQ terbuka tanpa mark-up tersembunyi, sehingga Anda memegang kendali penuh atas anggaran.',
    category: 'Biaya',
  },
]

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Reading Nook Retreat',
    category: 'Residential',
    description: 'Sudut baca hening dengan rak buku kayu kenari dan pencahayaan hangat alami yang dirancang untuk kedamaian kontemplatif.',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    location: 'Dago, Bandung',
    year: '2025',
    client: 'Prof. Wiryawan & Family',
    area: '145 m²',
    duration: '4 Bulan',
    concept: 'Merancang sebuah sanctuary privat di tengah hiruk-pikuk perkotaan. Filosofi desain berfokus pada ketenangan visual: proporsi rak buku vertikal dari kayu walnut pilihan berpadu dengan pencahayaan hangat tersembunyi bergradasi lembut, mengundang penghuni untuk berhenti sejenak dan menyelami literatur.',
    challenge: 'Ruangan eksisting memiliki sudut geometris yang kaku dan minim bukaan cahaya alami di sore hari, sehingga berpotensi terasa terisolasi dan sempit.',
    solution: 'Kami mengintegrasikan skylight reflektif tersembunyi serta panel cermin bronze tipis pada celah vertikal rak buku, menciptakan ilusi optik kedalaman ruang ganda serta refleksi pendar cahaya alami yang hangat tanpa silau.',
    gallery: [
      'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['American Walnut Wood', 'Kain Linen Belgia Organik', 'Kuningan Brushed Brass', 'Batu Travertine Alami'],
    colorPalette: [
      { name: 'Walnut Warmth', hex: '#634832' },
      { name: 'Alabaster White', hex: '#F7F5F0' },
      { name: 'Muted Brass', hex: '#C5A880' },
      { name: 'Deep Espresso', hex: '#262220' }
    ],
    features: [
      'Bespoke Floor-to-Ceiling Bookshelf dengan Ladder Railing Kuningan',
      'Sistem Pencahayaan Sirkadian 2700K Dimmable',
      'Kursi Baca Ergonomis Berbalut Linen Belgia Kustom',
      'Panel Dinding Akustik Tersembunyi Peredam Bising'
    ]
  },
  {
    id: 'port-2',
    title: 'Contemporary Dining Space',
    category: 'Commercial & Living',
    description: 'Ruang makan modern dengan perpaduan meja kayu solid dan pencahayaan gantung minimalis yang merayakan kebersamaan.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    location: 'Senopati, Jakarta Selatan',
    year: '2025',
    client: 'Boutique Culinary Studio',
    area: '220 m²',
    duration: '5 Bulan',
    concept: 'Ruang bersantap kontemporer yang menggabungkan keanggunan kuliner tinggi dengan kehangatan keramahan khas nusantara. Penggunaan meja kayu solid live-edge menjadi poros komunal utama yang didukung geometri pencahayaan skulptural melayang.',
    challenge: 'Kebutuhan alur sirkulasi staf restoran dan pramusaji yang cepat tanpa mengorbankan privasi intim para tamu di setiap meja.',
    solution: 'Mendesain partisi berundak berupa kisi-kisi kayu solid (slatted timber screen) yang menyaring pandangan langsung sembari mempertahankan ventilasi udara segar dan pandangan tembus pandang yang elegan.',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['Kayu Suar Solid Utuh', 'Textured Microcement', 'Matte Black Steel Frame', 'Ubin Terakota Handmade'],
    colorPalette: [
      { name: 'Warm Charcoal', hex: '#1E1F22' },
      { name: 'Raw Suar Wood', hex: '#9C6E4A' },
      { name: 'Terracotta Earth', hex: '#BF6648' },
      { name: 'Soft Concrete Grey', hex: '#D8D8D8' }
    ],
    features: [
      'Meja Makan Utuh 4 Meter dari Kayu Suar Bersertifikasi',
      'Instalasi Lampu Gantung Skulptural Karya Desainer Lokal',
      'Dinding Finis Microcement Tahan Lembab dan Noda',
      'Peredam Akustik Plafon Bertekstur Tersembunyi'
    ]
  },
  {
    id: 'port-3',
    title: 'Sanctuary Master Bedroom',
    category: 'Residential',
    description: 'Kamar tidur bernuansa warm earth-tone dengan panel kayu oak dan tekstil linen alami yang menyatu dengan panorama alam tropis.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    location: 'Canggu, Bali',
    year: '2024',
    client: 'Private Villa Sanctuary',
    area: '190 m²',
    duration: '6 Bulan',
    concept: 'Mengadopsi filosofi Wabi-Sabi modern yang menghargai ketidaksempurnaan alami dan keheningan ruang. Interior kamar tidur ini dibuat menyatu dengan lanskap taman tropis melalui bukaan pintu geser tanpa ambang pintu (threshold-free).',
    challenge: 'Udara lembap pesisir laut Bali yang menuntut ketahanan material terhadap korosi dan pelapukan mikroba tanpa menggunakan zat kimia berbahaya.',
    solution: 'Memanfaatkan kayu jati daur ulang (reclaimed teak) berusia puluhan tahun yang diberi lapisan beeswax alami dan dinding plester kapur breathable yang mengatur sirkulasi kelembaban kamar secara organik.',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['Reclaimed Old Teak Wood', 'Natural Lime Plaster', 'Organic Linen & Raw Silk', 'Batu Kali Hitam Bali'],
    colorPalette: [
      { name: 'Oatmeal Sand', hex: '#EAE5DB' },
      { name: 'Weathered Teak', hex: '#87674F' },
      { name: 'Palm Leaf Olive', hex: '#68705C' },
      { name: 'Muted Clay Stone', hex: '#C4B5A5' }
    ],
    features: [
      'Platform Bed Rendah dengan Pencahayaan Ambient Glow Lembut',
      'Walk-in Wardrobe dengan Pintu Kaca Bertekstur Fluted Glass',
      'Kamar Mandi Terbuka Semi-Outdoor dengan Bathtub Batu Monolit',
      'Sistem Integrasi Ventilasi Silang Alami Anti-Lembap'
    ]
  },
  {
    id: 'port-4',
    title: 'Contemporary Minimalist Living',
    category: 'Residential',
    description: 'Ruang keluarga terbuka dengan perpaduan pencahayaan alami, sirkulasi udara sejuk, dan kriya tenun lokal yang bersahaja.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    location: 'Dago Pakar, Bandung',
    year: '2025',
    client: 'Keluarga Mahendra',
    area: '380 m²',
    duration: '8 Bulan',
    concept: 'Ruang keluarga dengan double-height ceiling setinggi 6 meter yang menghubungkan ruang tengah dengan inner garden. Desain mengutamakan transparansi spasial sehingga bukit Dago menjadi kanvas lukisan hidup di dinding utama.',
    challenge: 'Akustik ruangan bervolume luas cenderung bergema, dan suhu udara malam di Dago Pakar yang cukup dingin.',
    solution: 'Pemasangan dinding kayu beralur akustik tersembunyi, karpet wol tenun tebal dari pengrajin lokal, dan sistem perapian uap air minimalis yang memberikan rasa hangat visual dan fisik.',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['White Oak Flooring', 'Batu Basalt Hitam', 'Kain Wol Tenun Manual', 'Kaca Insulasi Low-E'],
    colorPalette: [
      { name: 'Canvas White', hex: '#FAFAFC' },
      { name: 'Pale White Oak', hex: '#D2BFA4' },
      { name: 'Obsidian Basalt', hex: '#1E1F23' },
      { name: 'Periwinkle Fog', hex: '#BDB2FF' }
    ],
    features: [
      'Dinding Kaca Double-Height 6 Meter Bebas Hambatan',
      'Storage Terintegrasi Rata Dinding dengan Mekanisme Push-to-Open',
      'Tangga Gantung Minimalis Tanpa Tiang Penyangga Tengah',
      'Pohon Pohon Tabebuya Indoor di Inner Courtyard'
    ]
  },
  {
    id: 'port-5',
    title: 'The Zen Garden Pavilion & Tea Room',
    category: 'Commercial',
    description: 'Paviliun teh semi-terbuka dengan pemandangan lembah sawah, lantai tatami kontemporer, dan instalasi air mengalir.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    location: 'Ubud, Bali',
    year: '2024',
    client: 'Kalyana Wellness Resort',
    area: '310 m²',
    duration: '7 Bulan',
    concept: 'Penciptaan harmoni antara arsitektur zen Jepang dengan kearifan lokal Bali. Struktur kayu ulin beratap sirap membingkai aliran sungai kecil dan pemandangan hutan tropis.',
    challenge: 'Menjaga kenyamanan termal tanpa menggunakan pendingin udara (AC) di tengah iklim tropis.',
    solution: 'Desain atap berundak bertingkat dengan ventilasi louver mikro yang memanfaatkan efek cerobong termal untuk mengalirkan udara sejuk dari kolam air di sekitarnya.',
    gallery: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['Kayu Ulin Daur Ulang', 'Anyaman Bambu Tali', 'Batu Candi Hitam', 'Tatami Tenun Rumput Igusa'],
    colorPalette: [
      { name: 'Bamboo Moss', hex: '#58624E' },
      { name: 'Ulin Timber', hex: '#4B3621' },
      { name: 'Charcoal River Stone', hex: '#2F3136' },
      { name: 'Linen Sand', hex: '#E8E1D5' }
    ],
    features: [
      'Sistem Ventilasi Cerobong Termal Alami Bebas AC',
      'Kolam Reflektif Air Mengalir dengan Ikan Koi',
      'Meja Upacara Teh dari Batu Andesit Dipahat Manual',
      'Pintu Partisi Shoji Kedap Serangga dengan Kasa Sutra'
    ]
  },
  {
    id: 'port-6',
    title: 'Atelier Studio & Creative Hub',
    category: 'Commercial',
    description: 'Kantor biro kreatif dengan mezzanine loft, material baja ekspos dan meja kolaborasi modular kayu pinus.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'Riau, Bandung',
    year: '2025',
    client: 'Design Collective Studio',
    area: '260 m²',
    duration: '4.5 Bulan',
    concept: 'Ruang kerja kolaboratif bergaya industrial minimalis yang fleksibel. Mengadopsi konsep open-plan dengan modul furnitur bergerak yang dapat ditata ulang sesuai kebutuhan brainstorming tim.',
    challenge: 'Mengubah bekas gudang era kolonial dengan langit-langit tinggi menjadi ruang kerja modern yang ergonomis dan cerah.',
    solution: 'Mempertahankan ekspos rangka baja struktural asli dipadukan dengan mezzanine kayu ringan serta lampu arsitektural linier dengan kontrol suhu warna otomatis.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
    ],
    materials: ['Baja Hitam Struktural', 'Kayu Pinus Radiata', 'Kaca Wire-glass', 'Polished Concrete Floor'],
    colorPalette: [
      { name: 'Steel Black', hex: '#1C1D21' },
      { name: 'Pine Gold', hex: '#D7B481' },
      { name: 'Raw Concrete', hex: '#A3A5A8' },
      { name: 'Studio Blue', hex: '#3A86FF' }
    ],
    features: [
      'Mezanin Kerja dengan Tangga Spiral Baja Kompak',
      'Meja Kerja Kolaborasi Modular Roda Tersembunyi',
      'Bilik Telepon Akustik Privat untuk Video Conference',
      'Material Library & Sample Display Wall'
    ]
  }
]

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Alika Paramitha, M.Arch',
    role: 'Principal Interior Architect & Co-Founder',
    bio: 'Berpengalaman lebih dari 9 tahun dalam perancangan hunian berkelanjutan dengan pendekatan minimalis bernyawa.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'team-2',
    name: 'Raden Mahendra',
    role: 'Head of Spatial Design & 3D Visualization',
    bio: 'Ahli dalam simulasi pencahayaan alami dan material rendering arsitektur berstandar internasional.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'team-3',
    name: 'Soraya Daniswara',
    role: 'Bespoke Furniture & Material Lead',
    bio: 'Menghubungkan inovasi desain modern dengan keahlian pengrajin kriya kayu dan tenun nusantara.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
]

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Bekerja bersama Hasuna Studio adalah pengalaman yang begitu tenang dan profesional. Mereka benar-benar mendengarkan visi keluarga kami dan mewujudkannya melampaui ekspektasi.',
    author: 'Widi Wibowo & Gita',
    role: 'Pemilik Hunian di Dago Pakar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'test-2',
    quote:
      'Rumah kami sekarang terasa seperti sanctuary yang hangat dan bernapas. Setiap sudutnya punya fungsi yang tepat dan estetika yang timeless.',
    author: 'Rey Hananto',
    role: 'Founder & Pengusaha Kreatif',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
]

export const companyOverview = {
  name: 'Hasuna Studio',
  tagline: 'Timeless Spaces, Mindful Living',
  address: 'Jl. Ranggamalela No. 12, Dago, Bandung, Jawa Barat 40116',
  email: 'hello@hasunastudio.id',
  phone: '+62 812 3456 7890',
  hours: 'Senin - Jumat: 09:00 - 18:00 WIB',
  socials: [
    { name: 'Instagram', handle: '@hasunastudio.id', url: 'https://instagram.com' },
    { name: 'Pinterest', handle: 'Hasunastudiodesign', url: 'https://pinterest.com' },
    { name: 'LinkedIn', handle: 'Hasuna Studio Indonesia', url: 'https://linkedin.com' },
  ],
  vision: 'Menjadi biro desain interior dan spasial terdepan di Asia Tenggara yang mengedepankan keselarasan antara manusia, material lokal yang berkelanjutan, dan ketenangan ruang hidup.',
  mission: [
    'Merancang ruang yang fungsional, adaptif, dan memiliki kedalaman estetika jangka panjang.',
    'Mempromosikan penggunaan material ramah lingkungan dan kolaborasi dengan pengrajin lokal berstandar tinggi.',
    'Memberikan pengalaman perancangan yang transparan, terukur, dan menyenangkan bagi setiap klien.',
  ],
  history:
    'Didirikan pada tahun 2017 di Bandung, Hasuna Studio berawal dari keyakinan sederhana: bahwa rumah dan ruang kerja seharusnya bukan sekadar penampung benda, melainkan tempat bernapas yang membentuk kualitas hidup kita. Selama lebih dari 8 tahun, kami telah dipercaya merancang lebih dari 120 ruang hunian dan komersial dengan pendekatan desain yang berjiwa dan hangat.',
}
