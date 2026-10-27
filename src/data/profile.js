export const profile = {
  name: "Aldi Rifaldi",
  credential: "S.T.",
  fullName: "Aldi Rifaldi, S.T.",
  role: "Quantity Surveyor — Civil Engineer",
  company: "China State Construction Engineering Corporation (CSCEC)",
  companyShort: "CSCEC",
  project: "Jalan Tol Serang–Panimbang Seksi 3 (Cileles–Panimbang)",
  location: "Banten, Indonesia",
  start: "Oktober 2023",
  headline: "Quantity Surveyor · Earthwork · Site Engineering · Project Control",
  subheadline:
    "Quantity Surveyor di China State Construction Engineering Corporation (CSCEC) untuk Jalan Tol Serang–Panimbang Seksi 3, Banten. Latar Teknik Sipil dengan fokus pada pengukuran, pengawasan pekerjaan, perencanaan, dan analisis data proyek.",
  summary:
    "Civil engineer yang bekerja sebagai Quantity Surveyor di proyek Jalan Tol Serang–Panimbang Seksi 3, Banten. Berpengalaman dalam pengukuran volume, verifikasi pekerjaan, pengawasan lapangan, serta pelaporan dan analisis data proyek. Tertarik pada project management, work supervision, dan planning.",
  linkedin: "https://www.linkedin.com/in/aldirifaldi13/",
  linkedinLabel: "linkedin.com/in/aldirifaldi13",
};

export const metrics = [
  {
    value: 33,
    decimals: 0,
    suffix: " km",
    label: "Panjang Seksi 3",
    note: "Cileles–Panimbang",
  },
  {
    value: 83.67,
    decimals: 2,
    suffix: " km",
    label: "Koridor Serang–Panimbang",
    note: "Total tiga seksi",
  },
  {
    value: 4,
    decimals: 0,
    suffix: " lajur",
    label: "Konfigurasi jalan",
    note: "2 × 2 lajur, 3,6 m",
  },
  {
    static: true,
    display: "2023",
    label: "Mulai di CSCEC",
    note: "Quantity Surveyor",
  },
];

export const pillars = [
  {
    index: "01",
    title: "Quantity Surveying",
    text: "Pengukuran volume dari gambar kerja, penyusunan BoQ/RAB, verifikasi opname, dan kontrol biaya pekerjaan. Setiap angka harus dapat ditelusuri ke gambar, spesifikasi, dan dokumen kontrak.",
    tags: ["QTO", "BoQ / RAB", "Opname"],
  },
  {
    index: "02",
    title: "Earthwork Engineering",
    text: "Perhitungan galian dan timbunan, distribusi material, jarak angkut, serta produktivitas alat berat. Fokus pada volume yang konsisten dengan kondisi lapangan.",
    tags: ["Cut & fill", "Hauling", "Produktivitas"],
  },
  {
    index: "03",
    title: "Site & Project Control",
    text: "Pengawasan pelaksanaan, koordinasi lapangan, pelaporan progres, dan analisis data proyek. Perencanaan dan realisasi dibaca sebagai satu rangkaian.",
    tags: ["Site supervision", "Progress", "Data analysis"],
  },
];

export const competencyGroups = [
  {
    code: "A",
    phase: "Quantity Surveying",
    title: "Pengukuran & dokumen biaya",
    items: [
      "Quantity take-off dari gambar kerja",
      "Penyusunan BoQ dan RAB pekerjaan",
      "Verifikasi volume pekerjaan lapangan",
      "Opname progres dan berita acara",
      "Evaluasi harga dan pekerjaan tambah/kurang",
    ],
  },
  {
    code: "B",
    phase: "Earthwork & Site",
    title: "Pekerjaan tanah & pengawasan",
    items: [
      "Perhitungan galian dan timbunan",
      "Neraca material dan jarak angkut",
      "Produktivitas alat berat",
      "Pengawasan metode kerja di lapangan",
      "Pemeriksaan kualitas dan kuantitas pekerjaan",
    ],
  },
  {
    code: "C",
    phase: "Project Control",
    title: "Perencanaan & pelaporan",
    items: [
      "Monitoring progres terhadap rencana",
      "Penyusunan laporan progres pekerjaan",
      "Analisis data volume dan biaya",
      "Koordinasi dengan tim lapangan dan kontraktor",
      "Administrasi dokumen proyek",
    ],
  },
];

export const tools = [
  { code: "D-01", name: "Quantity take-off", detail: "Volume dari gambar kerja", group: "Measurement" },
  { code: "D-02", name: "BoQ / RAB", detail: "Struktur biaya pekerjaan", group: "Cost" },
  { code: "D-03", name: "Opname & MC", detail: "Verifikasi progres", group: "Progress" },
  { code: "D-04", name: "Cost report", detail: "Realisasi vs anggaran", group: "Control" },
  { code: "D-05", name: "Progress report", detail: "Data & analisis proyek", group: "Project control" },
  { code: "D-06", name: "Dokumen kontrak", detail: "Gambar & spesifikasi", group: "Reference" },
];

