import React from 'react';
import { FileText, Download, Eye, BookOpenCheck, CheckCircle2 } from 'lucide-react';

// Implementasi FR-04 (UX-04 — Prioritas 3) & US-05:
// Menampilkan nama resmi dokumen, nama berkas (.pdf), badge format PDF,
// ukuran berkas, jumlah halaman, status cache (Business Rule 7), serta tombol aksi
export default function AttachmentCard({
  attachment,
  isCached,
  onOpenAttachment,
  onDownloadAttachment,
  onQuickSummary
}) {
  return (
    <div className="attachment-card">
      <div className="attachment-card-main">
        <div className="attachment-icon-box">
          <FileText size={20} color="#1d4ed8" />
          <span className="pdf-format-pill">{attachment.format}</span>
        </div>

        <div className="attachment-info">
          <div className="attachment-meta-row">
            <span className="format-badge">Format: {attachment.format}</span>
            <span className="size-badge">{attachment.size}</span>
            <span className="pages-badge">{attachment.pagesCount} Halaman</span>
            <span className="category-badge">{attachment.category}</span>
            {isCached && (
              <span className="cached-badge">
                <CheckCircle2 size={10} /> Tersimpan di Cache
              </span>
            )}
          </div>

          <h4 className="attachment-title">{attachment.name}</h4>
          <p className="attachment-filename">{attachment.fileName}</p>
          <p className="attachment-desc">{attachment.description}</p>
        </div>
      </div>

      <div className="attachment-actions-triple">
        <button
          type="button"
          className="btn-primary-open"
          onClick={() => onOpenAttachment(attachment)}
        >
          <Eye size={14} />
          <span>Buka Lampiran PDF</span>
        </button>

        <button
          type="button"
          className="btn-peek-summary"
          onClick={() => onQuickSummary(attachment)}
          title="Ringkasan Inti Persyaratan Regulasi (FR-02)"
        >
          <BookOpenCheck size={14} />
          <span>Ringkasan</span>
        </button>

        <button
          type="button"
          className="btn-secondary-download"
          onClick={() => onDownloadAttachment(attachment)}
          title="Unduh Dokumen PDF (FR-02 / UX-02)"
        >
          <Download size={14} />
          <span>Unduh</span>
        </button>
      </div>
    </div>
  );
}
