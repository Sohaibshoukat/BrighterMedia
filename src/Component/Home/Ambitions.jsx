import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import { IoIosSend } from 'react-icons/io';

const Ambitions = () => {

    const Data = [
        {
            img: "./Assets/Ambition/image1.png",
            head: "We blend creative and performance",
            Para: [
                "There aren't many creative agencies that understand performance and performance agencies that understand creative.",
                "This is where we're different.",
                "Whether we're helping to grow your Social communities, deliver performance-driven Paid Media, produce social-first Creative or Influencer campaigns - we craft strategies based on your brand, business and goals, all backed by data and insight."
            ]
        },
        {
            img: "./Assets/Ambition/image2.png",
            head: "We're multi award-winning",
            Para: [
                "We know awards aren't the be-all and end-all.",
                "But we're proud of what we've achieved and the quality of work our team produces for our clients.",
                "We've won awards across all of our departments, with some key highlights including:"
            ],
            Point: [
                "Best Large Social Agency",
                "Best Direct Response Campaign",
                "Best Integrated Paid Media Campaign",
                "Best Use of Facebook & Instagram Ads"
            ]
        }
    ]
    const social = [
        "", "", "", ""
    ]

    return (
        <>
            <div className='w-[90%] md:w-[90%] m-auto mt-40'>
                <h1 className='font-pop mb-10 text-3xl font-bold text-center max-w-[90%] m-auto lg:max-w-[40%]'>We grow ambitious brands with Social, Paid, Creative and Influencer</h1>
                <div className="flex flex-col gap-10">
                    {Data.map((item, index) => (
                        <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : "lg:flex-row"}  gap-14 justify-between items-center`}>
                            <div className="basis-[40%]">
                                <img src={item.img} alt="" className='w-[100%] h-[100%] rounded-2xl' />
                            </div>
                            <div className="basis-[50%] font-pop relative">
                                <div className="flex font-pop flex-col gap-10">
                                    <h2 className='font-bold text-3xl'>{item.head}</h2>
                                    {item.Para.map((item2, index2) => (
                                        <p key={index2} className={'text-lg'}>{item2}</p>
                                    ))}
                                    <div className="flex flex-col gap-2">
                                        {item?.Point?.map((item2, index2) => (
                                            <div className="flex flex-row items-center gap-2" key={index2}>
                                                <img src="https://thesocialshepherd.com/dist/images/tick.svg" alt="" className='w-[20px] ' />
                                                <p>{item2}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a href={"#service"}>
                                        <div className="flex flex-row hover:flex-row-reverse ease-in-out duration-300 w-fit">
                                            <div className='
                                bg-black font-pop 
                                text-white flex items-center gap-2 
                                text-lg w-fit rounded-full font-medium py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                                See Our Services
                                            </div>
                                            <div className='
                                bg-black font-pop 
                                text-white flex items-center gap-2 
                                text-lg w-fit rounded-full font-medium py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[100%] h-[100%] my-10">
                <Marquee direction="right" speed={50} gradientWidth={500}>
                    {social.map((item, index) => (
                        <div className='flex items-center flex-row gap-2 mx-4' key={index}>
                            <IoIosSend className={'text-primary text-6xl'}/>
                            <h2 className='font-pop font-medium text-5xl'>Let's talk social</h2>
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}

export default Ambitions