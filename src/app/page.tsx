import events from "@/services/api/random-events.json"

import TargetChoice from '@/components/pages/targetPage'
import CharacterChoice from '@/components/pages/characterPage'
import Skills from '@/components/Skills/index'
import Card from '@/components/Card/index'


export default function Home() {

    return (
        <div>
            <TargetChoice/>
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
