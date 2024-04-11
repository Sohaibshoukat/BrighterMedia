import React from 'react'
import { servicedata } from '../../Data/Service'

const Service = () => {
    return (
        <div className='bg-[#f4f4f4] py-20'>
            <div className="w-[90%] m-auto">
                <div className="flex flex-col gap-6 font-pop">
                    <h1 className='max-w-[30%] text-left text-black font-bold text-5xl'>Our full-service offering...</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {servicedata.map((item, index) => (
                            <div className="bg-white relative rounded-2xl">
                                <div className="bg-black h-3 object-cover w-[100%] rounded-t-3xl"></div>
                                <div className="flex flex-col font-pop gap-4 justify-between py-10 px-6 h-[100%]">
                                    <div className="flex flex-row items-center gap-2">
                                        <div className="bg-black rounded-xl p-4">

                                        </div>
                                        <h1 className='text-xl font-semibold'>{item.head}</h1>
                                    </div>
                                    <p className='text-base md:text-lg'>{item.para}</p>
                                    <div className="flex flex-col gap-2">
                                        {item?.Point.map((item2, index2) => (
                                            <div className="flex flex-row items-start gap-2" key={index2}>
                                                <img src="https://thesocialshepherd.com/dist/images/tick.svg" alt="" className='w-[20px] ' />
                                                <p className='text-sm'>{item2}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className='float-end bg-transparent border-2 border-black hover:bg-black text-black hover:text-white ease-in-out duration-300 py-2 text-center rounded-full'>Learn More About Social</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service