/*
TD Testimonials
Interested image? 
Responsive 
Browser compatibale 
Checkoutpage  (Stripe)
Cartsytem/useContext 
Productpage (params: id)
Loginsystem OAuth pw&email pb  
Security 
Categorypage 
Productfilter 
*/
import Image from 'next/image'
import getAllProducts from '@/lib/getAllProducts'
import Hero from './components/Hero'
import Link from 'next/link'
import { BsStarHalf, BsStarFill, BsStar, BsBox2Fill, BsArrowRight } from 'react-icons/bs'
import { RiPlantFill } from 'react-icons/ri'
import { MdPhoneEnabled } from 'react-icons/md'
import { Product } from '@/types'

const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill className="h-[14px] text-[#2b2f38]" />);
  }

  if (halfStar) {
    stars.push(<BsStarHalf className="h-[14px] text-[#2b2f38]" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar className="h-[14px] text-[#2b2f38]" />);
  }

  return stars;
};

export default async function Home() {
  const productsData = await getAllProducts()
  const products = productsData.items

  return (
    <>
      <Hero />
      <div className="flex my-16 w-7/12 mx-auto justify-between">
        <div className="w-1/3 h-[55px] flex">
          <RiPlantFill className="h-[27px] w-[27px] text-[#75c32c] my-auto" />
          <div className="ml-6">
            <div className="text-lg font-medium text-[#2b2f38]">Plants Collection</div>
            <div className="text-[#5d6167] mt-1">Any plants for your space</div>
          </div>
        </div>
        <div className="w-1/3 h-[55px] flex">
          <BsBox2Fill className="h-[27px] w-[27px] text-[#75c32c] my-auto" />
          <div className="ml-6">
            <div className="text-lg font-medium text-[#2b2f38]">Free Shipping</div>
            <div className="text-[#5d6167] mt-1">Free shipping on order</div>
          </div>
        </div>
        <div className="w-1/3 h-[55px] flex">
          <svg className="my-auto" width="27" height="27" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.7 10.6C24.7214 6.59338 20.6062 3.85 15.8511 3.85C9.168 3.85 3.75 9.28989 3.75 16M5.1 21.4C7.0786 25.4066 11.1938 28.15 15.9489 28.15C22.632 28.15 28.05 22.7101 28.05 16M11.85 21.4H3.75V29.5M28.05 2.5V10.6H19.95" stroke="#75C32C" strokeWidth="3" /></svg>
          <div className="ml-6">
            <div className="text-lg font-medium text-[#2b2f38]">Free 100% Money Back</div>
            <div className="text-[#5d6167] mt-1">If the item didn&apos;t suit you</div>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto mt-10 mb-24 flex justify-between">
        <div className='w-1/3 bg-[#efeef4] rounded-xl flex flex-col shadow-lg'>
          <Image src="https://images.unsplash.com/photo-1681381809162-fa8188546501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt={products[0].name} width={280} height={280} className="mx-auto" />
          <div className="mt-10 w-[280px] flex flex-col mx-6">
            <span className="font-medium text-xl text-[#2b2f38]">Beautiful Plant Varieties</span>
            <span className="text-[15px] text-[#5d6167] mt-3 mb-6">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            <span className="text-sm font-semibold text-[#fc5f5f] pb-8 flex">SEE COLLECTION <BsArrowRight className=" stroke-[1.2] w-4 h-4 my-auto ml-2" /></span>
          </div>
        </div>
        <div className='w-1/3 mx-10 bg-[#eeeeee] rounded-xl shadow-lg'>
          <Image src="https://images.unsplash.com/photo-1681381809110-91249259f4e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt={products[0].name} width={280} height={280} className="mx-auto" />
          <div className="mt-10 w-[280px] flex flex-col mx-6">
            <span className="font-medium text-xl text-[#2b2f38]">Trendy Cactus Varieties</span>
            <span className="text-[15px] text-[#5d6167] mt-3 mb-6">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            <span className="text-sm font-semibold text-[#fc5f5f] pb-8 flex">SEE COLLECTION <BsArrowRight className=" stroke-[1.2] w-4 h-4 my-auto ml-2" /></span>
          </div>
        </div>
        <div className='w-1/3 bg-[#eeeeee] rounded-xl shadow-lg'>
          <Image src="https://images.unsplash.com/photo-1681381809162-fa8188546501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt={products[0].name} width={280} height={280} className="mx-auto" />
          <div className="mt-10 w-[280px] flex flex-col mx-6">
            <span className="font-medium text-xl text-[#2b2f38]">Gardening Accessories</span>
            <span className="text-[15px] text-[#5d6167] mt-3 mb-6">Luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
            <span className="text-sm font-semibold text-[#fc5f5f] pb-8 flex">SEE COLLECTION <BsArrowRight className=" stroke-[1.2] w-4 h-4 my-auto ml-2" /></span>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto mt-56 text-center">
        <h1 className="text-[40px] font-medium text-[#2b2f38] mb-5">Featured Plants</h1>
        <h3 className="text-[#5d6167] mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
      <div className="w-8/12 grid grid-cols-4 mx-auto">
        {products.map((product: Product) => (
          <div key={product.id} className="max-w-xs flex flex-col py-4 rounded-md px-3">
            <span className="absolute translate-x-[20%] translate-y-[50%] shadow-xl">{product.discount > 0 && <span className="px-4 py-1 text-[#2b2f38] text-[13px] bg-white w-16 text-center h-6  rounded-[20px] shadow-xl">Sale!</span>}</span>
            <Link href={`/products/${product.id}`}>
              <Image className="min-h-[360px] max-h-[360px]" style={{ objectFit: "cover" }} src={product.image} alt={product.name} width={360} height={360} />
            </Link>
            <span className="text-[#5d6167] text-[13px] my-[6px]">{product.category}</span>
            <span className=" font-medium text-[#2b2f38]">{product.name}</span>
            <span className="flex gap-[2px] mt-1 mb-2">{getStars(product.rating)}</span>
            <span className="font-bold">{product.discount > 0 ? (<span><del className="text-[#aaacaf] text-sm">${product.price}.00</del> <span className="text-[#5d6167] text-sm">${product.price - (product.price * product.discount / 100)}</span></span>) : (<span className="text-[#5d6167] text-sm">${product.price}.00</span>)}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link href="/products" className="mx-auto"><button className="font-semibold text-sm text-white bg-[#fc5f5f] h-10 w-40 rounded-full my-10 mx-auto">VIEW MORE</button></Link>
      </div>
      <section className="w-8/12 mx-auto mt-36 mb-48 flex">
        <div className="flex flex-col max-w-xs">
          <div className=" text-2xl font-medium text-[#2b2f38] w-[320px]">Need help in choosing the right plants?</div>
          <div className="flex mt-10 text-[#fc5f5f]"><MdPhoneEnabled className="my-auto" /><span className="ml-2 font-medium tracking-wider text-xs">ASK FOR HELP</span></div>
        </div>
        <div className="flex flex-col text-[#5d6167] ml-10 max-w-2xl">
          <div className="mb-6">Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</div>
          <div>Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</div>
        </div>
      </section>
      <section className="w-8/12 mx-auto">
        <div className="flex">
            <div>1</div>
            <div>2</div>
        </div>
      </section>
      <section className="w-8/12 mx-auto">Interested? Shop This Plant Collection!</section>
    </>
  )
}

