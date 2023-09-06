import React from 'react'
import { createContext ,useEffect,useState} from 'react'
import  axios  from 'axios'
export const Wrapper = createContext()

const Context = ({children}) => {
    const [courses,setCourses] = useState([])
    const fetchapi = async()=>{
    const data =await axios.get("http://localhost:4000/api/course/")
   setCourses(data.data.data)
    }
    useEffect(()=>{
      fetchapi()
    },[])
  return (
<Wrapper.Provider value={{courses}} >
  {children}
</Wrapper.Provider>
  )
}

export default Context
