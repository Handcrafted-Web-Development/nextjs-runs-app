import { Dispatch, SetStateAction } from 'react';
import { GameInstance } from '@/classes/GameInstance';

export interface CharacterProps {
  id: number;
  name: string;
  description: string;
  social_stat: number;
  motivation_stat: number;
  fitness_stat: number;
  money_stat: number;
}

export interface CharacterButtonProps {
  CharacterProps: CharacterProps;
  onSelect: (character: CharacterProps) => void;
  isActive: boolean;
  onClick: (id: number, index: boolean) => void;
  gameInstance: GameInstance;
  setStage: Dispatch<SetStateAction<string>>;
}
