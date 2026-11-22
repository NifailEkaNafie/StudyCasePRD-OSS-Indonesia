import React from 'react';
import { AlertCircle, RefreshCw, Download, ExternalLink, X } from 'lucide-react';

// Implementasi UX-03 (P2 - Sedang), UX-02, US-02, US-03, US-04:
// Menampilkan pesan kesalahan berbahasa sederhana (menggantikan "403: Authentication failed")
// serta menyediakan tombol tindakan "Coba Lagi" dan "Unduh Dokumen PDF"
export default function ErrorRecoveryModal({
  attachment,
  onRetry,
  onDownload,
  onOpenExternal,
  onClose
}) {
  if (!attachment) return null;

  return (
    <div className="error-modal-backdrop">
      <div className="error-modal-sheet">
        <div className="error-modal-top">
          <span className="ux-tag-error">Pemulihan Kendala Akses PDF (UX-03 & UX-02)</span>
          <button type="button" className="error-close-btn" onClick={onClose} aria-label="Tutup">
            <X size={18} />
          </button>
        </div>

        <div className="error-icon-circle">
          <AlertCircle size={32} color="#dc2626" />
        </div>

        <h3 className="error-modal-title">Dokumen PDF Belum Dapat Ditampilkan Langsung</h3>

        <p className="error-modal-message">
          Maaf, lampiran <strong>{attachment.name}</strong> ({attachment.format}, {attachment.size})
          saat ini mengalami kendala saat dimuat di dalam aplikasi.
        </p>

        <div className="error-guidance-box">
          <strong>Apa yang dapat Anda lakukan selanjutnya?</strong>
          <ul>
            <li>Tekan <strong>Coba Lagi</strong> untuk memuat ulang dokumen tanpa mengulang pencarian dari awal.</li>
            <li>Atau tekan <strong>Unduh Dokumen PDF</strong> agar Anda tetap dapat membaca persyaratan regulasi di perangkat Anda.</li>
          </ul>
        </div>

        <div className="error-modal-actions">
          <button
            type="button"
            className="btn-error-retry"
            onClick={() => onRetry(attachment)}
          >
            <RefreshCw size={16} />
            <span>Coba Lagi Buka Dokumen (US-04)</span>
          </button>

          <button
            type="button"
            className="btn-error-download"
            onClick={() => onDownload(attachment)}
          >
            <Download size={16} />
            <span>Unduh Dokumen PDF ({attachment.size}) (US-02)</span>
          </button>

          <button
            type="button"
            className="btn-error-external"
            onClick={() => onOpenExternal(attachment)}
          >
            <ExternalLink size={15} />
            <span>Buka Melalui Aplikasi Pembaca PDF Lain</span>
          </button>
        </div>
      </div>
    </div>
  );
}
