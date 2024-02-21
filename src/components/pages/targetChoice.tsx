import racesData from '@/services/api/races.json';
import RaceButton from "@/components/Buttons/RaceButton";
import {RaceProps} from "@/services/interfaces/Race";
import {ReactElement, useState} from "react";
import {GameInstance} from "@/classes/GameInstance";


export default function TargetChoice({gameInstance}: {gameInstance: GameInstance}): ReactElement {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [race, setRace] = useState<RaceProps>();

    const handleButtonRaceClick = (race: RaceProps) => {
        setRace(race)
        setIsSelected(true)
    }

    const handleButtonSubmitClick = (race: RaceProps) => {
        gameInstance.getRace(Object.entries(race))
    }

  return (
      <>
        <h2>Quel est ton objectif ?</h2>
        <div>
          {racesData.map((race: RaceProps) => {
            return (
                <RaceButton
                    key={race.id}
                    race={race}
                    onClick={() => handleButtonRaceClick(race)}
                />
            );
          })}
        </div>
        {isSelected ? (
            <button onClick={() => handleButtonSubmitClick(race)}>Gooo !</button>
        ) : null}
      </>
  );
}