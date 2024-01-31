import Users from "@/components/users";

function Post({users}){
    return(<div><h1>hi mintu users</h1>
    {users.map((item,index)=>{
        return(
        <div key={item.id}>
        <Users users={item}/>
        </div> )
       
    })}
    </div>)
}
export default Post

export async function getStaticProps(){

    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    const userdata= await response.json();
  //  console.log(userdata)
    return{
        props:{
            users:userdata
        }
    }
}