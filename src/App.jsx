import style from './App.module.css';
import './global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className={ style.content }>
      <Header />

      <TaskList />
    </div>
  )
}

export default App
