import { useRouter } from "next/router"
console.log("product id is"+"productId")
   
 function ProductDetails() {
    const router=useRouter();
    const productId2=router.query.productId
    return (
    <div>this is product detials of _{productId2} </div>
    )
  }

  export default ProductDetails