import Skill from '@/components/Skills/Skill';
import SkillsJson from '@/services/api/skills.json';

import '@/styles/skills.scss';

const Index = () => {
  return (
    <div className="skills">
      {Object.entries(SkillsJson)?.map(([key, skill], index) => (
        <Skill key={index} name={skill.name} value={parseInt(localStorage.getItem(`${skill.trad}_stat`) ?? '')} />
      ))}
    </div>
  );
};

export default Index;
