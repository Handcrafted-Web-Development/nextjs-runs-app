import '@/styles/card.scss';
import { ReactElement } from 'react';
import Button from '@/components/Buttons/Button';
import { Card } from '@/classes/Card';

const Index = ({ onClick, label, name, description, img, choices }: Card): ReactElement => {
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/assets/img/cards/${img})` }}>
      <span className="card__label">{label}</span>
      <div className="card__contain">
        <div className="card__text">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__buttons">
          {choices?.map((choice, index) => (
            <Button
              key={index}
              onClick={() => onClick(choice)}
              value={choice.value}
              choicesLenght={choices.length}
              choicePlace={choice.place}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
