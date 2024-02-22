import {ReactElement} from 'react';
import {SkillProps} from '@/services/interfaces/Skill';

import '@/styles/skills.scss';

const Skill = ({name, value}: SkillProps): ReactElement => {

    return (
        <div
            className={`skill ${name}`}
            style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,.1) 0%, rgba(0,0,0,.1) ${value}%, transparent ${value}%, transparent 100%`}}
        >
            <svg className="icon">
                <use href={`/assets/img/icons.svg#${name}`}/>
            </svg>
            <span>{name}</span>
        </div>
    );
};

export default Skill;
