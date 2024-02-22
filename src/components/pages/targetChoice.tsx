import racesData from '@/services/api/races.json';
import RaceButton from "@/components/Buttons/RaceButton";
import {RaceProps} from "@/services/interfaces/Race";
import {Dispatch, ReactElement, SetStateAction, useState} from "react";
import {GameInstance} from "@/classes/GameInstance";


export default function TargetChoice({gameInstance, setStage}: {gameInstance: GameInstance, setStage: Dispatch<SetStateAction<string>>}): ReactElement {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [race, setRace] = useState<RaceProps>();

    const handleButtonRaceClick = (race: RaceProps) => {
        setRace(race)
        setIsSelected(true)
    }

    const buttonSubmitClick = (race: RaceProps, setStage: Dispatch<SetStateAction<string>>) => {
        gameInstance.getTarget(race, setStage)
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
            )
          })}
        </div>
        {isSelected ? (
            <button onClick={() => buttonSubmitClick(race as RaceProps, setStage)}>Gooo !</button>
        ) : null}
      </>
  );
}