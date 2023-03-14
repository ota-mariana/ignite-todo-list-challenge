import style from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
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

  const handleAddNewTask = (newTaskContent) => {
    setTaskList([...taskList, { id: crypto.randomUUID(), content: newTaskContent, isDone: false }]);
  }
  
  return (
    <div className={ style.content }>
      <Header onAddNewTask={ handleAddNewTask } />

      <TaskList taskList={ taskList }/>
    </div>
  )
}

export default App
