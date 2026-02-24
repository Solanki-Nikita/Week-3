import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  
  const handleClickInc = () => {
    setCount(count + 1);
  }

  const handleClickDec = () => {
    setCount(count - 1);
  }

  return (
    <div>
     <h1>Counter App</h1>
     <h3>{count}</h3>

     <button onClick={handleClickInc}>+</button>
     
     <button onClick={handleClickDec}>-</button>
    </div>
  )
}
