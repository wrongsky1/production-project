import React, { useState } from 'react'
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((currentCount)=>currentCount+1)
    }
  return (
    <div>
        <span>{count}</span>
        <button onClick={increment}>increment</button>
    </div>
  )
}

