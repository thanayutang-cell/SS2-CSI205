import { useState } from 'react'
import './App.css'
import Counter from './companant/Counter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center' style ={{}}>68036395 thanayut Angkhanwin</h1>
      <Counter name={'A'} step={1}/>
      <Counter name={'B'} step={5} limit={100}/>
    </>
  )
}

export default App
