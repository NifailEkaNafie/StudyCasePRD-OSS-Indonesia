import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

// Implementasi UX-04 (P3 - Rendah) & US-05:
// Menampilkan nama dokumen, format file (PDF), dan ukuran file secara jelas sebelum dibuka
export default function AttachmentCard({ attachment, onOpenAttachment, onDownloadAttachment }) {
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
          </div>

          <h4 className="attachment-title">{attachment.name}</h4>
          <p className="attachment-filename">{attachment.fileName}</p>
        </div>
      </div>

      <div className="attachment-actions">
        <button
          type="button"
          className="btn-primary-open"
          onClick={() => onOpenAttachment(attachment)}
        >
          <Eye size={15} />
          <span>Buka Lampiran PDF</span>
        </button>

        <button
          type="button"
          className="btn-secondary-download"
          onClick={() => onDownloadAttachment(attachment)}
          title="Unduh Dokumen PDF (UX-02)"
        >
          <Download size={15} />
          <span>Unduh</span>
        </button>
      </div>
    </div>
  );
}
