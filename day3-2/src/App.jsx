import { useEffect, useRef, useState } from 'react'
import './App.css'
import human from './assets/peeToo.png'

function App() {

  const [type, setType] = useState('None')
  const [running, setRunning] = useState(false)
  const [rotation, setRotation] = useState(0)

  const objectRef = useRef(null)
  const stageRef = useRef(null)

  const position = useRef({
    x: 0,
    y: 0,
    dx: 3,
    dy: 2
  })

  const objects = {
    None: '●',
    Basketball: '🏀',
    Football: '⚽',
    Volleyball: '🏐',
    Human: human,
    Cartoon: '🐶',
    Logo: '👻'
  }


  // Animation
  useEffect(() => {

    if (!running || type === 'None') return

    let animationFrame

    const move = () => {

      const object = objectRef.current
      const stage = stageRef.current

      if (!object || !stage) return

      const stageWidth = stage.clientWidth
      const stageHeight = stage.clientHeight

      const objectWidth = object.offsetWidth
      const objectHeight = object.offsetHeight


      // เคลื่อนที่
      position.current.x += position.current.dx
      position.current.y += position.current.dy


      // ชนซ้าย / ขวา
      if (
        position.current.x <= 0 ||
        position.current.x + objectWidth >= stageWidth
      ) {

        position.current.dx *= -1

        // หมุนเมื่อชน
        setRotation(prev => prev + 360)
      }


      // ชนบน / ล่าง
      if (
        position.current.y <= 0 ||
        position.current.y + objectHeight >= stageHeight
      ) {

        position.current.dy *= -1

        // หมุนเมื่อชน
        setRotation(prev => prev + 360)
      }


      object.style.left = `${position.current.x}px`
      object.style.top = `${position.current.y}px`

      animationFrame = requestAnimationFrame(move)
    }

    animationFrame = requestAnimationFrame(move)

    return () => {
      cancelAnimationFrame(animationFrame)
    }

  }, [running, type])


  // เปลี่ยน Object
  const changeType = (item) => {

    setType(item)
    setRunning(false)
    setRotation(0)

    setTimeout(() => {

      const stage = stageRef.current
      const object = objectRef.current

      if (!stage || !object) return

      // เริ่มตรงกลาง
      position.current.x =
        (stage.clientWidth - object.offsetWidth) / 2

      position.current.y =
        (stage.clientHeight - object.offsetHeight) / 2

      // สุ่มทิศทาง
      position.current.dx =
        Math.random() > 0.5 ? 3 : -3

      position.current.dy =
        Math.random() > 0.5 ? 2 : -2

      object.style.left = `${position.current.x}px`
      object.style.top = `${position.current.y}px`

    }, 0)
  }


  // RUN / STOP
  const runAnimation = () => {

    if (type === 'None') return

    setRunning(prev => !prev)
  }


  return (
    <div className="container">

      <h1>
        68036395 thanayut Angkhanawin
      </h1>


      {/* กรอบสนาม */}
      <div
        className="stage"
        ref={stageRef}
      >

        <div
          ref={objectRef}
          className={`object ${type === 'None' ? 'none' : ''}`}
          style={{
            transform: `rotate(${rotation}deg)`
          }}
        >

          {/* Human ใช้ img */}
          {type === 'Human' ? (

            <img
              src={objects[type]}
              alt="Human"
            />

          ) : (

            objects[type]

          )}

        </div>

      </div>


      {/* ปุ่ม */}
      <div className="buttons">

        {/* RUN แยกซ้ายสุด */}
        <button
          className={`run ${running ? 'stop' : ''}`}
          onClick={runAnimation}
        >
          {running ? '■ STOP' : '▶ RUN'}
        </button>


        {/* ปุ่มเลือก Object */}
        <div className="object-buttons">

          {Object.keys(objects).map((item) => (

            <button
              key={item}
              className={type === item ? 'active' : ''}
              onClick={() => changeType(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </div>
  )
}

export default App