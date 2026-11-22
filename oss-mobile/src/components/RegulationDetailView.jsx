import React from 'react';
import { ChevronLeft, FileCheck2 } from 'lucide-react';
import AttachmentCard from './AttachmentCard';

export default function RegulationDetailView({
  regulation,
  onBack,
  onOpenAttachment,
  onDownloadAttachment
}) {
  if (!regulation) return null;

  return (
    <div className="subpage-view">
      <div className="oss-nav-header">
        <button type="button" className="icon-back-btn" onClick={onBack} aria-label="Kembali">
          <ChevronLeft size={22} />
        </button>
        <h3>Detail Regulasi</h3>
      </div>

      <div className="subpage-content">
        {/* Header Detail Regulasi sesuai Screenshot Worksheet 1 Halaman 2 */}
        <div className="reg-detail-box">
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

        {/* Bagian Lampiran Regulasi (UX-01, UX-02, UX-04) */}
        <div className="attachments-section">
          <div className="attachments-header">
            <div className="attachments-title-wrap">
              <FileCheck2 size={18} color="#1e3a8a" />
              <h3>Dokumen Lampiran Regulasi ({regulation.attachments.length})</h3>
            </div>
            <span className="ux-req-tag">UX-01 • UX-02 • UX-04</span>
          </div>

          <p className="attachments-subtitle">
            Pilih <strong>Buka Lampiran PDF</strong> untuk membaca isi aturan secara langsung, atau pilih <strong>Unduh</strong> untuk menyimpan berkas PDF ke perangkat Anda.
          </p>

          <div className="attachments-list">
            {regulation.attachments.map((att) => (
              <AttachmentCard
                key={att.id}
                attachment={att}
                onOpenAttachment={onOpenAttachment}
                onDownloadAttachment={onDownloadAttachment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
