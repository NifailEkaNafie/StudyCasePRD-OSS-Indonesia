import React from 'react';
import { BookOpenCheck, Download, Eye, X, CheckCircle2 } from 'lucide-react';

// Implementasi FR-02 Ketentuan 4:
// Menyediakan opsi membaca ringkasan inti persyaratan regulasi apabila
// dokumen PDF sedang tidak dapat ditampilkan secara langsung.
export default function QuickSummaryModal({
  attachment,
  onClose,
  onOpenFullPdf,
  onDownloadPdf
}) {
  if (!attachment) return null;

  return (
    <div className="error-modal-backdrop">
      <div className="error-modal-sheet summary-sheet">
        <div className="error-modal-top">
          <span className="ux-tag-summary">
            <BookOpenCheck size={12} /> Ringkasan Inti Persyaratan Regulasi (FR-02)
          </span>
          <button type="button" className="error-close-btn" onClick={onClose} aria-label="Tutup">
            <X size={18} />
          </button>
        </div>

        <h3 className="summary-modal-title">{attachment.name}</h3>
        <div className="summary-meta-badges">
          <span className="format-badge">Format: {attachment.format}</span>
          <span className="size-badge">{attachment.size}</span>
          <span className="category-badge">{attachment.category}</span>
        </div>

        <p className="summary-modal-desc">{attachment.description}</p>

        <div className="summary-points-box">
          <h4>Poin Penting Persyaratan Perizinan & NIB:</h4>
          <ul>
            {attachment.keyHighlights.map((point, idx) => (
              <li key={idx}>
                <CheckCircle2 size={14} color="#16a34a" className="point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="error-modal-actions">
          <button
            type="button"
            className="btn-error-retry"
            onClick={() => onOpenFullPdf(attachment)}
          >
            <Eye size={15} />
            <span>Buka Dokumen PDF Lengkap ({attachment.pagesCount} Halaman)</span>
          </button>

          <button
            type="button"
            className="btn-error-download"
            onClick={() => onDownloadPdf(attachment)}
          >
            <Download size={15} />
            <span>Unduh Berkas PDF ({attachment.size})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
