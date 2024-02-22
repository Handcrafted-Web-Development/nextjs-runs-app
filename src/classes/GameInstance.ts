import { Dispatch, SetStateAction } from 'react';
import { RaceProps } from '@/services/interfaces/Race';
import { CharacterProps } from '@/services/interfaces/Character';

export class GameInstance {
  public start = (): void => {
    // const player = new Player()
  };

  public getTarget = (choice: RaceProps, setStage: Dispatch<SetStateAction<string>>) => {
    localStorage.setItem('stage', 'character');
    setStage(localStorage.getItem('stage') ?? '');
    localStorage.setItem('race', choice.name);
  };

  public getCharacter = (choice: CharacterProps, setStage: Dispatch<SetStateAction<string>>) => {
    localStorage.setItem('stage', 'game');
    setStage(localStorage.getItem('stage') ?? '');
    localStorage.setItem('character', choice.name);
  };
}
