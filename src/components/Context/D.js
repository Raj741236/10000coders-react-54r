import React,{useContext} from 'react'
import { UserContext} from '../../App';

const D = () => {
    const userData = useContext(UserContext);
    console.log(userData)
  return (
      <h1>{userData.name1}</h1>
  )
}

export default D;
