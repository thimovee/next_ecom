import logo from "../images/logo.svg"
import Image from 'next/image'
import {BsHandbag} from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className="h-[50px] w-8/12 mx-auto z-40 my-4 flex justify-between text-[#2b2f38]">
        <div className="flex">
            <Image src={logo} width={50} height={50} alt='Logo'/>
            <span className="my-auto ml-2 text-xl font-medium text-[#2b2f38]">Simply Natural</span>
        </div>
        <div className="flex my-auto">
            <span>Home</span>
            <span>Store</span>
            <span>About us</span>
            <span>Contact Us</span>
            <span>Login</span>
            <button><BsHandbag className="w-7 h-7 mr-1"/></button>
        </div>
    </nav>
  )
}

export default Navbar