# **PRODUCT REQUIREMENTS DOCUMENT (PRD)**

## **Fitur: Penampil & Pengelola Dokumen Lampiran Regulasi PDF Terintegrasi pada Aplikasi OSS Indonesia**

**Versi:** 1.0  
**Status:** Draft  
**Jenis Produk:** Fitur aplikasi layanan perizinan berusaha secara elektronik (Mobile Application — OSS Indonesia)  
**Penyusun:** Nifail Eka Nafie (202310370311344) — Rekayasa Interaksi C

---

## **1\. Product Overview**

### **1.1 Latar Belakang**

Pelaku usaha yang mengurus Nomor Induk Berusaha (NIB) dan perizinan berusaha berbasis risiko melalui aplikasi mobile **OSS Indonesia (Online Single Submission)** sangat membutuhkan akses terhadap informasi regulasi resmi untuk memahami standar kegiatan usaha, kode KBLI, serta persyaratan hukum yang berlaku.

Namun, berdasarkan hasil observasi dan wawancara pengguna pada **Worksheet 1 hingga Worksheet 8**, ditemukan kendala kritis pada halaman **Detail Regulasi** (seperti pada *Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021*). Ketika pengguna memilih salah satu berkas lampiran regulasi berformat PDF, sistem mengalami kegagalan teknis dengan menampilkan pesan **`Terjadi Kesalahan: 403 : Authentication failed`** sehingga dokumen tidak dapat dibuka maupun dibaca.

Kondisi tersebut menyebabkan pelaku usaha kehilangan akses terhadap informasi persyaratan perizinan yang terdapat di dalam dokumen lampiran, merasa bingung karena pesan kesalahan menggunakan istilah teknis yang tidak menjelaskan solusi, serta terhambat dalam melanjutkan proses pengurusan legalitas usahanya secara mandiri.

Untuk mengatasi permasalahan tersebut, dikembangkan fitur **Penampil & Pengelola Dokumen Lampiran Regulasi PDF Terintegrasi** yang memungkinkan pengguna mengenali identitas dan format dokumen secara jelas, membuka serta membaca lampiran PDF langsung di dalam aplikasi (*In-App PDF Viewer*), memperoleh alternatif unduh atau pembukaan melalui aplikasi pembaca PDF lain, serta mendapatkan pesan kesalahan yang mudah dipahami beserta tombol pemulihan (*Coba Lagi*) ketika terjadi gangguan akses.

### **1.2 Product Vision**

Menyediakan satu pengalaman akses dan pembacaan dokumen lampiran regulasi berformat PDF yang andal, jelas, dan memiliki mekanisme pemulihan kendala (*error recovery*) yang mudah dipahami agar pelaku usaha dapat mempelajari persyaratan hukum perizinan berusaha secara mandiri tanpa hambatan.

### **1.3 Target Pengguna**

Pelaku usaha mandiri (termasuk pelaku UMKM dan mahasiswa wirausaha) yang menggunakan aplikasi mobile OSS Indonesia untuk mencari informasi regulasi dan mengurus perizinan berusaha (NIB) secara elektronik.

---

## **2\. User Problem**

Berdasarkan hasil observasi (*UX Detective*), wawancara pengguna (*User Interview* U1–U5), pemetaan empati (*Empathy Map*), dan *User Journey Map* pada **Worksheet 1–7**, ditemukan permasalahan utama:

1. Lampiran dokumen regulasi berformat PDF pada halaman detail regulasi tidak dapat dibuka dan hanya menampilkan pesan error teknis (`403 : Authentication failed`).  
2. Pengguna tidak dapat membaca rincian persyaratan perizinan dan standar KBLI yang tersimpan di dalam dokumen lampiran PDF tersebut.  
3. Tidak tersedia pilihan alternatif yang jelas untuk mengunduh dokumen atau membukanya melalui aplikasi pembaca PDF lain ketika penampil internal mengalami kegagalan.  
4. Pesan kesalahan yang muncul menggunakan istilah teknis yang sulit dipahami pengguna awam dan tidak memberikan panduan tindakan selanjutnya.  
5. Informasi identitas nama dokumen, ukuran berkas, dan format file (`PDF`) pada daftar lampiran belum ditampilkan secara jelas sebelum pengguna memilih dokumen.

### **Problem Statement**

