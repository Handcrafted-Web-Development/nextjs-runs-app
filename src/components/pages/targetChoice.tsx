import '@/styles/main.scss';
import '@/styles/target.scss';

import racesData from '@/services/api/races.json';
import RaceButton from '@/components/Buttons/RaceButton';
import { RaceProps } from '@/services/interfaces/Race';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { GameInstance } from '@/classes/GameInstance';

export default function TargetChoice({
  gameInstance,
  setStage,
}: {
  gameInstance: GameInstance;
  setStage: Dispatch<SetStateAction<string>>;
}): ReactElement {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [race, setRace] = useState<RaceProps>();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (race: RaceProps) => {
    setActiveButton(race.id);
    setRace(race);
    setIsSelected(true);
  };

  const handleSubmit = (race: RaceProps, setStage: Dispatch<SetStateAction<string>>) => {
    console.log(race);
    gameInstance.getTarget(race, setStage);
  };

  return (
    <div id="target_choice">
      <h2>Quel est ton objectif ?</h2>
      <div className="flex">
        {racesData.map((race: RaceProps) => {
          return (
            <RaceButton
              key={race.id}
              race={race}
              isActive={activeButton === race.id}
              onClick={(race: RaceProps) => handleClick(race)}
            />
          );
        })}
      </div>
      {isSelected ? (
        <button className="submit" onClick={() => handleSubmit(race as RaceProps, setStage)}>
          Gooo !
        </button>
      ) : null}
    </div>
  );
}
