import React from 'react'
import Image from 'next/image'
// Nu nog static
const Testimonials = () => {
    return (
        <section>
            <div className="w-8/12 mx-auto flex">
                <div>
                    <div className="text-[40px] font-medium mb-5">Testimonials</div>
                    <div className="text-[#5d6167] mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="flex max-h-[320px]">
                        <Image src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" alt="a" width={230} height={290} className="max-w-[300px] object-cover rounded-t-2xl rounded-r-2xl" />
                        <div className="max-w-[300px] ml-12 my-auto">
                            <div className="text-[#5d6167] mb-4">
                                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.
                            </div>
                            <div className="font-medium text-lg mb-1">Sarah Jones</div>
                            <div className="text-[#5d6167]">Interior Designer</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex max-h-[320px] ml-20">
                        <Image src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" alt="a" width={230} height={290} className="max-w-[300px] object-cover rounded-t-2xl rounded-r-2xl" />
                        <div className="max-w-[300px] ml-12 my-auto">
                            <div className="text-[#5d6167] mb-4">
                                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.
                            </div>
                            <div className="font-medium text-lg mb-1">Sarah Jones</div>
                            <div className="text-[#5d6167]">Interior Designer</div>
                        </div>
                    </div>
                    <div className="flex max-h-[320px] mt-12 ml-20">
                        <Image src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" alt="a" width={230} height={290} className="max-w-[300px] object-cover rounded-t-2xl rounded-r-2xl" />
                        <div className="max-w-[300px] ml-12 my-auto">
                            <div className="text-[#5d6167] mb-4">
                                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.
                            </div>
                            <div className="font-medium text-lg mb-1">Sarah Jones</div>
                            <div className="text-[#5d6167]">Interior Designer</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials