import { useState } from 'react';
import logotipoRocket from '../assets/logotipo.svg';

import style from './Header.module.css';

export function Header({ onAddNewTask }) {
  const [newContent, setNewContent] = useState('');


  const handleInputText = (event) => {
    setNewContent(event.target.value);
  }

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    onAddNewTask(newContent);
    setNewContent('');
  }

  return (
    <div className={ style.header }>
      <div className={ style.logo }>
        <img src={ logotipoRocket } alt="Logotipo rocket" />
      </div>

      <form onSubmit={ handleTaskSubmit } className={ style.addTextArea }>
        <input
          className="input-add-text"
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={ newContent }
          onChange={ handleInputText }
        />

        <button>Criar</button>
      </form>
    </div>
  )
}
