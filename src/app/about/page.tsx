import React from "react"
import HeroImage from "../components/molecules/HeroSection/HeroImage"
import Container from "../components/atoms/Container/Container"
import MisionVisionCard from "../components/molecules/MisionVision/MisionVisionCard"
import {
  Mision,
  Vision,
  Values,
  visionsubheading,
  headlines,
  misionsubheading,
  program,
  staff,
  community,
  contact,
  contactDetail,
} from "../helpers/aboutus"

const page = () => {
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
          <MisionVisionCard
            data={Values}
            title="Values of Shree Bhotenamlang Secondary School"
          />
          <MisionVisionCard title="Program" subheading={program} />
          <MisionVisionCard title={"Staff"} subheading={staff} />
          <MisionVisionCard title="Community" subheading={community} />
          <MisionVisionCard
            title="Contact Us"
            subheading={contact}
            contactDetail={contactDetail}
          />
        </div>
      </Container>
    </>
  )
}

export default page
