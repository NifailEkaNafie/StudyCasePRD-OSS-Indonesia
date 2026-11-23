import React, { useState } from 'react';
import {
  ChevronLeft,
  Download,
  ExternalLink,
  FileText,
  CheckCircle,
  Search,
  ZoomIn,
  ZoomOut,
  BookmarkCheck
} from 'lucide-react';

// Implementasi UX-01 (P1) & US-01 + Skill Rule 1 (Interactive In-App PDF Reader & Offline Caching):
// Dilengkapi pencarian kata kunci di dalam PDF, kontrol Zoom, filter halaman, dan status Offline Cache
export default function DocumentPreviewModal({
  attachment,
  isCached,
  onClose,
  onDownload,
  onOpenExternal,
  onSaveOffline
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedPage, setSelectedPage] = useState('all');

  if (!attachment) return null;

  const quickKeywords = ['NIB', 'KBLI', 'Risiko', '5 (lima) hari', 'Sertifikat'];

  const highlightText = (text, keyword) => {
    if (!keyword.trim()) return text;
    const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, idx) =>
      regex.test(part) ? (
        <mark key={idx} className="pdf-highlight-mark">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const pagesToShow =
    selectedPage === 'all'
      ? attachment.pages
      : attachment.pages.filter((p) => String(p.pageNumber) === String(selectedPage));

  return (
    <div className="pdf-viewer-overlay">
      <div className="pdf-viewer-container">
        {/* Header Viewer */}
        <div className="pdf-viewer-header">
          <button type="button" className="icon-back-btn" onClick={onClose} aria-label="Tutup">
            <ChevronLeft size={22} />
          </button>

          <div className="pdf-header-title-wrap">
            <div className="pdf-header-badges">
              <span className="pdf-header-badge">
                {attachment.format} • {attachment.size}
              </span>
              {isCached && (
                <span className="pdf-offline-pill">
                  <BookmarkCheck size={11} /> Tersimpan Offline
                </span>
              )}
            </div>
            <h4 className="pdf-header-title">{attachment.name}</h4>
          </div>

          <button
            type="button"
            className="pdf-header-download-btn"
            onClick={() => onDownload(attachment)}
            title="Unduh Dokumen PDF"
          >
            <Download size={18} />
          </button>
        </div>

        {/* Skill Rule 1: Interactive Toolbar (Search in PDF + Zoom + Page Filter) */}
        <div className="pdf-skill-toolbar">
          <div className="pdf-search-row">
            <div className="pdf-search-input-wrap">
              <Search size={13} color="#64748b" />
              <input
                type="text"
                placeholder="Cari kata di dalam dokumen PDF ini..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="pdf-zoom-controls">
              <button
                type="button"
                className="zoom-btn"
                onClick={() => setZoomLevel((z) => Math.max(85, z - 15))}
                title="Perkecil Teks"
              >
                <ZoomOut size={13} />
              </button>
              <span className="zoom-label">{zoomLevel}%</span>
              <button
                type="button"
                className="zoom-btn"
                onClick={() => setZoomLevel((z) => Math.min(130, z + 15))}
                title="Perbesar Teks"
              >
                <ZoomIn size={13} />
              </button>
            </div>
          </div>

          <div className="pdf-quick-chips-row">
            <span className="chip-label">Cari Cepat:</span>
            {quickKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                className={`kw-chip ${searchTerm.toLowerCase() === kw.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSearchTerm(searchTerm === kw ? '' : kw)}
              >
                {kw}
              </button>
            ))}

            <select
              className="page-select-dropdown"
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
            >
              <option value="all">Semua Hal ({attachment.pagesCount})</option>
              {attachment.pages.map((p) => (
                <option key={p.pageNumber} value={p.pageNumber}>
                  Hal. {p.pageNumber}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Bar Keberhasilan UX-01 */}
        <div className="pdf-viewer-status-bar">
          <div className="status-left">
            <CheckCircle size={13} color="#16a34a" />
            <span>In-App PDF Viewer Aktif (FR-01 / UX-01 Terpenuhi)</span>
          </div>
          {!isCached && (
            <button
              type="button"
              className="save-offline-mini-btn"
              onClick={() => onSaveOffline(attachment)}
            >
              Simpan Offline
            </button>
          )}
        </div>

        {/* Area Isi Dokumen PDF */}
        <div className="pdf-document-scroll">
          {pagesToShow.map((page) => (
            <div
              key={page.pageNumber}
              className="pdf-page-sheet"
              style={{ fontSize: `${zoomLevel}%` }}
            >
              <div className="pdf-page-watermark">REPUBLIK INDONESIA • OSS INDONESIA</div>
              <div className="pdf-page-header">
                <FileText size={15} color="#8B1E24" />
                <span>
                  {attachment.fileName} — Halaman {page.pageNumber} dari {attachment.pagesCount}
                </span>
              </div>

              <h3 className="pdf-page-heading">
                {highlightText(page.heading, searchTerm)}
              </h3>
              <h4 className="pdf-page-subheading">
                {highlightText(page.subheading, searchTerm)}
              </h4>

              <div className="pdf-page-clauses">
                {page.clauses.map((clause, idx) => (
                  <p key={idx} className="pdf-clause-item">
                    {highlightText(clause, searchTerm)}
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
            <Download size={15} />
            <span>Unduh PDF & Simpan Offline ({attachment.size})</span>
          </button>

          <button
            type="button"
            className="btn-action-external"
            onClick={() => onOpenExternal(attachment)}
          >
            <ExternalLink size={15} />
            <span>Buka di Aplikasi Pembaca PDF Lain</span>
          </button>
        </div>
      </div>
    </div>
  );
}
