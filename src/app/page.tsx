'use client';

import CharacterChoice from '@/components/pages/characterPage';
import TargetChoice from '@/components/pages/targetChoice';
import GameLayout from '@/components/Layouts/GameLayout';
import choicesJson from '@/services/api/choices.json';
import { GameInstance } from '@/classes/GameInstance';
import Loader from '@/components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Card } from '@/classes/Card';

export default function Home() {
  const gameInstance = new GameInstance();

  const [content, setContent] = useState(Loader);

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
      setContent(<GameLayout gameInstance={gameInstance} choicesJson={choicesJson as Card[]} />);
    }
  };

  return <div>{content}</div>;
}
