import React from 'react'

export default function News({news}) {
  return (
    <div>
        <h1>new portal</h1>
        {news.map((newspost,index)=>{
            return(
            <div key={index}>
            <h1>{newspost.like}</h1>
            <h1>{newspost.category}</h1>
            <h1>{newspost.title}</h1>
            </div>
            )
        })}
    </div>
  )
}
export async function getServerSideProps(){

    const response= await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/news');
    const newsdata= await response.json();
  //  console.log(userdata)
    return{
        props:{
            news:newsdata
        }
    }
}