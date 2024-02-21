export interface CardProps {
    label: string;
    name: string;
    description: string;
    choices: ChoiceProps[];
}

interface ChoiceProps {
    value: string;
    place?: 'left' | 'right';
}
