import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
const Index = () => {
    const[username,setusername] = useState('')
    const[data,setData] = useState(null)
    const[loading,setloading] = useState(false)


const fetchdata  = async() =>{
try{
const reaponse  = await axios.get(`https://api.github.com/users/${username}`)
setData(reaponse.data)
console.log(reaponse.data)
setloading(true)
}catch(error){
    console.log(error)
}


}


const hendelsearch = ()=>{
    fetchdata()
}
  return (
    <div className='index-container'>

      <h1> Github Profile Finder</h1>
<div className='input-container'>
      <input type='text' placeholder='Enter username' value={username} onChange={(e)=>setusername(e.target.value)}/>
      <button onClick={hendelsearch}>Search</button>

      {
        data !== null ? <User data={data} /> : "No user found"
      }
</div>





    </div>
  )
}

export default Index