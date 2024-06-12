"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "../../ui/ImageSlider"
import Container from "../../atoms/Container/Container"

const Hero = () => {
  const images = [
    "/school/school1.jpeg",
    "/school/school2.jpeg",
    "/school/school3.jpeg",
    "/school/school4.jpeg",
    "/school/school5.jpeg",
    "/school/school6.jpeg",
    "/school/school7.jpeg",
    "/school/school8.jpeg",
    "/school/school9.jpeg",
    "/school/school10.jpeg",
    "/school/school11.jpeg",
    "/school/school12.jpeg",
    "/school/school13.jpeg",
    "/school/school14.jpeg",
    "/school/school15.jpeg",
  ]
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 w-full md:px-32 flex flex-col justify-center items-center"
      >
        <Container classNames="text-center px-14">
          <div>
            <motion.p className="font-bold text-mg md:text-3xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Explore our programs, meet our community, and discover what makes
              <span className="text-orange-600">
                {" "}
                Shree Bhotenamlang Secondary School
              </span>{" "}
              a place where learning thrives.
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm text-xs md:text-md lg:text-xl bg-green-700 hover:bg-orange-600 transition-all duration-300 hover:scale-95  text-white mx-auto text-center rounded-full relative mt-4">
              <span className="uppercase">Sponsor a child</span>
            </button>
          </div>
        </Container>
      </motion.div>
    </ImagesSlider>
  )
}
export default Hero
