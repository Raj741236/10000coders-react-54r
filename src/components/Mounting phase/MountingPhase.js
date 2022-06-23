import React from 'react';

class MountingPhase extends React.Component{
    state = {
        usersData : []
    };


    getUsersData = async()=>{
     const response = await fetch('https://jsonplaceholder.typicode.com/users',{
         headers :{
             "app-id" : "618224858da6bdeedeb7fbea"
         }
     });
     const data = await response.json();
     this.setState({usersData : data});
     console.log(this.state)
    }

    componentDidMount(){
        this.getUsersData();
    }

    render(){
        return(
            <div>
                <table className="table table-striped">
                     <thead>
                         <tr>
                             <th>ID</th>
                             <th>Name</th>
                             <th>UserName</th>
                             <th>City</th>
                             <th>Phone Number</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                        this.state.usersData.map((user)=>(
                            <tr> 
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>
                        ))

                         }
                     </tbody>
                </table>
            </div>
        )
    }
}
export default MountingPhase;