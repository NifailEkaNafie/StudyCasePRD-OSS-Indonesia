import React, { useState } from 'react';
import { Home, FileText, HelpCircle, Settings, Wifi, BatteryCharging } from 'lucide-react';
import { REGULATIONS_DATA, triggerPdfDownload } from './data/regulationData';
import SimulatorPanel from './components/SimulatorPanel';
import HomeView from './components/HomeView';
import RegulationListView from './components/RegulationListView';
import RegulationDetailView from './components/RegulationDetailView';
import DocumentPreviewModal from './components/DocumentPreviewModal';
import ErrorRecoveryModal from './components/ErrorRecoveryModal';

export default function App() {
  // Default langsung ke halaman Detail Regulasi Permen ESDM No. 5 Tahun 2021 (Fokus Worksheet 1-8)
  const [currentScreen, setCurrentScreen] = useState('detail'); // 'home' | 'list' | 'detail'
  const [selectedRegulation, setSelectedRegulation] = useState(REGULATIONS_DATA[0]);
  const [simulationMode, setSimulationMode] = useState('normal'); // 'normal' | 'error'
  const [activeAttachment, setActiveAttachment] = useState(null);
  const [errorAttachment, setErrorAttachment] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [lastActionLog, setLastActionLog] = useState(
    'Siap diuji — Pilih salah satu file lampiran PDF di bawah untuk melihat hasil UX-01 s/d UX-04.'
  );

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3800);
  };

  const handleOpenAttachment = (attachment) => {
    if (simulationMode === 'error') {
      setErrorAttachment(attachment);
      setActiveAttachment(null);
      setLastActionLog(
        `[MOT Worksheet 7 - Mode Error] Gagal memuat "${attachment.fileName}". Menampilkan pesan kesalahan jelas & opsi pemulihan (UX-03).`
      );
    } else {
      setErrorAttachment(null);
      setActiveAttachment(attachment);
      setLastActionLog(
        `[UX-01 Terpenuhi] Membuka "${attachment.fileName}" (${attachment.format}, ${attachment.size}) secara langsung di In-App PDF Viewer.`
      );
    }
  };

  const handleDownloadAttachment = (attachment) => {
    triggerPdfDownload(attachment);
    showToast(`Berhasil mengunduh ${attachment.fileName} (${attachment.size})`);
    setLastActionLog(
      `[UX-02 Terpenuhi] Mengunduh berkas "${attachment.fileName}" ke perangkat pengguna sebagai alternatif akses dokumen.`
    );
  };

  const handleOpenExternalReader = (attachment) => {
    setErrorAttachment(null);
    setActiveAttachment(attachment);
    showToast(`Membuka ${attachment.fileName} melalui Pembaca PDF Perangkat`);
    setLastActionLog(
      `[UX-02 Terpenuhi] Membuka "${attachment.fileName}" melalui alternatif aplikasi pembaca PDF perangkat.`
    );
  };

  const handleRetryOpen = (attachment) => {
    // Saat user menekan Coba Lagi (US-04), sistem memulihkan koneksi dan membuka PDF tanpa keluar halaman
    setSimulationMode('normal');
    setErrorAttachment(null);
    setActiveAttachment(attachment);
    showToast('Memuat ulang berhasil! Dokumen PDF kini terbuka.');
    setLastActionLog(
      `[US-04 & UX-03 Terpenuhi] Pengguna menekan "Coba Lagi" dan berhasil membuka "${attachment.fileName}" tanpa mengulang pencarian dari awal.`
    );
  };

  return (
    <div className="app-workspace">
      {/* Panel Simulator di atas untuk memudahkan demo di depan dosen */}
      <SimulatorPanel
        simulationMode={simulationMode}
        setSimulationMode={setSimulationMode}
        lastActionLog={lastActionLog}
      />

      {/* Bingkai Ponsel Aplikasi OSS Indonesia */}
      <div className="mobile-phone-frame">
        {/* Status Bar Ponsel (21.41 seperti di Screenshot Worksheet 1) */}
        <div className="phone-status-bar">
          <span className="status-time">21.41</span>
          <div className="status-icons">
            <Wifi size={14} />
            <BatteryCharging size={15} />
            <span className="battery-pct">94%</span>
          </div>
        </div>

        {/* Toast Feedback */}
        {toastMessage && <div className="oss-toast-banner">{toastMessage}</div>}

        {/* Area Konten Utama */}
        <div className="phone-screen-body">
          {currentScreen === 'home' && (
            <HomeView
              onOpenRegulations={() => {
                setCurrentScreen('list');
                setLastActionLog('Membuka daftar Regulasi OSS Indonesia.');
              }}
            />
          )}

          {currentScreen === 'list' && (
            <RegulationListView
              regulations={REGULATIONS_DATA}
              onBack={() => setCurrentScreen('home')}
              onSelectRegulation={(reg) => {
                setSelectedRegulation(reg);
                setCurrentScreen('detail');
                setLastActionLog(`Membuka Detail Regulasi: ${reg.shortNumber}`);
              }}
            />
          )}

          {currentScreen === 'detail' && (
            <RegulationDetailView
              regulation={selectedRegulation}
              onBack={() => setCurrentScreen('list')}
              onOpenAttachment={handleOpenAttachment}
              onDownloadAttachment={handleDownloadAttachment}
            />
          )}

          {/* Modal In-App PDF Viewer (UX-01 & UX-02) */}
          {activeAttachment && (
            <DocumentPreviewModal
              attachment={activeAttachment}
              onClose={() => setActiveAttachment(null)}
              onDownload={handleDownloadAttachment}
              onOpenExternal={handleOpenExternalReader}
            />
          )}

          {/* Modal Error Recovery (UX-03 & UX-02) */}
          {errorAttachment && (
            <ErrorRecoveryModal
              attachment={errorAttachment}
              onRetry={handleRetryOpen}
              onDownload={handleDownloadAttachment}
              onOpenExternal={handleOpenExternalReader}
              onClose={() => setErrorAttachment(null)}
            />
          )}
        </div>

        {/* Bottom Navigation Bar OSS Indonesia (Sesuai Screenshot Worksheet 1) */}
        <div className="oss-bottom-nav">
          <button
            type="button"
            className={`nav-tab ${currentScreen === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('home')}
          >
            <Home size={18} />
            <span>Beranda</span>
          </button>

          <button
            type="button"
            className={`nav-tab ${currentScreen === 'list' || currentScreen === 'detail' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('detail')}
          >
            <FileText size={18} />
            <span>Informasi</span>
          </button>

          <button
            type="button"
            className="nav-tab"
            onClick={() =>
              showToast('Fokus studi kasus Worksheet 1-8 berada pada menu Informasi -> Regulasi')
            }
          >
            <HelpCircle size={18} />
            <span>Bantuan</span>
          </button>

          <button
            type="button"
            className="nav-tab"
            onClick={() =>
              showToast('Persona Aktif: Yuda (21 thn, Mahasiswa Pemilik Usaha Mandiri)')
            }
          >
            <Settings size={18} />
            <span>Pengaturan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
