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
    // <Container classNames={nav ? "fixed bg-black z-50 " : "fixed z-50"}>
    <div
      className={
        nav
          ? "fixed z-50 bg-black w-full"
          : "fixed z-50 bg-transparent py-8 text-xl flex text-white boder w-full capitalize"
      }
    >
      <Container>
        <nav className="flex justify-between w-full">
          <div>
            <h1
              className={
                nav
                  ? "py-2 font-extrabold text-xl  tracking-wide md:text-xl"
                  : "font-extrabold  w-[50%] tracking-wide text-xl"
              }
            >
              Shree Bhotenamlang Secondary School
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
                className="capitalize hover:bg-green-700 py-2 px-4 rounded-md hover:transition-all hover:duration-500"
              >
                <Link href={index === 4 ? "team" : `#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>

          {/* mobile app */}
          <ul
            className={
              nav
                ? "fixed md:hidden  z-50 pt-10 left-0 top-[70px] sm:top-[90px] px-8 flex flex-col gap-2 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000"
                : "ease-in-out w-[70%] duration-1000 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {NavItems.map((item, index) => (
              <li key={index} className="capitalize">
                <Link
                  href={index === 1 ? "sports" : `#${item}`}
                  onClick={handleNav}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>

    // </Container>
  )
}

export default Navbar
