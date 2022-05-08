import { useEffect, useState } from 'react';
import AxiosClient from './Axios/AxiosClient';

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    AxiosClient.get("/users")
    .then(res=>res.data)
    .then(res=>{
      setUsers(res);
    })
    .catch(error=>{
      console.log(error.message);
    })
  },[])
  return (
    <div className='container'>
      <ul className='list-group'>
        {users.map(user=>(<li className='list-group-item' key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
