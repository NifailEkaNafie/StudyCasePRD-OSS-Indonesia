import React from 'react';
import { Search, BookOpen, Layers, FileText, ChevronRight } from 'lucide-react';

export default function HomeView({ onOpenRegulations }) {
  return (
    <div className="home-view">
      {/* Top Bar OSS Indonesia */}
      <div className="oss-topbar">
        <div className="oss-logo-wrap">
          <div className="oss-logo-badge">OSS</div>
          <span className="oss-logo-sub">INDONESIA</span>
        </div>
        <div className="oss-search-pill">
          <Search size={15} color="#94a3b8" />
          <span>Mau cari info apa?</span>
        </div>
      </div>

      {/* Greeting Bar */}
      <div className="oss-greeting-card">
        <div className="oss-avatar">👤</div>
        <div className="oss-greeting-text">
          <span className="oss-hi">Hai, Teman BOSS!</span>
          <span className="oss-persona-tag">Persona: Yuda (Pelaku Usaha Mandiri)</span>
        </div>
        <button type="button" className="oss-login-btn">
          Masuk
        </button>
      </div>

      {/* Hero Banner OSS (Sesuai Screenshot Worksheet 1) */}
      <div className="oss-hero-banner">
        <h2>Sistem Perizinan Berusaha Terintegrasi</h2>
        <p>Mudah, Cepat, Tepat, Transparan, dan Akuntabel</p>
      </div>

      {/* Section Informasi (Sesuai Screenshot Worksheet 1) */}
      <div className="oss-section">
        <h3 className="oss-section-title">Informasi</h3>

        <div className="oss-info-card">
          <div className="oss-info-icon">
            <BookOpen size={22} color="#1e3a8a" />
          </div>
          <div className="oss-info-body">
            <h4>Panduan</h4>
            <p>Yuk, pelajari panduan terkait penggunaan dan pengurusan perizinan</p>
          </div>
        </div>

        <div className="oss-info-card">
          <div className="oss-info-icon">
            <Layers size={22} color="#1e3a8a" />
          </div>
          <div className="oss-info-body">
            <h4>Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)</h4>
            <p>Temukan kategori bidang usaha sesuai KBLI untuk produk atau bisnis kamu</p>
          </div>
        </div>

        <button
          type="button"
          className="oss-info-card clickable-card highlight-card"
          onClick={onOpenRegulations}
        >
          <div className="oss-info-icon">
            <FileText size={22} color="#8B1E24" />
          </div>
          <div className="oss-info-body">
            <div className="card-title-row">
              <h4>Regulasi</h4>
              <span className="focus-pill">Fokus Riset UX</span>
            </div>
            <p>Baca informasi terkait OSS Indonesia & unduh lampiran PDF persyaratan</p>
          </div>
          <ChevronRight size={18} color="#64748b" />
        </button>
      </div>
    </div>
  );
}
