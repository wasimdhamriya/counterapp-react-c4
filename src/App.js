import React, { useState } from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App()
{
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return(
<div className={`${isMorning ? 'dLight' : 'nLight'}`}>
  <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
  <Message counter={count}/>
  <button onClick={()=>setCount(count + 1)}>
    Update
  </button>
  <button onClick={()=>setMorning(!isMorning)}>Change Color</button>
</div>
  );
}
