import React, { useState } from 'react';
import { Character } from '../../services/objects/Character';
import Image from "next/image";

interface CharacterProps {
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterButton: React.FC<CharacterProps> = ({ character, onSelect }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    onSelect(character);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <Image src={`/assets/img/characters/${character.prenom}.svg`} alt={character.prenom} width={69} height={69}/>
        <p>{character.prenom}</p>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{character.prenom}</h2>
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