Pelaku usaha yang menggunakan aplikasi OSS Indonesia untuk mengakses layanan perizinan berusaha secara mandiri membutuhkan akses terhadap informasi regulasi yang tersedia pada aplikasi, tetapi mengalami hambatan ketika file lampiran regulasi berformat PDF tidak dapat dibuka atau ditampilkan setelah dipilih pada halaman detail regulasi, sehingga pengguna tidak dapat memperoleh informasi yang terdapat dalam dokumen dan proses pencarian maupun pemahaman informasi regulasi menjadi terganggu.

---

## **3\. User Persona**

**Nama:** Yuda (nama samaran)  
**Usia:** 21 tahun  
**Pekerjaan:** Mahasiswa yang buka usaha di rumah

### **Karakteristik**

* Mengakses layanan OSS Indonesia melalui aplikasi mobile di ponsel pintar dan laptop di sela-sela mengelola operasional usaha.  
* Berdedikasi melegalkan izin usahanya (NIB) secara resmi dan mandiri demi memangkas birokrasi serta biaya.  
* Memiliki keterbatasan waktu luang dan pemahaman teknis terkait istilah sistem maupun regulasi hukum.  
* Mengandalkan dokumen lampiran regulasi di halaman detail regulasi untuk mencocokkan kode KBLI dan persyaratan teknis usaha.

### **Goals**

* Menyelesaikan penerbitan Nomor Induk Berusaha (NIB) secara mandiri, cepat, dan sesuai ketentuan hukum.  
* Membaca dan memahami dokumen regulasi resmi secara lengkap melalui berkas lampiran PDF yang tersedia di aplikasi.  
* Memperoleh kepastian legalitas hukum bagi usaha yang dirintis agar dapat mengakses fasilitas pembiayaan dan kemitraan resmi secara aman.

### **Pain Points**

* Berkas lampiran PDF regulasi tidak dapat terbuka sama sekali sehingga kehilangan informasi penting mengenai syarat perizinan.  
* Merasa tidak berdaya (*helpless*), bingung, dan jengkel ketika menekan tautan lampiran PDF berulang kali namun terus gagal terbuka.  
* Tidak mendapatkan petunjuk pemulihan atau alternatif unduh dokumen yang jelas ketika sistem mengalami kendala.

---

## **4\. Product Goals**

Produk memiliki tujuan sebagai berikut:

1. Memastikan pengguna dapat membuka dan membaca lampiran regulasi berformat PDF secara langsung pada halaman detail regulasi (**UX-01 / Prioritas P1**).  
2. Menyediakan alternatif akses bagi pengguna untuk mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain di perangkat (**UX-02 / Prioritas P2**).  
3. Menampilkan pesan kesalahan dengan bahasa sederhana yang mudah dipahami serta pilihan tindakan pemulihan ketika dokumen gagal dibuka (**UX-03 / Prioritas P2**).  
4. Memungkinkan pengguna mencoba kembali membuka lampiran PDF langsung dari halaman detail regulasi tanpa mengulangi pencarian dari awal (**UX-03 / Prioritas P2**).  
5. Menampilkan informasi nama dokumen, ukuran berkas, dan format file (`PDF`) secara jelas sebelum pengguna membuka lampiran regulasi (**UX-04 / Prioritas P3**).

### **Success Metrics**

| Indikator | Target Awal |
| :---- | :---- |
| Peserta pengujian dapat membuka dan membaca dokumen lampiran PDF secara langsung tanpa bantuan (**UX-01**) | Minimal 4 dari 5 peserta (≥ 80%) |
| Peserta pengujian dapat menemukan dan menggunakan pilihan unduh / alternatif akses dokumen tanpa bantuan (**UX-02**) | Minimal 4 dari 5 peserta (≥ 80%) |
| Peserta pengujian dapat memahami pesan kesalahan saat PDF gagal dibuka dan menentukan tindakan selanjutnya (**UX-03**) | Minimal 4 dari 5 peserta (≥ 80%) |
| Peserta pengujian dapat mengidentifikasi dokumen yang tepat berdasarkan nama dan format file tanpa bantuan (**UX-04**) | Minimal 4 dari 5 peserta (≥ 80%) |

Catatan: Target merupakan hipotesis awal berdasarkan perumusan kebutuhan UX pada Worksheet 8 dan perlu divalidasi melalui pengujian produk (*Usability Testing*).

---

