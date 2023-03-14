import style from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      content: 'Testando os componentes',
      isDone: true,
    },
    {
      id: 2,
      content: 'Limpar a casa',
      isDone: false,
    },
  ]);
  
  console.log(taskList);

  const handleAddNewTask = (newTaskContent) => {
    setTaskList([...taskList, { id: crypto.randomUUID(), content: newTaskContent, isDone: false }]);
  }

  const deleteTaskById = (taskId) => {
    const taskListFiltered = taskList.filter((task) => taskId !== task.id);
    setTaskList(taskListFiltered);
  }
  
  return (
    <div className={ style.content }>
      <Header onAddNewTask={ handleAddNewTask } />

      <TaskList taskList={ taskList } onDeleteTask={ deleteTaskById } />
    </div>
  )
}

export default App
