import { ReactElement } from 'react';
import '@/styles/timeline.scss';

interface TimelineProps {
  currentStep: number;
  steps: number;
}

export default function Timeline({ currentStep, steps }: TimelineProps): ReactElement {
  const stepsArray = [];
  for (let index = 0; index < steps; index++) {
    stepsArray.push(
      <div
        className={`step ${index === currentStep ? 'currentStep' : index < currentStep ? 'previousStep' : ''}`}
        key={index}
      ></div>,
    );
  }
  return <div className="timeline">{stepsArray}</div>;
}
