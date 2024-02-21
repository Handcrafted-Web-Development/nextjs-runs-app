import React, { useState } from 'react';
import { Character } from '../objects/Character';
import charactersData from '../characters.json';
import CharacterButton from '../components/CharacterButton';

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
            onSelect={handleSelect} // Ajoutez cette ligne
          />
        ))}
      </div>
      {selectedCharacter && (
        <div>
          <h2>{selectedCharacter.prenom}</h2>
          <p>{selectedCharacter.description}</p>
          <button onClick={() => setSelectedCharacter(null)}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
