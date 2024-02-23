import '@/styles/main.scss';
import '@/styles/character.scss';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Skill from '@/components/Skills/Skill';
import { CharacterButtonProps } from '@/services/interfaces/Character';

const CharacterButton = ({
  CharacterProps,
  onSelect,
  isActive,
  onClick,
  gameInstance,
  setStage,
}: CharacterButtonProps): ReactElement => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleConfirm = () => {
    onSelect(CharacterProps);
    setShowPopup(false);
    gameInstance.getCharacter(CharacterProps, setStage);
  };

  const handleClick = () => {
    if (isActive) {
      onClick(CharacterProps.id, false);
    } else {
      onClick(CharacterProps.id, true);
    }
  };

  return (
    <div className="character">
      <button className={isActive ? 'character-button active' : 'character-button'} onClick={handleClick}>
        <Image
          src={`/assets/img/characters/${CharacterProps.name}.svg`}
          alt={CharacterProps.name}
          width={69}
          height={69}
        />
        <p>{CharacterProps.name}</p>
      </button>
      {isActive && (
        <div className="popup character-popup">
          <h3>{CharacterProps.name}</h3>
          <p>{CharacterProps.description}</p>
          <ul className="skills">
            <li>
              <Skill name="Social" value={CharacterProps.social_stat} />
            </li>
            <li>
              <Skill name="Argent" value={CharacterProps.money_stat} />
            </li>
            <li>
              <Skill name="Mental" value={CharacterProps.motivation_stat} />
            </li>
            <li>
              <Skill name="Santé" value={CharacterProps.fitness_stat} />
            </li>
          </ul>
          <button onClick={handleConfirm}>Je choisis {CharacterProps.name} !</button>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;
