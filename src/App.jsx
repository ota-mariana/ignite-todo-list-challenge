import style from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const saveChangesInLocalstorage = (newTasks) => {
    setTaskList(newTasks);
    localStorage.setItem('todo', JSON.stringify(newTasks))
  };

  const loadDataFromLocalstorage = () => {
    const savedData = localStorage.getItem('todo');
    if (savedData) {
      setTaskList(JSON.parse(savedData));
    }
  };

  const handleAddNewTask = (newTaskContent) => {
    saveChangesInLocalstorage([...taskList, { id: crypto.randomUUID(), content: newTaskContent, isDone: false }]);
  };

  const deleteTaskById = (taskId) => {
    const taskListFiltered = taskList.filter((task) => taskId !== task.id);
    saveChangesInLocalstorage(taskListFiltered);
  };

  const handleTaskDone = (taskDone) => {
    const newTaskList = taskList.map((task) => {
      if (taskDone === task.id) {
        return { ...task, isDone: !task.isDone }
      }
      return task;
    });
    
    saveChangesInLocalstorage(newTaskList);
  };

  useEffect(() => {
    loadDataFromLocalstorage()
  }, []);
  
  return (
    <div className={ style.content }>
      <Header onAddNewTask={ handleAddNewTask } />

      <TaskList
        taskList={ taskList }
        onDeleteTask={ deleteTaskById }
        onHandleTaskDone={ handleTaskDone }
      />
    </div>
  )
}

export default App
