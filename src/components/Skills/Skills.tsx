import Skill from "@/components/Skills/Skill";
import SkillsJson from "@/services/api/skills.json"

const Skills = () => {
    return (
        <div>
            {Object.entries(SkillsJson).map(([key, skill], index) =>
                <Skill key={index} skill={skill.name} value={skill.value}/>
            )}
        </div>
    )
}

export default Skills