import React, { useState } from 'react';
import { Home, FileText, HelpCircle, Settings, Wifi, BatteryCharging } from 'lucide-react';
import { REGULATIONS_DATA, triggerPdfDownload } from './data/regulationData';
import SimulatorPanel from './components/SimulatorPanel';
import HomeView from './components/HomeView';
import RegulationListView from './components/RegulationListView';
import RegulationDetailView from './components/RegulationDetailView';
import DocumentPreviewModal from './components/DocumentPreviewModal';
import ErrorRecoveryModal from './components/ErrorRecoveryModal';
import QuickSummaryModal from './components/QuickSummaryModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('detail'); // 'home' | 'list' | 'detail'
  const [selectedRegulation, setSelectedRegulation] = useState(REGULATIONS_DATA[0]);
  const [simulationMode, setSimulationMode] = useState('normal'); // 'normal' | 'error403'
  const [activeAttachment, setActiveAttachment] = useState(null);
  const [errorAttachment, setErrorAttachment] = useState(null);
  const [summaryAttachment, setSummaryAttachment] = useState(null);
  const [cachedIds, setCachedIds] = useState(['abstrak-esdm-5-2021']);
  const [verifiedMetrics, setVerifiedMetrics] = useState({
    ux01: false,
    ux02: false,
    ux03: false,
    ux04: true
  });
  const [toastMessage, setToastMessage] = useState('');
  const [lastActionLog, setLastActionLog] = useState(
    'FR-04 / UX-04 Aktif: Identitas nama, ukuran, dan format PDF telah ditampilkan. Klik "Buka Lampiran PDF" untuk menguji FR-01.'
  );

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3800);
  };

  const addToCache = (id) => {
    setCachedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleOpenAttachment = (attachment) => {
    if (simulationMode === 'error403') {
      setErrorAttachment(attachment);
      setActiveAttachment(null);
      setVerifiedMetrics((m) => ({ ...m, ux03: true }));
      setLastActionLog(
        `[FR-03 / UX-03] Kendala akses "${attachment.fileName}". Menampilkan pesan kesalahan jelas beserta tombol Coba Lagi & Unduh.`
      );
      return;
    }

    setErrorAttachment(null);
    setSummaryAttachment(null);
    setActiveAttachment(attachment);
    addToCache(attachment.id);
    setVerifiedMetrics((m) => ({ ...m, ux01: true }));
    setLastActionLog(
      `[FR-01 / UX-01 Terpenuhi] Membuka "${attachment.fileName}" (${attachment.format}, ${attachment.size}) di In-App PDF Viewer.`
    );
  };

  const handleDownloadAttachment = (attachment) => {
    triggerPdfDownload(attachment);
    addToCache(attachment.id);
    setVerifiedMetrics((m) => ({ ...m, ux02: true }));
    showToast(`Berhasil mengunduh ${attachment.fileName} (${attachment.size})`);
    setLastActionLog(
      `[FR-02 / UX-02 Terpenuhi] Berkas "${attachment.fileName}" berhasil diunduh ke perangkat dan disimpan di cache sesi.`
    );
  };

  const handleOpenExternalReader = (attachment) => {
    setErrorAttachment(null);
    setActiveAttachment(attachment);
    addToCache(attachment.id);
    setVerifiedMetrics((m) => ({ ...m, ux01: true, ux02: true }));
    showToast(`Membuka ${attachment.fileName} melalui Aplikasi Pembaca PDF Perangkat`);
    setLastActionLog(
      `[FR-02 / US-02 Terpenuhi] Membuka "${attachment.fileName}" melalui alternatif aplikasi pembaca PDF lain.`
    );
  };

  const handleRetryOpen = (attachment) => {
    setSimulationMode('normal');
    setErrorAttachment(null);
    setActiveAttachment(attachment);
    addToCache(attachment.id);
    setVerifiedMetrics((m) => ({ ...m, ux01: true, ux03: true }));
    showToast('Pemuatan ulang berhasil! Dokumen PDF kini ditampilkan.');
    setLastActionLog(
      `[FR-03 / US-04 Terpenuhi] Tombol "Coba Lagi" berhasil memuat ulang "${attachment.fileName}" tanpa mengulangi pencarian dari awal.`
    );
  };

  const handleOpenQuickSummary = (attachment) => {
    setErrorAttachment(null);
    setSummaryAttachment(attachment);
    setVerifiedMetrics((m) => ({ ...m, ux02: true }));
    setLastActionLog(
      `[FR-02 Terpenuhi] Menampilkan Ringkasan Inti Persyaratan Regulasi untuk "${attachment.fileName}".`
    );
  };

  return (
    <div className="app-workspace">
      <SimulatorPanel
        simulationMode={simulationMode}
        setSimulationMode={setSimulationMode}
        verifiedMetrics={verifiedMetrics}
        cachedCount={cachedIds.length}
        lastActionLog={lastActionLog}
      />

      <div className="mobile-phone-frame">
        <div className="phone-status-bar">
          <span className="status-time">21.41</span>
          <div className="status-icons">
            <Wifi size={14} />
            <BatteryCharging size={15} />
            <span className="battery-pct">94%</span>
          </div>
        </div>

        {toastMessage && <div className="oss-toast-banner">{toastMessage}</div>}

        <div className="phone-screen-body">
          {currentScreen === 'home' && (
            <HomeView
              onOpenRegulations={() => {
                setCurrentScreen('list');
                setLastActionLog('[FR-05] Membuka halaman Daftar Regulasi Perizinan.');
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
                setLastActionLog(`[FR-05] Membuka Detail Regulasi: ${reg.shortNumber}`);
              }}
            />
          )}

          {currentScreen === 'detail' && (
            <RegulationDetailView
              regulation={selectedRegulation}
              cachedIds={cachedIds}
              onBack={() => setCurrentScreen('list')}
              onOpenAttachment={handleOpenAttachment}
              onDownloadAttachment={handleDownloadAttachment}
              onQuickSummary={handleOpenQuickSummary}
            />
          )}

          {activeAttachment && (
            <DocumentPreviewModal
              attachment={activeAttachment}
              isCached={cachedIds.includes(activeAttachment.id)}
              onClose={() => setActiveAttachment(null)}
              onDownload={handleDownloadAttachment}
              onOpenExternal={handleOpenExternalReader}
              onSaveOffline={(att) => {
                addToCache(att.id);
                showToast(`${att.fileName} disimpan ke penyimpanan cache sesi`);
              }}
            />
          )}

          {errorAttachment && (
            <ErrorRecoveryModal
              attachment={errorAttachment}
              onRetry={handleRetryOpen}
              onDownload={handleDownloadAttachment}
              onOpenExternal={handleOpenExternalReader}
              onOpenQuickSummary={handleOpenQuickSummary}
              onClose={() => setErrorAttachment(null)}
            />
          )}

          {summaryAttachment && (
            <QuickSummaryModal
              attachment={summaryAttachment}
              onClose={() => setSummaryAttachment(null)}
              onOpenFullPdf={(att) => {
                setSummaryAttachment(null);
                handleRetryOpen(att);
              }}
              onDownloadPdf={handleDownloadAttachment}
            />
          )}
        </div>

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
              showToast('Fokus PRD berada pada menu Informasi -> Regulasi (FR-01 s/d FR-05)')
            }
          >
            <HelpCircle size={18} />
            <span>Bantuan</span>
          </button>

          <button
            type="button"
            className="nav-tab"
            onClick={() =>
              showToast('User Persona PRD: Yuda (21 tahun, Mahasiswa yang buka usaha di rumah)')
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
