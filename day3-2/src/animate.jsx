import { useState } from 'react'
import './App.css'

function Animate() {

  const [type, setType] = useState('None')

  const objects = {
    None: '●',
    Basketball: '🏀',
    Football: '⚽',
    Volleyball: '🏐',
    Human: '👨',
    Cartoon: '🐶',
    Logo: '👻'
  }

  return (
    <div className="container">

      <div className="stage">
        <div className={`object ${type === 'None' ? 'none' : ''}`}>
          {objects[type]}
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

export default Animate