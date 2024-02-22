import {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import Image from "next/image";
import {GameInstance} from "@/classes/GameInstance";
const CharacterButton = ({ character, onSelect, gameInstance, setStage }: {character: CharacterProps, onSelect: (character: CharacterProps) => void, gameInstance: GameInstance, setStage: Dispatch<SetStateAction<string>>}): ReactElement => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    onSelect(character);
    setShowPopup(false);
    gameInstance.getCharacter(character, setStage)
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <Image src={`/assets/img/characters/${character.name}.svg`} alt={character.name} width={69} height={69}/>
        <p>{character.name}</p>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <div>
              <button onClick={handleConfirm}>Oui</button>
              <button onClick={handleCancel}>Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;