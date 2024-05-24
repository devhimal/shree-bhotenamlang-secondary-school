"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "../../ui/ImageSlider"

const Hero = () => {
  const images = [
    "/images/school1.jpg",
    "/images/school2.jpg",
    "/images/school3.jpg",
    "/images/school4.jpg",
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
        className="z-50 px-8 md:px-32 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-3xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Explore our programs, meet our community, and discover what makes
          Shree Bhotenamlang Secondary School a place where learning thrives.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border text-xs md:text-md lg:text-xl bg-blue-600/60 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span className="uppercase">Sponsor a child</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
export default Hero
