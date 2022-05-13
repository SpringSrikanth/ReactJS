import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById, fetchUsers } from './UserSlice';

function UsersView() {
  const dispatch = useDispatch();
  const {users,selectedUser} = useSelector(state => state.users)

  useEffect(()=>{
      dispatch(fetchUsers());
  },[dispatch])

  return (
    <div className='row'>
        <div className='col-md-6'>
            <h5>List of users</h5>
            <ul className="list-group mt-3">
                {users.map(user =>(
                    <li 
                    className={ user.id === selectedUser?.id ? 'list-group-item active' : 'list-group-item'}
                    onClick={()=>dispatch(fetchUserById(user.id))} 
                    key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
        <div className='col-md-4'>
            {
             selectedUser ? 
            <div className='m-3'>
                <h2>Hi, {selectedUser.name}</h2>
                <p>Username : {selectedUser.username}</p>
                <p>Email : {selectedUser.email}</p>
                <p>Phone : {selectedUser.phone}</p>
                <p>Website : {selectedUser.website}</p>
                <p>Company : {selectedUser.company.name}</p>
            </div>:
            <h4>Oops user not selected</h4>
            }
        </div>
    </div>
  )
}

export default UsersView