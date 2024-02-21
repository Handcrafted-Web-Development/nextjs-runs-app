"use client"

import racesData from '@/services/api/races.json';
import RaceButton from "@/components/RaceButton";
import {Race} from "@/services/objects/Race";
import {ReactElement, useState} from "react";


export default function Page(): ReactElement {

  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
      <>
        <h2>Quel est ton objectif ?</h2>
        <div>
          {racesData.map((race: Race) => {
            return (
                <RaceButton
                    key={race.id}
                    race={race}
                    onClick={() => setIsSelected(true)}
                />
            );
          })}
        </div>
        {isSelected ? (
            <button></button>
        ) : null}
      </>
  );
}