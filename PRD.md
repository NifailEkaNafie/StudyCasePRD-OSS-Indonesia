# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Fitur: Penampil Dokumen Lampiran Regulasi Terintegrasi & Pemulihan Kendala Akses PDF pada Aplikasi OSS Indonesia

- **Versi**: 1.0.0
- **Status**: Approved for Implementation (Vibe Coding — Worksheet 12)
- **Nama Penyusun**: Nifail Eka Nafie
- **NIM**: 202310370311344
- **Kelas**: Rekayasa Interaksi C
- **Jenis Produk**: Mobile Application (Aplikasi Layanan Perizinan Berusaha — OSS Indonesia)
- **Sumber Riset**: Sintesis Worksheet 1 (UX Detective) s/d Worksheet 8 (UX Requirements & User Stories)

---

## 1. Product Overview

### 1.1 Latar Belakang
**OSS Indonesia (Online Single Submission)** adalah aplikasi mobile layanan perizinan berusaha berbasis risiko yang dikelola pemerintah (Kementerian Investasi/BKPM) untuk membantu pelaku usaha mengurus Nomor Induk Berusaha (NIB) serta memahami regulasi dan standar kegiatan usaha (KBLI) secara elektronik.

Berdasarkan hasil investigasi **UX Detective (Worksheet 1)**, perumusan masalah **5W1H & HMW (Worksheet 2)**, pemetaan **User & Stakeholder (Worksheet 3)**, serta **Observasi & Wawancara Pengguna U1–U5 (Worksheet 4 & 5)**, ditemukan bahwa pelaku usaha sangat bergantung pada menu **Informasi -> Regulasi** untuk membaca rincian persyaratan hukum sebelum mengajukan izin.

Namun, pada saat pengguna membuka halaman **Detail Regulasi** (seperti *Peraturan Menteri ESDM Nomor 5 Tahun 2021 tentang Standar Kegiatan Usaha dan Produk pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko*) dan menekan salah satu dokumen lampiran berformat PDF (misalnya *Lampiran III*), sistem mengalami kegagalan dengan menampilkan pesan teknis **`Terjadi Kesalahan: 403 : Authentication failed`** dan layar kosong. Akibatnya:
1. Dokumen lampiran PDF tidak dapat dibuka atau dibaca sama sekali di dalam aplikasi.
2. Pengguna tidak memahami arti pesan error teknis `403 : Authentication failed` dan tidak diberikan alternatif tindakan yang efektif selain tombol `Coba Lagi` yang terus gagal.
3. Pelaku usaha terhambat dalam mencocokkan kode KBLI dan persyaratan teknis legalitas usahanya.

### 1.2 Product Vision
Menyediakan pengalaman akses, pembacaan, dan pengunduhan dokumen lampiran regulasi berformat PDF yang **andal, transparan, dan bebas jalan buntu (*no dead-end UI*)** pada aplikasi mobile OSS Indonesia, sehingga pelaku usaha dapat memahami persyaratan hukum perizinan secara mandiri tanpa hambatan teknis.

### 1.3 Target Pengguna
- **Core User**: Pelaku usaha mandiri (UMKM, mahasiswa wirausaha, maupun pemilik bisnis baru) yang menggunakan aplikasi OSS Indonesia untuk mencari informasi regulasi dan mengurus NIB secara mandiri.
- **Secondary User**: Petugas layanan bantuan OSS yang mendampingi pelaku usaha saat mengalami kendala akses dokumen.
- **Stakeholder**: Pengelola sistem aplikasi OSS Indonesia (Kementerian Investasi/BKPM).

---

## 2. User Problem & Design Challenge

### 2.1 Temuan Riset Utama (Worksheet 1–7)
1. **Kegagalan Membuka Lampiran PDF (Responden U5 - Worksheet 5)**:
   > *"Aku mencoba membuka lampiran dokumen yang formatnya PDF ... kendalanya, lampiran PDF tersebut tidak bisa dibuka."* — **U5**
2. **Dampak Emosional pada Empathy Map (Worksheet 6)**:
   - **Think & Feel**: Merasa tidak berdaya (*helpless*) dan jengkel saat dokumen lampiran regulasi berformat PDF gagal dibuka, padahal rincian persyaratan hukum ada di dalam berkas tersebut.
   - **Do**: Mengetuk tautan lampiran PDF berulang kali dan mencari alternatif cara untuk mengunduh berkas regulasi yang gagal terbuka.
