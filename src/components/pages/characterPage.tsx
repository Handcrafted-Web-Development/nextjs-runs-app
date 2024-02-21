"use client"

import React, { useState } from 'react';
import { Character } from '../../services/objects/Character';
import charactersData from '../../services/api/characters.json';
import CharacterButton from '../buttons/CharacterButton';

const CharacterPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      <h1>Choisissez votre personnage :</h1>
      <div>
        {charactersData.map((character: Character) => (
          <CharacterButton 
            key={character.id} 
            character={character} 
            onSelect={handleSelect}
          />
        ))}
      </div>
      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.prenom}</h2>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;