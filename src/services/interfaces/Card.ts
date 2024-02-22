export interface ChoiceProps {
  value: string;
  place?: string;
  effects?: EffectProps;
}

interface EffectProps {
  social?: number;
  motivation?: number;
  fitness?: number;
  money?: number;
}
