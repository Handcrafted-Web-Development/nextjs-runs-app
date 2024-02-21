import {ReactElement} from "react";
import Button from "@/components/Buttons/Button";
import {CardProps} from "@/services/interfaces/Card";
const Index = ({label, name, description, choices}: CardProps): ReactElement => {
    return (
        <div>
            <span>{label}</span>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    {choices?.map((choice, index) =>
                        <Button key={index} value={choice.value} choicesLenght={choices.length} choicePlace={choice.place}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index