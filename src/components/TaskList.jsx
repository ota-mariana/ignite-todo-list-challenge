import style from './TaskList.module.css';
import { File } from 'phosphor-react'
import { Tasks } from './Tasks';

export function TaskList() {
  return (
    <div className={ style.boxContent }>
      <div className={ style.taskCount }>
        <div className={ style.createdTask }>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div className={ style.taskDone }>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>

      <Tasks />

      <div className={ style.listEmpty }>
        <File size={56} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
