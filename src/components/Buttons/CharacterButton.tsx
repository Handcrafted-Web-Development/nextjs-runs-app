
import '../../../public/assets/styles/main.css'
import '../../../public/assets/styles/character.css'

import {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import Image from "next/image";
import {GameInstance} from "@/classes/GameInstance";

interface CharacterButtonProps {
  CharacterProps: CharacterProps;
  onSelect: (character: CharacterProps) => void;
  isActive: boolean;
  onClick: () => void;
  gameInstance: GameInstance;
  setStage: Dispatch<SetStateAction<string>>;
}

const CharacterButton = ({ CharacterProps, onSelect, isActive, onClick, gameInstance, setStage }: CharacterButtonProps): ReactElement => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    onSelect(CharacterProps);
    setShowPopup(false);
    gameInstance.getCharacter(CharacterProps, setStage)
  };

  const handleCancel = () => {
    setShowPopup(false);
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