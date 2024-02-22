import { CardProps, ChoiceProps } from '@/services/interfaces/Card';

class Card {
  label: string;
  name: string;
  description: string;
  choices: ChoiceProps[];

  constructor(cardDatas: CardProps) {
    this.label = cardDatas.label;
    this.name = cardDatas.name;
    this.description = cardDatas.description;
    this.choices = cardDatas.choices;
  }
}
