import { ReactElement } from 'react';
import { RaceButtonProps } from '@/services/interfaces/Race';
import Image from 'next/image';

/**
 * @file RaceButton.tsx
 **/
export default function RaceButton({ race, isActive, onClick }: RaceButtonProps): ReactElement {

  const handleClick = () => {
      onClick(race)
  };

  return (
    <button className={isActive ? 'race-button active' : 'race-button'} onClick={handleClick}> 
      <div>
        <Image src={race.pathname} alt={race.name} width={69} height={69} />
      </div>
      <div>
        <p>{race.name}</p>
        <p>{race.level}</p>
      </div>
    </button>
  );
}
