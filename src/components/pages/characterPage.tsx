"use client"

import '../../../public/assets/styles/main.css'
import '../../../public/assets/styles/character.css'

import React, { useState } from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import charactersData from '@/services/api/characters.json';
import CharacterButton from '@/components/Buttons/CharacterButton';

const CharacterPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProps | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleSelect = (CharacterProps: CharacterProps) => {
      setSelectedCharacter(CharacterProps);
  };

  const handleClick = (id: number, alreadyActive: boolean) => {
    if(alreadyActive){
      setActiveButton(id)
    } else {
      setActiveButton(null)
    }
  };

  return (
    <div id='character_choice'>
      <h2>Choisis ton personnage :</h2>
      <div className='flex'>
        {charactersData.map((CharacterProps: CharacterProps) => (
          <CharacterButton 
            key={CharacterProps.id} 
            CharacterProps={CharacterProps} 
            onSelect={(character: CharacterProps) => handleSelect(character)}
            isActive={activeButton === CharacterProps.id}
            onClick={(id: number, alreadyActive: boolean) => handleClick(id, alreadyActive)}
          />
        ))}
      </div>
      <div>
        <p>Clique sur un personnage pour voir ses statistiques </p>
      </div>
      {selectedCharacter && (
        <div className='selected-character'>
          <h2>{selectedCharacter.prenom}</h2>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
