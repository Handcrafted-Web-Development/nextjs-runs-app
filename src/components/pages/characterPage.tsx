"use client"

import '../../../public/assets/styles/main.css'
import '../../../public/assets/styles/character.css'

import React, { useState } from 'react';
import { Character } from '../../services/objects/Character';
import charactersData from '../../services/api/characters.json';
import CharacterButton from '../buttons/CharacterButton';

const CharacterPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleSelect = (character: Character, index: number) => {
    setSelectedCharacter(character);
  };

  return (
    <div id='character_choice'>
      <h1>Choisissez votre personnage :</h1>
      <div className='flex'>
        {charactersData.map((character: Character, index: number) => (
          <CharacterButton 
            key={character.id} 
            character={character} 
            onSelect={(character: Character) => handleSelect(character, index)}
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
