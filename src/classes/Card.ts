import { ChoiceProps } from '@/services/interfaces/Card';
import CardComponent from '@/components/Card';

export class Card {
  label;
  name;
  description;
  choices;

  constructor(label: string, name: string, description: string, choices: ChoiceProps[]) {
    this.label = label;
    this.name = name;
    this.description = description;
    this.choices = choices;
  }

  public buttonClick = () => {};
}
