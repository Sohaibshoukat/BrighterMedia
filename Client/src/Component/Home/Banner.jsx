import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import { BrandData } from '../../Data/Social';

const Banner = () => {
    return (
        <>
            <div className='py-10 w-[90%] flex flex-col-reverse md:flex-row justify-between gap-8 m-auto relative'>
                <div className="basis-[60%] flex font-pop text-black flex-col gap-4">
                    <h2>Brighter Media</h2>
                    <h1 className='text-4xl md:text-4xl lg:text-7xl leading-[3rem] md:leading-[3rem] lg:leading-[5rem] font-bold'>The results-driven <br /> <span className='text-primary'>Social first agency</span> <br /> you've been looking for</h1>
                    <div className="flex flex-row gap-2">
                        <a href={"#service"}>
                            <div className="flex flex-row hover:flex-row-reverse ease-in-out duration-300">
                                <div className='
                                bg-black font-pop 
                                text-white flex items-center gap-2 
                                text-sm lg:text-lg w-fit rounded-full font-medium py-2 px-2 md:px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                    Browse Our Services
                                </div>
                                <div className='
                                bg-black font-pop 
                                text-white flex items-center gap-2 
                                text-sm lg:text-lg w-fit rounded-full font-medium py-2 px-2 lg:px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </a>
                        <a href={"#aboutus"}>
                            <div className="flex flex-row group ease-in-out duration-300">
                                <div className='
                                bg-transparent font-pop 
                                text-black flex items-center gap-2 
                                text-sm lg:text-lg w-fit rounded-full font-medium py-2 px-2 lg:px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                    Meet The Team
                                </div>
                                <div className='
                                bg-transparent font-pop group-hover:translate-x-3
                                text-black flex items-center gap-2 
                                text-sm lg:text-lg w-fit rounded-full font-medium
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="basis-[40%] w-[100%] h-96">
                    <img src="./Assets/BannerMobile.png" alt="" className='object-contain h-[100%] md:h-[200px] lg:h-[100%] w-[100%]' />
                </div>
            </div>
            <div className="w-[90%] m-auto flex flex-col md:flex-row gap-10 mt-10 mb-20 items-center">
                <div className='text-center md:text-left basis-[20%] lg:basis-[7%]'>
                    <h2 className='text-base font-pop font-normal'>Brands that trust us</h2>
                </div>
                <Marquee direction="right" speed={50} gradientWidth={500}>
                    {BrandData.map((item, index) => (
                        <div className='w-[75px] md:w-[100px] mx-12' key={index}>
                            <img src={item.src} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}

export default Banner