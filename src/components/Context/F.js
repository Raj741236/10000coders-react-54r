import React,{useContext} from 'react'
import { UserContext } from '../../App';

const F = () => {
    const userData = useContext(UserContext)
  return (
    <h1>{userData.name2}</h1>
  )
}
export default F;
