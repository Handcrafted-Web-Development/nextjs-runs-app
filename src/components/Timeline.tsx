import { ReactElement } from 'react';
import '@/styles/timeline.scss';

interface TimelineProps {
  currentStep: string;
  steps: number;
}

export default function Timeline({ currentStep, steps }: TimelineProps): ReactElement {
  const stepsArray = [];
  for (let index = 0; index < steps; index++) {
    stepsArray.push(
      <div
        className={`step ${index === Number(currentStep) ? 'currentStep' : index < Number(currentStep) ? 'previousStep' : ''}`}
        key={index}
      ></div>,
    );
  }
  return <div className="timeline">{stepsArray}</div>;
}
