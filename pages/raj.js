import Users from "@/components/users";

function Userspage({users}){
    return(<div><h1>hi users</h1>
    {users.map((item,index)=>{
        return(
        <div key={item.id}>
<Users users={item}/>
        </div> )
       
    })}
    </div>)
}
export default Userspage

export async function getStaticProps(){

    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const userdata= await response.json();
    console.log(userdata)
    return{
        props:{
            users:userdata
        }
    }
}