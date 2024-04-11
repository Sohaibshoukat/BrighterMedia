import React, { useState } from 'react'
import { NavMenu } from '../Data/Navigation'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"

const Nav = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
    const [display, setDisplay] = useState(false)
    return (
        <>
            <div className="flex flex-row justify-between items-center py-2 md:py-4 px-6 md:px-8">
                <div className='md:basis-[25%]'>
                    <Link to={"/"} onClick={() => {
                        setDisplay(true);
                        setTimeout(() => {
                            setDisplay(false)
                        }, 50);
                    }}>
                        <img src="./Logo.png" alt="" className='w-[100px] md:w-[100px] h-[auto]' />
                    </Link>
                </div>
                <div className={`${display && 'hidden'} hidden xl:flex items-center gap-8 justify-between`}>
                    {NavMenu.map((item, index) => (
                        <a href={item.Link} onClick={() => {
                            setDisplay(true);
                            setTimeout(() => {
                                setDisplay(false)
                            }, 50);
                        }}>
                            <h1 className={`
                                font-normal text-lg py-0 px-4 hover:border-b-2 border-black
                                font-pop ease-in-out duration-300
                                ${window.location.pathname === item.Link ? "border-b-2" : "text-black"}`
                            }
                            >
                                {item.Name}
                            </h1>
                        </a>
                    ))}
                    <Link to={"/contact"}>
                        <div className="flex flex-row hover:flex-row-reverse ease-in-out duration-300">
                            <div className='
                                bg-primary font-pop
                                text-black flex items-center gap-2
                                text-lg w-fit rounded-full font-normal py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                Get In Touch
                            </div>
                            <div className='
                                bg-primary font-pop
                                text-black flex items-center gap-2
                                text-lg w-fit rounded-full font-normal py-2 px-4
                                hover:bg-accence  duration-300 ease-in-out
                            '>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <div className='hidden xl:block basis-[25%] '>
                </div> */}
                <div className='xl:hidden'>
                    <IoMdMenu className='text-4xl text-black font-extrabold' onClick={() => { setMobileMenu(true) }} />
                </div>
            </div>
            <div className={`${MobileMenu ? 'block RightOpenanimation' : 'hidden'} fixed z-50 xl:hidden top-0 bottom-0 left-0 right-0`}>
                <div className='z-10 relative bg-primary w-[100%] h-[100%] py-4 px-6 md:py-6 md:px-8'>
                    <IoClose className='absolute top-[0.75rem] md:top-[1.5rem] right-[15px] text-black text-4xl font-extrabold' onClick={() => { setMobileMenu(false) }} />
                    <div className="flex flex-col h-[100%]">
                        <div className='mb-20'>
                            <Link to={"/"} onClick={() => { setMobileMenu(false) }}>
                                <img src="./Logo.png" alt="" className='w-[100px] md:w-[100px] h-[auto]' />
                            </Link>
                        </div>
                        <div className='flex flex-col h-[100%] justify-center items-center mb-4'>
                            <div className={`flex flex-col gap-2 nd:gap-4 justify-center `}>
                                {NavMenu.map((item, index) => (
                                    <a href={item.Link} onClick={() => { setMobileMenu(false) }}>
                                        <h1 className={`
                                                font-pop text-black font-normal text-2xl md:text-4xl py-2 px-4 hover:bg-accence hover:text-primary
                                                ease-in-out duration-300 rounded-lg ${window.location.pathname == item.Link && "bg-accence text-primary"}
                                            `}>
                                                {item.Name}
                                        </h1>
                                    </a>
                                ))}
                                <Link to={"/contact"} className='xl:hidden md:block'>
                                    <div className="flex flex-row hover:flex-row-reverse ease-in-out duration-300">
                                        <div className='
                                            bg-black font-pop
                                            text-white flex items-center gap-2
                                            text-2xl md:text-4xl w-fit rounded-full font-normal py-2 px-4
                                            hover:bg-accence  duration-300 ease-in-out
                                        '>
                                            Get In Touch
                                        </div>
                                        <div className='
                                            bg-black font-pop
                                            text-white flex items-center gap-2
                                            text-2xl md:text-4xl w-fit rounded-full font-normal py-2 px-4
                                            hover:bg-accence  duration-300 ease-in-out
                                        '>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
