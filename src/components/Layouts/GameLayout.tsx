import {ReactElement, useEffect, useState} from 'react';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import CardComponent from '@/components/Card';
import {Card} from '@/classes/Card';
import {ChoiceProps} from '@/services/interfaces/Card';
import {GameInstance} from '@/classes/GameInstance';

const GameLayout = ({
                        choicesJson,
                        gameInstance,
                    }: {
    choicesJson: Card[];
    gameInstance: GameInstance;
}): ReactElement => {
    const [cards, setCards] = useState<Card[]>();
    const setCard = (item: Card) => {
        const newCard = new Card(item.label, item.name, item.description, item.choices, item.img);
        setCards((prevCards) => [...(prevCards || []), newCard]);
    };

    useEffect(() => {
        setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
        setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
    }, [choicesJson]);

    //Quand on click sur le bouton
    const handleButtonClick = (choice: ChoiceProps) => {
        //On met à jour les stats
        gameInstance.updateStats(choice);

        //Detection défaite
        gameInstance.detectDefeat();

        //Detection victoire
        gameInstance.detectVictory();

        //Avance d'une étape dans la Timeline
        gameInstance.updateTimeline();

        //On vient ajouter une classe d'aniamtion sur la card
        choice.place === 'right' ? document.querySelectorAll('.card')[0].classList.add('swipe','swipe-right') :document.querySelectorAll('.card')[0].classList.add('swipe','swipe-left')

            setTimeout(() => {
                document.querySelectorAll('.card')[0].classList.remove('swipe','swipe-right','swipe-left')
                //On vient supprimer la carte sur laquelle on a cliqué
                setCards((prevCards) => {
                    return prevCards?.slice(1) || [];
                });

                //On en crée une nouvelle derrière
                setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)])
            }, 500)
    };

    const cardComponents = cards?.map((card, index) => (
        <CardComponent
            key={index}
            onClick={(choice) => handleButtonClick(choice)}
            label={card.label}
            name={card.name}
            description={card.description}
            img={card.img}
            choices={card.choices}
        />
    ));

    let currentStep = gameInstance.getTimeline() ?? '';

    return (
        <>
            <Skills/>
            <Timeline currentStep={currentStep} steps={15}/>
            <div className="cards">{cardComponents}</div>
        </>
    );
};

export default GameLayout;
