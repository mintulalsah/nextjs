import React, { useEffect, useState } from 'react'

 const Dashboard = () => {
    const [ dashbaorddata,setdashbaorddata] = useState()
    const [ loading,setloading] = useState(true)
  
    useEffect(() => {
        async function fetchdashbaorddata(){
            const response= await fetch('http://localhost:5000/dashboard/');
            const data= await response.json();
            setdashbaorddata(data)
            setloading(false)
    }
    fetchdashbaorddata();
    
    }, [])
    
    if(loading){
        return(<div>Loading....</div>)
    }
  return (
    <div>
        <h1>dashboard page</h1>
        <h1>users: {dashbaorddata.users}</h1>
        <h1>followers: {dashbaorddata.follower}</h1>
        <h1>following: {dashbaorddata.following}</h1>
    </div>
  )
}
export default Dashboard