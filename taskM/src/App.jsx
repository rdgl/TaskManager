import { useState } from 'react'
import './App.css'

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <div className='container'>
          <div className="todo-input">
            <div className='input-item'>
              <label>Task -</label>
              <input type="text" placeholder='your goal ..'/>
            </div>

            <div className='input-item'>
              <label>Description -</label>
              <input type="text" placeholder='context ..'/>
            </div>

            <div className='input-item'>
              <button className='AddButton'>Add</button>
            </div>
          </div>

          <div className='btn-area'>
            <button className={`secondary ${isCompleteScreen ===false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>On the way</button>
            <button className={`secondary ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div className='todo-list'>
            <div className='dummy'>
              <h3>Dummy Task1</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
