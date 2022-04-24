import { useEffect, useState } from 'react';
import './App.css';
import UserDetails from './UserDetails';
import UserList from './UsersList';

function App() {
  const [users,setUsers]= useState([]);
  const [errorMessage,setErrorMessage]= useState(null);
  const [loading,setLoading]= useState(true);
  const [userDetails,setUserDetails] = useState(null)
  const [selectedUser,setSelectedUser] = useState(null)


  useEffect(()=>{
    // setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
        if(!res.ok){
          throw Error('Something went wrong !!!');
        }
        return res.json()
      })
      .then((data)=>{
        setLoading(false);
        setUsers(data);
        setErrorMessage(null);
        setUserDetails(data[0]);
        setSelectedUser(data[0]);
      })
      .catch(error=>{
        setErrorMessage(error.message);
        setLoading(false);
        setUsers([]);
        setUserDetails(null);
        setSelectedUser(null);

      })      
    // },2000)
  },[])

  function selectUser(id){
    const filteredUsers=users.filter(user=> user.id === id);
    setUserDetails(filteredUsers[0]);
    setSelectedUser(filteredUsers[0])
  }

  return (
    <div className='container mt-3'>
        <div className='text-danger'>{ errorMessage  ?  errorMessage : null} </div>
        <div className='row'></div>
        { 
          loading ? 
          <div>Loading</div> : 
          <div className='row'>
            <div className="col-md-6">
              <UserList  users={users} selectedUser={selectedUser}  selectUser={selectUser}/>
            </div>
            <div className="col-md-6">
              <UserDetails  userDetails={userDetails} />
            </div>
          </div>
        }
    </div>
  );
}

export default App;
