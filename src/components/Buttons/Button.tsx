import '@/styles/button.scss';
import { ButtonProps } from '@/services/interfaces/Button';

const Button = ({ value, choicesLenght, choicePlace }: ButtonProps) => {
  return (
    <span className="button">
      {(choicesLenght === 1 || (choicesLenght === 2 && choicePlace === 'left')) && (
        <svg className="icon">
          <use href={'/assets/img/icons.svg#arrow-right'} />
        </svg>
      )}
      {value}
      {(choicesLenght === 1 || (choicesLenght === 2 && choicePlace === 'right')) && (
        <svg className="icon">
          <use href={'/assets/img/icons.svg#arrow-left'} />
        </svg>
      )}
    </span>
  );
};

export default Button;
