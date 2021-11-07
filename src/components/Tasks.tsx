import { Task } from "../models/Task";
import { SimpleTask } from "./SimpleTask";

interface Props {
    tasks: Task[]
    onDelete?: (id: string) => void
}

export const Tasks = (props: Props) => {

    const taskList = props.tasks.map((task) => (
        <SimpleTask key={task.id} task={task} onDelete={props.onDelete}/>
    ))

    return <div>{taskList}</div>
}