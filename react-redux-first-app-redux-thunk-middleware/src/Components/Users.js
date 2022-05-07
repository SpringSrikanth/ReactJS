import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserById, fetchUsers } from '../Redux/Users/UserActions'

function Users({loadUsers,loading,error,users,selectUser,seletedUserDetails}) {
  useEffect(()=>{
    loadUsers()
  },[loadUsers])
  return (
      loading ? <h5>Loading...</h5> 
      : error ? <h5>{error}</h5> 
      : <div className='container'>
          <ul className='list-group mt-3'>
                {users.map(user => (
                    <li className={ seletedUserDetails?.id === user.id ? 'list-group-item active' : 'list-group-item'}  onClick={() => selectUser(user.id)}  key={user.id}>{user.name}</li>
                ))}
          </ul>
        </div>
  )
}

const mapStateToProps=({users})=>{
    return {
        loading: users.loading,
        users: users.users,
        error: users.error,
        seletedUserDetails: users.seletedUserDetails
    }
}

const mapDispatchToProps= (dispatch) =>{
    return {
        loadUsers: () => dispatch(fetchUsers()),
        selectUser: (id) => dispatch(fetchUserById(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)