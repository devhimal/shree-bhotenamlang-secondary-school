"use client"

import React, { useState } from "react"
import Container from "../../atoms/Container/Container"
import { NavItems } from "@/app/helpers/helpers"
import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci"
import { MdClose } from "react-icons/md"

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false)

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <Container classNames={nav ? "fixed bg-black z-50" : "fixed z-50"}>
      <nav className="bg-transparent py-8 text-xl flex justify-between w-full uppercase">
        <div>
          <h1 className="font-extrabold text-sm tracking-wide md:text-xl ">
            Shree Bhotenamlang Secondary School
          </h1>
        </div>
        <div onClick={handleNav} className="flex md:hidden">
          {nav ? <MdClose size={30} /> : <CiMenuBurger size={30} />}
        </div>
        <ul className="hidden md:flex gap-4 justify-center items-center">
          {NavItems.map((item, index) => (
            <li key={index} className="capitalize">
              <Link href={`#${item}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* mobile app */}
        <ul
          className={
            nav
              ? "fixed md:hidden z-50 pt-10 left-0 top-[100px] sm:top-[90px] px-8 flex flex-col gap-2 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000"
              : "ease-in-out w-[70%] duration-1000 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {NavItems.map((item, index) => (
            <li key={index} className="capitalize">
              <Link href={`#${item}`} onClick={handleNav}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
