import React from "react"
import HeroImage from "../components/molecules/HeroSection/HeroImage"
import Container from "../components/atoms/Container/Container"
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading"
import LazyShow from "../components/molecules/LazyShow/LazyShow"
import MisionVisionCard from "../components/molecules/MisionVision/MisionVisionCard"

const page = () => {
  const Mision = [
    "Provide a comprehensive and inclusive education.",
    "Empower every student to achieve their full potential.",
    "Foster a safe, supportive, and innovative learning environment.",
    "Develop critical thinking, creativity, and a lifelong love for learning.",
    "Promote values of equity, integrity, and community engagement.",
    "Prepare students to become responsible and compassionate citizens.",
  ]
  const Vision = [
    "Be a beacon of educational excellence.",
    "Equip students with the knowledge, skills, and character for a rapidly changing world.",
    "Celebrate diversity and embrace technology.",
    "Champion sustainable practices.",
    "Collaborate with families, local communities, and stakeholders.",
    "Nurture future leaders who are academically proficient, socially responsible, and globally aware.",
  ]
  const visionsubheading =
    "Our vision is to be a beacon of educational excellence, preparing students to thrive in a rapidly changing world. We aim to create a diverse, technologically advanced, and sustainable school community that nurtures future leaders who are academically proficient, socially responsible, and globally aware."

  const misionsubheading =
    "Our mission is to cultivate an educational environment where every student is empowered to achieve their full potential. We are dedicated to providing comprehensive, inclusive, and innovative education that fosters critical thinking, creativity, and a lifelong love for learning."

  const headlines =
    "Welcome to S.B.S.S, a place where every student’s potential is nurtured and developed to its fullest. As a government school committed to excellence in education, we take pride in offering a dynamic and inclusive learning environment that caters to the diverse needs of our student community."

  return (
    <>
      <HeroImage headline={headlines} />
      <Container classNames="text-black">
        <div className="my-8">
          <MisionVisionCard
            data={Mision}
            title="Mision of Shree Bhotenamlang Secondary School"
            subheading={misionsubheading}
          />{" "}
          <MisionVisionCard
            data={Vision}
            title="Vision of Shree Bhotenamlang Secondary School"
            subheading={visionsubheading}
          />
        </div>
      </Container>
    </>
  )
}

export default page
