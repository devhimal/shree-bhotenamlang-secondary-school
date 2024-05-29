import Image from "next/image"
import React from "react"
import Container from "../../atoms/Container/Container"
import LazyShow from "../LazyShow/LazyShow"
import HeroContainer from "../../atoms/HeroContainer/HeroContainer"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import TeamProfile from "./TeamProfile"

const OurTeam = () => {
  const OurTeamData = [
    {
      name: "Gopi Krishna Parajuli",
      faculty: ["Nepali"],
      degree: "bachlor",
      imgUrl: "/images/teams/members.jpg",
      positin: "principal",
      contact: "",
    },
    {
      name: "surendra shrestha",
      faculty: ["social", "population", "education"],
      degree: "bachlor",
      imgUrl: "/images/teams/members.jpg",
      positin: "teacher",
      contact: "",
    },
    {
      name: "Amrita Lama",
      faculty: ["English"],
      degree: "bachlor",
      imgUrl: "/images/teams/members.jpg",
      positin: "teacher",
    },

    {
      name: "Sunil shrestha",
      faculty: ["social", "population", "education"],
      degree: "bachlor",
      contact: "",
      imgUrl: "/images/teams/members.jpg",
      positin: "teacher",
    },
    {
      name: "Aashish Tamang",
      faculty: ["social", "population", "education"],
      degree: "bachlor",
      imgUrl: "/images/teams/members.jpg",
      contact: "",
      positin: "teacher",
    },
  ]
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
          {/* school team members */}
          <div>
            <LazyShow>
              <SectionHeading classNames="text-black py-8">
                Our team members
              </SectionHeading>
            </LazyShow>
            <div className=" ml-0 sm:ml-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mb-12">
              {OurTeamData.map((member, i) => {
                return (
                  <LazyShow key={i}>
                    <TeamProfile
                      imgUrl={member.imgUrl}
                      name={member.name}
                      degree={member.degree}
                      faculty={member.faculty}
                      contact={""}
                      position={member.positin}
                    />
                  </LazyShow>
                )
              })}
            </div>
          </div>
          {/* school developmenet commettee */}
          <div>
            <LazyShow>
              <SectionHeading classNames="text-black py-8">
                School Development Committee
              </SectionHeading>
            </LazyShow>
            <div className=" ml-0 sm:ml-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mb-12">
              {OurTeamData.map((member, i) => {
                return (
                  <LazyShow key={i}>
                    <TeamProfile
                      imgUrl={member.imgUrl}
                      name={member.name}
                      degree={member.degree}
                      faculty={member.faculty}
                      contact={""}
                      position={member.positin}
                    />
                  </LazyShow>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
