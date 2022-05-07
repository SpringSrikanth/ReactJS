import React from 'react'
import { connect } from 'react-redux'

function UserDetails({seletedUserDetails,loading,error}) {
  return (
  seletedUserDetails?
            <div className='container'>
                <h3>Hi Mr/Mrs {seletedUserDetails?.name}</h3>
                <p>Username: {seletedUserDetails?.username}</p>
                <p>Email: {seletedUserDetails?.email}</p>
                <p>Phone: {seletedUserDetails?.phone}</p>
                <p>Company: {seletedUserDetails?.company?.name}</p>
                <p>Personel blog/website: <a href={seletedUserDetails?.website} >{seletedUserDetails?.website}</a></p>
            </div> 
            : <h5> Opps !! No User Selected </h5>
  )
}

const mapStateToProps = ({users}) =>{
    return {
        seletedUserDetails: users.seletedUserDetails,
        loading: users.loading,
        error: users.error
    }
}
export default connect(mapStateToProps)(UserDetails)