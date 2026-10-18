import type { NavItem, ServiceItem, PortfolioItem, TeamMember, StatItem, TestimonialItem } from '../types'

export const navItems: NavItem[] = [
  { label: 'About', path: '#about' },
  { label: 'Portfolio', path: '#portfolio' },
  { label: 'Services', path: '#services' },
  { label: 'Contact', path: '#contact' },
]

export const heroData = {
  tagline: 'Interior Architecture & Spatial Design',
  title: 'Creating Meaningful Spaces That Tell Your Story With Style',
  description:
    'Kami memadukan estetika, fungsionalitas, dan jiwa ke dalam interior yang abadi — dirancang khusus untuk meningkatkan cara Anda hidup, merasakan, dan terhubung dengan ruang Anda.',
  primaryCta: {
    label: "Konsultasi Sekarang",
    path: '#contact',
  },
  secondaryCta: {
    label: 'Lihat Portofolio',
    path: '#portfolio',
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
    title: 'Desain Interior Residensial',
    category: 'Residential',
    description:
      'Perancangan ruang hunian pribadi yang personal, menggabungkan kenyamanan ergonomis dengan material alami berkualitas tinggi.',
    features: ['Konsep Moodboard & 3D Render', 'Denah Tata Ruang & Sirkulasi', 'Spesifikasi Material & Finishing'],
  },
  {
    id: 'srv-2',
    title: 'Perencanaan Ruang Komersial',
    category: 'Commercial',
    description:
      'Menciptakan ruang usaha, café, galeri, dan kantor yang memperkuat identitas brand sekaligus menghadirkan customer journey yang berkesan.',
    features: ['Brand-integrated Spatial Flow', 'Pencahayaan & Akustik Khusus', 'Optimasi Luas & Fungsi'],
  },
  {
    id: 'srv-3',
    title: 'Bespoke Furniture & Styling',
    category: 'Custom Craft',
    description:
      'Pembuatan furnitur kustom yang presisi dan kurasi elemen dekorasi, kain, pencahayaan, serta karya seni yang selaras.',
    features: ['Pengrajin Lokal Pilihan', 'Material Kayu Solid & Batu Alam', 'Kurasi Art & Soft Furnishing'],
  },
]

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Reading Nook Retreat',
    category: 'Residential',
    description: 'Sudut baca hening dengan rak buku kayu kenari dan pencahayaan hangat alami.',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    location: 'Bandung',
    year: '2025',
  },
  {
    id: 'port-2',
    title: 'Contemporary Dining Space',
    category: 'Commercial & Living',
    description: 'Ruang makan modern dengan perpaduan meja kayu solid dan pencahayaan gantung minimalis.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    location: 'Jakarta Selatan',
    year: '2025',
  },
  {
    id: 'port-3',
    title: 'Sanctuary Master Bedroom',
    category: 'Residential',
    description: 'Kamar tidur bernuansa warm earth-tone dengan panel kayu oak dan tekstil linen alami.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    location: 'Bali',
    year: '2024',
  },
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
      'Bekerja bersama Aurea Studio adalah pengalaman yang begitu tenang dan profesional. Mereka benar-benar mendengarkan visi keluarga kami dan mewujudkannya melampaui ekspektasi.',
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
  name: 'Aurea Studio',
  tagline: 'Timeless Spaces, Mindful Living',
  address: 'Jl. Ranggamalela No. 12, Dago, Bandung, Jawa Barat 40116',
  email: 'hello@aureastudio.id',
  phone: '+62 812 3456 7890',
  hours: 'Senin - Jumat: 09:00 - 18:00 WIB',
  socials: [
    { name: 'Instagram', handle: '@aureastudio.id', url: 'https://instagram.com' },
    { name: 'Pinterest', handle: 'aureastudiodesign', url: 'https://pinterest.com' },
    { name: 'LinkedIn', handle: 'Aurea Studio Indonesia', url: 'https://linkedin.com' },
  ],
  vision: 'Menjadi biro desain interior dan spasial terdepan di Asia Tenggara yang mengedepankan keselarasan antara manusia, material lokal yang berkelanjutan, dan ketenangan ruang hidup.',
  mission: [
    'Merancang ruang yang fungsional, adaptif, dan memiliki kedalaman estetika jangka panjang.',
    'Mempromosikan penggunaan material ramah lingkungan dan kolaborasi dengan pengrajin lokal berstandar tinggi.',
    'Memberikan pengalaman perancangan yang transparan, terukur, dan menyenangkan bagi setiap klien.',
  ],
  history:
    'Didirikan pada tahun 2017 di Bandung, Aurea Studio berawal dari keyakinan sederhana: bahwa rumah dan ruang kerja seharusnya bukan sekadar penampung benda, melainkan tempat bernapas yang membentuk kualitas hidup kita. Selama lebih dari 8 tahun, kami telah dipercaya merancang lebih dari 120 ruang hunian dan komersial dengan pendekatan desain yang berjiwa dan hangat.',
}
