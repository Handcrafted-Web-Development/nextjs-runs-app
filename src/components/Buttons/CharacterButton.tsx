
import '../../../public/assets/styles/main.css'
import '../../../public/assets/styles/character.css'

import React, { useState } from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import Image from "next/image";

interface CharacterButton {
  CharacterProps: CharacterProps;
  onSelect: (character: CharacterProps, index: number) => void;
  isActive: boolean;
  onClick: () => void;
}

const CharacterButton: React.FC<CharacterButton> = ({ CharacterProps, onSelect, isActive, onClick }) => {
  const handleConfirm = () => {
    onSelect(CharacterProps, -1);
};

  const handleClick = () => {
    if (isActive) {
      onSelect(CharacterProps, -1);
    } else {
      onClick();
    }
  };

  return (
    <div>
      <button className={isActive ? 'character-button active' : 'character-button'} onClick={handleClick}>
        <Image src={`/assets/img/characters/${CharacterProps.prenom}.svg`} alt={CharacterProps.prenom} width={69} height={69}/>
        <p>{CharacterProps.prenom}</p>
      </button>
      {isActive && (
        <div className="popup character-popup">
          <h2>{CharacterProps.prenom}</h2>
          <p>{CharacterProps.description}</p>
          <button onClick={handleConfirm}>Je choisis {CharacterProps.prenom} !</button>
        </div>
      )}
    </div>
  );
};

export default CharacterButton;
