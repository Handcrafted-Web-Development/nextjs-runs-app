import {ButtonProps} from "@/services/interfaces/Button";

const Button = ({value, choicesLenght, choicePlace}: ButtonProps) => {
    return (
        <span className="button">
            {(choicesLenght === 2 || (choicesLenght === 1 && choicePlace === 'left')) ?? `<svg className="icon"><use href={'/assets/img/icons.svg#arrow-left'}/></svg>`}
            {value}
            {(choicesLenght === 2 || (choicesLenght === 1 && choicePlace === 'right')) ?? `<svg className="icon"><use href={'/assets/img/icons.svg#arrow-right'}/></svg>`}
        </span>
    )
}

export default Button