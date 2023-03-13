import logotipoRocket from '../assets/rocket.svg';

import style from './Header.module.css';

export function Header() {
  return (
    <div className={ style.header }>
      <div className={ style.title }>
        <img src={ logotipoRocket } alt="Logotipo rocket" />

        <h1>todo</h1>
      </div>

      <div className={ style.addTextArea }>
        <input
          className="input-add-text"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button>Criar</button>
      </div>
    </div>
  )
}
