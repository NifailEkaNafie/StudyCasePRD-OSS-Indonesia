import React, { useState } from 'react';
import { ChevronLeft, Search, FileText, ChevronRight, Calendar } from 'lucide-react';

export default function RegulationListView({ regulations, onBack, onSelectRegulation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegulations = regulations.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="subpage-view">
      <div className="oss-nav-header">
        <button type="button" className="icon-back-btn" onClick={onBack} aria-label="Kembali">
          <ChevronLeft size={22} />
        </button>
        <h3>Daftar Regulasi Perizinan</h3>
      </div>

      <div className="subpage-content">
        <div className="search-input-box">
          <Search size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Cari peraturan, sektor usaha, atau KBLI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <p className="helper-banner">
          Pilih regulasi untuk melihat detail aturan dan membuka dokumen lampiran berformat <strong>PDF</strong>.
        </p>

        <div className="regulation-list">
          {filteredRegulations.map((reg) => (
            <button
              key={reg.id}
              type="button"
              className="regulation-list-card"
              onClick={() => onSelectRegulation(reg)}
            >
              <div className="reg-card-top">
                <span className="reg-sector-badge">{reg.sector}</span>
                <span className="reg-count-badge">
                  <FileText size={12} /> {reg.attachments.length} Lampiran PDF
                </span>
              </div>
              <h4 className="reg-card-title">{reg.title}</h4>
              <p className="reg-card-number">{reg.number}</p>
              <div className="reg-card-footer">
                <span className="reg-date">
                  <Calendar size={12} /> Diundangkan: {reg.releaseDate}
                </span>
                <span className="reg-open-link">
                  Lihat Detail <ChevronRight size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
