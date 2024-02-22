import { ReactElement } from 'react';
import { SkillProps } from '@/services/interfaces/Skill';

import '@/styles/skills.scss';

const Skill = ({ skill, value }: SkillProps): ReactElement => {
  return (
    <div className={`skill ${skill}`}>
      <div className='skill_content'>
        <svg className="icon">
          <use href={`/assets/img/icons.svg#${skill}`} />
        </svg>
        <span>{skill}</span>
      </div>
      <span style={{ height: `${value}px` }}  className='progress'></span>
    </div>
  );
};

export default Skill;
