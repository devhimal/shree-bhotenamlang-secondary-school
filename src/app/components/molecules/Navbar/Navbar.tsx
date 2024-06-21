"use client"

import React, { useState, useEffect } from "react"
import Container from "../../atoms/Container/Container"
import { NavItems } from "@/app/helpers/helpers"
import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci"
import { MdClose } from "react-icons/md"

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false)
  const [scroll, setScroll] = useState(false)

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav)
  }

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed z-50 overflow-hidden w-full ${
        scroll ? "bg-[#48823E]" : "bg-transparent"
      } py-4 text-xl flex text-white w-full capitalize transition-all duration-500`}
    >
      <Container>
        <nav className="flex justify-between w-full">
          <div>
            <h1 className="font-extrabold tracking-wide text-xl">
              Shree Bhotenamlang S.S
            </h1>
          </div>
          <div
            onClick={handleNav}
            className="flex justify-center items-center md:hidden"
          >
            {nav ? <MdClose size={30} /> : <CiMenuBurger size={30} />}
          </div>
          <ul className="hidden md:flex justify-center gap-1 items-center">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="capitalize hover:text-black py-2 px-4 rounded-md hover:transition-all hover:duration-500"
              >
                <Link href={index === 3 ? `#${item.link}` : `${item.link}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile app */}
          {/* <div className={`${nav ? "w-full h-full bg-black" : "else"}`}> */}
          <ul
            className={`${
              nav
                ? "fixed md:hidden z-50 top-0 py-10 left-0 px-8 flex flex-col gap-4 w-[80%] h-full bg-[#48823E] ease-in-out duration-1000"
                : "ease-in-out w-[70%] duration-1000 fixed top-0 bottom-0 left-[-100%]"
            }`}
          >
            <div className="mb-4">
              <h1>Shree Bhotenamlang secondary School</h1>
            </div>
            {NavItems.map((item, index) => (
              <li key={index} className="capitalize">
                <Link
                  href={index === 3 ? `#${item.link}` : `${item.link}`}
                  onClick={handleNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
