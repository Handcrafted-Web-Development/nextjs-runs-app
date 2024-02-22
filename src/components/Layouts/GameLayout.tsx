import { ReactElement, useEffect, useState } from 'react';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import CardComponent from '@/components/Card';
import { Card } from '@/classes/Card';

const GameLayout = ({ choicesJson }: { choicesJson: Card[] }): ReactElement => {
  const [cards, setCards] = useState<Card[]>();
  const setCard = (item: Card) => {
    const newCard = new Card(item.label, item.name, item.description, item.choices);
    setCards((prevCards) => [...(prevCards || []), newCard]);
  };

  useEffect(() => {
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
  }, [choicesJson]);

  const handleButtonClick = () => {
    setCards((prevCards) => {
      return prevCards?.slice(1) || [];
    });
    setCard(choicesJson[Math.floor(Math.random() * choicesJson.length)]);
  };

  const cardComponents = cards?.map((card, index) => (
    <CardComponent
      key={index}
      buttonClick={() => handleButtonClick()}
      label={card.label}
      name={card.name}
      description={card.description}
      choices={card.choices}
    />
  ));

  return (
    <>
      <Skills />
      <Timeline currentStep={4} steps={14} />
      <div className="cards">{cardComponents}</div>
    </>
  );
};

export default GameLayout;
