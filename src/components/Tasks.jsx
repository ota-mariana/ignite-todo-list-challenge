import { Check, Trash } from 'phosphor-react';
import style from './Tasks.module.css';

export function Tasks({ task, onDeleteTask, onHandleTaskDone }) {
  return (
    <div className={ style.taskContent }>
      
      <button className={ style.checkbox } onClick={ () => onHandleTaskDone(task.id) }>
       { task.isDone ? <Check />  : <div /> }
      </button>
        
      <p>
        { task.content }
      </p>
      
      <button className={ style.deleteTask } onClick={ () => onDeleteTask(task.id) }>
        <Trash size={20} />
      </button>
    </div>
  )
}
