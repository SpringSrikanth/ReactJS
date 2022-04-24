import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../Axios/Api";

const Users = () => {
    const [users,setUsers]=useState([]);
    const [totalUsers,setTotalUsers]=useState(0);

    useEffect(()=>{
        Api.get('users/0/10',{
            params:{},
          }).then(res=> res.data)
          .then(data=>{
            setUsers([...data.users]);
            setTotalUsers(data.totalCount);
          })
          .catch(error=>{
              console.log(error.message)
          })
    },[])
    return ( 
      <>
        <h3>Total Users {totalUsers}</h3>
        <ul className="list-group col-md-6 m-3">
          {users.map((user)=>(
            <li className="list-group-item" key={user._id} >
              <h4>{user.firstName} {user.secondName}</h4>
              <p>{user.email}</p>
              <Link to={`/user/${user._id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </>
     );
}
 
export default Users;