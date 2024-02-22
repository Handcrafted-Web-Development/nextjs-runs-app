"use client"
import events from "@/services/api/random-events.json"

import TargetChoice from '@/components/pages/targetChoice'
import CharacterChoice from '@/components/pages/characterPage'
import Skills from '@/components/Skills/index'
import Card from '@/components/Card/index'
import {GameInstance} from "@/classes/GameInstance";
import Timeline from "@/components/Timeline";
import {useEffect, useState} from "react";


export default function Home() {

    const gameInstance = new GameInstance();

    const [content, setContent] = useState(<div>Chargement...</div>)

    const [stage, setStage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('stage') ?? '';
        } else {
            return '';
        }
    })

    useEffect(() => {
        getContent()
    }, [stage])

    const getContent = () => {
        if (!stage) {
            localStorage.setItem('stage', 'target')
            setStage(localStorage.getItem('stage') ?? '')
        }
        if (stage === 'target') {
            setContent(<TargetChoice gameInstance={gameInstance} setStage={setStage}/>)
        }
        if (stage === 'character') {
            setContent(<CharacterChoice gameInstance={gameInstance} setStage={setStage}/>)
        }
        if (stage === 'game') {
            setContent(
                <>
                    <Skills/>
                    <Timeline currentStep={4} steps={14}/>
                    {
                        events?.map((event, index) =>
                            <Card key={index} label={event.label} name={event.name} description={event.description}
                                  choices={event.choices}/>
                        )
                    }
                </>
            )
        }
    }

    return (
        <div>
            {content}
        </div>
    );
}
