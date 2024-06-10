import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increament = ()=>{
    setCount(count +1)
  }

  const decreament = ()=>{
    setCount(count -1)
  }

  return (
    <>
    <div id="counter">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div id="button">
      <button onClick={decreament}>-</button>
      <button onClick={Increament}>+</button>
      </div>
     

    </div>
    </>
  )
}

export default App
