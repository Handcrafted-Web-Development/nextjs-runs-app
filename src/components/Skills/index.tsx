import Skill from '@/components/Skills/Skill';
import SkillsJson from '@/services/api/skills.json';

import '@/styles/skills.scss';

const Index = () => {
  return (
    <div className="skills">
      {Object.entries(SkillsJson)?.map(([key, skill], index) => (
        <Skill key={index} name={skill.name} value={skill.value} />
      ))}
    </div>
  );
};

export default Index;
