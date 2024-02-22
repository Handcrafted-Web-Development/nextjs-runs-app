import { Dispatch, SetStateAction } from 'react';
import { RaceProps } from '@/services/interfaces/Race';
import { CharacterProps } from '@/services/interfaces/Character';
import { Player } from '@/classes/Player';

export class GameInstance {
  player: Player;

  constructor() {
    this.player = new Player(0, 0, 0, 0);
  }

  public getTarget = (choice: RaceProps, setStage: Dispatch<SetStateAction<string>>) => {
    localStorage.setItem('stage', 'character');
    setStage(localStorage.getItem('stage') ?? '');
    localStorage.setItem('race', choice.name);
    localStorage.setItem('social_stat_needed', String(choice.social_stat_needed));
    localStorage.setItem('motivation_stat_needed', String(choice.motivation_stat_needed));
    localStorage.setItem('fitness_stat_needed', String(choice.fitness_stat_needed));
    localStorage.setItem('money_stat_needed', String(choice.money_stat_needed));
  };

  public getCharacter = (choice: CharacterProps, setStage: Dispatch<SetStateAction<string>>) => {
    localStorage.setItem('stage', 'game');
    setStage(localStorage.getItem('stage') ?? '');
    localStorage.setItem('name', String(choice.name));
    localStorage.setItem('social_stat', String(choice.social_stat));
    localStorage.setItem('motivation_stat', String(choice.motivation_stat));
    localStorage.setItem('fitness_stat', String(choice.fitness_stat));
    localStorage.setItem('money_stat', String(choice.money_stat));
  };
}
