import { ReactElement, useEffect, useState } from 'react';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import CardComponent from '@/components/Card';
import { Card } from '@/classes/Card';
import { ChoiceProps } from '@/services/interfaces/Card';
import { GameInstance } from '@/classes/GameInstance';
import EndPopup from '@/components/EndPopup';

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

  const [isWin, setIsWin] = useState<string | null>(null);

  const detectDefeatOrVictory = () => {
    //Detection victoire
    if (gameInstance.detectVictory()) {
      setIsWin('true');
    }
    //Detection defaite
    if (gameInstance.detectDefeat()) {
      setIsWin('false');
    }
  };

  //Quand on click sur le bouton
  const handleButtonClick = (choice: ChoiceProps) => {
    //On met à jour les stats
    gameInstance.updateStats(choice);

    detectDefeatOrVictory();

    //Avance d'une étape dans la Timeline
    gameInstance.updateTimeline();

    //On vient ajouter une classe d'aniamtion sur la card
    if (choice.place === 'right') {
      document.querySelectorAll('.card')[0].classList.add('swipe', 'swipe-right');
    } else {
      document.querySelectorAll('.card')[0].classList.add('swipe', 'swipe-left');
    }
    document.querySelectorAll('.card')[1].classList.add('animate');

    setTimeout(() => {
      document.querySelectorAll('.card')[0].classList.remove('swipe', 'swipe-right', 'swipe-left');
      document.querySelectorAll('.card')[1].classList.remove('animate');
      //On vient supprimer la carte sur laquelle on a cliqué
      setCards((prevCards) => {
        return prevCards?.slice(1) || [];
      });

      //On en crée une nouvelle derrière
      setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
    }, 500);
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
      <Skills />
      <Timeline currentStep={currentStep} steps={15} />
      <div className="cards">{cardComponents}</div>
      {isWin && <EndPopup isWin={isWin} gameInstance={gameInstance} />}
    </>
  );
};

export default GameLayout;
