import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { useEffect,useState } from 'react'
import  {Wrapper } from '../Context'
import Course from './course'

const Allcourse = () => {
  const {courses} = useContext(Wrapper)
  const [filterdataa , setfilterdata] = useState([])
  const [coursedata,setCoursedata] =  useState([])
  const [search,setSearch] = useState('')

useEffect(()=>{
  setCoursedata(courses)
},[courses])


const handelclick =(m)=>{
  setSearch(m)
  if(!m){
    setCoursedata(courses)
    setfilterdata([])
  }else{
    const filterdata = courses.filter((e)=>e.title.toLowerCase().includes(m.toLowerCase()))
    setfilterdata(filterdata)
  }
}

const handellist = (m)=>{
 setSearch(m)
 const coursefilter = courses.filter((e)=>e.title==m)
 console.log(coursefilter)
 setfilterdata([])
 setCoursedata(coursefilter)

}
const handelcut = ()=>{
  setSearch("")
  setCoursedata(courses)
}
  return (
    <>
    <div className="course-body-content">
      <div className="maincourse">
        <h1>Explore the catalog</h1>
      <div className="course-input-section">
  <span className='input-x'><input className='course-input' value={search} type="text"  placeholder='search course' onChange={(e)=>handelclick(e.target.value)} /> {search&&<span onClick={handelcut} className='main-x'>X</span>} </span>
  <div className="autocorrect">
    <ul>
      
      {filterdataa.map((e)=>{
        return (
          <li onClick={()=>handellist(e.title)}  >{e.title}</li>
        )
      })}
     
    </ul>
  </div>
  </div>
  </div>
         <div className="course_details">
        {coursedata.map((e)=>{
         return(<Course data={e} />)
        })}
      </div>
      </div>
     </>
  )
}

export default Allcourse
