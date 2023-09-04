import React from 'react'
import logodark from "../../public/logodark.png"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navabr' >
        <div className="logo-contener">
            <img className='logo' src={logodark} alt="" />
        </div>
      <ul className='ul-navbar'>
        
      <NavLink className={"navlink"} to={'/'} > <li >Home</li></NavLink> 
      <NavLink className={"navlink"}  to={'/course'} ><li>Course</li></NavLink> 
      <NavLink className={"navlink"}  to={'/about'} >  <li>About Us</li></NavLink> 
      <NavLink className={"navlink"}  to={'/login'} >  <li>Log in</li></NavLink> 
        
       
       
      </ul>
   
    </div>
  )
}

export default Navbar
