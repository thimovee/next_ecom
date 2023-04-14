import { Product } from '@/types'
import Link from 'next/link'
import getAllProducts from '@/lib/getAllProducts'


const Page = async () => {
   const productData = await getAllProducts()
  const products = productData.items
  return(
    <>
    <h1>Products</h1>
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
    </>
  )
}
export default Page;