## **5\. Functional Requirements**

### **FR-01: Penampil Dokumen PDF Terintegrasi / In-App PDF Viewer (UX-01 — Prioritas 1)**

Sistem harus menyediakan fungsi untuk membuka dan menampilkan dokumen lampiran berformat PDF secara langsung pada halaman detail regulasi.

Ketentuan:

* Menampilkan isi dokumen lampiran PDF di dalam antarmuka aplikasi (*In-App PDF Viewer*) tanpa mengalihkan pengguna keluar dari aplikasi.  
* Menampilkan judul lampiran, nama file, nomor halaman, dan keseluruhan isi pasal/ketentuan regulasi secara jelas.  
* Menyediakan kontrol pembacaan dokumen (seperti navigasi halaman, pencarian kata kunci di dalam dokumen, dan pengatur ukuran teks/zoom).  
* Menyediakan tombol kembali ke halaman detail regulasi tanpa menghilangkan konteks halaman sebelumnya.

### **FR-02: Alternatif Unduh & Akses Pembaca PDF Eksternal (UX-02 — Prioritas 2)**

Sistem harus menyediakan pilihan alternatif untuk mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF pada perangkat pengguna.

Ketentuan:

* Menyediakan tombol **Unduh** langsung pada setiap kartu lampiran di halaman detail regulasi.  
* Menyediakan tombol **Unduh PDF** dan **Buka di Aplikasi Pembaca PDF Lain** di dalam layar penampil PDF maupun pada dialog pemulihan kendala.  
* Menampilkan notifikasi umpan balik (*feedback*) yang mengonfirmasi bahwa berkas PDF berhasil diunduh ke perangkat.  
* Menyediakan opsi membaca ringkasan inti persyaratan regulasi apabila dokumen PDF sedang tidak dapat ditampilkan secara langsung.

### **FR-03: Pesan Kesalahan & Mekanisme Pemulihan / Error Recovery (UX-03 — Prioritas 2)**

Sistem harus menampilkan pesan kesalahan yang jelas ketika PDF gagal dibuka serta menyediakan pilihan untuk mencoba kembali atau mengunduh dokumen.

Ketentuan:

* Pesan kesalahan wajib menggunakan bahasa Indonesia yang sederhana, sopan, dan mudah dipahami oleh pelaku usaha (tidak hanya menampilkan kode teknis `403 : Authentication failed`).  
* Pesan kesalahan harus menjelaskan kondisi kendala yang terjadi serta langkah tindakan yang dapat dipilih pengguna.  
* Menyediakan tombol **Coba Lagi** untuk memuat ulang lampiran PDF langsung dari halaman detail regulasi tanpa harus mengulangi pencarian regulasi dari awal.  
* Menyediakan tombol **Unduh Dokumen PDF** dan **Buka Melalui Aplikasi Pembaca PDF Lain** langsung di dalam dialog pesan kesalahan.

### **FR-04: Identitas Nama & Format Dokumen Lampiran (UX-04 — Prioritas 3)**

Sistem harus menampilkan nama dokumen dan format file pada bagian lampiran di halaman detail regulasi.

Ketentuan:

* Setiap item lampiran wajib menampilkan:
  * Nama resmi dokumen lampiran (contoh: *Lampiran III Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021*).  
  * Nama berkas dokumen (`.pdf`).  
  * Label/badge format file (**`PDF`**) yang terlihat jelas.  
  * Informasi ukuran berkas (contoh: `2.4 MB`) dan jumlah halaman.  
* Informasi identitas dokumen harus tampil sebelum pengguna menekan tombol buka atau unduh.

### **FR-05: Daftar & Detail Informasi Regulasi Perizinan**

Sistem harus menyediakan halaman daftar regulasi dan halaman detail regulasi pada menu **Informasi -> Regulasi**.

Ketentuan:

* Menampilkan informasi utama regulasi yang mencakup Judul Peraturan, Nomor Peraturan, Sektor Usaha/Kode KBLI, dan Tanggal Pengundangan.  
* Memungkinkan pengguna mencari atau memfilter regulasi dan daftar lampiran berdasarkan kata kunci.  
* Menyediakan panel simulasi skenario (*Simulator Panel*) untuk menguji kondisi normal (*PDF Berhasil Dibuka*) dan kondisi gagal memuat (*Moment of Truth Error 403*).

---

