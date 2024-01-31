import Link from "next/link"

function PostList({users}){
    return(
        <>

        <Link href={`localposts/${users.id}`}>
            <h1>{users.title}</h1>
            <h1>{users.like}</h1>
        </Link>
        
        </>
    )
}
export default PostList