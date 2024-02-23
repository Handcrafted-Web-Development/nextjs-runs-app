import { MouseEventHandler } from 'react';

export interface ButtonProps {
  value: string;
  choicesLenght?: number;
  choicePlace?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
