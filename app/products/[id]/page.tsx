import getAllProducts from '@/lib/getAllProducts'
import getProduct from '@/lib/getProduct'
import { Product } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { getStars } from '@/app/components/getStars'
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id

  const productData: Promise<Product> = getProduct(id)
  const product = await productData

  const productsData = await getAllProducts()
  const similarProducts = productsData.items.filter((p: Product) => p.category === product.category && p.id !== product.id)

  return (
    <>
      <article className="w-8/12 bg-white p-20 mx-auto flex flex-col rouned-lg mt-32">
        <div className="flex">
          <Image src={product.image} width={500} height={500} alt={product.name} />
          <div className="ml-10 flex flex-col">
            <h3 className="text-[#2b2f38] text-[15px] mb-4">{product.category}</h3>
            <h1 className="text-[40px] mb-5">{product.name}</h1>
            <span className="font-bold">{product.discount > 0 ? (<span><del className="text-[#aaacaf] text-[22px]">${product.price}.00</del> <span className="text-[#5d6167] text-[22px]">${product.price - (product.price * product.discount / 100)}</span></span>) : (<span className="text-[#5d6167] text-[22px]">${product.price}.00</span>)}</span>
            <h3 className="flex my-2">{getStars(product.rating)}</h3>
            <p className="text-[#5d6167] text-[15px]">{product.description}</p>
            <div className="w-full border-b border-gray-300 pb-4 mt-4">
              <input type="number" className="text-[#2b2f38] border border-gray-300 w-14 p-1 text-center" placeholder="1" />
              <button className="bg-[#fc5f5f] tracking-[2px] text-white font-semibold text-xs px-16 py-2 ml-4 rounded-full">ADD TO CART</button>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex gap-4">
                <div className="w-56 h-16 bg-slate-100 rounded-lg"></div>
                <div className="w-56 h-16 bg-slate-100 rounded-lg"></div>
              </div>
              <div className="flex mt-4 gap-4">
                <div className="w-56 h-16 bg-slate-100 rounded-lg"></div>
                <div className="w-56 h-16 bg-slate-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 w-full border-t border-gray-300 flex">
          <div className="border-t-2 border-black  inline-block">Description</div>
          <div className="border-t-2 border-transparent  inline-block ml-4">Reviews</div>
        </div>
        <div className="mt-20 flex flex-col">
          <h1 className="text-[40px] font-medium text-[#2b2f38] mb-5">Related Products</h1>
          <div className="grid grid-cols-4 mr-auto">
            {similarProducts.slice(0, 4).map((product: Product) => (
              <div key={product.id} className="max-w-xs flex flex-col py-4 rounded-md px-3">
                <span className="absolute translate-x-[20%] translate-y-[50%] shadow-xl">{product.discount > 0 && <span className="px-4 py-1 text-[#2b2f38] text-[13px] bg-white w-16 text-center h-6  rounded-[20px] shadow-xl">Sale!</span>}</span>
                <Link href={`/products/${product.id}`}>
                  <Image className="min-h-[235px] max-h-[235px]" style={{ objectFit: "cover" }} src={product.image} alt={product.name} width={235} height={235} />
                </Link>
                <span className="text-[#5d6167] text-[13px] my-[6px]">{product.category}</span>
                <span className=" font-medium text-[#2b2f38]">{product.name}</span>
                <span className="flex gap-[2px] mt-1 mb-2">{product.rating}</span>
                <span className="font-bold">{product.discount > 0 ? (<span><del className="text-[#aaacaf] text-sm">${product.price}.00</del> <span className="text-[#5d6167] text-sm">${product.price - (product.price * product.discount / 100)}</span></span>) : (<span className="text-[#5d6167] text-sm">${product.price}.00</span>)}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
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
