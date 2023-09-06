import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handelsubmit = (e)=>{
        e.preventDefault()
        console.log(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div>
    <form onSubmit={handelsubmit} action="">
        <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email}  placeholder='username'/>
        <input  onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder='Please enter your email' />
        <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default Login
