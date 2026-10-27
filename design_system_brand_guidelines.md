# Design System & Brand Identity Guidelines (`design.md`)
**Brand Name:** ALDI RIFALDI, S.T.  
**Brand Archetype:** The Architect & The Strategist (Presisi, Mewah, Otoritatif, Terukur)  
**Estetika Utama:** *Brutalist Architectural Luxury* & *Precision Blueprint*

---

## 1. Filosofi Desain (Design Philosophy)
Desain website ini terinspirasi dari material esensial dunia teknik sipil kelas atas: **beton ekspos halus (architectural concrete), baja struktural (structural steel), kaca gelap, dan kuningan (brushed brass)**. Mengingat profesi utama Aldi Rifaldi, S.T. adalah **Quantity Surveyor**, tata letak (*layout*) harus mencerminkan keteraturan tabel matriks, garis ukur presisi (*grid lines*), serta tipografi monospasi untuk angka dan metrik finansial proyek.

---

## 2. Palet Warna (Color Palette)
Dominasi warna abu-abu berlapis (*layered greys*) untuk menciptakan kedalaman visual yang mewah tanpa terlihat membosankan.

| Peran Warna | Nama Tone | Kode Hex | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **Background Primary** | *Obsidian Concrete* | `#111315` | Latar belakang utama halaman untuk kesan mewah dan fokus tinggi |
| **Background Secondary** | *Charcoal Slate* | `#1A1D21` | Latar belakang seksi bergantian dan area kartu proyek |
| **Surface / Card** | *Brushed Gunmetal* | `#24282E` | Elemen kartu, *modal*, dan panel interaktif |
| **Border & Grid Lines** | *Structural Steel* | `#343A42` | Garis pembatas tipis (1px) bergaya tabel cetak biru arsitektur |
| **Text Primary** | *Alabaster White* | `#F3F4F6` | Judul utama dan teks penting |
| **Text Secondary** | *Warm Limestone Grey* | `#9CA3AF` | Paragraf deskripsi dan sub-judul |
| **Text Muted** | *Raw Cement* | `#6B7280` | Label mikro, *caption*, dan nomor indeks |
| **Accent Luxury** | *Architectural Brass / Gold* | `#C5A880` | Aksen tombol utama, *highlight* metrik biaya, badge gelar S.T., dan garis aktif |
| **Accent Secondary** | *Titanium Silver* | `#D1D5DB` | Hover state dan ikon teknis |

---

## 3. Tipografi (Typography)
Kombinasi tiga jenis huruf untuk memadukan kemewahan eksekutif dan ketepatan teknis insinyur:

1. **Heading (Kesan Mewah & Arsitektural):** `Cormorant Garamond` atau `Playfair Display` (digunakan untuk aksen filosofis) dipadukan dengan `Plus Jakarta Sans` / `Inter` (Bold/SemiBold, *tracking* sedikit renggang) untuk struktur judul modern.
2. **Body Text (Keterbacaan Tinggi):** `Plus Jakarta Sans` — Bersih, geometris, dan sangat profesional untuk menjelaskan lingkup proyek dan CV.
3. **Data, Angka, RAB & Kode Teknis:** `JetBrains Mono` atau `Space Mono` — Digunakan khusus untuk menampilkan angka biaya (Rp / USD), volume ($\text{m}^2$, $\text{m}^3$, $\text{kg}$), nomor indeks seksi (`01 // 06`), dan persentase efisiensi.

---

## 4. Elemen Visual & Ornamen (UI Components)
* **Architectural Grid Lines:** Garis bantu tipis (`1px solid rgba(255,255,255,0.07)`) yang membagi layar menjadi kolom-kolom simetris layaknya kertas gambar teknik (CAD).
* **Crosshair Markers (`+`):** Tanda plus kecil di sudut-sudut kartu portofolio untuk memperkuat nuansa pengukuran presisi.
* **Glassmorphism Slate Cards:** Panel dengan `backdrop-filter: blur(12px)` dan gradien abu-abu metalik halus.
* **Micro-Interactions:** Saat kursor diarahkan ke kartu proyek (*hover*), garis tepi berubah menjadi warna *Architectural Brass* (`#C5A880`) disertai pergeseran halus pada indikator angka anggaran.