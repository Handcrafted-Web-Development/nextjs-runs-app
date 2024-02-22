import { ReactElement } from 'react';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Card from '@/components/Card';
import { CardProps } from '@/services/interfaces/Card';

const GameLayout = ({ choicesJson }: { choicesJson: CardProps[] }): ReactElement => {
  return (
    <>
      <Skills />
      <Timeline currentStep={4} steps={14} />
      <div className="cards">
        {choicesJson?.map((item, index) => (
          <Card key={index} label={item.label} name={item.name} description={item.description} choices={item.choices} />
        ))}
      </div>
    </>
  );
};

export default GameLayout;
