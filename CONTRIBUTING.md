# Panduan Kontribusi & Standar Pengembangan (CONTRIBUTING.md)

Proyek ini merupakan implementasi **Vibe Coding (Pendekatan 1: Hanya PRD)** untuk studi kasus perbaikan pengalaman pengguna (UX) pada aplikasi mobile **OSS Indonesia (Online Single Submission)**, khususnya pada alur **Akses dan Pembacaan Dokumen Lampiran Regulasi Berformat PDF**.

## 1. Identitas Mahasiswa & Studi Kasus

- **Nama**: Nifail Eka Nafie
- **NIM**: 202310370311344
- **Kelas**: Rekayasa Interaksi C
- **Produk yang Dianalisis**: Aplikasi Mobile OSS Indonesia (Kementerian Investasi / BKPM)
- **Fokus Masalah (Worksheet 1–8)**: Kegagalan membuka file lampiran regulasi berformat PDF (`403: Authentication failed`) pada halaman detail regulasi yang menghambat pelaku usaha memahami persyaratan hukum perizinan berusaha (NIB & KBLI).

## 2. Alur Kerja Git & Semantic Commit

Repositori ini menerapkan standar **Conventional Commits (Semantic Commit)** yang divalidasi melalui `.githooks/commit-msg`.

### Format Pesan Commit

```text
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Daftar `type` yang Digunakan

| Type | Keterangan |
| :--- | :--- |
| `feat` | Penambahan fitur baru sesuai Functional/UX Requirement pada PRD (UX-01 s/d UX-04) |
| `fix` | Perbaikan masalah UX atau penanganan error (misal: pemulihan error `403` saat membuka PDF) |
| `docs` | Pembaruan dokumentasi (`PRD.txt`, `PRD.md`, `CHANGELOG.md`, `README.md`, `Semantic.txt`) |
| `style` | Penyesuaian tampilan antarmuka (CSS, tata letak kartu lampiran, badge format file) |
| `refactor` | Restrukturisasi komponen React tanpa mengubah perilaku fungsional |
| `test` | Penambahan skenario simulasi pada `SimulatorPanel.jsx` |
| `chore` | Konfigurasi proyek, Vite, linter (`.oxlintrc.json`), dan Git Hooks |

## 3. Cara Menjalankan Proyek

```bash
cd oss-mobile
npm install
npm run dev
```

Untuk mengaktifkan Git Hooks dan template pesan commit:

```bash
git config core.hooksPath .githooks
git config commit.template .gitmessage
```