3. **Moment of Truth / MOT (Worksheet 7)**:
   - Masalah terbesar terjadi pada tahap **During**, yaitu ketika pengguna menekan tautan lampiran regulasi berformat PDF pada halaman detail regulasi, tetapi dokumen gagal dimuat (`403 : Authentication failed`) tanpa jalur pemulihan (*fallback*) yang memadai.

### 2.2 Problem Statement (Worksheet 2)
**Pelaku usaha yang menggunakan aplikasi OSS Indonesia untuk mengakses layanan perizinan berusaha secara mandiri** membutuhkan akses terhadap informasi regulasi yang tersedia pada aplikasi, tetapi mengalami hambatan ketika file lampiran regulasi berformat PDF tidak dapat dibuka atau ditampilkan setelah dipilih pada halaman detail regulasi, sehingga pengguna tidak dapat memperoleh informasi yang terdapat dalam dokumen dan proses pencarian maupun pemahaman informasi regulasi menjadi terganggu.

### 2.3 Design Challenge Terpilih (How Might We - Worksheet 2)
> *"How might we membantu pengguna mengakses file lampiran regulasi so that pengguna dapat memperoleh informasi yang dibutuhkan tanpa mengalami hambatan?"*

---

## 3. User Persona (Worksheet 6)

- **Nama Persona**: Yuda (nama samaran)
- **Usia**: 21 Tahun
- **Pekerjaan**: Mahasiswa yang membuka usaha mandiri di rumah
- **Konteks Penggunaan**: Mengakses layanan OSS melalui aplikasi mobile di sela-sela mengelola operasional usaha untuk mengurus kelengkapan legalitas, mencocokkan kode KBLI, dan menerbitkan NIB.
- **Kutipan Persona**:
  > *"Saya ingin mengurus izin usaha mandiri dengan cepat dan jelas, tapi alurnya membingungkan saat dilempar dari aplikasi ke web, ditambah lampiran aturan PDF-nya tidak bisa dibuka sama sekali."*

### Goals
1. Menyelesaikan penerbitan Nomor Induk Berusaha (NIB) secara mandiri, cepat, dan sesuai ketentuan hukum.
2. Membaca dan memahami dokumen regulasi resmi secara lengkap melalui berkas lampiran PDF yang tersedia di aplikasi.

### Pain Points
1. Berkas lampiran PDF regulasi tidak dapat terbuka (`403: Authentication failed`) sehingga kehilangan informasi penting mengenai syarat perizinan.
2. Tidak adanya petunjuk yang jelas atau opsi alternatif ketika dokumen gagal ditampilkan secara langsung.
3. Identitas dan format berkas lampiran pada halaman detail regulasi kurang informatif sebelum diklik.

### Needs
1. Penampil dokumen PDF terintegrasi (*In-App PDF Viewer*) yang stabil untuk membaca berkas regulasi kapan saja.
2. Alternatif akses untuk mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain di perangkat.
3. Pesan kesalahan dengan bahasa sederhana yang mudah dipahami disertai pilihan tindakan pemulihan (*Coba Lagi* atau *Unduh*).
4. Informasi nama dan format dokumen (`PDF`) yang jelas sebelum pengguna memilih lampiran.

---

## 4. Product Goals & Success Metrics (Worksheet 8)

### 4.1 Product Goals
1. Memastikan pengguna dapat membuka dan membaca lampiran regulasi berformat PDF secara langsung pada halaman detail regulasi (**UX-01**).
2. Menyediakan jalur alternatif pengunduhan dan pembukaan dokumen di aplikasi pembaca PDF eksternal (**UX-02**).
3. Menyajikan pesan kesalahan yang ramah pengguna (*human-readable error message*) serta opsi pemulihan saat gagal memuat dokumen (**UX-03**).
4. Menampilkan identitas nama dokumen dan format file (`PDF`) secara jelas pada daftar lampiran regulasi (**UX-04**).

### 4.2 Success Metrics (Target Pengujian Usability - Worksheet 8)

