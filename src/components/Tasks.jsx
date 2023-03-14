import { Trash } from 'phosphor-react';
import style from './Tasks.module.css';

export function Tasks({ task }) {
  return (
    <div className={ style.tasks }>
      <div className={ style.taskContent }>
        <label className={ style.check } htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          { task.content }
        </label>

        <Trash className={ style.deleteTask } size={20}/>
      </div>
    </div>
  )
}
