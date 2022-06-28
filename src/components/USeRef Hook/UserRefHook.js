import React,{useRef} from 'react';

const UserRefHook = () => {
    const btnRef = useRef(null);
    console.log(btnRef)

     const handleBtnClick = ()=>{
         btnRef.current.innerHTML = 'clicked';
     }

  return (
    <div>
        <button onClick={handleBtnClick} ref={btnRef}>Click Me</button>
    </div>
  )
}

export default UserRefHook;
