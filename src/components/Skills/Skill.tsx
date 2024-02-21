import React from "react";

interface SkillProps {
    skill: string;
    value: number;
}

const Skill: React.FC<SkillProps> = ({skill, value}) => {
    return (
        <div data-value={value}>
            <svg className="icon">
                <use href={`/assets/img/icons.svg#${skill}`}/>
            </svg>
            <span>
                {skill}
            </span>
        </div>
    )
}

export default Skill