## **6\. Non-Functional Requirements**

### **NFR-01: Performance**

* Pembukaan halaman detail regulasi dan daftar lampiran harus dimuat dengan cepat (< 1 detik pada jaringan normal).  
* Proses mencoba kembali (*Coba Lagi*) pembukaan dokumen tidak boleh memuat ulang keseluruhan aplikasi dari halaman awal.

### **NFR-02: Usability**

* Antarmuka daftar lampiran dan penampil PDF harus mudah digunakan oleh pelaku usaha mandiri tanpa memerlukan panduan teknis khusus.  
* Pesan kesalahan harus mematuhi prinsip heuristik *Help users recognize, diagnose, and recover from errors* dengan bahasa yang sederhana dan solutif.

### **NFR-03: Responsive**

* Sistem dirancang dengan tata letak aplikasi mobile OSS Indonesia yang responsif dan proporsional baik saat diakses melalui smartphone maupun browser desktop.  
* Area baca dokumen PDF harus menyesuaikan lebar layar perangkat agar teks regulasi tetap terbaca dengan jelas.

### **NFR-04: Reliability**

* Sistem harus tetap menyediakan jalur akses alternatif (unduh berkas, pembaca eksternal, atau penyimpanan cache offline) ketika layanan penampil PDF langsung mengalami gangguan.  
* Pengguna tidak boleh terjebak pada layar kosong (*dead-end UI*) saat terjadi kegagalan pemuatan berkas.

### **NFR-05: Security**

* Berkas lampiran regulasi publik pada menu Informasi Regulasi harus dapat diakses oleh pengguna tanpa gagal akibat kedaluwarsa token autentikasi internal (`403 : Authentication failed`).  
* Unduhan dokumen harus menjamin keutuhan nama dan format berkas resmi `.pdf`.

---

## **7\. Business Rules**

1. Setiap regulasi yang dipublikasikan pada menu Informasi Regulasi wajib memiliki judul peraturan, nomor peraturan, tanggal pengundangan, dan minimal satu dokumen lampiran resmi.  
2. Setiap dokumen lampiran pada halaman detail regulasi wajib mencantumkan identitas nama dokumen, ukuran berkas, dan label format file (`PDF`).  
3. Seluruh lampiran regulasi publik pada halaman Informasi Regulasi dapat dibuka dan diunduh oleh pelaku usaha tanpa dihalangi error autentikasi `403`.  
4. Apabila penampil PDF langsung (*In-App PDF Viewer*) gagal memuat dokumen dalam batas waktu tertentu atau mengalami gangguan server, sistem wajib otomatis menampilkan dialog pemulihan kendala (*Error Recovery Modal*).  
5. Dialog pemulihan kendala wajib menyediakan minimal dua opsi tindakan aktif, yaitu mencoba kembali (*Coba Lagi*) dan mengunduh dokumen (*Unduh PDF*).  
6. Tindakan **Coba Lagi** harus dieksekusi langsung pada dokumen yang dipilih di halaman detail regulasi tanpa mengembalikan pengguna ke halaman beranda atau daftar pencarian awal.  
7. Dokumen lampiran yang telah berhasil dibuka atau diunduh dapat disimpan pada penyimpanan lokal sementara (*offline cache*) selama sesi berlangsung agar pengguna tidak perlu mengunduh ulang berkas yang sama.  
8. Urutan prioritas penanganan fitur mengacu pada matriks prioritas **Worksheet 8**, yaitu **P1 (UX-01)** sebagai prioritas tertinggi, diikuti **P2 (UX-02 & UX-03)** sebagai kebutuhan pendukung pemulihan, dan **P3 (UX-04)** sebagai penguat kejelasan informasi.

---

## **8\. User Stories**

**US-01: Membuka Lampiran PDF Secara Langsung (UX-01 — Prioritas P1)**

Sebagai pengguna aplikasi OSS Indonesia yang membutuhkan informasi regulasi, saya ingin membuka lampiran PDF secara langsung dari halaman detail regulasi agar saya dapat membaca informasi yang dibutuhkan untuk memahami persyaratan perizinan usaha.  
*(As a pengguna aplikasi OSS Indonesia yang membutuhkan informasi regulasi, I want to membuka lampiran PDF secara langsung dari halaman detail regulasi, so that saya dapat membaca informasi yang dibutuhkan untuk memahami persyaratan perizinan usaha.)*

