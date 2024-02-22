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

  const handleSelect = (character: CharacterProps, index: number) => {
    setSelectedCharacter(character);
  };

  return (
    <div id='character_choice'>
      <h1>Choisissez votre personnage :</h1>
      <div className='flex'>
        {charactersData.map((CharacterProps: CharacterProps, index: number) => (
          <CharacterButton 
            key={CharacterProps.id} 
            CharacterProps={CharacterProps} 
            onSelect={(character: CharacterProps) => handleSelect(character, index)}
            isActive={activeButton === index}
            onClick={() => setActiveButton(index)}
          />
        ))}
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
