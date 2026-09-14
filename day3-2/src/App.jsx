import { useState } from 'react'
import './App.css'
import human from './assets/peeToo.png'
function App() {

  const [type, setType] = useState('None')

  const objects = {
    None: '●',
    Basketball: '🏀',
    Football: '⚽',
    Volleyball: '🏐',
    Human: human,
    Cartoon: '🐶',
    Logo: '👻'
  }

  return (
    <div className="container">
      <div>
        <h1>68036395 thanayut Angkhanawinß</h1>
      </div>

      <div className="stage">
        <div className={`object ${type === 'None' ? 'none' : ''}`}>
          {type === 'Human' ? (
          <img src={objects[type]} alt="Human" />
            ) : (objects[type])}
        </div>
      </div>

      <div className="buttons">

        <button className="run">
          ▶ RUN
        </button>

        {Object.keys(objects).map((item) => (
          <button
            key={item}
            className={type === item ? 'active' : ''}
            onClick={() => setType(item)}
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  )
}

export default App