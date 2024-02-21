
import '../../../public/assets/styles/main.css'
import '../../../public/assets/styles/character.css'

import React, { useState } from 'react';
import { Character } from '../../services/objects/Character';
import Image from "next/image";

interface CharacterProps {
  character: Character;
  onSelect: (character: Character, index: number) => void;
  isActive: boolean;
  onClick: () => void;
}

const CharacterButton: React.FC<CharacterProps> = ({ character, onSelect, isActive, onClick }) => {
  const handleConfirm = () => {
    onSelect(character, -1);
};

  const handleClick = () => {
    if (isActive) {
      onSelect(character, -1);
    } else {
      onClick();
    }
  };

  return (
    <div>
      <button className={isActive ? 'character-button active' : 'character-button'} onClick={handleClick}>
        <Image src={`/assets/img/characters/${character.prenom}.svg`} alt={character.prenom} width={69} height={69}/>
        <p>{character.prenom}</p>
      </button>
      {isActive && (
        <div className="popup character-popup">
          <h2>{character.prenom}</h2>
          <p>{character.description}</p>
          <button onClick={handleConfirm}>Je choisis {character.prenom} !</button>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;
