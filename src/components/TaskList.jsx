import style from './TaskList.module.css';
import { File } from 'phosphor-react'
import { Tasks } from './Tasks';

export function TaskList({ taskList, onDeleteTask }) {
  const tasksTotal = taskList.length;
  const tasksDone = taskList.filter((task) => task.isDone);
  const totalTasksDone = tasksDone.length;

  return (
    <div className={ style.boxContent }>
      <div className={ style.taskCount }>
        <div className={ style.createdTask }>
          <p>Tarefas criadas</p>
          <span>{ tasksTotal }</span>
        </div>

        <div className={ style.taskDone }>
          <p>Concluídas</p>
          <span>{ totalTasksDone } de { tasksTotal }</span>
        </div>
      </div>

      {
        taskList.map((task) => {
          return <Tasks key={task.id} task={ task } onDeleteTask={ onDeleteTask } />
        })
      }

      <div className={ style.listEmpty }>
        <File size={56} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
