"use client";
import React, { useState, useEffect } from "react";
import Container from "../../atoms/Container/Container";
import { NavItems } from "@/app/helpers/helpers";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(true);
  };

  const handleCloseMenu = () => {
    setNav(false);
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50  w-full ${
        scroll ? "bg-[#2D6A4F]" : "bg-transparent"
      } py-4 text-xl flex text-white w-full capitalize transition-all duration-500`}
    >
      <Container>
        <nav className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-extrabold  text-xl">
              Shree Bhotenamlang Seceondary School
            </h1>
          </div>
          <div
            onClick={handleNav}
            className="flex justify-center items-center lg:hidden"
          >
            <CiMenuBurger size={30} />
          </div>
          <ul className="hidden lg:flex justify-center gap-1 items-center">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="capitalize hover:text-[#FF4500] py-2 px-4 rounded-md hover:transition-all hover:duration-500"
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
                ? "fixed lg:hidden z-50 top-0 pt-8 left-0 px-8 flex flex-col justify-between gap-4 w-[100%] h-full bg-[#2D6A4F] ease-in-out duration-1000"
                : "ease-in-out w-[70%] duration-1000 fixed top-0 bottom-0 left-[-100%]"
            }`}
          >
            <div className="mb-4 w-full flex justify-between">
              <h1>Shree Bhotenamlang secondary School</h1>
              <MdClose onClick={handleCloseMenu} size={30} />
            </div>
            <div className="h-full flex flex-col gap-4">
              {NavItems.map((item, index) => (
                <li key={index} className="capitalize text-[16px]">
                  <Link
                    href={index === 3 ? `#${item.link}` : `${item.link}`}
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
            <div className="w-full flex justify-between py-4 gap-2">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </ul>
          {/* </div> */}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
