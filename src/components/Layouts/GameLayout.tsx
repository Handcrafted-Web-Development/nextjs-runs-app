import { ReactElement, useEffect, useState } from 'react';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import CardComponent from '@/components/Card';
import { Card } from '@/classes/Card';
import { ChoiceProps } from '@/services/interfaces/Card';
import { GameInstance } from '@/classes/GameInstance';
import { log } from 'node:util';

const GameLayout = ({
  choicesJson,
  gameInstance,
}: {
  choicesJson: Card[];
  gameInstance: GameInstance;
}): ReactElement => {
  const [cards, setCards] = useState<Card[]>();
  const setCard = (item: Card) => {
    const newCard = new Card(item.label, item.name, item.description, item.choices);
    setCards((prevCards) => [...(prevCards || []), newCard]);
  };

  useEffect(() => {
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
  }, [choicesJson]);

  //Quand on click sur le bouton
  const handleButtonClick = (choice: ChoiceProps) => {
    //On met à jour les stats
    const updateStats = () => {
      localStorage.setItem(
        'social_stat',
        String(parseInt(localStorage.getItem('social_stat') ?? '') + (choice?.effects?.social ?? 0)),
      );
      localStorage.setItem(
        'motivation_stat',
        String(parseInt(localStorage.getItem('motivation_stat') ?? '') + (choice?.effects?.motivation ?? 0)),
      );
      localStorage.setItem(
        'fitness_stat',
        String(parseInt(localStorage.getItem('fitness_stat') ?? '') + (choice?.effects?.fitness ?? 0)),
      );
      localStorage.setItem(
        'money_stat',
        String(parseInt(localStorage.getItem('money_stat') ?? '') + (choice?.effects?.money ?? 0)),
      );
    };

    updateStats();

    // Avance d'une étape dans la Timeline
    gameInstance.updateTimeline();
    //On vient supprimer la carte sur laquelle on a cliqué
    setCards((prevCards) => {
      return prevCards?.slice(1) || [];
    });

    //On en crée une nouvelle derrière
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
  };

  const cardComponents = cards?.map((card, index) => (
    <CardComponent
      key={index}
      onClick={(choice) => handleButtonClick(choice)}
      label={card.label}
      name={card.name}
      description={card.description}
      choices={card.choices}
      img={card.img}
    />
  ));

  let currentStep = gameInstance.getTimeline() ?? '';

  return (
    <>
      <Skills />
      <Timeline currentStep={currentStep} steps={15} />
      <div className="cards">{cardComponents}</div>
    </>
  );
};

export default GameLayout;
