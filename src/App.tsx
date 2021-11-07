import { useState } from 'react';
import './App.css';
import { AddTaskAndFilterContainer } from './components/AddTaskAndFilterContainer';
import { createTask, Task } from './models/Task';
import { Tasks } from './components/Tasks';

function App() {
  const [disableFilterCheckbox, setDisableFilterCheckbox] = useState(false);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTasks = [...tasks, createTask(text)];
    setTasks(newTasks);
    updateInput("");
  }

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks);
  }

  const updateInput = (text: string) => {
    setInput(text);
  }

  const updateFiterCheckbox = (checked: boolean) => {
    setDisableFilterCheckbox(checked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Todo App</div>
      </header>

      <body>
      <AddTaskAndFilterContainer onClick={addTask} input={input} onChange={updateInput} onCheckboxChange={updateFiterCheckbox}/>
      <Tasks tasks={disableFilterCheckbox ? tasks : tasks.filter(task => task.text.includes(input))} onDelete={deleteTask}/>
      </body>
    </div>
  );
}

export default App;
