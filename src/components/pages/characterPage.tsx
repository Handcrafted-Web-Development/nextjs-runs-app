"use client"

import {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import { CharacterProps } from '@/services/interfaces/Character';
import charactersData from '@/services/api/characters.json';
import CharacterButton from '@/components/Buttons/CharacterButton';
import {GameInstance} from "@/classes/GameInstance";

const CharacterPage = ({gameInstance, setStage}: {gameInstance: GameInstance, setStage: Dispatch<SetStateAction<string>>}): ReactElement => {
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
            gameInstance={gameInstance}
            setStage={setStage}
          />
        ))}
      </div>
      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.name}</h2>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;