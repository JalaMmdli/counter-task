import React, { useState } from 'react' 
import "./Saygac.css"

function Saygac() {
    const [count,setCount]=useState(0)
    const increment = () => {
        if (count < 10) {
          setCount((prevCount) => prevCount + 1);
         changeColor();
        }
      };

      const decrement = () => {
        if (count > -10) {
          setCount((prevCount) => prevCount - 1);
        changeColor();
        }
      };
      const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
      };
  return (
    <div className='container'>
      <button className="dec" onClick={decrement} disabled={count === -10}>-</button>
      <div className="count">{count}</div>
      <button className='inc' onClick={increment} disabled={count === 10}>+</button>
    </div>
  )
}

export default Saygac
