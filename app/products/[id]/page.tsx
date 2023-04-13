import getProduct from '@/lib/getProduct'
import getAllProducts from '@/lib/getAllProducts'
import { Product } from '@/types'


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const productData: Promise<Product> = getProduct(id)
  const product = await productData
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </>
  )
}