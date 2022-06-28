import React,{useState, useEffect} from 'react';

const UseEffectHook = () => {
     
    const [userData,setUserData] = useState([]);

    const getUserData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data)
    }
    
     useEffect(()=>{
         getUserData();
     },[])

    return(userData.length?(
        <table class="table table-striped">
             <thead>
                 <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>email</th>
                 <th>Phone Number</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     userData.map((user)=>(
                         
                      <tr>
                         <td>{user.id}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.phone}</td>
                      </tr>
                     ))
                 }
             </tbody>
        </table>):(<p>Loading...</p>)
    )
}

export default UseEffectHook;