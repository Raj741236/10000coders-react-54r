import React,{useState} from 'react';

const Counter = ()=>{
     
     const [counter,setCounter] = useState(0);

      const handleIncrement = ()=>{
          setCounter(counter+1);
      }
        
    const handleDecrement = () => {
        setCounter(counter - 1);
    }

      return(
          <React.Fragment>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <h1>Counter is {counter}</h1>
          </React.Fragment>
      )
}


export default Counter;

