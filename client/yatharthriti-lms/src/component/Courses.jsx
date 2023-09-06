import React from 'react'
import axios from "axios"
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import Course from './course'
import { Wrapper } from '../Context'
import { useContext } from 'react'
const Courses = () => {
    const {courses} = useContext(Wrapper)
    const [data,setdata] = useState()


 


  return (
    <div className='courses_main'>
      <div className="text-h1"><h1>Stop Scrolling. Start Coding.</h1></div>
      <p className="exprence_p_p">You don’t get better at <span className='exprence_p_p_middle' > swimming by watching others.</span></p>
      <div className="course_details">
        {courses.slice(0,3).map((e)=>{

         return(<Course data={e} />)
        })}
    

      </div>
      <span className='getStarted' >
        <Link className='style-a' to={'/course'} >
        <button className='Browse-all-courses' >Browse all courses<svg width="20" height="18" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70.7242 33.0366L44.8087 58.743C43.9972 59.5478 42.8967 60 41.7492 60C40.6017 60 39.5012 59.5478 38.6897 58.743C37.8783 57.9381 37.4225 56.8464 37.4225 55.7082C37.4225 54.5699 37.8783 53.4783 38.6897 52.6734L57.2301 34.2898H4.31925C3.17372 34.2898 2.0751 33.8384 1.26508 33.0349C0.455063 32.2314 0 31.1416 0 30.0054C0 28.8691 0.455063 27.7793 1.26508 26.9758C2.0751 26.1723 3.17372 25.721 4.31925 25.721H57.2301L38.6969 7.32661C37.8855 6.52174 37.4296 5.43009 37.4296 4.29183C37.4296 3.15356 37.8855 2.06192 38.6969 1.25705C39.5083 0.452173 40.6089 1.69615e-08 41.7564 0C42.9039 -1.69615e-08 44.0044 0.452173 44.8159 1.25705L70.7314 26.9634C71.1341 27.362 71.4535 27.8356 71.6712 28.3569C71.8889 28.8783 72.0007 29.4372 72 30.0015C71.9993 30.5658 71.8863 31.1244 71.6673 31.6453C71.4484 32.1661 71.1279 32.6389 70.7242 33.0366Z" fill="#fff"/>
    </svg> </button></Link>
    
    
    </span>
    </div>
  )
}

export default Courses
