import { ChangeEvent, useState } from 'react'
import { Task } from '../models/Task'
import './SimpleTask.css'
import './Checkbox.css'

interface Props {
  task: Task
  onDelete?: (id: string) => void
}

export const SimpleTask = (props : Props) => {

  const textClassName ="smallText task"
  const textLineThroughClassName ="smallText task lineThrough"

  const [currentTextClassName, setCurrentTextClassName] = useState(textClassName);
  var [boltClassNames, setBoltClassNames] = useState<string[]>(["boltActive", "boltActive", "boltInactive"])

  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
      setCurrentTextClassName(textLineThroughClassName);
    }
    else {
      setCurrentTextClassName(textClassName);
    }
  }

  const onDelete = () => {
    if(props.onDelete) {
      props.onDelete(props.task?.id);
    }
  }

  const setRating = (rating: number) => {
    let i = 0;
    const newBoltClassNames: string[] = [];
    boltClassNames.forEach((boltClassName) => {
      if (i < rating) {
        newBoltClassNames[i] = "boltActive";
      }
      else {
        newBoltClassNames[i] = "boltInactive";
      }
      i++;
    })
    setBoltClassNames(newBoltClassNames);
  }

    return(
        <div className="taskContainer">
          <input className="checkbox task" type="checkbox" onChange={onChecked}/>
          <div>
            <button className={boltClassNames[0]} onClick={() => setRating(1)}>&#x1F5F2;</button>
            <button className={boltClassNames[1]} onClick={() => setRating(2)}>&#x1F5F2;</button>
            <button className={boltClassNames[2]} onClick={() => setRating(3)}>&#x1F5F2;</button>
          </div>
          <text className={currentTextClassName}>{props.task?.text}</text>
          <button className="button task" onClick={onDelete}>Löschen</button>
        </div>
    )
}