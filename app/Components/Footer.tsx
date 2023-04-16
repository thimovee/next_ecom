import Image from 'next/image'
import logo from "../images/logo.svg"
import { MdPhoneEnabled } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { GoMail } from 'react-icons/go'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="w-full mx-auto flex flex-col">
            <div className="w-8/12 h-60 mx-auto flex justify-between mb-14 mt-32">
                <div className="w-1/4 text-center">
                    <Image src={logo} width={95} height={95} alt='Logo' className="mx-auto mb-6" />
                    <span className="text-2xl font-bold">Simply Natural</span>
                    <div className="mx-auto w-[184px] mt-4 text-white">
                        <button className="bg-[#4e5768] rounded-sm w-10 h-10 mr-2">
                            <FaFacebookF className="w-5 h-5 mx-auto" />
                        </button>
                        <button className="bg-[#4e5768] rounded-sm w-10 h-10">
                            <FaInstagram className="w-5 h-5 mx-auto" />
                        </button>
                        <button className="bg-[#4e5768] rounded-sm w-10 h-10 mx-2">
                            <FaTwitter className="w-5 h-5 mx-auto" />
                        </button>
                        <button className="bg-[#4e5768] rounded-sm w-10 h-10">
                            <FaLinkedinIn className="w-5 h-5 mx-auto" />
                        </button>
                    </div>
                </div>
                <div className="w-1/4">
                    <span className="text-[#2b2f38] text-xl">Quick Links</span>
                    <ul className="mt-8 text-[#5d6167]">
                        <li>Introduction</li>
                        <li>Know more about us</li>
                        <li>Visit store</li>
                        <li>Let&apos;s connect</li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <span className="text-[#2b2f38] text-xl">Important Links</span>
                    <ul className="mt-8 text-[#5d6167]">
                        <li>Privacy Policy</li>
                        <li>Shipping Details</li>
                        <li>Terms & Conditions</li>
                        <li>Media Kit</li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <span className="text-[#2b2f38] text-xl">Get In Touch With Us</span>
                    <ul className="mt-8 text-[#5d6167]">
                        <li className="flex"><IoLocationSharp className="my-auto mr-2" />1234 AB Tiel</li>
                        <li className="flex"><MdPhoneEnabled className="my-auto mr-2" />+31612345678</li>
                        <li className="flex"><GoMail className="my-auto mr-2" />simplynatural@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between w-8/12 text-[#5d6167] py-5 mx-auto border-t border-gray-300">
                <span>Copyright © 2023 Simply Natural</span>
                <span>Powered by Simply Natural</span>
            </div>
        </footer>
    )
}

export default Footer