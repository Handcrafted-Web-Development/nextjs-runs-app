import { ReactElement, useEffect, useState } from 'react';
import { SkillProps } from '@/services/interfaces/Skill';

import '@/styles/skills.scss';

const Skill = ({ name, value, color }: SkillProps): ReactElement => {
  const [valueSkill, setValueSkill] = useState(0);

  useEffect(() => {
    setValueSkill(value);
  }, [value]);

  return (
    <div
      className={`skill ${name}`}
      style={{
        backgroundImage: `linear-gradient(to top, ${color} 0%, ${color} ${valueSkill}%, transparent ${valueSkill}%, transparent 100%`,
      }}
    >
      <svg className="icon">
        <use href={`/assets/img/icons.svg#${name}`} />
      </svg>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