**US-02: Mengunduh atau Membuka Dokumen Melalui Pembaca PDF Lain (UX-02 — Prioritas P2)**

Sebagai pengguna aplikasi OSS Indonesia, saya ingin mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain ketika dokumen tidak dapat ditampilkan secara langsung agar saya tetap dapat memperoleh informasi regulasi yang dibutuhkan.  
*(As a pengguna aplikasi OSS Indonesia, I want to mengunduh dokumen PDF atau membukanya melalui aplikasi pembaca PDF lain ketika dokumen tidak dapat ditampilkan secara langsung, so that saya tetap dapat memperoleh informasi regulasi yang dibutuhkan.)*

**US-03: Mendapatkan Pesan Kesalahan yang Jelas (UX-03 — Prioritas P2)**

Sebagai pengguna aplikasi OSS Indonesia, saya ingin mendapatkan pesan yang jelas ketika lampiran PDF gagal dibuka agar saya dapat memahami kendala yang terjadi dan mengetahui tindakan selanjutnya.  
*(As a pengguna aplikasi OSS Indonesia, I want to mendapatkan pesan yang jelas ketika lampiran PDF gagal dibuka, so that saya dapat memahami kendala yang terjadi dan mengetahui tindakan selanjutnya.)*

**US-04: Mencoba Kembali Membuka Lampiran Tanpa Mengulang dari Awal (UX-03 — Prioritas P2)**

Sebagai pengguna aplikasi OSS Indonesia, saya ingin mencoba kembali membuka lampiran PDF dari halaman detail regulasi agar saya tidak perlu mengulangi proses pencarian dokumen dari awal.  
*(As a pengguna aplikasi OSS Indonesia, I want to mencoba kembali membuka lampiran PDF dari halaman detail regulasi, so that saya tidak perlu mengulangi proses pencarian dokumen dari awal.)*

**US-05: Melihat Nama dan Format Dokumen Lampiran (UX-04 — Prioritas P3)**

Sebagai pengguna aplikasi OSS Indonesia, saya ingin melihat nama dan format dokumen pada bagian lampiran regulasi agar saya dapat mengenali dokumen yang sesuai sebelum membukanya.  
*(As a pengguna aplikasi OSS Indonesia, I want to melihat nama dan format dokumen pada bagian lampiran regulasi, so that saya dapat mengenali dokumen yang sesuai sebelum membukanya.)*

---

## **9\. Scope**

### **In Scope**

* Halaman Beranda OSS Indonesia dengan navigasi menuju menu **Informasi -> Regulasi**.  
* Halaman Daftar Regulasi Perizinan dengan fitur pencarian peraturan.  
* Halaman Detail Regulasi (studi kasus utama: *Peraturan Menteri ESDM Nomor 5 Tahun 2021* beserta *Lampiran I, II, III, IV* dan *Abstrak*).  
* Kartu daftar lampiran dengan identitas lengkap: nama dokumen, nama berkas, badge format `PDF`, ukuran berkas, dan jumlah halaman (**UX-04**).  
* Penampil dokumen PDF terintegrasi (*In-App PDF Viewer*) untuk membaca isi regulasi secara langsung (**UX-01**).  
* Fitur unduh dokumen PDF dan opsi pembukaan melalui aplikasi pembaca PDF eksternal (**UX-02**).  
* Dialog pesan kesalahan berbahasa sederhana beserta tombol **Coba Lagi** dan **Unduh Dokumen PDF** ketika terjadi kegagalan pemuatan berkas (**UX-03**).  
* Panel simulasi pengujian (*Simulator Panel*) untuk mendemonstrasikan skenario *Moment of Truth* (Normal vs Gagal Memuat / Error 403).

### **Out of Scope**

* Integrasi pengajuan formulir NIB lintas platform dari aplikasi mobile ke website eksternal OSS.  
* Perbaikan fitur penentuan titik koordinat lokasi usaha pada peta digital.  
* Perbaikan mekanisme pemulihan lupa akun / pembatasan *rate limit* login.  
* Perbaikan crash pada fitur *Floating Button* layanan Tatap Muka.

---

## **10\. Assumptions & Dependencies**

### **Assumptions**

