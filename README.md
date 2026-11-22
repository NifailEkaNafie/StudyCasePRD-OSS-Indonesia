# OSS Indonesia Mobile — Vibe Code (Pendekatan 1: Hanya PRD)

Repositori ini berisi implementasi prototipe aplikasi mobile **OSS Indonesia (Online Single Submission)** menggunakan metode **Vibe Coding (Pendekatan 1: Hanya PRD)** untuk tugas **Worksheet 12 — Mata Kuliah Rekayasa Interaksi**.

Seluruh fitur dalam aplikasi ini dirancang dan dibangun berdasarkan temuan riset berurutan dari **Worksheet 1 hingga Worksheet 8**.

---

## 👤 Informasi Mahasiswa

| Atribut | Keterangan |
| :--- | :--- |
| **Nama** | Nifail Eka Nafie |
| **NIM** | 202310370311344 |
| **Kelas** | Rekayasa Interaksi C |
| **Produk yang Dianalisis** | Aplikasi Mobile OSS Indonesia (Kementerian Investasi / BKPM) |
| **Fokus Masalah Utama** | Kegagalan membuka file lampiran regulasi berformat PDF (`403: Authentication failed`) pada halaman detail regulasi |
| **Pendekatan Repositori Ini** | **Vibe Code — Hanya PRD** (Tanpa tambahan file Agent Skill khusus) |

---

## 📌 Ringkasan Masalah & Solusi UX (Sintesis Worksheet 1–8)

1. **Worksheet 1 & 2 (UX Detective, 5W1H & HMW)**:
   - Pada halaman Detail Regulasi (*Peraturan Menteri ESDM Nomor 5 Tahun 2021*), memilih lampiran PDF memicu error `Terjadi Kesalahan: 403 : Authentication failed` sehingga dokumen gagal ditampilkan.
   - **Design Challenge (HMW)**: *"How might we membantu pengguna mengakses file lampiran regulasi so that pengguna dapat memperoleh informasi yang dibutuhkan tanpa mengalami hambatan?"*
2. **Worksheet 3, 4 & 5 (Stakeholder, Research Plan & User Interview)**:
   - Responden **U5** menyatakan: *"Aku mencoba membuka lampiran dokumen yang formatnya PDF ... kendalanya, lampiran PDF tersebut tidak bisa dibuka."*
3. **Worksheet 6 & 7 (Empathy Map, Persona Yuda & User Journey Map)**:
   - Persona **Yuda (21 tahun, Mahasiswa pemilik usaha mandiri)** merasa jengkel dan tidak berdaya (*helpless*) pada tahap **During (Moment of Truth)** ketika menekan tautan lampiran PDF namun gagal terbuka.
4. **Worksheet 8 (UX Requirements & User Stories)**:
   - **UX-01 (P1 - Tinggi)**: Membuka dan membaca lampiran PDF secara langsung pada halaman detail regulasi (*In-App PDF Viewer*).
   - **UX-02 (P2 - Sedang)**: Mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain ketika akses langsung terkendala.
   - **UX-03 (P2 - Sedang)**: Menampilkan pesan kesalahan berbahasa sederhana yang mudah dipahami disertai pilihan **Coba Lagi** atau **Unduh Dokumen**.
   - **UX-04 (P3 - Rendah)**: Menampilkan nama dokumen dan format file (`PDF`) secara jelas sebelum pengguna membuka lampiran.

---

## 📂 Struktur Repositori

```text
├── .githooks/
│   ├── commit-msg               # Hook validasi format Semantic Commit
│   └── pre-push                 # Hook verifikasi build sebelum push
├── oss-mobile/                  # Aplikasi React + Vite (OSS Indonesia Mobile)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AttachmentCard.jsx        # Kartu lampiran dengan identitas & badge PDF (UX-04)
│   │   │   ├── DocumentPreviewModal.jsx  # In-App PDF Viewer langsung (UX-01 & UX-02)
│   │   │   ├── ErrorRecoveryModal.jsx    # Pesan kesalahan jelas + Coba Lagi & Unduh (UX-03)
│   │   │   ├── HomeView.jsx              # Beranda aplikasi OSS Indonesia
│   │   │   ├── RegulationDetailView.jsx  # Halaman detail regulasi & daftar lampiran
│   │   │   ├── RegulationListView.jsx    # Daftar pencarian regulasi OSS
│   │   │   └── SimulatorPanel.jsx        # Panel penguji skenario Normal vs Error 403 (MOT)
│   │   ├── data/
│   │   │   └── regulationData.js         # Data regulasi Permen ESDM No. 5 Tahun 2021, dll.
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── .oxlintrc.json
│   ├── README.md
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── .gitmessage                  # Template pesan Semantic Commit
├── CHANGELOG.md                 # Catatan perubahan fitur (Change Log)
├── CONTRIBUTING.md              # Panduan kontribusi & konvensi commit
├── PRD.md                       # Product Requirements Document (Format Markdown)
├── PRD.txt                      # Product Requirements Document (Format Teks)
├── README.md                    # Dokumentasi utama repositori
└── Semantic.txt                 # Dokumentasi aturan Semantic Commit & pemetaan UX
```

---

## 🚀 Cara Menjalankan Aplikasi

```bash
cd oss-mobile
npm install
npm run dev
```

Buka URL lokal yang ditampilkan di terminal (default: `http://localhost:5173`). Gunakan **Simulator Panel** di bagian atas layar untuk menguji skenario:
1. **Mode Normal (PDF Berhasil Dibuka)** — Menguji **UX-01** & **UX-04**.
2. **Mode Simulasi Kendala (Error 403 Saat Buka PDF)** — Menguji **UX-02** & **UX-03** (Moment of Truth pada Worksheet 7).

---

## 📄 Tautan Dokumen Penting di Repositori Ini

- 📋 **Product Requirements Document (PRD)**: [PRD.md](./PRD.md) | [PRD.txt](./PRD.txt)
- 📝 **Change Log**: [CHANGELOG.md](./CHANGELOG.md)
- 🔖 **Semantic Commit Log**: [Semantic.txt](./Semantic.txt)
