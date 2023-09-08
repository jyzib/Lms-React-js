import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidnav from './Sidnav'
const Coursebody = () => {
  return (

    <div className='course-body' >
       <div className="sidenav">
        <Sidnav/>
       </div>
      <Outlet/>
    </div>
  )
}

export default Coursebody
