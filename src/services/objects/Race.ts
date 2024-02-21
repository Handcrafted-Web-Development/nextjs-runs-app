// Create interface Race
export interface Race {
  id: number
  name: string;
  pathname: string;
  level: string;
  social_stat_needed?: number;
  motivation_stat_needed?: number;
  fitness_stat_needed?: number;
  money_stat_needed?: number;
}