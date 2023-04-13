import hero from "../images/hero-bg.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="-mb-[800px]">
    <Image className="max-h-[720px] min-h-[720px] object-cover  rounded-b-[100px] -mt-[80px] -z-10 relative" src={hero} width={1920} height={1080} alt='Heroimage' />
    <div className="w-8/12 h-[658px] mx-auto  -translate-y-[100%]">
        <div className="max-w-[550px] flex flex-col mt-28">
        <span className='text-lg text-[#2b2f38] font-medium'>Best Qaulity Plants</span>
        <span className="text-[64px] text-[#2b2f38] font-medium">Amazing Variety Of Plants Starting At Just $6</span>
        <button className=" w-36 h-11 text-white font-semibold text-xs bg-[#fc5f5f] rounded-full mt-10">SHOP NOW</button>
    </div>
    </div>
    </div>

  )
}

export default Hero