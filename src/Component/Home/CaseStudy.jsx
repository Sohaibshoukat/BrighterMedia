import React from 'react'

const CaseStudy = () => {
    return (
        <div className='bg-[#f4f4f4] py-20'>
            <div className="w-[90%] m-auto">
                <div className="flex flex-col gap-6 font-pop">
                    <h1 className='max-w-[70%] lg:max-w-[30%] text-center m-auto text-black font-bold text-5xl'>Our recent Case Studies</h1>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col lg:flex-row gap-4 lg:max-h-[400px]">
                            <div className="basis-[35%] group relative rounded-2xl ease-in-out duration-300">
                                <div className='w-[100%] h-[100%] rounded-2xl overflow-hidden'>
                                    <img src="./Assets/CaseStudy/image1.png" alt="" className='w-[100%] h-[100%] rounded-2xl object-cover group-hover:scale-105 ease-in-out duration-300' />
                                </div>
                                <div className="absolute px-6 pt-10 font-pop pb-10 w-[100%] bottom-0 z-10">
                                    <h2 className='text-white font-semibold text-3xl'>Passenger</h2>
                                    <p className='text-sm  lg:text-lg font-normal text-white'>Increased Revenue by 10x with Paid Social & Search - Award Winning Campaign</p>
                                </div>
                                <div className="absolute bottom-0 left-0 z-0 w-full h-[80%] bg-gradient-to-t from-black">
                                </div>
                            </div>
                            <div className="basis-[75%] group relative rounded-2xl ease-in-out duration-300">
                                <div className='w-[100%] h-[100%] rounded-2xl overflow-hidden'>
                                    <img src="./Assets/CaseStudy/image2.png" alt="" className='w-[100%] h-[100%] rounded-2xl object-cover group-hover:scale-105 ease-in-out duration-300' />
                                </div>
                                <div className="absolute px-6 pt-10 font-pop pb-10 w-[100%] bottom-0 z-10">
                                    <h2 className='text-white font-semibold text-3xl'>Bio Oil</h2>
                                    <p className='text-sm lg:text-lg font-normal text-white'>Reached 9.4M Users & 1.4M Views in a Video-First Brand Positioning Campaign</p>
                                </div>
                                <div className="absolute bottom-0 left-0 z-0 w-full h-[80%] bg-gradient-to-t from-black">
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:max-h-[400px]">
                            <div className="basis-[50%] group relative rounded-2xl ease-in-out duration-300">
                                <div className='w-[100%] h-[100%] rounded-2xl overflow-hidden'>
                                    <img src="./Assets/CaseStudy/image3.png" alt="" className='w-[100%] h-[100%] rounded-2xl object-cover group-hover:scale-105 ease-in-out duration-300' />
                                </div>
                                <div className="absolute px-6 pt-10 font-pop pb-10 w-[100%] bottom-0 z-10">
                                    <h2 className='text-white font-semibold text-3xl'>Godiva</h2>
                                    <p className='text-sm lg:text-lg font-normal text-white'>Increased Engagements by 97% YOY & 5.76% Engagement Rate</p>
                                </div>
                                <div className="absolute bottom-0 left-0 z-0 w-full h-[80%] bg-gradient-to-t from-black">
                                </div>
                            </div>
                            <div className="basis-[50%] group relative rounded-2xl ease-in-out duration-300">
                                <div className='w-[100%] h-[100%] rounded-2xl overflow-hidden'>
                                    <img src="./Assets/CaseStudy/image4.png" alt="" className='w-[100%] h-[100%] rounded-2xl object-cover group-hover:scale-105 ease-in-out duration-300' />
                                </div>
                                <div className="absolute px-6 pt-10 font-pop pb-10 w-[100%] bottom-0 z-10">
                                    <h2 className='text-white font-semibold text-3xl'>Olivias</h2>
                                    <p className='text-sm lg:text-lg font-normal text-white'>Reached 6.4M Users Organically & Hit 100k Followers</p>
                                </div>
                                <div className="absolute bottom-0 left-0 z-0 w-full h-[80%] bg-gradient-to-t from-black">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy