import { ReactElement } from 'react';
import { SkillProps } from '@/services/interfaces/Skill';

import '@/styles/skills.scss';

const Skill = ({ name, value }: SkillProps): ReactElement => {
  return (
    <div className={`skill ${name}`}>
      <div className="skill_content">
        <svg className="icon">
          <use href={`/assets/img/icons.svg#${name}`} />
        </svg>
        <span>{name}</span>
      </div>
      <span style={{ height: `${value}px` }} className={value == 100 ? `progress progress-100` : `progress`}></span>
    </div>
  );
};

export default Skill;
