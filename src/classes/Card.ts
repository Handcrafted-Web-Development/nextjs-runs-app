import { ChoiceProps } from '@/services/interfaces/Card';

export class Card {
  label;
  name;
  description;
  img;
  choices;

  constructor(label: string, name: string, description: string, choices: ChoiceProps[], img: string) {
    this.label = label;
    this.name = name;
    this.description = description;
    this.img = img;
    this.choices = choices;
  }

  onClick(choice: ChoiceProps) {}
}