export const projects = [
  {
    id: "serang-panimbang",
    code: "AR—01",
    category: "Toll Road Infrastructure",
    location: "Banten, Indonesia",
    name: "Jalan Tol Serang–Panimbang Seksi 3",
    subtitle: "Cileles–Panimbang",
    role: "Quantity Surveyor — China State Construction Engineering Corporation (CSCEC)",
    value: "33 km",
    valueNote: "Panjang seksi",
    area: "4 lajur × 3,6 m",
    areaNote: "Konfigurasi jalan",
    scope:
      "Jalan tol baru pada medan berbukit: earthwork, perkerasan, drainase, jembatan, dan pekerjaan struktur.",
    achievement:
      "Terlibat sejak Oktober 2023 sebagai Quantity Surveyor CSCEC pada paket Seksi 3. Fokus pada pengukuran, verifikasi volume, dan kontrol biaya pekerjaan.",
    highlight: { value: "Okt 2023", label: "Mulai bergabung" },
    variant: "highway",
    featured: true,
    sources: [
      {
        label: "CSCEC",
        url: "https://en.cscec.com/CompanyNews/CorporateNews/202208/3568537.html",
      },
      {
        label: "KPPIP",
        url: "https://kppip.go.id/proyek-prioritas/jalan-jembatan/jalan-tol-serang-panimbang",
      },
    ],
  },
];

export const workPackages = [
  {
    id: "earthwork",
    code: "01",
    short: "Earthwork",
    name: "Pekerjaan Tanah",
    summary: "Volume galian, timbunan, dan distribusi material di sepanjang koridor.",
    unit: "m³",
    items: [
      { name: "Top soil stripping", unit: "m²", check: "Kedalaman dan batas area bersih" },
      { name: "Galian (cut)", unit: "m³", check: "Cross-section existing vs design" },
      { name: "Timbunan (fill)", unit: "m³", check: "Faktor kompaksi dan shrinkage" },
      { name: "Jarak angkut", unit: "m", check: "Rute, cycle time, produktivitas alat" },
    ],
    outputs: ["Volume cut & fill", "Neraca material", "Kebutuhan alat"],
  },
  {
    id: "pavement",
    code: "02",
    short: "Pavement",
    name: "Perkerasan Jalan",
    summary: "Luas dan tebal lapis perkerasan, termasuk material dan marka jalan.",
    unit: "m²",
    items: [
      { name: "Luas perkerasan", unit: "m²", check: "Lebar efektif dan stationing" },
      { name: "Tebal lapis pondasi", unit: "m", check: "Tebal desain vs hasil uji" },
      { name: "Volume aspal", unit: "ton", check: "Berat jenis dan kadar aspal" },
      { name: "Marka jalan", unit: "m", check: "Panjang dan tipe marka" },
    ],
    outputs: ["Volume per lapis", "Kebutuhan material", "Dasar opname"],
  },
  {
    id: "drainage",
    code: "03",
    short: "Drainage",
    name: "Drainase",
    summary: "Saluran samping, gorong-gorong, dan bangunan drainase lainnya.",
    unit: "m",
    items: [
      { name: "Panjang saluran", unit: "m", check: "Trase dan tipe saluran" },
      { name: "Galian saluran", unit: "m³", check: "Dimensi dan kedalaman" },
      { name: "Lining / pasangan", unit: "m²", check: "Luas permukaan terpasang" },
      { name: "Inlet & outlet", unit: "unit", check: "Jumlah dan tipe bangunan" },
    ],
    outputs: ["Volume galian", "Luas lining", "Daftar bangunan"],
  },
  {
    id: "structures",
    code: "04",
    short: "Structures",
    name: "Struktur & Jembatan",
    summary: "Beton, pembesian, bekisting, dan pekerjaan struktur pada bangunan pelengkap.",
    unit: "m³",
    items: [
      { name: "Volume beton", unit: "m³", check: "Dimensi elemen dan mutu beton" },
      { name: "Pembesian", unit: "kg", check: "Bar bending schedule" },
      { name: "Bekisting", unit: "m²", check: "Luas kontak dan metode kerja" },
      { name: "Pondasi", unit: "unit", check: "Jumlah, kedalaman, dan tipe" },
    ],
    outputs: ["Volume beton", "Tonase besi", "Luas bekisting"],
  },
];

export const timeline = [
  {
    code: "01",
    phase: "Okt 2023 — Sekarang",
    title: "Quantity Surveyor — CSCEC",
    text: "Jalan Tol Serang–Panimbang Seksi 3 (Cileles–Panimbang), Banten. Pengukuran, verifikasi volume, dan kontrol biaya pekerjaan.",
  },
  {
    code: "02",
    phase: "Pendidikan",
    title: "Sarjana Teknik Sipil (S.T.)",
    text: "Latar belakang Teknik Sipil sebagai dasar membaca gambar, volume, metode kerja, dan dokumen kontrak.",
  },
  {
    code: "03",
    phase: "Peran teknis",
    title: "Earthwork Engineer",
    text: "Perhitungan galian dan timbunan, distribusi material, jarak angkut, serta produktivitas alat berat.",
  },
  {
    code: "04",
    phase: "Peran teknis",
    title: "Site Engineer",
    text: "Pengawasan pelaksanaan di lapangan, koordinasi dengan pelaksana, serta verifikasi kualitas dan kuantitas pekerjaan.",
  },
  {
    code: "05",
    phase: "Peran teknis",
    title: "Project Control Engineer",
    text: "Perencanaan, pelaporan progres, dan analisis data proyek untuk menjaga kesesuaian rencana dan realisasi.",
  },
  {
    code: "06",
    phase: "Fokus",
    title: "Project Management & Data Analysis",
    text: "Minat profesional pada manajemen proyek, analisis data, pengawasan pekerjaan, dan perencanaan.",
  },
];

export const contactInterests = [
  "Quantity Surveying",
  "Pengukuran & BoQ",
  "Kontrol biaya proyek",
  "Project control",
];
