import {MouseEventHandler, ReactElement} from "react";
import {Race} from "@/services/objects/Race";

interface RaceButtonProps {
  key: number;
  race: Race;
  // onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @file RaceButton.tsx
 **/
export default function RaceButton({key, race}: RaceButtonProps): ReactElement {
  return (
      <button key={key}>
        <img src={''}/>
        <p>{race.name}</p>
      </button>
  );
}