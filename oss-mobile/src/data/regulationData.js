// Data Regulasi & Lampiran PDF Aplikasi OSS Indonesia
// Disusun berdasarkan Bukti Screenshot Worksheet 1 - 8 (Nifail Eka Nafie - 202310370311344)

export const PERSONA_DATA = {
  name: 'Yuda',
  age: 21,
  role: 'Mahasiswa & Pemilik Usaha Mandiri',
  quote:
    'Saya ingin mengurus izin usaha mandiri dengan cepat dan jelas, tapi alurnya membingungkan saat dilempar dari aplikasi ke web, ditambah lampiran aturan PDF-nya tidak bisa dibuka sama sekali.',
  goal: 'Menyelesaikan penerbitan NIB secara mandiri serta membaca dokumen regulasi resmi melalui berkas lampiran PDF.'
};

export const REGULATIONS_DATA = [
  {
    id: 'permen-esdm-5-2021',
    title:
      'Standar Kegiatan Usaha Dan Produk Pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko Sektor Energi Dan Sumber Daya Mineral',
    number:
      'Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021, mengikuti NSPK PB UMKU - Izin Usaha Pengangkutan Minyak dan Gas Bumi',
    shortNumber: 'Permen ESDM No. 5 Tahun 2021',
    sector: 'Energi dan Sumber Daya Mineral',
    releaseDate: '1 April 2021',
    status: 'Berlaku',
    kbliCodes: ['49230', '46610', '35111'],
    summary:
      'Mengatur standar kegiatan usaha, persyaratan teknis, kewajiban pelaku usaha, dan verifikasi perizinan berusaha berbasis risiko (NIB & Sertifikat Standar/Izin) pada sektor Energi dan Sumber Daya Mineral.',
    attachments: [
      {
        id: 'lampiran-iii-esdm-5-2021',
        name: 'Lampiran III Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Lampiran_III_Permen_ESDM_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '2.4 MB',
        pagesCount: 3,
        category: 'Standar PB UMKU & KBLI',
        isOriginalBugTarget: true,
        description:
          'Standar Penyelenggaraan Perizinan Berusaha Untuk Menunjang Kegiatan Usaha (PB UMKU) — Izin Usaha Pengangkutan Minyak dan Gas Bumi.',
        pages: [
          {
            pageNumber: 1,
            heading: 'LAMPIRAN III — PERATURAN MENTERI ESDM RI NOMOR 5 TAHUN 2021',
            subheading:
              'STANDAR KEGIATAN USAHA DAN PRODUK PADA PENYELENGGARAAN PERIZINAN BERUSAHA BERBASIS RISIKO SEKTOR ESDM',
            clauses: [
              '1. Ruang Lingkup: Standar ini mengatur persyaratan perizinan berusaha untuk kegiatan Pengangkutan Minyak dan Gas Bumi melalui moda darat, laut, dan perpipaan.',
              '2. Penggolongan Risiko Usaha: Kegiatan usaha dengan tingkat Risiko Menengah Tinggi dan Tinggi wajib memiliki Nomor Induk Berusaha (NIB) dan Sertifikat Standar / Izin yang terverifikasi di sistem OSS Indonesia.',
              '3. Persyaratan Administratif Pelaku Usaha: Memiliki NIB aktif dengan kode KBLI yang sesuai, profil badan usaha/usaha mandiri yang tervalidasi, serta surat pernyataan kesanggupan keselamatan operasi.'
            ]
          },
          {
            pageNumber: 2,
            heading: 'PERSYARATAN TEKNIS & DOKUMEN KELENGKAPAN NIB',
            subheading: 'Tabel Persyaratan Verifikasi Perizinan Berusaha di OSS',
            clauses: [
              '4. Daftar Sarana dan Fasilitas: Pelaku usaha wajib melampirkan daftar armada/sarana pengangkutan beserta bukti kelayakan operasi.',
              '5. Standar Keselamatan & Lingkungan: Memenuhi dokumen pengelolaan lingkungan hidup (SPPL/UKL-UPL) sesuai skala usaha pada sistem OSS.',
              '6. Durasi Verifikasi: Pemeriksaan pemenuhan persyaratan dilaksanakan paling lama 5 (lima) hari kerja sejak dokumen dinyatakan lengkap di sistem OSS.'
            ]
          },
          {
            pageNumber: 3,
            heading: 'KEWAJIBAN PELAKU USAHA SETELAH TERBIT NIB & IZIN',
            subheading: 'Pelaporan Berkala dan Pengawasan Berbasis Risiko',
            clauses: [
              '7. Pelaku usaha wajib menyampaikan laporan kegiatan operasional secara berkala setiap 6 (enam) bulan melalui portal/aplikasi OSS Indonesia.',
              '8. Perubahan data kapasitas atau lokasi usaha wajib diperbarui melalui menu Pembaruan Data Usaha di OSS Indonesia.'
            ]
          }
        ]
      },
      {
        id: 'lampiran-iv-esdm-5-2021',
        name: 'Lampiran IV Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Lampiran_IV_Permen_ESDM_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '1.9 MB',
        pagesCount: 2,
        category: 'Standar Produk & Jasa',
        isOriginalBugTarget: false,
        description:
          'Standar Produk dan Penilaian Kesesuaian pada Penyelenggaraan Perizinan Berusaha Sektor Energi dan Sumber Daya Mineral.',
        pages: [
          {
            pageNumber: 1,
            heading: 'LAMPIRAN IV — PERATURAN MENTERI ESDM RI NOMOR 5 TAHUN 2021',
            subheading: 'STANDAR PRODUK DAN SERTIFIKASI KELAYAKAN',
            clauses: [
              '1. Setiap produk dan peralatan yang digunakan dalam kegiatan usaha sektor ESDM wajib memenuhi Standar Nasional Indonesia (SNI) atau standar teknis yang ditetapkan.',
              '2. Pelaku usaha mengunggah bukti sertifikat standar produk pada saat pengajuan PB UMKU di aplikasi OSS.'
            ]
          },
          {
            pageNumber: 2,
            heading: 'TATA CARA PENGAWASAN STANDAR PRODUK',
            subheading: 'Inspeksi Berkala danKepatuhan Pelaku Usaha',
            clauses: [
              '3. Pengawasan dilakukan secara terkoordinasi melalui subsistem Pengawasan pada sistem OSS Berbasis Risiko.',
              '4. Pelaku usaha mikro dan kecil (UMK) mendapatkan pendampingan teknis pemenuhan standar produk.'
            ]
          }
        ]
      },
      {
        id: 'lampiran-ii-esdm-5-2021',
        name: 'Lampiran II Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Lampiran_II_Permen_ESDM_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '3.1 MB',
        pagesCount: 2,
        category: 'Standar Usaha KBLI',
        isOriginalBugTarget: false,
        description:
          'Standar Kegiatan Usaha Subsektor Ketenagalistrikan dan Energi Baru Terbarukan (EBT).',
        pages: [
          {
            pageNumber: 1,
            heading: 'LAMPIRAN II — PERATURAN MENTERI ESDM RI NOMOR 5 TAHUN 2021',
            subheading: 'STANDAR KEGIATAN USAHA SUBSEKTOR KETENAGALISTRIKAN',
            clauses: [
              '1. Mengatur klasifikasi KBLI bidang usaha penyediaan tenaga listrik dan jasa penunjang kelistrikan.',
              '2. Persyaratan pengajuan NIB untuk skala usaha kecil dan menengah disederhanakan melalui pernyataan mandiri (self-declaration) pada aplikasi OSS.'
            ]
          },
          {
            pageNumber: 2,
            heading: 'MATRIKS PERSYARATAN SERTIFIKAT STANDAR',
            subheading: 'Kesesuaian Kode KBLI dan Dokumen Lingkungan',
            clauses: [
              '3. Verifikasi persyaratan teknis dilakukan secara elektronik tanpa perlu menyerahkan berkas fisik.',
              '4. Sertifikat Standar diterbitkan langsung melalui akun OSS pelaku usaha.'
            ]
          }
        ]
      },
      {
        id: 'abstrak-esdm-5-2021',
        name: 'Abstrak Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Abstrak_Permen_ESDM_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '640 KB',
        pagesCount: 1,
        category: 'Ringkasan Peraturan',
        isOriginalBugTarget: false,
        description:
          'Abstrak resmi yang memuat dasar hukum, pokok pikiran, dan ringkasan isi Peraturan Menteri ESDM Nomor 5 Tahun 2021.',
        pages: [
          {
            pageNumber: 1,
            heading: 'ABSTRAK PERATURAN MENTERI ESDM RI NOMOR 5 TAHUN 2021',
            subheading: 'RINGKASAN EKSEKUTIF REGULASI PERIZINAN BERUSAHA',
            clauses: [
              'Dasar Hukum: Melaksanakan ketentuan Peraturan Pemerintah Nomor 5 Tahun 2021 tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko.',
              'Pokok Pengaturan: Menetapkan standar kegiatan usaha KBLI, standar PB UMKU, dan standar produk sektor ESDM agar proses perizinan melalui OSS Indonesia berjalan transparan, terukur, dan memiliki kepastian hukum bagi pelaku usaha.',
              'Status Peraturan: Mulai berlaku sejak tanggal diundangkan (1 April 2021).'
            ]
          }
        ]
      },
      {
        id: 'lampiran-i-esdm-5-2021',
        name: 'Lampiran I Peraturan Menteri Energi dan Sumber Daya Mineral Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Lampiran_I_Permen_ESDM_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '2.8 MB',
        pagesCount: 2,
        category: 'Standar Usaha Migas & Mineral',
        isOriginalBugTarget: false,
        description:
          'Standar Kegiatan Usaha Subsektor Minyak dan Gas Bumi serta Mineral dan Batubara.',
        pages: [
          {
            pageNumber: 1,
            heading: 'LAMPIRAN I — PERATURAN MENTERI ESDM RI NOMOR 5 TAHUN 2021',
            subheading: 'STANDAR KEGIATAN USAHA SUBSEKTOR MIGAS DAN MINERBA',
            clauses: [
              '1. Memuat daftar kode KBLI, tingkat risiko usaha, jangka waktu masa berlaku izin, dan parameter kewenangan penerbitan izin.',
              '2. Pelaku usaha wajib memastikan kecocokan kode KBLI 5 (lima) digit sebelum menyelesaikan pendaftaran NIB.'
            ]
          },
          {
            pageNumber: 2,
            heading: 'KETENTUAN PEMENUHAN KOMITMEN PERIZINAN',
            subheading: 'Panduan Unggah Dokumen Persyaratan di OSS',
            clauses: [
              '3. Seluruh dokumen persyaratan diunggah dalam format PDF melalui halaman pemenuhan persyaratan di sistem OSS.',
              '4. Status verifikasi dapat dipantau secara berkala melalui aplikasi mobile OSS Indonesia.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pp-5-2021',
    title: 'Penyelenggaraan Perizinan Berusaha Berbasis Risiko (Aturan Utama NIB & UMKM)',
    number: 'Peraturan Pemerintah Republik Indonesia Nomor 5 Tahun 2021',
    shortNumber: 'PP No. 5 Tahun 2021',
    sector: 'Lintas Sektor / UMK & Usaha Mandiri',
    releaseDate: '2 Februari 2021',
    status: 'Berlaku',
    kbliCodes: ['10792', '56102', '47911'],
    summary:
      'Regulasi induk penyelenggaraan perizinan berusaha berbasis risiko melalui sistem OSS Indonesia bagi Usaha Mikro, Kecil, Menengah (UMKM) dan usaha besar.',
    attachments: [
      {
        id: 'abstrak-pp-5-2021',
        name: 'Abstrak Peraturan Pemerintah Republik Indonesia Nomor 5 Tahun 2021',
        fileName: 'Abstrak_PP_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '520 KB',
        pagesCount: 1,
        category: 'Ringkasan Peraturan',
        isOriginalBugTarget: false,
        description: 'Ringkasan ketentuan tingkat risiko usaha (Rendah, Menengah Rendah, Menengah Tinggi, Tinggi) untuk penerbitan NIB.',
        pages: [
          {
            pageNumber: 1,
            heading: 'ABSTRAK PP NOMOR 5 TAHUN 2021',
            subheading: 'PEDOMAN PENERBITAN NOMOR INDUK BERUSAHA (NIB) BERBASIS RISIKO',
            clauses: [
              '1. Usaha Risiko Rendah: Hanya membutuhkan Nomor Induk Berusaha (NIB) sebagai identitas sekaligus legalitas untuk menjalankan kegiatan operasional usaha.',
              '2. Usaha Risiko Menengah Rendah: Membutuhkan NIB dan Sertifikat Standar berupa pernyataan mandiri (self-declaration) di sistem OSS.',
              '3. Kemudahan UMK: Usaha Mikro dan Kecil diberikan fasilitas perizinan tunggal yang mencakup NIB, Standar Nasional Indonesia (SNI) bina UMK, dan pernyataan sertifikasi jaminan produk halal.'
            ]
          }
        ]
      },
      {
        id: 'lampiran-i-pp-5-2021',
        name: 'Lampiran I Peraturan Pemerintah Nomor 5 Tahun 2021 — Matriks KBLI Usaha Mikro & Kecil',
        fileName: 'Lampiran_I_PP_No_5_Tahun_2021.pdf',
        format: 'PDF',
        size: '4.2 MB',
        pagesCount: 2,
        category: 'Matriks KBLI & Risiko',
        isOriginalBugTarget: false,
        description: 'Daftar kode KBLI dan persyaratan NIB untuk pelaku usaha mandiri dan UMKM.',
        pages: [
          {
            pageNumber: 1,
            heading: 'LAMPIRAN I — PP NOMOR 5 TAHUN 2021',
            subheading: 'DAFTAR BIDANG USAHA & KLASIFIKASI RISIKO UMKM',
            clauses: [
              '1. Pelaku usaha perseorangan (seperti mahasiswa wirausaha / pemilik usaha rumahan) dapat mendaftarkan NIB menggunakan NIK KTP dan data lokasi usaha.',
              '2. Pemilihan kode KBLI 5 digit menentukan tingkat risiko dan dokumen pernyataan mandiri yang otomatis diterbitkan oleh sistem OSS.'
            ]
          },
          {
            pageNumber: 2,
            heading: 'PERSYARATAN DASAR KESESUAIAN KEGIATAN PEMANFAATAN RUANG',
            subheading: 'Ketentuan Lokasi Usaha Rumahan & Mikro',
            clauses: [
              '3. Untuk usaha mikro dan kecil dengan risiko rendah, pelaku usaha cukup mengisi pernyataan mandiri kesesuaian lokasi usaha tanpa menunggu verifikasi tata ruang yang rumit.'
            ]
          }
        ]
      }
    ]
  }
];

// Helper untuk membuat file PDF valid secara dinamis saat user menekan tombol "Unduh PDF"
export function triggerPdfDownload(attachment) {
  const lines = [
    attachment.name,
    '====================================================================',
    `Nama File : ${attachment.fileName}`,
    `Format    : ${attachment.format} (${attachment.size})`,
    `Kategori  : ${attachment.category}`,
    '--------------------------------------------------------------------',
    attachment.description,
    ''
  ];

  attachment.pages.forEach((p) => {
    lines.push(`[Halaman ${p.pageNumber}] ${p.heading}`);
    lines.push(p.subheading);
    p.clauses.forEach((c) => lines.push(`  - ${c}`));
    lines.push('');
  });

  const textContent = lines.join('\n');
  const blob = new Blob([textContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = attachment.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
