import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
 const DashboardSWR = () => {
  async function fetcher(){
    console.log("swr called")
    const response= await fetch('http://localhost:5000/dashboard/');
    const data= await response.json();
    return data;
}
  const { data, error, isLoading } = useSWR('dashboard', fetcher)

    
    if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  return (
    <div>
        <h1>dashboard page</h1>
        <h1>users: {data.users}</h1>
        <h1>followers: {data.follower}</h1>
        <h1>following: {data.following}</h1>
    </div>
  )
}
export default DashboardSWR