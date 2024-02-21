import {MouseEventHandler} from "react";

export interface RaceProps {
  id: number
  name: string;
  pathname: string;
  level: string;
  social_stat_needed?: number;
  motivation_stat_needed?: number;
  fitness_stat_needed?: number;
  money_stat_needed?: number;
}

export interface RaceButtonProps {
  keyId: number;
  race: RaceProps;
  onClick: MouseEventHandler<HTMLButtonElement>;
}