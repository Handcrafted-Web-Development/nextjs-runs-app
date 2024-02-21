"use client"
import events from "@/services/api/random-events.json"

import TargetChoice from '@/components/pages/targetChoice'
import CharacterChoice from '@/components/pages/characterPage'
import Skills from '@/components/Skills/index'
import Card from '@/components/Card/index'
import {GameInstance} from "@/classes/GameInstance";



export default function Home() {

    const gameInstance = new GameInstance();


    return (
        <div>
            <TargetChoice gameInstance={gameInstance}/>
            <CharacterChoice/>
            <Skills/>
            {
                events?.map((event, index) =>
                    <Card key={index} label={event.label} name={event.name} description={event.description}
                          choices={event.choices}/>
                )
            }
        </div>
    );
}
