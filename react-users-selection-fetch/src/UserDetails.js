import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    const userDetails = this.props?.userDetails;
    return (
      <div className='container mt-3'>
          <h4>Hi {userDetails.name}</h4>
          <div className='row mt-3'>
              <span className='col-md-6'>User Id</span>
              <span className='col-md-6'>{userDetails.id}</span>
          </div>
          <div className='row mt-3'>
              <span className='col-md-6'>Email</span>
              <span className='col-md-6'>{userDetails.email}</span>
          </div>
          <div className='row mt-3'>
              <span className='col-md-6'>Phone</span>
              <span className='col-md-6'>{userDetails.phone}</span>
          </div>
          <div className='row mt-3'>
              <span className='col-md-6'>Website</span>
              <span className='col-md-6'>{userDetails.website}</span>
          </div>
      </div>
    )
  }
}

export default UserDetails