"use client"
import events from "@/services/api/random-events.json"
import choicesJson from "@/services/api/choices.json"

import TargetChoice from '@/components/pages/targetChoice'
import CharacterChoice from '@/components/pages/characterPage'
import Skills from '@/components/Skills/index'
import Card from '@/components/Card/index'
import {GameInstance} from "@/classes/GameInstance";
import Timeline from "@/components/Timeline";
import {useEffect, useState} from "react";
import { ChoiceProps } from "@/services/interfaces/Card"


export default function Home() {

    const gameInstance = new GameInstance();

    const [content, setContent] = useState(<div>Chargement...</div>)

    const [stage, setStage] = useState(() => typeof window !== 'undefined' ? (localStorage.getItem('stage') ?? '') : (''))

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
                        choicesJson?.map((item, index) =>
                            <Card key={index} label={item.label} name={item.name} description={item.description}
                                choices={item.choices}/>
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
