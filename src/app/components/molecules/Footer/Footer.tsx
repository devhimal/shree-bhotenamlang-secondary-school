import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import Container from '../../atoms/Container/Container'
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"

import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <SectionHeading><div></div></SectionHeading>
            <div className="footer bg-slate-600 w-full py-12">
                <Container classNames="text-black">
                    <div className="footer__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <div className="intro flex flex-col gap-5 justify-start">
                                <div className="flex flex-col gap-2">
                                <h1 className='text-lg font-semibold text-slate-200'>Shree Bhotenamlang Secondary School</h1>
                                    <div className='hover:text-[#48823E] transition-colors duration-200 flex items-center gap-5'>
                                        <BiSolidPhoneCall className='w-10 h-10 hover:text-[#48823E] transition-colors duration-200 '></BiSolidPhoneCall>
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>+97700000000</p>
                                    </div>
                                    <div className='hover:text-[#48823E] transition-colors duration-200 flex items-center gap-5'>
                                        <AiOutlineMail className='w-10 h-10 hover:text-[#48823E] transition-colors duration-200'></AiOutlineMail>
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>asdf@gmail.com</p>
                                        
                                    </div>
                                    <div className='flex items-center gap-5 hover:text-[#48823E] transition-colors duration-200'>
                                        <MdLocationOn className='w-10 h-10' />
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>Bhotenamlang, Sindhupalchok, Nepal</p>
                                    </div>
                                </div>
                                
                         

                            <div>
                                <h1 className='text-lg font-semibold text-slate-200'>Social</h1>
                                <div className="flex gap-7 mt-2">
                                    <div className="hover:text-[#48823E] transition-colors duration-200 flex flex-col gap-[5px]">
                                        <a href="https://www.facebook.com/profile.php?id=61558616203473" target='_blank'><AiFillFacebook className='w-full h-10' /></a>
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>Facebook</p>
                                    </div>
                                    <div className="hover:text-[#48823E] transition-colors duration-200 flex flex-col gap-[5px]">
                                       <AiFillInstagram className='w-full h-10' />
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>Instagram</p>
                                    </div>
                                    <div className="hover:text-[#48823E] transition-colors duration-200 flex flex-col gap-[5px]">
                                       <AiFillLinkedin className='w-full h-10' />
                                        <p className='text-slate-300 hover:text-[#48823E] transition-colors duration-200'>Linkedin</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="about flex flex-col gap-2">
                            <h1 className='text-lg font-semibold text-slate-200'>IMPORTANT LINKS</h1>
                            <div className="links text-slate-300 flex flex-col gap-[5px]">
                                <Link href='/about' className='hover:text-[#48823E] transition-colors duration-200'>About</Link>
                                <Link href='/sports' className='hover:text-[#48823E] transition-colors duration-200'>Sports</Link>
                                <Link href='/scholarships' className='hover:text-[#48823E] transition-colors duration-200'>Scholarships</Link>
                                <Link href='/events' className='hover:text-[#48823E] transition-colors duration-200'>Events</Link>
                                <Link href='/team' className='hover:text-[#48823E] transition-colors duration-200'>Team</Link>
                            </div>

                        </div>
                        <div className="courses flex flex-col gap-2">
                            <h1 className='text-lg font-semibold text-slate-200'>SPORT</h1>

                            <div className="links text-slate-300 flex flex-col gap-[5px]">
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Workshop & Training</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Science Lab</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Computer Lab</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Library</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Playground</Link>
                            </div>

                        </div>

                        <div className="student flex flex-col gap-2">
                            <h1 className='text-lg font-semibold text-slate-200'>STUDENT CENTER</h1>
                            <div className="links text-slate-300 flex flex-col gap-[5px]">
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Notice Board</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Articles</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Gallery</Link>
                                <Link href='/' className='hover:text-[#48823E] transition-colors duration-200'>Club</Link>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer