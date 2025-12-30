'use client';

import { useState, useEffect } from 'react';
import ChallengeTracker from '@/components/ChallengeTracker';
import DateSelector from '@/components/DateSelector';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date('2025-01-12'));
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [showHero, setShowHero] = useState(true);

  return (
    <main>
      {showHero ? (
        <HeroGeometric
          badge="AI-Native Challenge"
          title1="Construye tu sistema de"
          title2="trabajo con IA en 3 semanas"
          description="Cursos, clases en vivo y un proyecto final para transformar tu carrera."
          buttonText="Reto 21 Días"
          onButtonClick={() => {
            setShowHero(false);
            setShowDateSelector(true);
          }}
        />
      ) : showDateSelector ? (
        <DateSelector
          currentStartDate={startDate}
          onDateSelect={(date) => {
            setStartDate(date);
            setShowDateSelector(false);
          }}
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
