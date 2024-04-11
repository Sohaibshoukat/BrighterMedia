/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SocialData } from '../Data/Social'
import { Addresses, NavMenu, OurService } from '../Data/Navigation'


const Footer = () => {
    const SocialMedia = [
        {
            Title: "Facebook",
            Icon: FaFacebook,
            Link: ""
        },
        {
            Title: "Instagram",
            Icon: FaInstagram,
            Link: ""
        },
        {
            Title: "Youtube",
            Icon: FaYoutube,
            Link: ""
        },
        {
            Title: "Twitter",
            Icon: FaTwitter,
            Link: ""
        }
    ]
    return (
        <>
            <div className='bg-white relative py-6'>
                <div className="bg-black absolute h-[80%] lg:h-[60%] w-[100%] -z-0 bottom-0"></div>
                <div className="relative z-10">
                    <div className='w-[90%] lg:w-[80%] m-auto relative'>
                        <div className='absolute -top-8 -left-8'>
                            <svg viewBox="0 0 35 33" class="fill-current transition text-black w-8 h-6 | lg:w-9 lg:h-8">
                                <path d="M.107 19.722a5.088 5.088 0 0 1 1.617-.084c2.663.763 5.34 1.396 7.927 2.372 3.876 1.473 7.713 3.052 11.444 4.837a19.71 19.71 0 0 1 4.204 3.052 1.732 1.732 0 0 1 .374 1.633 1.8 1.8 0 0 1-1.564.64 15.77 15.77 0 0 1-3.754-1.22 691.449 691.449 0 0 1-14.686-7.301c-1.93-1-3.785-2.136-5.669-3.212l.107-.717ZM16.708 0c.539.134 1.053.35 1.526.64 2.052 1.84 4.173 3.632 6.05 5.647 2.823 3.051 5.547 6.172 8.133 9.414a20.022 20.022 0 0 1 2.41 4.623 1.755 1.755 0 0 1-.396 1.633 1.8 1.8 0 0 1-1.686-.114 16.124 16.124 0 0 1-2.853-2.77 725.989 725.989 0 0 1-9.919-13.107c-1.289-1.732-2.449-3.578-3.662-5.34L16.708 0Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 bg-primary rounded-2xl">
                            <div className="flex basis-[50%] flex-col gap-4 px-8 justify-end pb-10">
                                <h1 className='font-pop text-3xl md:text-4xl lg:text-6xl mt-6 md:mt-0 font-bold text-black'>Don’t be <span className='text-white'>sheepish</span> let’s talk</h1>
                                <Link to={"/contact"}>
                                    <div className="flex flex-row hover:flex-row-reverse justify-start w-fit ease-in-out duration-1000">
                                        <div className='
                                bg-black font-pop
                                text-white flex items-center gap-2
                                text-lg w-fit rounded-full font-normal py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                            Let's Chat
                                        </div>
                                        <div className='
                                bg-black font-pop
                                text-white flex items-center gap-2
                                text-lg w-fit rounded-full font-normal py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="basis-[50%] w-[100%] h-[300px] md:h-[350px] lg:h-[500px]">
                                <img src="./Assets/footer.png" alt="" className='rounded-bl-2xl md:rounded-bl-none md:rounded-tr-2xl object-cover w-[100%] h-[100%] rounded-br-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className="bg-black font-pop text-white px-20 py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-between">
                        <div className="basis-[33.33%] flex flex-col gap-4">
                            <h3>Stay in touch with the herd and receive up to date insights, strategies and news.</h3>
                            <div className="flex flex-row">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    class='max-w-220 mx-auto bg-gray-700 py-2 px-4 placeholder-text-slate-200 rounded-full text-lg'
                                />
                                <div className='
                                bg-white font-pop
                                text-black flex items-center gap-2
                                text-lg w-fit rounded-full font-normal py-2 px-3
                                hover:bg-primary  duration-300 ease-in-out hover:scale-95
                            '>
                                    <FaArrowRight />
                                </div>
                            </div>
                            <img src="./Logo.png" alt="" className='w-[75px]' />
                            <div className="flex flex-row gap-1">
                                {SocialData.map((item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="bg-white p-2 rounded-full text-xl">
                                        <Link to={item.LINK}>
                                            <item.ICON className='text-black/70 text-2xl' />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="basis-[20%] ml-4 sm:ml-6 md:ml-8">
                            <h4 className='font-pop text-sm text-gray-400 mb-6'>Our Services</h4>
                            <div className="flex flex-col gap-1 ">
                                {OurService.map((item) => (
                                    <Link to={item.Link} onClick={() => {
                                        setDisplay(true);
                                        setTimeout(() => {
                                            setDisplay(false)
                                        }, 50);
                                    }}>
                                        <h1 className={`
                                            font-normal text-base py-0 hover:border-b-2 border-black
                                            font-pop ease-in-out duration-300
                                            ${window.location.pathname === item.Link ? "border-b-2" : "text-white"}`
                                        }
                                        >
                                            {item.Name}
                                        </h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="basis-[20%]">
                            <h4 className='font-pop text-sm text-gray-400 mb-6'>Company</h4>
                            <div className="flex flex-col gap-1">
                                {NavMenu.map((item) => (
                                    <Link to={item.Link} onClick={() => {
                                        setDisplay(true);
                                        setTimeout(() => {
                                            setDisplay(false)
                                        }, 50);
                                    }}>
                                        <h1 className={`
                                            font-normal text-base py-0 hover:border-b-2 border-black
                                            font-pop ease-in-out duration-300
                                            ${window.location.pathname === item.Link ? "border-b-2" : "text-white"}`
                                        }
                                        >
                                            {item.Name}
                                        </h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="basis-[20%]">
                            <h4 className='font-pop text-sm text-gray-400 mb-6'>Don't be a stranger</h4>
                            <div className="flex flex-col gap-2">
                                {Addresses.map((item, index) => (
                                    <div className='flex flex-row gap-2' key={index}>
                                        <item.Icon className='text-primary text-2xl' />
                                        <h1 className={`
                                            font-normal text-base py-0 hover:border-b-2 border-black
                                            font-pop ease-in-out duration-300
                                            ${window.location.pathname === item.Link ? "border-b-2" : "text-white"}`
                                        }
                                        >
                                            {item.Name}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex flex-row justify-between font-pop text-sm text-gray-500 px-20">
                        <div className="flex flex-row gap-6">
                            <h2>©2024 The Brighter Media </h2>
                            <h2>All rights reserved</h2>
                            <h2>Privacy Policy</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] text-center bg-primary py-2 text-xs  md:text-sm'>
                <p className='font-Para'>© Copyright 2024 Brighter Media LTD . All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer
