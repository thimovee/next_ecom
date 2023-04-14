import logo from "../images/logo.svg"
import Image from 'next/image'
import {BsHandbag} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="h-[50px] w-8/12 mx-auto z-40 my-4 flex justify-between text-[#2b2f38]">
        <Link href="/">
        <div className="flex">
            <Image src={logo} width={50} height={50} alt='Logo'/>
            <span className="my-auto ml-2 text-xl font-medium text-[#2b2f38]">Simply Natural</span>
        </div>
        </Link>
        <div className="flex my-auto font-medium">
            <span className="mx-8 flex">Shop<MdKeyboardArrowDown className="ml-2 my-auto"/></span>
            <span>Blog</span>
            <span className="mx-8">About</span>
            <span>Contact</span>
        </div>
        <div className="flex my-auto font-medium">
            <span className="ml-20 mr-8">Login</span>
            <button><BsHandbag className="w-7 h-7"/></button>
        </div>
    </nav>
  )
}

export default Navbar