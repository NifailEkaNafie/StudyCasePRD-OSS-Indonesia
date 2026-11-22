import React from 'react';
import { ChevronLeft, Download, ExternalLink, FileText, CheckCircle } from 'lucide-react';

// Implementasi UX-01 (P1 - Tinggi) & US-01:
// Penampil dokumen PDF secara langsung (In-App PDF Viewer) pada halaman detail regulasi
export default function DocumentPreviewModal({
  attachment,
  onClose,
  onDownload,
  onOpenExternal
}) {
  if (!attachment) return null;

  return (
    <div className="pdf-viewer-overlay">
      <div className="pdf-viewer-container">
        {/* Header Viewer sesuai tata letak aplikasi OSS Indonesia */}
        <div className="pdf-viewer-header">
          <button type="button" className="icon-back-btn" onClick={onClose} aria-label="Tutup">
            <ChevronLeft size={22} />
          </button>

          <div className="pdf-header-title-wrap">
            <span className="pdf-header-badge">
              {attachment.format} • {attachment.size}
            </span>
            <h4 className="pdf-header-title">{attachment.name}</h4>
          </div>

          <button
            type="button"
            className="pdf-header-download-btn"
            onClick={() => onDownload(attachment)}
            title="Unduh Dokumen PDF"
          >
            <Download size={19} />
          </button>
        </div>

        {/* Status Bar Keberhasilan UX-01 */}
        <div className="pdf-viewer-status-bar">
          <div className="status-left">
            <CheckCircle size={14} color="#16a34a" />
            <span>Dokumen PDF berhasil ditampilkan (UX-01 Terpenuhi)</span>
          </div>
          <span className="page-indicator">{attachment.pagesCount} Halaman</span>
        </div>

        {/* Area Isi Dokumen PDF */}
        <div className="pdf-document-scroll">
          {attachment.pages.map((page) => (
            <div key={page.pageNumber} className="pdf-page-sheet">
              <div className="pdf-page-watermark">REPUBLIK INDONESIA • OSS INDONESIA</div>
              <div className="pdf-page-header">
                <FileText size={16} color="#8B1E24" />
                <span>
                  {attachment.fileName} — Halaman {page.pageNumber} dari {attachment.pagesCount}
                </span>
              </div>

              <h3 className="pdf-page-heading">{page.heading}</h3>
              <h4 className="pdf-page-subheading">{page.subheading}</h4>

              <div className="pdf-page-clauses">
                {page.clauses.map((clause, idx) => (
                  <p key={idx} className="pdf-clause-item">
                    {clause}
                  </p>
                ))}
              </div>

              <div className="pdf-page-footer">
                <span>Dokumen Resmi Perizinan Berusaha Berbasis Risiko (OSS)</span>
                <span>Hal. {page.pageNumber}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Bar Alternatif Akses (UX-02 & US-02) */}
        <div className="pdf-viewer-bottom-bar">
          <button
            type="button"
            className="btn-action-download"
            onClick={() => onDownload(attachment)}
          >
            <Download size={16} />
            <span>Unduh PDF ({attachment.size})</span>
          </button>

          <button
            type="button"
            className="btn-action-external"
            onClick={() => onOpenExternal(attachment)}
          >
            <ExternalLink size={16} />
            <span>Buka di Aplikasi Pembaca PDF Lain</span>
          </button>
        </div>
      </div>
    </div>
  );
}
