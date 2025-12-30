'use client';

import { useState } from 'react';
import { formatDateForInput, parseInputDate } from '@/lib/dateUtils';

interface DateSelectorProps {
  currentStartDate: Date;
  onDateSelect: (date: Date) => void;
  onCancel: () => void;
}

export default function DateSelector({ currentStartDate, onDateSelect, onCancel }: DateSelectorProps) {
  const [selectedDate, setSelectedDate] = useState(formatDateForInput(currentStartDate));
  const minDate = '2025-12-29'; // 29 de diciembre de 2025

  const handleSubmit = () => {
    const date = parseInputDate(selectedDate);
    if (date) {
      onDateSelect(date);
    }
  };

  return (
    <div className="date-selector-overlay" onClick={onCancel}>
      <div className="date-selector-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="date-selector-title">Personaliza tu Desafío</h2>

        <div className="date-input-group">
          <label className="date-input-label" htmlFor="start-date">
            Fecha de inicio del desafío
          </label>
          <input
            id="start-date"
            type="date"
            className="date-input"
            value={selectedDate}
            min={minDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '10px',
          padding: '14px 18px',
          marginBottom: '24px',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          borderLeft: '3px solid var(--accent-cyan)'
        }}>
          💡 <strong>Nota:</strong> El desafío tiene una duración de 21 días. Las fechas de cada día se calcularán automáticamente a partir de la fecha de inicio que elijas.
        </div>

        <div className="date-selector-actions">
          <button
            className="date-selector-btn date-selector-btn-secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="date-selector-btn date-selector-btn-primary"
            onClick={handleSubmit}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
