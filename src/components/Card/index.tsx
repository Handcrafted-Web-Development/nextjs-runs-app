import '@/styles/card.scss';
import { ReactElement } from 'react';
import Button from '@/components/Buttons/Button';
import { CardProps } from '@/services/interfaces/Card';
const Index = ({ label, name, description, choices }: CardProps): ReactElement => {
  return (
    <div className="card">
      <span className="card__label">{label}</span>
      <div className="card__contain">
        <div className="card__text">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__buttons">
          {choices?.map((choice, index) => (
            <Button key={index} value={choice.value} choicesLenght={choices.length} choicePlace={choice.place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
