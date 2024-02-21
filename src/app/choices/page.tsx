import racesData from '@/services/api/races.json';
import RaceButton from "@/components/buttons/RaceButton";
import {Race} from "@/services/objects/Race";
import {ReactElement} from "react";

export default function Page(): ReactElement {
  return (
      <>
        <h2>Quel est ton objectif ?</h2>
        {/*<div>*/}
        {/*  {racesData.map((race: Race) => {*/}
        {/*    return (*/}
        {/*        <RaceButton*/}
        {/*            key={race.id}*/}
        {/*            race={race}*/}
        {/*        />*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
      </>
  );
}