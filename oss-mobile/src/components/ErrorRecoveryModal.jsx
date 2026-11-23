import React, { useState } from 'react';
import {
  AlertCircle,
  RefreshCw,
  Download,
  ExternalLink,
  BookOpenCheck,
  X,
  Eye
} from 'lucide-react';

// Implementasi FR-03 (UX-03 — Prioritas 2) & FR-02 (UX-02 — Prioritas 2):
// Menampilkan pesan kesalahan berbahasa sederhana (menggantikan "403: Authentication failed")
// beserta tombol Coba Lagi (US-04), Unduh Dokumen PDF (US-02), Pembaca PDF Lain, dan Ringkasan
export default function ErrorRecoveryModal({
  attachment,
  onRetry,
  onDownload,
  onOpenExternal,
  onOpenQuickSummary,
  onClose
}) {
  const [showOriginalBugView, setShowOriginalBugView] = useState(false);

  if (!attachment) return null;

  return (
    <div className="error-modal-backdrop">
      <div className="error-modal-sheet">
        <div className="error-modal-top">
          <span className="ux-tag-error">Pemulihan Kendala Akses PDF (FR-03 / UX-03)</span>
          <button type="button" className="error-close-btn" onClick={onClose} aria-label="Tutup">
            <X size={18} />
          </button>
        </div>

        {/* Toggle Perbandingan Before (Bug Asli Worksheet 1) vs After (Solusi PRD) */}
        <div className="compare-toggle-bar">
          <button
            type="button"
            className={`compare-tab ${!showOriginalBugView ? 'active' : ''}`}
            onClick={() => setShowOriginalBugView(false)}
          >
            ✅ Solusi PRD (FR-03 / UX-03)
          </button>
          <button
            type="button"
            className={`compare-tab ${showOriginalBugView ? 'active-bug' : ''}`}
            onClick={() => setShowOriginalBugView(true)}
          >
            <Eye size={12} /> Kondisi Awal (Error 403)
          </button>
        </div>

        {showOriginalBugView ? (
          <div className="original-bug-box">
            <div className="original-bug-icon">i</div>
            <p className="original-bug-text">
              Terjadi Kesalahan: 403 : Authentication failed
            </p>
            <button
              type="button"
              className="original-bug-btn"
              onClick={() => setShowOriginalBugView(false)}
            >
              Coba Lagi (Kembali ke Solusi PRD)
            </button>
            <p className="original-bug-note">
              ⚠️ <strong>Masalah pada Aplikasi Awal (PRD Bagian 2):</strong> Pesan error teknis sulit dipahami pelaku usaha dan tidak memberikan opsi unduh maupun alternatif akses dokumen.
            </p>
          </div>
        ) : (
          <>
            <div className="error-icon-circle">
              <AlertCircle size={30} color="#dc2626" />
            </div>

            <h3 className="error-modal-title">
              Dokumen PDF Belum Dapat Ditampilkan Secara Langsung
            </h3>

            <p className="error-modal-message">
              Maaf, lampiran <strong>{attachment.name}</strong> ({attachment.format}, {attachment.size})
              saat ini mengalami kendala saat dimuat di dalam aplikasi.
            </p>

            <div className="error-guidance-box">
              <strong>Pilih tindakan selanjutnya agar tetap memperoleh informasi regulasi:</strong>
            </div>

            <div className="error-modal-actions">
              <button
                type="button"
                className="btn-error-retry"
                onClick={() => onRetry(attachment)}
              >
                <RefreshCw size={15} />
                <span>Coba Lagi Buka Dokumen (US-04)</span>
              </button>

              <button
                type="button"
                className="btn-error-download"
                onClick={() => onDownload(attachment)}
              >
                <Download size={15} />
                <span>Unduh Dokumen PDF ({attachment.size}) (US-02)</span>
              </button>

              <button
                type="button"
                className="btn-error-summary"
                onClick={() => onOpenQuickSummary(attachment)}
              >
                <BookOpenCheck size={15} />
                <span>Baca Ringkasan Inti Persyaratan Regulasi (FR-02)</span>
              </button>

              <button
                type="button"
                className="btn-error-external"
                onClick={() => onOpenExternal(attachment)}
              >
                <ExternalLink size={14} />
                <span>Buka Melalui Aplikasi Pembaca PDF Lain (US-02)</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
