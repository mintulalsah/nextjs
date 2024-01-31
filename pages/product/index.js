import Link from "next/link"

export default function Product({productid=100}) {
  return (<div>
    <h1>list of product</h1>
    <Link href='/product/1'>product1</Link>
    <Link href='/product/2'>product2</Link>
    <Link href={`/product/${productid}`}>list of product {productid}</Link>
  </div>)
}