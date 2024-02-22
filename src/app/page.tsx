'use client';

import events from '@/services/api/random-events.json';
import choicesJson from '@/services/api/choices.json';

import TargetChoice from '@/components/pages/targetChoice';
import CharacterChoice from '@/components/pages/characterPage';
import GameLayout from '@/components/Layouts/GameLayout';
import { GameInstance } from '@/classes/GameInstance';
import { useEffect, useState } from 'react';
import { CardProps } from '@/services/interfaces/Card';

export default function Home() {
  const gameInstance = new GameInstance();

  const [content, setContent] = useState(<div>Chargement...</div>);

  const [stage, setStage] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('stage') ?? '' : ''));

  useEffect(() => {
    getContent();
  }, [stage]);

  const getContent = () => {
    if (!stage) {
      localStorage.setItem('stage', 'target');
      setStage(localStorage.getItem('stage') ?? '');
    }
    if (stage === 'target') {
      setContent(<TargetChoice gameInstance={gameInstance} setStage={setStage} />);
    }
    if (stage === 'character') {
      setContent(<CharacterChoice gameInstance={gameInstance} setStage={setStage} />);
    }
    if (stage === 'game') {
      setContent(<GameLayout choicesJson={choicesJson as CardProps[]} />);
    }
  };

  return <div>{content}</div>;
}
