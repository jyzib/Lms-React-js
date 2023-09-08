import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidnav = () => {
  return (
    <div className='sidenavbpdy'>
     <ul className='sidenav'>
        <NavLink to={'/course'} className={'sidebar-navlink'} end ><li>Explore</li></NavLink>
        <NavLink to={'/course/learning-plan'} className={'sidebar-navlink'} ><li>Personalize path</li></NavLink>
        <NavLink to={'/course/Project'} className={'sidebar-navlink'} > <li>Project</li></NavLink>
       <NavLink to={'/course/Project'} className={'sidebar-navlink'} ><li>Skill path</li></NavLink>
        <NavLink to={'/course/Project'} className={'sidebar-navlink'} ><li>Assessments</li></NavLink>

     </ul>
    </div>
  )
}

export default Sidnav
