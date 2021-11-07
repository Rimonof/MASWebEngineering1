import { ChangeEvent, useState } from 'react';
import './AddTaskAndFilterContainer.css'
import './Button.css'
import './Input.css'

interface Props {
    input?: string
	onClick?: (text: string) => void
    onChange?: (text: string) => void
    onCheckboxChange?: (checked: boolean) => void
}

export const AddTaskAndFilterContainer = (props: Props) => {
    const [taskText, setTaskText] = useState("");
    const buttonDisabled = typeof props.input === 'undefined' ? taskText.length === 0 : props.input.length === 0
    const buttonClassName = buttonDisabled ? "button disabled" : "button"

    const onClick = () => {
        if(props.onClick){
            if(typeof props.input === 'undefined'){
                props.onClick(taskText);
            }
            else{
                props.onClick(props.input);
            }
        }
    }    

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
        if(props.onChange){
            props.onChange(event.target.value);
        }
    }

    const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(props.onCheckboxChange){
            props.onCheckboxChange(event.target.checked);
        }
    }

    return(
        <div>
            <div className="addTaskContainer">
                <input className="input" type ="text" placeholder="Aufgabe..." maxLength={30} onChange={onChange} value={props.input}/>
                <button className={buttonClassName} onClick={onClick} disabled={buttonDisabled}>Hinzufügen</button>
            </div>
            <div className="showAllTaskContainer">
                <input className="checkbox" type="checkbox" onChange={onCheckboxChange}/>
                <div className="smallText">Alle Anzeigen</div>
            </div>
        </div>
    )
}