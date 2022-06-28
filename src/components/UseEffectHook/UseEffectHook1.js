import React,{useEffect, useState} from 'react'

const UseEffectHook1 = () => {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
       
    useEffect(()=>{
       console.log('Use Effect is called when the jsx code returned') 
    },[count1,count2])

  return (
    <div>
        <h1>Counter1 : {count1}</h1>
        <h1>Counter2 : {count2}</h1>
        <button onClick={()=>setCount1(count1 + 1)}>Increment Counter 1</button>
        <button onClick={()=>setCount2(count2 + 1)}>Increment Counter 2</button>
    </div>
  )
}

export default UseEffectHook1;