| Kode UX | Indikator Keberhasilan Pengujian | Target Pengujian | Prioritas |
| :--- | :--- | :--- | :--- |
| **UX-01** | Peserta dapat membuka dan membaca dokumen lampiran PDF secara langsung tanpa bantuan | **Minimal 4 dari 5 peserta (≥ 80%)** | **P1 – Tinggi** |
| **UX-02** | Peserta dapat menemukan dan menggunakan pilihan unduh / alternatif akses dokumen tanpa bantuan | **Minimal 4 dari 5 peserta (≥ 80%)** | **P2 – Sedang** |
| **UX-03** | Peserta dapat memahami pesan kesalahan ketika PDF gagal dibuka dan menentukan tindakan selanjutnya | **Minimal 4 dari 5 peserta (≥ 80%)** | **P2 – Sedang** |
| **UX-04** | Peserta dapat mengidentifikasi nama dan format dokumen (`PDF`) yang tepat sebelum membuka lampiran tanpa bantuan | **Minimal 4 dari 5 peserta (≥ 80%)** | **P3 – Rendah** |

---

## 5. Pemetaan Insight → Need → Requirement (Worksheet 8)

| ID | Research Insight | User Need | Functional Requirement | UX Requirement & Prioritas |
| :--- | :--- | :--- | :--- | :--- |
| **REQ-01** (`UX-01`) | Berdasarkan wawancara U5 pada Worksheet 5, pengguna mencoba membuka lampiran regulasi berformat PDF pada halaman detail regulasi, tetapi dokumen tersebut tidak dapat dibuka. | Pengguna membutuhkan akses untuk membuka dan membaca lampiran PDF secara langsung tanpa mengalami kendala. | Sistem harus menyediakan fungsi untuk membuka dan menampilkan dokumen PDF secara langsung (*In-App PDF Viewer*) pada halaman detail regulasi. | Pengguna dapat membuka dan membaca dokumen PDF dengan mudah. Target: minimal 4 dari 5 peserta dapat membuka dokumen tanpa bantuan. (**P1 – Tinggi**) |
| **REQ-02** (`UX-02`) | Worksheet 3 dan Worksheet 5 menunjukkan bahwa kegagalan membuka PDF menyebabkan pengguna tidak memperoleh informasi regulasi. Worksheet 6 mencatat harapan agar PDF dapat dibuka atau diunduh dengan stabil. | Pengguna membutuhkan alternatif akses agar tetap dapat memperoleh dokumen ketika PDF tidak dapat ditampilkan secara langsung. | Sistem harus menyediakan pilihan untuk mengunduh dokumen PDF ke perangkat atau membukanya melalui aplikasi pembaca PDF eksternal. | Pengguna dapat menemukan dan menggunakan alternatif akses dokumen dengan mudah. Target: minimal 4 dari 5 peserta menemukan pilihan unduh tanpa bantuan. (**P2 – Sedang**) |
| **REQ-03** (`UX-03`) | Pada Worksheet 3 terdapat asumsi pengguna butuh petunjuk saat lampiran gagal dibuka. Worksheet 7 menunjukkan tindakan setelah kegagalan belum terfasilitasi dengan jelas. | Pengguna membutuhkan informasi yang jelas mengenai kondisi ketika dokumen gagal dibuka serta tindakan yang dapat dilakukan selanjutnya. | Sistem harus menampilkan pesan kesalahan berbahasa sederhana ketika PDF gagal dibuka serta menyediakan tombol untuk mencoba kembali (*Coba Lagi*) atau mengunduh dokumen. | Pesan kesalahan harus menggunakan bahasa sederhana, mudah dipahami, dan menunjukkan tindakan berikutnya. Target: minimal 4 dari 5 peserta memahami pesan & tindakan lanjutan. (**P2 – Sedang**) |
| **REQ-04** (`UX-04`) | Pada Worksheet 7, tahap membuka detail regulasi menunjukkan perlunya identitas lampiran yang jelas agar pengguna mengenali dokumen sebelum membukanya. | Pengguna membutuhkan informasi nama dan format dokumen yang jelas sebelum memilih lampiran regulasi. | Sistem harus menampilkan nama dokumen, ukuran, dan badge format file (`PDF`) pada bagian daftar lampiran di halaman detail regulasi. | Pengguna dapat mengenali dokumen yang akan dibuka berdasarkan nama dan format file dengan mudah. Target: minimal 4 dari 5 peserta mengidentifikasi dokumen tanpa bantuan. (**P3 – Rendah**) |

---

## 6. Functional Requirements Detail

### FR-01: Daftar & Pencarian Regulasi OSS Indonesia
- Menampilkan halaman **Regulasi** yang dapat diakses dari menu **Informasi** pada halaman Beranda aplikasi OSS Indonesia.
- Pengguna dapat melihat daftar peraturan resmi (termasuk *Peraturan Menteri ESDM Nomor 5 Tahun 2021*, *PP Nomor 5 Tahun 2021*, dan *Peraturan BKPM Nomor 4 Tahun 2021*) serta mencari regulasi berdasarkan kata kunci.

