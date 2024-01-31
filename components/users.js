import Link from "next/link"

function Users({users}){
    return(
        <>
        <Link href={`post/${users.id}`}>{users.title}</Link>
        </>
    )
}
export default Users