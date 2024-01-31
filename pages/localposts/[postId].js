import { useRouter } from "next/router"
console.log("product id is" + "productId")

function PostDetails({ users }) {
  const router = useRouter();
  const productId2 = router.query.postId
  if(router.isFallback){
    return <h1>Loading....</h1>
  }
  return (
    <>
    <h1>mintu</h1>
     <h1>{users.body}</h1> 
     <h1> {users.like}</h1> 
    </>
  )
}

export default PostDetails
// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const response = await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/posts');
  const userdata = await response.json();
 /*  const paths = userdata.map((post) => {
    return {
      params: {
        postId: `${post.id}`
      },

    }
  }) */
  return {
   
     paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }, { params: { postId: '3' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context;
 
  const response = await fetch('https://my-json-server.typicode.com/mintutraizine/learn_react/posts/' + `${params.postId}`);
  const userdata = await response.json();
  if(!userdata.id){
return{
  notFound:true
}
  }
  console.log("generating post id is" + params.postId)
  //console.log(userdata)
  return {
    props: {
      users: userdata
    }
  }
}