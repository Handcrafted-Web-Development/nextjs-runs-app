import Skill from '@/components/Skills/Skill';
import SkillsJson from '@/services/api/skills.json';

const Index = () => {
  return (
    <div>
      {Object.entries(SkillsJson)?.map(([key, skill], index) => (
        <Skill key={index} skill={skill.name} value={skill.value} />
      ))}
    </div>
  );
};

export default Index;
