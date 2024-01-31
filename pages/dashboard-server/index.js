import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
 const DashboardSWR = () => {
  async function fetcher(){
    console.log("swr called")
    const response= await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/dashboard');
    const data= await response.json();
    return data;
}
  const { data, error, isLoading } = useSWR('dashboard', fetcher)

    
    if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  return (
    <div>
        <h1>dashboard page</h1>
        <h1>followers: {data['follower']}</h1>
        <h1>like: {data['like']}</h1>
      
    </div>
  )
}
export default DashboardSWR