### FR-02: Halaman Detail Regulasi & Identitas Lampiran (Menjawab UX-04)
- Menampilkan informasi lengkap regulasi: Judul Peraturan, Nomor Peraturan, Sektor/KBLI Terkait, Tanggal Pengundangan, dan Daftar Dokumen Lampiran.
- Setiap item pada bagian **Daftar Lampiran Regulasi** wajib menampilkan:
  1. **Nama lengkap dokumen lampiran** (contoh: *Lampiran III Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021*).
  2. **Badge format file eksplisit** (`PDF`) beserta ukuran file (contoh: `2.4 MB`).
  3. **Tombol Aksi Utama**: Tombol untuk membuka dokumen secara langsung (*Buka PDF*) dan tombol aksi cepat untuk mengunduh dokumen (*Unduh*).

### FR-03: Penampil Dokumen PDF Terintegrasi / In-App PDF Viewer (Menjawab UX-01)
- Ketika pengguna memilih salah satu lampiran PDF dalam kondisi sistem normal, aplikasi membuka **In-App PDF Viewer** tanpa melempar pengguna keluar dari aplikasi.
- Menampilkan isi dokumen regulasi secara jelas dan terstruktur (lengkap dengan informasi halaman, nomor peraturan, tabel persyaratan KBLI/NIB, serta tombol unduh di bagian header viewer).

### FR-04: Alternatif Unduh & Buka di Pembaca Eksternal (Menjawab UX-02)
- Menyediakan tombol **Unduh Dokumen PDF** baik pada kartu lampiran, di dalam header *In-App PDF Viewer*, maupun di dalam dialog pemulihan error.
- Menyediakan opsi **Buka dengan Aplikasi Pembaca PDF Lain** agar pengguna tetap dapat membaca berkas menggunakan aplikasi pembaca PDF bawaan perangkat jika penampil internal mengalami kendala.
- Menampilkan umpan balik (*feedback* notifikasi/status unduhan berhasil) saat berkas selesai diunduh.

### FR-05: Penanganan Pesan Kesalahan & Mekanisme Pemulihan / Error Recovery (Menjawab UX-03)
- Menggantikan pesan error teknis mentah `Terjadi Kesalahan: 403 : Authentication failed` dengan dialog informasi yang menggunakan **bahasa sederhana dan solutif**, menjelaskan bahwa dokumen belum dapat ditampilkan secara langsung saat ini.
- Menyediakan **dua pilihan tindakan pemulihan langsung** pada layar yang sama (tanpa memaksa pengguna mengulang pencarian dari awal):
  1. **Tombol "Coba Lagi"**: Memuat ulang dokumen lampiran langsung dari halaman detail regulasi.
  2. **Tombol "Unduh Dokumen PDF" / "Buka via Pembaca PDF Lain"**: Jalur alternatif agar pengguna tetap memperoleh dokumen regulasi saat itu juga.

### FR-06: Panel Simulasi Pengujian Skenario (Simulator Panel)
- Menyediakan `SimulatorPanel` interaktif untuk memfasilitasi demonstrasi dan pengujian skenario Moment of Truth (Worksheet 7):
  - **Mode Normal (200 OK)**: Lampiran PDF langsung terbuka dengan lancar di *In-App PDF Viewer* (UX-01).
  - **Mode Gagal Memuat / Error 403**: Menyimulasikan kegagalan pembukaan PDF untuk menguji tampilan pesan kesalahan yang jelas (UX-03), fungsi tombol *Coba Lagi* (US-04), serta fungsi alternatif *Unduh Dokumen PDF* (UX-02).

---

## 7. Non-Functional Requirements

- **NFR-01 (Usability & Clarity)**: Seluruh label, badge format `PDF`, dan pesan kesalahan harus menggunakan Bahasa Indonesia yang jelas, bebas jargon kode HTTP teknis pada pesan utama, dan mudah dipahami oleh pelaku usaha awam.
- **NFR-02 (Responsiveness & Mobile Viewport)**: Antarmuka dirancang dalam bingkai aplikasi mobile OSS Indonesia (rasio layar ponsel pintar modern) yang responsif ketika dibuka di browser desktop maupun perangkat seluler.
- **NFR-03 (Error Prevention & Recovery)**: Pengguna tidak boleh terjebak pada layar kosong (*dead-end screen*) ketika dokumen gagal dimuat; setiap state error wajib memiliki minimal satu tombol pemulihan aktif.
- **NFR-04 (Performance)**: Transisi antar-halaman (Beranda -> Regulasi -> Detail Regulasi -> PDF Viewer) berjalan instan tanpa *reload* halaman penuh.