* Pelaku usaha mengakses menu **Informasi -> Regulasi** melalui perangkat smartphone yang terhubung ke jaringan internet.  
* Dokumen regulasi resmi pemerintah disediakan dalam format standar `PDF`.  
* Perangkat pengguna mendukung pengunduhan berkas lokal atau memiliki aplikasi pembaca PDF bawaan untuk opsi pembukaan eksternal.  
* Karakteristik persona dan alur tindakan pasca-kegagalan yang dirumuskan dari observasi ulasan serta wawancara responden (U1–U5) digunakan sebagai dasar desain solusi dan divalidasi melalui prototipe interaktif.

### **Dependencies**

* Layanan penyimpanan dan distribusi dokumen regulasi (*Document Storage / CDN*) aplikasi OSS Indonesia.  
* Komponen *In-App Document Viewer* pada aplikasi mobile OSS Indonesia.  
* Mekanisme manajemen unduhan berkas (*Browser / Mobile File Download API*).  
* Penyimpanan lokal sementara (*Client-side Cache*) untuk mendukung pemuatan ulang cepat dan akses dokumen tersimpan.

---

## **11\. Expected Deliverables**

Implementasi fitur harus menghasilkan:

1. Halaman Beranda aplikasi mobile OSS Indonesia dengan akses menuju menu Informasi Regulasi.  
2. Halaman Daftar Regulasi Perizinan dengan fitur pencarian peraturan.  
3. Halaman Detail Regulasi yang memuat informasi peraturan dan daftar seluruh berkas lampiran.  
4. Komponen Kartu Lampiran Regulasi (`AttachmentCard`) yang menampilkan nama dokumen, ukuran berkas, dan badge format `PDF` (**UX-04**).  
5. Komponen Penampil Dokumen PDF Terintegrasi (`DocumentPreviewModal` / *In-App PDF Viewer*) untuk membaca isi dokumen secara langsung (**UX-01**).  
6. Mekanisme pengunduhan berkas PDF (`triggerPdfDownload`) dan opsi pembukaan di aplikasi pembaca PDF lain (**UX-02**).  
7. Komponen Dialog Pemulihan Kesalahan (`ErrorRecoveryModal`) dengan pesan berbahasa sederhana, tombol **Coba Lagi**, dan tombol **Unduh PDF** (**UX-03**).  
8. Komponen Panel Simulasi Pengujian (`SimulatorPanel`) untuk menguji skenario *Moment of Truth* (Normal vs Error 403).

---

## **12\. Product Acceptance Criteria**

Fitur dinyatakan memenuhi kebutuhan produk apabila:

1. Pengguna dapat melihat nama dokumen, ukuran berkas, dan badge format file `PDF` secara jelas pada setiap item lampiran di halaman detail regulasi sebelum membukanya (**UX-04 / US-05**).  
2. Pengguna dapat menekan tombol **Buka Lampiran PDF** dan membaca seluruh halaman isi dokumen regulasi secara langsung di dalam aplikasi pada kondisi normal (**UX-01 / US-01**).  
3. Pengguna dapat mengunduh dokumen lampiran PDF langsung dari daftar lampiran maupun dari dalam layar penampil PDF (**UX-02 / US-02**).  
4. Pengguna dapat memilih opsi untuk membuka dokumen melalui aplikasi pembaca PDF lain ketika penampil langsung mengalami kendala (**UX-02 / US-02**).  
5. Ketika terjadi kegagalan pemuatan dokumen (seperti kondisi error `403` pada *Moment of Truth* Worksheet 7), sistem menampilkan pesan kesalahan dengan bahasa sederhana yang mudah dipahami, bukan sekadar kode teknis mentah (**UX-03 / US-03**).  
6. Dialog pesan kesalahan menampilkan pilihan tindakan selanjutnya secara jelas kepada pengguna (**UX-03 / US-03**).  
7. Pengguna dapat menekan tombol **Coba Lagi** pada dialog kesalahan untuk memuat ulang dokumen langsung dari halaman detail regulasi tanpa harus mengulangi pencarian regulasi dari halaman awal (**UX-03 / US-04**).  
8. Pengguna tetap dapat mengunduh dokumen PDF langsung dari dalam dialog pesan kesalahan ketika pembukaan langsung gagal (**UX-02 & UX-03**).  
9. Fitur dapat dijalankan dan diuji secara responsif melalui tampilan mobile maupun browser desktop menggunakan *Simulator Panel*.

---

**End of PRD v1.0**
