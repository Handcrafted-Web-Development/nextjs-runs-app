import {MouseEventHandler, ReactElement} from "react";
import {Race} from "@/services/objects/Race";
import Image from "next/image";

interface RaceButtonProps {
  key: number;
  race: Race;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @file RaceButton.tsx
 **/
export default function RaceButton({key, race, onClick}: RaceButtonProps): ReactElement {
  return (
      <button key={key} onClick={onClick}>
        <div>
          <Image src={race.pathname} alt={race.name} width={69} height={69}/>
        </div>
        <div>
          <p>{race.name}</p>
          <p>{race.level}</p>
        </div>
      </button>
  );
}