---

## 8. User Stories (Worksheet 8 Bagian B)

1. **US-01 (Prioritas P1 - UX-01)**
   > *As a* pengguna aplikasi OSS Indonesia yang membutuhkan informasi regulasi, *I want to* membuka lampiran PDF secara langsung dari halaman detail regulasi, *so that* saya dapat membaca informasi yang dibutuhkan untuk memahami persyaratan perizinan usaha.

2. **US-02 (Prioritas P2 - UX-02)**
   > *As a* pengguna aplikasi OSS Indonesia, *I want to* mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain ketika dokumen tidak dapat ditampilkan secara langsung, *so that* saya tetap dapat memperoleh informasi regulasi yang dibutuhkan.

3. **US-03 (Prioritas P2 - UX-03)**
   > *As a* pengguna aplikasi OSS Indonesia, *I want to* mendapatkan pesan yang jelas ketika lampiran PDF gagal dibuka, *so that* saya dapat memahami kendala yang terjadi dan mengetahui tindakan selanjutnya.

4. **US-04 (Prioritas P2 - UX-03)**
   > *As a* pengguna aplikasi OSS Indonesia, *I want to* mencoba kembali membuka lampiran PDF dari halaman detail regulasi, *so that* saya tidak perlu mengulangi proses pencarian dokumen dari awal.

5. **US-05 (Prioritas P3 - UX-04)**
   > *As a* pengguna aplikasi OSS Indonesia, *I want to* melihat nama dan format dokumen pada bagian lampiran regulasi, *so that* saya dapat mengenali dokumen yang sesuai sebelum membukanya.

---

## 9. Scope

### In Scope
- Halaman Beranda OSS Indonesia & Navigasi menuju menu Informasi Regulasi.
- Halaman Daftar Regulasi dengan pencarian peraturan.
- Halaman Detail Regulasi (*Peraturan Menteri ESDM No. 5 Tahun 2021*, dll.) dengan daftar lampiran beridentitas lengkap (nama dokumen, badge format `PDF`, ukuran berkas).
- Komponen *In-App PDF Viewer* untuk membaca isi lampiran regulasi secara langsung.
- Fitur unduh dokumen PDF dan opsi buka di aplikasi pembaca PDF eksternal.
- Komponen *Error Recovery Modal* dengan pesan berbahasa sederhana, tombol *Coba Lagi*, dan tombol *Unduh PDF*.
- Komponen *Simulator Panel* untuk mendemonstrasikan kondisi Normal vs kondisi Error pada Moment of Truth.

### Out of Scope
- Integrasi backend produksi ke server database Kementerian Investasi/BKPM.
- Proses pengajuan formulir NIB lintas website eksternal dan pemilihan peta koordinat (yang diidentifikasi pada Worksheet 6 & 8 sebagai luar cakupan fokus utama penelitian).

---

## 10. Product Acceptance Criteria

1. **[AC-01 / UX-04]** Setiap item lampiran pada halaman detail regulasi menampilkan nama lengkap dokumen dan badge format file `PDF` secara jelas sebelum diklik.
2. **[AC-02 / UX-01]** Pada skenario normal, menekan dokumen lampiran langsung membuka *In-App PDF Viewer* yang menampilkan isi aturan regulasi tanpa error.
3. **[AC-03 / UX-02]** Pengguna dapat mengunduh dokumen PDF atau memilih membukanya dengan pembaca PDF lain baik dari halaman detail regulasi, dari dalam viewer, maupun saat terjadi error.
4. **[AC-04 / UX-03]** Pada skenario gagal memuat dokumen, sistem menampilkan pesan kesalahan dengan bahasa sederhana yang mudah dipahami (bukan sekadar pesan kaku `403 : Authentication failed`) beserta penjelasan penyebab singkat.
5. **[AC-05 / US-04]** Pengguna dapat menekan tombol **Coba Lagi** dari halaman detail regulasi tanpa harus mengulangi pencarian regulasi dari halaman awal.

---
**End of PRD v1.0.0 — Nifail Eka Nafie (202310370311344)**
