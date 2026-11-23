import React, { useState } from 'react';
import { ChevronLeft, FileCheck2, Search } from 'lucide-react';
import AttachmentCard from './AttachmentCard';

// Implementasi FR-04 & FR-05:
// Halaman Detail Regulasi dengan informasi Judul Peraturan, Nomor Peraturan,
// Sektor Usaha/Kode KBLI, Tanggal Pengundangan, pencarian lampiran, dan daftar lampiran PDF
export default function RegulationDetailView({
  regulation,
  cachedIds,
  onBack,
  onOpenAttachment,
  onDownloadAttachment,
  onQuickSummary
}) {
  const [filterText, setFilterText] = useState('');

  if (!regulation) return null;

  const filteredAttachments = regulation.attachments.filter(
    (att) =>
      att.name.toLowerCase().includes(filterText.toLowerCase()) ||
      att.category.toLowerCase().includes(filterText.toLowerCase()) ||
      att.description.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="subpage-view">
      <div className="oss-nav-header">
        <button type="button" className="icon-back-btn" onClick={onBack} aria-label="Kembali">
          <ChevronLeft size={22} />
        </button>
        <h3>Detail Regulasi</h3>
      </div>

      <div className="subpage-content">
        {/* Header Detail Regulasi (FR-05) */}
        <div className="reg-detail-box">
          <div className="reg-kbli-tags">
            <span className="kbli-chip">Sektor: {regulation.sector}</span>
            {regulation.kbliCodes.map((code) => (
              <span key={code} className="kbli-code-chip">
                KBLI {code}
              </span>
            ))}
          </div>

          <h2 className="reg-detail-title">{regulation.title}</h2>

          <div className="reg-field">
            <span className="reg-field-label">Nomor Peraturan</span>
            <p className="reg-field-value">{regulation.number}</p>
          </div>

          <div className="reg-field">
            <span className="reg-field-label">Tanggal Pengundangan</span>
            <p className="reg-field-value">{regulation.releaseDate}</p>
          </div>
        </div>

        {/* Bagian Lampiran Regulasi (FR-01, FR-02, FR-04) */}
        <div className="attachments-section">
          <div className="attachments-header">
            <div className="attachments-title-wrap">
              <FileCheck2 size={18} color="#1e3a8a" />
              <h3>Dokumen Lampiran Regulasi ({regulation.attachments.length})</h3>
            </div>
            <span className="ux-req-tag">FR-01 s/d FR-04</span>
          </div>

          <p className="attachments-subtitle">
            Pilih <strong>Buka Lampiran PDF</strong> untuk membaca isi regulasi secara langsung (FR-01), <strong>Ringkasan</strong> untuk melihat intisari persyaratan, atau <strong>Unduh</strong> (FR-02).
          </p>

          <div className="attachment-filter-bar">
            <Search size={14} color="#64748b" />
            <input
              type="text"
              placeholder="Filter lampiran berdasarkan nama atau kategori..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>

          <div className="attachments-list">
            {filteredAttachments.map((att) => (
              <AttachmentCard
                key={att.id}
                attachment={att}
                isCached={cachedIds.includes(att.id)}
                onOpenAttachment={onOpenAttachment}
                onDownloadAttachment={onDownloadAttachment}
                onQuickSummary={onQuickSummary}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
