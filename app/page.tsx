'use client';

import { useState, useEffect } from 'react';
import ChallengeTracker from '@/components/ChallengeTracker';
import DateSelector from '@/components/DateSelector';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const START_DATE_KEY = 'ai-native-start-date';
const HERO_SHOWN_KEY = 'ai-native-hero-shown';

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date('2025-12-29'));
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [showHero, setShowHero] = useState(true);

  // Cargar fecha de inicio y estado del hero desde localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem(START_DATE_KEY);
    const heroShown = localStorage.getItem(HERO_SHOWN_KEY);

    if (savedDate) {
      setStartDate(new Date(savedDate));
    }

    if (heroShown === 'true') {
      setShowHero(false);
    }
  }, []);

  // Guardar fecha de inicio cuando cambie
  const handleDateSelect = (date: Date) => {
    setStartDate(date);
    localStorage.setItem(START_DATE_KEY, date.toISOString());
    setShowDateSelector(false);
  };

  // Guardar que el hero ya fue mostrado
  const handleHeroButtonClick = () => {
    setShowHero(false);
    localStorage.setItem(HERO_SHOWN_KEY, 'true');
    setShowDateSelector(true);
  };

  return (
    <main>
      {showHero ? (
        <HeroGeometric
          badge="AI-Native Challenge"
          title1="Construye tu sistema de"
          title2="trabajo con IA en 3 semanas"
          description="Cursos, clases en vivo y un proyecto final para transformar tu carrera."
          buttonText="Reto 21 Días"
          onButtonClick={handleHeroButtonClick}
        />
      ) : showDateSelector ? (
        <DateSelector
          currentStartDate={startDate}
          onDateSelect={handleDateSelect}
          onCancel={() => setShowDateSelector(false)}
        />
      ) : (
        <ChallengeTracker
          startDate={startDate}
          onEditDates={() => setShowDateSelector(true)}
        />
      )}
    </main>
  );
}
