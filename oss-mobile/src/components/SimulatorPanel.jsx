import React from 'react';
import { CheckCircle2, AlertTriangle, FileText, CheckSquare } from 'lucide-react';

export default function SimulatorPanel({
  simulationMode,
  setSimulationMode,
  verifiedMetrics,
  cachedCount,
  lastActionLog
}) {
  return (
    <div className="simulator-panel">
      <div className="simulator-header">
        <div className="simulator-badge">
          <FileText size={14} />
          <span>OSS INDONESIA — UX SIMULATOR (SESUAI PRD v1.0)</span>
        </div>
        <span className="simulator-student">Nifail Eka Nafie • 202310370311344</span>
      </div>

      <p className="simulator-desc">
        <strong>FR-05 Simulator Panel:</strong> Uji skenario <strong>Moment of Truth (MOT)</strong> saat pengguna mengakses lampiran PDF pada Halaman Detail Regulasi:
      </p>

      <div className="simulator-controls">
        <button
          type="button"
          className={`sim-btn ${simulationMode === 'normal' ? 'active-success' : ''}`}
          onClick={() => setSimulationMode('normal')}
        >
          <CheckCircle2 size={15} />
          <span>Mode Normal: Buka PDF Langsung (FR-01 / UX-01)</span>
        </button>

        <button
          type="button"
          className={`sim-btn ${simulationMode === 'error403' ? 'active-error' : ''}`}
          onClick={() => setSimulationMode('error403')}
        >
          <AlertTriangle size={15} />
          <span>Simulasi Gagal Buka PDF / Error 403 (FR-03 / UX-03)</span>
        </button>
      </div>

      <div className="metrics-tracker-bar">
        <span className="metrics-label">
          Indikator Acceptance Criteria PRD ({cachedCount} Dokumen di Offline Cache):
        </span>
        <div className="metrics-pills">
          <span className={`metric-pill ${verifiedMetrics.ux01 ? 'done' : ''}`}>
            <CheckSquare size={12} /> FR-01 / UX-01 (In-App PDF Viewer)
          </span>
          <span className={`metric-pill ${verifiedMetrics.ux02 ? 'done' : ''}`}>
            <CheckSquare size={12} /> FR-02 / UX-02 (Unduh & Alternatif)
          </span>
          <span className={`metric-pill ${verifiedMetrics.ux03 ? 'done' : ''}`}>
            <CheckSquare size={12} /> FR-03 / UX-03 (Error Recovery & Retry)
          </span>
          <span className={`metric-pill ${verifiedMetrics.ux04 ? 'done' : ''}`}>
            <CheckSquare size={12} /> FR-04 / UX-04 (Identitas & Format PDF)
          </span>
        </div>
      </div>

      {lastActionLog && (
        <div className="simulator-log">
          <strong>Status Sistem:</strong> {lastActionLog}
        </div>
      )}
    </div>
  );
}
