import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import Container from '../../atoms/Container/Container'
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"

const Footer = () => {
    return (
        <>
            <SectionHeading><div></div></SectionHeading>
            <div className="footer bg-slate-600 w-full py-10">
                <Container classNames="text-black">
                    <div className="footer__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <div className="intro">
                            <div>
                                <h1 className='text-lg font-semibold text-slate-200'>Shree Bhotenamlang Secondary School</h1>
                                <div>
                                    <a href="tel:+97700000000" target="_blank" className='flex items-center gap-2'><BiSolidPhoneCall className='w-9 h-7' /><p className='text-slate-300'>+977 00000000</p>
                                    </a>

                                </div>
                                <div>
                                    <a href="mailto:asdf@gmail.com" target="_blank" className='flex items-center gap-2'><AiOutlineMail className='w-9 h-7' /><p className='text-slate-300'>asdf@gmail.com</p></a>

                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdLocationOn className='w-9 h-7' />
                                    <p className='text-slate-300'>Bhotenamlang, Sindhupalchok, Nepal</p>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h1 className='text-slate-200'>Social</h1>
                                <div className="flex gap-5 mt-2">
                                    <div className="">
                                        <a href="https://facebook.com/" target='_blank'><AiFillFacebook className='w-full h-7' /></a>
                                        <p className='text-slate-300'>Facebook</p>
                                    </div>
                                    <div className="">
                                        <a href="grfgf" target='_blank'><AiFillInstagram className='w-full h-7' /></a>
                                        <p className='text-slate-300'>Instagram</p>
                                    </div>
                                    <div className="">
                                        <a href="rgfgf" target='_blank'><AiFillLinkedin className='w-full h-7' /></a>
                                        <p className='text-slate-300'>Linkedin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <h1 className='text-lg font-semibold text-slate-200'>ABOUT US</h1>
                            <div className="links text-slate-300">
                                <p>About Us</p>
                                <p>Funding and Parters</p>
                                <p>Management Team</p>
                                <p>Teachers</p>
                                <p>Massage of Headsir</p>
                                <p>Alumni</p>
                            </div>

                        </div>
                        <div className="courses">
                            <h1 className='text-lg font-semibold text-slate-200'>EDUCATION & SPORT</h1>

                            <div className="links text-slate-300">
                                <p>Workshop & Training</p>
                                <p>Science Lab</p>
                                <p>Computer Lab</p>
                                <p>Library</p>
                                <p>Playground</p>
                                <p>Yoga & Medidation</p>
                                <p>Karate</p>
                            </div>

                        </div>

                        <div className="student">
                            <h1 className='text-lg font-semibold text-slate-200'>STUDENT CENTER</h1>
                            <div className="links text-slate-300">
                                <p>Notice Board</p>
                                <p>News & Events</p>
                                <p>Blogs & Article</p>
                                <p>Gallery</p>
                                <p>House & Club</p>
                                <p>Student Success Story</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer