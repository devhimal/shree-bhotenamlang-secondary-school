import Image from "next/image"
import React from "react"
import Container from "../../atoms/Container/Container"
import LazyShow from "../LazyShow/LazyShow"
import HeroContainer from "../../atoms/HeroContainer/HeroContainer"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import TeamProfile from "./TeamProfile"

const OurTeam = () => {
  return (
    <div>
      <div>
        <HeroContainer>
          <Image
            src={"/images/teams/members.jpg"}
            width={1024}
            height={1024}
            alt="team members image"
            className="w-full h-full object-cover"
          />
        </HeroContainer>
        <div className="absolute top-[40%]">
          <LazyShow>
            <Container classNames="text-start ">
              <p className="text-sm sm:text-lg md:text-2xl w-full md:w-[60%]">
                A nurturing and dynamic learning environment where dedicated
                educators inspire students to achieve their full potential
                through a comprehensive and innovative curriculum.
                <br /> <br />
                They also foster a love for lifelong learning and preparing them
                to thrive in a rapidly changing world.
              </p>
            </Container>
          </LazyShow>
        </div>
      </div>
      <Container>
        <div>
          <SectionHeading classNames="text-black">
            Our team members
          </SectionHeading>
          <div className="ml-4 gap-4 grid grid-cols-4 mb-12">
            <TeamProfile imgUrl="" name="" degree="" faculty="" />
            <TeamProfile imgUrl="" name="" degree="" faculty="" />
            <TeamProfile imgUrl="" name="" degree="" faculty="" />
            <TeamProfile imgUrl="" name="" degree="" faculty="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
