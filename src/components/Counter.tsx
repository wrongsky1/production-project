import React, { useState } from 'react'
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((currentCount)=>currentCount+1)
    }
  return (
    <div className={classes.button}>
        <span>{count}</span>
        <button onClick={increment}>increment</button>
    </div>
  )
}

