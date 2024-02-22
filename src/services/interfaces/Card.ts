export interface CardProps {
    label: string;
    name: string;
    description: string;
    choices: ChoiceProps[];
}

export interface ChoiceProps {
    value: string;
    place?: 'left' | 'right';
    effects: EffectProps[];
}

interface EffectProps {
    social: number;
    motivation: number;
    fitness : number;
    money: number;
}

