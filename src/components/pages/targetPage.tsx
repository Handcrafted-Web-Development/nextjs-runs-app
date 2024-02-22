'use client';

import '@/styles/main.scss';

import racesData from '@/services/api/races.json';
import RaceButton from '@/components/Buttons/RaceButton';
import { RaceProps } from '@/services/interfaces/Race';
import { ReactElement, useState } from 'react';

export default function Page(): ReactElement {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      <h2>Quel est ton objectif ?</h2>
      <div>
        {racesData.map((race: RaceProps) => {
          return <RaceButton key={race.id} race={race} onClick={() => setIsSelected(true)} />;
        })}
      </div>
      {isSelected ? <button></button> : null}
    </>
  );
}
