import React from 'react'

 const category = ({news}) => {
  return (
   <div>
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
export default category;

export async function getServerSideProps(context){
    const { params,req,res } = context;
    console.log("cookies is",req.headers.cookie)
    res.setHeader('set-cookie', ['name=mintu', 'val2']);
    const response= await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/news?category='+`${params.category}`);
    const newsdata= await response.json();
  //  console.log(userdata)
    return{
        props:{
            news:newsdata
        }
    }
}