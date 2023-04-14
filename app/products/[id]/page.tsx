import getAllProducts from '@/lib/getAllProducts'
import getProduct from '@/lib/getProduct'
import { Product } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const productData: Promise<Product> = getProduct(id)
  const product = await productData
  const productsData = await getAllProducts()
  const products = productsData.items
  const similarProducts = products.filter((p: Product) => p.category === product.category)

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <h1 className="mt-32">Similar products</h1>
      <ul>
        {similarProducts.map((product: Product) => (
          <li key={product.id}>
            <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            />
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function generateStaticParams() {
  const productsData = await getAllProducts()
  const products = productsData.items
  return products.map((product: Product) => ({
    id: product.id,
  }))
}
