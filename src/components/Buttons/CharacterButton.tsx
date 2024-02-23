import '@/styles/main.scss';
import '@/styles/character.scss';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Skill from '@/components/Skills/Skill';
import skills from '@/services/api/skills.json';
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
              <Skill name={skills[0].name} value={CharacterProps.social_stat} color={skills[0].color} />
            </li>
            <li>
              <Skill name={skills[1].name} value={CharacterProps.money_stat} color={skills[1].color} />
            </li>
            <li>
              <Skill name={skills[2].name} value={CharacterProps.motivation_stat} color={skills[2].color} />
            </li>
            <li>
              <Skill name={skills[3].name} value={CharacterProps.fitness_stat} color={skills[3].color} />
            </li>
          </ul>
          <button onClick={handleConfirm}>Je choisis {CharacterProps.name} !</button>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;
