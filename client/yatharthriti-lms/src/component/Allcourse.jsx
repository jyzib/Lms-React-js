import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect,useState } from 'react'
import  {Wrapper } from '../Context'
import Course from './course'

const Allcourse = () => {
       const {courses} = useContext(Wrapper)
    console.log(courses)
  return (
    <>
         <div className="course_details">
        {courses.map((e)=>{
           
         
     
         return(<Course data={e} />)
        })}
    

      </div>
     </>
  )
}

export default Allcourse
