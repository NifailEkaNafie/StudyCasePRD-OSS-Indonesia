# Changelog — OSS Indonesia Mobile (Vibe Code: Hanya PRD)

Seluruh perubahan penting pada proyek **OSS Indonesia Mobile (Pendekatan 1: Vibe Code Hanya PRD)** didokumentasikan pada berkas ini.
Format penulisan mengacu pada [Keep a Changelog](https://keepachangelog.com/id-ID/1.0.0/) dan mengikuti standar **Semantic Commit / Conventional Commits**.

- **Nama Mahasiswa**: Nifail Eka Nafie
- **NIM**: 202310370311344
- **Kelas**: Rekayasa Interaksi C
- **Studi Kasus**: Perbaikan UX Akses Lampiran Regulasi PDF pada Aplikasi OSS Indonesia (Worksheet 1–8)

---

## [1.0.0] - 2026-11-22

### Added (`feat`)
- **`feat(attachment-list)` — Implementasi UX-04 (Prioritas P3) & US-05**:
  - Menambahkan komponen `AttachmentCard.jsx` pada halaman Detail Regulasi untuk menampilkan nama dokumen, ukuran berkas, dan badge format file **`PDF`** secara jelas sebelum pengguna membuka lampiran.
  - Memasukkan data autentik *Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021* (Lampiran I s/d IV & Abstrak) sesuai bukti tangkapan layar pada **Worksheet 1**.
- **`feat(pdf-viewer)` — Implementasi UX-01 (Prioritas P1) & US-01**:
  - Menambahkan komponen `DocumentPreviewModal.jsx` (*In-App PDF Viewer*) sehingga pelaku usaha (Persona **Yuda**) dapat membuka dan membaca isi lampiran regulasi berformat PDF secara langsung dari halaman detail regulasi tanpa hambatan.
- **`feat(download-fallback)` — Implementasi UX-02 (Prioritas P2) & US-02**:
  - Menambahkan fitur **Unduh Dokumen PDF** langsung pada daftar lampiran, di dalam header penampil PDF, dan pada dialog pemulihan kendala.
  - Menambahkan pilihan **Buka di Aplikasi Pembaca PDF Lain** sebagai alternatif akses dokumen ketika tampilan langsung mengalami kendala.
- **`feat(simulator)` — Panel Simulasi Moment of Truth (Worksheet 7)**:
  - Menambahkan komponen `SimulatorPanel.jsx` untuk menguji skenario **Normal (PDF Berhasil Dibuka)** dan skenario **Gagal Memuat PDF (Simulasi Error 403)** secara interaktif.

### Fixed (`fix`)
- **`fix(error-recovery)` — Implementasi UX-03 (Prioritas P2), US-03 & US-04**:
  - Mengganti pesan error teknis mentah `Terjadi Kesalahan: 403 : Authentication failed` (yang ditemukan pada investigasi **Worksheet 1** dan wawancara responden **U5** pada **Worksheet 5**) dengan komponen `ErrorRecoveryModal.jsx`.
  - Menggunakan bahasa sederhana yang mudah dipahami oleh pelaku usaha serta menyediakan tombol tindakan langsung: **Coba Lagi** (tanpa mengulang pencarian dari awal) dan **Unduh Dokumen PDF**.

### Documentation (`docs`) & Configuration (`chore`)
- **`docs(prd)`**: Menyusun `PRD.txt` dan `PRD.md` secara komprehensif berdasarkan sintesis Worksheet 1 s/d Worksheet 8.
- **`docs(repo)`**: Menyusun `README.md`, `CONTRIBUTING.md`, `Semantic.txt`, dan `CHANGELOG.md`.
- **`chore(repo)`**: Mengonfigurasi proyek React + Vite (`oss-mobile`), aturan linter `.oxlintrc.json`, template `.gitmessage`, serta validasi Git Hooks pada `.githooks/commit-msg` dan `.githooks/pre-push`.
