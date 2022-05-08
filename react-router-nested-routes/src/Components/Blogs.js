import React from 'react'
import { Outlet } from 'react-router-dom'
import NavTabs from './NavTabs'

function Blogs() {
  return (
    <React.Fragment> 
        <NavTabs/>
        <Outlet/>
    </React.Fragment>
  )
}

export default Blogs