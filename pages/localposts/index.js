import PostList from "@/components/postlist";

function Post({users}){
    return(<div><h1>hi users</h1>
    {users.map((item,index)=>{
        return(
        <div key={item.id}>
        <PostList users={item}/>
        </div> )
       
    })}
    </div>)
}
export default Post

export async function getStaticProps(){
    console.log("regeneration happen")
    const response= await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/posts');
    const userdata= await response.json();
    
    return{
        props:{
            users:userdata
        },
       
        // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
    }
}