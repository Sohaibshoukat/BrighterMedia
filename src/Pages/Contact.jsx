import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='py-10 w-[90%] flex flex-col lg:flex-row justify-between gap-10 m-auto relative'>
            <div className="basis-[40%] flex font-pop text-black flex-col gap-4">
                <h2>Get in touch</h2>
                <h1 className='text-4xl md:text-4xl lg:text-7xl leading-[3rem] md:leading-[3rem] lg:leading-[5rem] font-bold'>Hey there! <br /> <span className='text-primary'>Let’s chat</span> <br /></h1>
                <div className="flex flex-col gap-4 font-pop">
                    <div className="flex flex-col gap-2">
                        <h2 className='text-lg md:text-2xl font-semibold'>Interested in working with us?</h2>
                        <p className='text-sm md:text-base font-light'>Or have a general enquiry? Fill in the form today, and our team will be in touch shortly.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className='text-lg md:text-2xl font-semibold'>Hate Forms?</h2>
                        <p className='text-sm md:text-base font-light'>If you’d prefer to email us directly, send a message to one of our regional offices:</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className='text-lg font-light'>UAE <span className='underline text-primary'>hello@brightermedia.me</span></p>
                    </div>
                </div>
            </div>
            <div className="basis-[50%] w-[100%]">
                <div className="bg-[#f4f4f4] rounded-2xl py-10 px-4 md:px-10 w-[100%] h-[100%] flex flex-col items-center">
                    <div className="flex flex-col gap-4 font-pop">
                        <div className="flex flex-col md:flex-row gap-2">
                            <input
                                type="text"
                                placeholder='Name*'
                                className='bg-white rounded-full py-3 px-4 text-base placeholder:text-black basis-[50%]'
                                required
                            />
                            <input
                                type="tel"
                                placeholder='Phone*'
                                className='bg-white rounded-full py-3 px-4 text-base placeholder:text-black basis-[50%]'
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder='Email Address*'
                            className='bg-white rounded-full py-3 px-4 text-base placeholder:text-black'
                            required
                        />
                        <div className="flex flex-col gap-2 my-2">
                            <p className='text-sm font-light'>Which region are you looking for support in?</p>
                            <div className="flex flex-row justify-between gap-1">
                                <div className="bg-white rounded-full w-full text-center pt-5 hover:border-primary border-2 border-transparent ease-in-out duration-300 py-2 px-2">
                                    UAE
                                </div>
                                <div className="bg-white rounded-full w-full text-center  hover:border-primary border-2 border-transparent ease-in-out duration-300 py-2 px-2">
                                    Middle East
                                </div>
                                <div className="bg-white rounded-full w-full text-center pt-5 hover:border-primary border-2 border-transparent ease-in-out duration-300 py-2 px-2">
                                    EUROPE
                                </div>
                                <div className="bg-white rounded-full w-full text-center pt-5 hover:border-primary border-2 border-transparent ease-in-out duration-300 py-2 px-2">
                                    US
                                </div>
                                <div className="bg-white rounded-full w-full text-center pt-5 hover:border-primary border-2 border-transparent ease-in-out duration-300 py-2 px-2">
                                    Asia
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 my-2">
                            <p className='text-sm font-light'>How did you hear about us? *</p>
                            <select name="" id="" className='bg-white rounded-full py-3 px-4 text-base placeholder:text-black basis-[50%]'>
                                <option value="">Choose a reason</option>
                                <option value="">Google Search</option>
                                <option value="">Refellow</option>
                                <option value="">Advertising</option>
                                <option value="">Code Call</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 my-2">
                            <p className='text-sm font-light'>How can we help? *</p>
                            <textarea name="" id="" cols="30" rows="5"
                            placeholder='Message *'
                                className='bg-white rounded-3xl py-3 px-4 text-base placeholder:text-black'
                            >
                            </textarea>
                        </div>
                        <p className='text-sm font-light'>By submitting this for I accept the Privacy Policy of this site.</p>
                        <button className='bg-black rounded-full p-3 px-6 text-white border-2 border-black hover:bg-transparent hover:text-black ease-in-out duration-300'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
