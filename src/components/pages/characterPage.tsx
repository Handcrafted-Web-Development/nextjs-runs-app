"use client"

import React, { useState } from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import charactersData from '@/services/api/characters.json';
import CharacterButton from '@/components/buttons/CharacterButton';

const CharacterPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProps | null>(null);

  const handleSelect = (character: CharacterProps) => {
    setSelectedCharacter(character);
  };

  return (
    <div>
      <h1>Choisissez votre personnage :</h1>
      <div>
        {charactersData.map((character: CharacterProps) => (
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