import React, { useState } from 'react'
import { reducer } from '../Use Reducer/UseReducerHook';

const UseStateHook = () => {
    const [count,setCount] = useState(0);

  
  return (
    <div>
        <h1>StateCount : {count}</h1>
        <h1>ReducerCount : {reducer}</h1>
        <button onClick={()=>setCount(count+1)} className="btn btn-info ms-3">Increment</button>
        <button onClick={()=>setCount(count-1)} className="btn btn-info ms-3">Decrement</button>
    </div>
  )
}
export default UseStateHook;
