import { Dispatch, SetStateAction } from 'react';
import { RaceProps } from '@/services/interfaces/Race';
import { CharacterProps } from '@/services/interfaces/Character';
import { Player } from '@/classes/Player';
import { ChoiceProps } from '@/services/interfaces/Card';

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
    localStorage.setItem('timeline', String(0));
  };

  public getTimeline = () => {
    return localStorage.getItem('timeline');
  };

  public detectDefeat = () => {
    if (
      Number(localStorage.getItem('social_stat')) <= 0 ||
      Number(localStorage.getItem('motivation_stat')) <= 0 ||
      Number(localStorage.getItem('fitness_stat')) <= 0 ||
      Number(localStorage.getItem('money_stat')) <= 0
    ) {
      alert('défaite');
    }
  };

  public detectVictory = () => {
    if (Number(localStorage.getItem('timeline')) === 14) {
      alert('victoire');
    }
  };

  public updateTimeline = () => {
    localStorage.setItem('timeline', String(Number(localStorage.getItem('timeline')) + 1));
  };

  public updateStats = (choice: ChoiceProps) => {
    //Récupérer les stats dans le localStorage
    const getItem = (string: string) => {
      return Number(localStorage.getItem(string) ?? '');
    };

    //Créer la nouvelle stat à partir de l'ancienne + le choix
    const getNewStats = (string: string, param: number | undefined) => {
      return getItem(string) + (param ?? 0);
    };

    //Envoyer la stat avec la logique de pas dépasser 100
    const pushStats = (string: string, param: number | undefined) => {
      if (getNewStats(string, param) >= 100) {
        localStorage.setItem(string, String(100));
      } else {
        localStorage.setItem(string, String(getNewStats(string, param)));
      }
    };

    pushStats('social_stat', choice?.effects?.social);
    pushStats('motivation_stat', choice?.effects?.motivation);
    pushStats('fitness_stat', choice?.effects?.fitness);
    pushStats('money_stat', choice?.effects?.money);
  };
}
