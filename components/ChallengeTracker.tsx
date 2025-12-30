'use client';

import { useState, useEffect } from 'react';
import { challengeData } from '@/lib/challengeData';
import { formatDate, calculateEndDate, getDayDate } from '@/lib/dateUtils';
import { PulseBeamsBadge } from '@/components/PulseBeamsBadge';

const STORAGE_KEY = 'ai-native-progress';
const TOTAL_DAYS = 21;

interface ChallengeTrackerProps {
  startDate: Date;
  onEditDates: () => void;
}

export default function ChallengeTracker({ startDate, onEditDates }: ChallengeTrackerProps) {
  const [progress, setProgress] = useState<Record<number, boolean>>({});
  const [openPhases, setOpenPhases] = useState<Set<number>>(new Set([1]));
  const [showCelebration, setShowCelebration] = useState(false);

  const endDate = calculateEndDate(startDate, TOTAL_DAYS);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleDay = (day: number) => {
    const newProgress = { ...progress, [day]: !progress[day] };
    setProgress(newProgress);

    const completedCount = Object.values(newProgress).filter(Boolean).length;
    if (completedCount === TOTAL_DAYS) {
      setTimeout(() => setShowCelebration(true), 300);
      createConfetti();
    }
  };

  const togglePhase = (phaseId: number) => {
    const newOpenPhases = new Set(openPhases);
    if (newOpenPhases.has(phaseId)) {
      newOpenPhases.delete(phaseId);
    } else {
      newOpenPhases.add(phaseId);
    }
    setOpenPhases(newOpenPhases);
  };

  const resetProgress = () => {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
      setProgress({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const createConfetti = () => {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = ['#98e024', '#67d8ef', '#f92672', '#fd971f', '#ae81ff'];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      container.appendChild(confetti);
    }

    setTimeout(() => {
      container.innerHTML = '';
    }, 5000);
  };

  const completedCount = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completedCount / TOTAL_DAYS) * 100);

  const getPhaseProgress = (phaseId: number) => {
    const phase = challengeData.phases[phaseId - 1];
    const completed = phase.days.filter(day => progress[day.dayNumber]).length;
    return `${completed}/${phase.days.length}`;
  };

  return (
    <div className="container">
      <header className="header">
        <PulseBeamsBadge />
        <h1>AI-Native Challenge</h1>
      </header>

      <section className="progress-section">
        <div className="progress-header">
          <span className="progress-title">Tu Progreso</span>
          <div className="progress-stats">
            <span className="progress-count">{completedCount}/21</span>
            <span className="progress-percentage">{percentage}%</span>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="dates-info">
          <div className="date-item">
            <div className="date-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="date-label">Inicio</div>
              <div className="date-value">{formatDate(startDate)}</div>
            </div>
          </div>
          <div className="date-item">
            <div className="date-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="date-label">Final</div>
              <div className="date-value">{formatDate(endDate)}</div>
            </div>
          </div>
        </div>
        <button className="edit-dates-btn" onClick={onEditDates}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Cambiar fechas del desafío
        </button>
      </section>

      {challengeData.phases.map((phase) => (
        <div
          key={phase.id}
          className={`phase phase-${phase.id} ${openPhases.has(phase.id) ? 'open' : ''}`}
        >
          <div className="phase-header" onClick={() => togglePhase(phase.id)}>
            <div className="phase-left">
              <div className="phase-number">{String(phase.id).padStart(2, '0')}</div>
              <div className="phase-info">
                <h2>{phase.title}</h2>
                <span className="phase-meta">{phase.meta}</span>
              </div>
            </div>
            <div className="phase-right">
              <span className="phase-progress">{getPhaseProgress(phase.id)}</span>
              <div className="phase-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="phase-content">
            <div className="phase-objective">
              🎯 <strong>Objetivo:</strong> {phase.objective}
            </div>

            {phase.days.map((day) => {
              const dayDate = getDayDate(startDate, day.dayNumber);
              return (
                <div
                  key={day.dayNumber}
                  className={`day-card ${progress[day.dayNumber] ? 'completed' : ''}`}
                >
                  <div className="checkbox-wrapper">
                    <div
                      className={`checkbox ${progress[day.dayNumber] ? 'checked' : ''}`}
                      onClick={() => toggleDay(day.dayNumber)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="day-content">
                    <div className="day-header">
                      <span className="day-badge">DÍA {day.dayNumber}</span>
                      <span className="day-date">{formatDate(dayDate, 'short')}</span>
                    </div>
                    <h3 className="day-title">{day.title}</h3>
                    <p className="day-topics">{day.topics}</p>
                    {day.courseLink && (
                      <a href={day.courseLink} target="_blank" rel="noopener noreferrer" className="course-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        </svg>
                        {day.courseTitle}
                      </a>
                    )}
                    {day.finalProject && (
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(152,224,36,0.1), rgba(103,216,239,0.1))',
                        borderRadius: '10px',
                        padding: '16px',
                        marginTop: '12px',
                        border: '1px solid rgba(152,224,36,0.2)'
                      }}>
                        <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--accent-green)' }}>
                          🎯 Resultado Final:
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                          {day.finalProject.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <footer className="footer">
        <p>Reto AI-Native 2025, Creado por Alvaro Arancibia en colaboración con · <a href="https://platzi.com/c/desafioia/" target="_blank" rel="noopener noreferrer">Platzi</a></p>
        <button className="reset-btn" onClick={resetProgress}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          Reiniciar progreso
        </button>
      </footer>

      <div className={`celebration-overlay ${showCelebration ? 'show' : ''}`} onClick={() => setShowCelebration(false)}>
        <div className="celebration-modal" onClick={(e) => e.stopPropagation()}>
          <div className="celebration-icon">🎉</div>
          <h2 className="celebration-title">¡Felicidades!</h2>
          <p className="celebration-text">
            Has completado el Reto AI-Native de 21 días. Ahora tienes la mentalidad y las herramientas para trabajar con IA todos los días.
          </p>
          <button className="celebration-btn" onClick={() => setShowCelebration(false)}>
            ¡Continuar!
          </button>
        </div>
      </div>

      <div className="confetti-container" id="confetti-container"></div>
    </div>
  );
}
