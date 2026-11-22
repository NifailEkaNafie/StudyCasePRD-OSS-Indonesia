import React from 'react';
import { CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export default function SimulatorPanel({ simulationMode, setSimulationMode, lastActionLog }) {
  return (
    <div className="simulator-panel">
      <div className="simulator-header">
        <div className="simulator-badge">
          <FileText size={14} />
          <span>VIBE CODE: HANYA PRD — UX SIMULATOR (WORKSHEET 1-8)</span>
        </div>
        <span className="simulator-student">Nifail Eka Nafie • 202310370311344</span>
      </div>

      <p className="simulator-desc">
        Uji skenario <strong>Moment of Truth (Worksheet 7)</strong> saat pengguna menekan lampiran PDF pada Halaman Detail Regulasi:
      </p>

      <div className="simulator-controls">
        <button
          type="button"
          className={`sim-btn ${simulationMode === 'normal' ? 'active-success' : ''}`}
          onClick={() => setSimulationMode('normal')}
        >
          <CheckCircle2 size={15} />
          <span>Mode Normal: Buka PDF Langsung (UX-01)</span>
        </button>

        <button
          type="button"
          className={`sim-btn ${simulationMode === 'error' ? 'active-error' : ''}`}
          onClick={() => setSimulationMode('error')}
        >
          <AlertTriangle size={15} />
          <span>Simulasi Gagal Buka PDF / Error 403 (UX-02 & UX-03)</span>
        </button>
      </div>

      {lastActionLog && (
        <div className="simulator-log">
          <strong>Status Interaksi:</strong> {lastActionLog}
        </div>
      )}
    </div>
  );
}
