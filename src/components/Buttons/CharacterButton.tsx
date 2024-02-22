
import '@/styles/main.scss'
import '@/styles/character.scss'

import {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import Image from "next/image";
import {GameInstance} from "@/classes/GameInstance";

interface CharacterButtonProps {
  CharacterProps: CharacterProps;
  onSelect: (character: CharacterProps) => void;
  isActive: boolean;
  onClick: (id: number, index: boolean) => void;
  gameInstance: GameInstance;
  setStage: Dispatch<SetStateAction<string>>;
}

const CharacterButton = ({ CharacterProps, onSelect, isActive, onClick, gameInstance, setStage }: CharacterButtonProps): ReactElement => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleConfirm = () => {
    onSelect(CharacterProps);
    setShowPopup(false);
    gameInstance.getCharacter(CharacterProps, setStage)
  };

  const handleClick = () => {
    if (isActive) {
      onClick(CharacterProps.id, false);
    } else {
      onClick(CharacterProps.id, true);
    }
  };

  return (
    <div>
      <button className={isActive ? 'character-button active' : 'character-button'} onClick={handleClick}>
        <Image src={`/assets/img/characters/${CharacterProps.name}.svg`} alt={CharacterProps.name} width={69} height={69}/>
        <p>{CharacterProps.name}</p>
      </button>
      {isActive && (
        <div className="popup character-popup">
          <h2>{CharacterProps.name}</h2>
          <p>{CharacterProps.description}</p>
          <button onClick={handleConfirm}>Je choisis {CharacterProps.name} !</button>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;