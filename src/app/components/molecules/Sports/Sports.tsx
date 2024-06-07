import React from "react"
import HeroContainer from "../../atoms/HeroContainer/HeroContainer"
import Image from "next/image"
import LazyShow from "../LazyShow/LazyShow"
import Container from "../../atoms/Container/Container"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import Button from "../../atoms/Buttons/Button"

import image1 from "../../../../../public/images/sports/sport1.jpg"

const Sports = () => {
  const trophyData = [
    {
      trophyTitle: "Football",
      date: 2020,
      position: "1st",
      trophyDescription: "Football program",
      imgUrl: image1,
    },
    {
      trophyTitle: "Football",
      date: 2020,
      position: "1st",
      trophyDescription: "Football program",
      imgUrl: image1,
    },
    {
      trophyTitle: "Football",
      date: 2020,
      position: "1st",
      trophyDescription: "Football program",
      imgUrl: image1,
    },
    {
      trophyTitle: "Football",
      date: 2020,
      position: "1st",
      trophyDescription: "Football program",
      imgUrl: image1,
    },
  ]

  return (
    <div>
      {/* Hero section */}
      <HeroContainer>
        <Image
          src={image1}
          width={1024}
          height={1024}
          alt="team members image"
          className="w-full h-full object-cover"
        />
      </HeroContainer>
      <div className="absolute top-[40%]">
        <LazyShow>
          <Container classNames="text-start">
            <p className="text-sm sm:text-lg md:text-2xl w-full md:w-[60%]">
              Empowering young minds through education and sports, fostering a
              future of excellence, teamwork, and resilience.
            </p>
          </Container>
        </LazyShow>
      </div>

      <Container>
        <div className="text-black">
          <LazyShow>
            <SectionHeading classNames="text-black py-8">
              <p>Sports at Shree Bhotenamlang Secondary School</p>
            </SectionHeading>
            <p className="text-black">
              Welcome to the Sports Section of Shree Bhotenamlang Secondary School! Our school,
              located in the beautiful country of Nepal, is dedicated to
              fostering the holistic development of our students, where sports
              play an integral role. We believe that engaging in physical
              activities is essential for the physical and mental well-being of
              our students.
            </p>

            <SectionHeading classNames="text-black py-8">
              <p>Sports Calendar</p>
            </SectionHeading>
            <p className="text-black">
              At SBSS, we have two major sports events each year that provide
              our students with the opportunity to showcase their athletic
              skills and spirit:
            </p>
            <div>
              <Container>
                <ul className="text-black mt-3">
                  <li className="text-lg font-bold">Annual Sports Day</li>
                  <p>
                    Held in the month of [Month], our Annual Sports Day is a
                    highly anticipated event. It features a variety of track and
                    field events, team sports, and fun activities for students
                    of all ages. This event encourages healthy competition and
                    teamwork among students.
                  </p>
                  <li className="text-lg font-bold mt-3">
                    Inter-School Sports Meet
                  </li>
                  <p>
                    Taking place in [Month], the Inter-School Sports Meet is an
                    exciting opportunity for our students to compete with their
                    peers from other schools in the region. This event includes
                    competitions in sports such as soccer, volleyball, cricket,
                    and athletics.
                  </p>
                </ul>
              </Container>
            </div>

            {/* Story section */}
            <SectionHeading classNames="text-black py-8">
              <p>Sports Man</p>
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-10 ">
            <div className="flex flex-col gap-10 order-2 sm:order-1">
              <p className="text-black">
                Pasang Tamang, a bright 12-year-old from a small Himalayan
                village, dreams of becoming a doctor to serve his underserved
                community. Despite his family&apos;s financial struggles, Pasang
                excels in school, studying by a dim kerosene lamp and walking
                miles each day to attend classes. Your support can provide him
                with essential school supplies and better educational
                opportunities, turning his dreams into reality and inspiring his
                entire village. Join us in helping Pasang achieve his goals and
                bring hope to his community.
              </p>
              <p>
                Empower Dreams: Support {"Pasang Tamang"}’s Education Today!
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Button icon={"support"}>Support </Button>
                <Button icon={""}>find more</Button>
              </div>
            </div>
            <div className=" order-1 sm:order-2 flex justify-center ">
              <div className="h-[300px]  w-full md:h-[400px] md:w-[400px] rounded-md overflow-hidden hover:scale-95 transition-all duration-300 ">
                <Image
                  src="/images/students/student1.jpg"
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          </LazyShow>
          <LazyShow>
            {/* Achievements section */}
            <div>
              <SectionHeading classNames="text-black py-8">
                <p>Achievements</p>
              </SectionHeading>
              <p className="text-black">
                Our students have consistently performed well in various sports,
                bringing pride to our school. Some of our notable achievements
                include:
              </p>
              <div className="ml-0 sm:ml-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 text-black">
                {trophyData.map((trophy, i) => (
                  <div
                    className="bg-green-500 p-2 text-center rounded-lg mt-5 hover:scale-95 transition-all duration-300 "
                    key={i}
                  >
                    <LazyShow key={i}>
                      <Image
                        src={trophy.imgUrl}
                        width={400}
                        height={300}
                        alt={trophy.trophyTitle}
                        className="rounded-lg w-full"
                      />
                      <p>{trophy.trophyTitle}</p>
                      <p>{trophy.position}</p>
                      <p>{trophy.date}</p>
                    </LazyShow>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation section */}
            <div>
              <SectionHeading classNames="text-black py-8">
                <p>Donation</p>
              </SectionHeading>
              <p className="text-black">
                Our students have consistently performed well in various sports,
                bringing pride to our school. Some of our notable achievements
                include:
              </p>
              <div className="ml-0 sm:ml-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 text-black">
                {trophyData.map((trophy, i) => (
                  <div
                    className="bg-green-500 p-2 text-center rounded-lg mt-5"
                    key={i}
                  >
                    <LazyShow key={i}>
                      <Image
                        src={trophy.imgUrl}
                        width={400}
                        height={300}
                        alt={trophy.trophyTitle}
                        className="rounded-lg w-full"
                      />
                      <p>{trophy.trophyTitle}</p>
                      <p>{trophy.position}</p>
                      <p>{trophy.date}</p>
                    </LazyShow>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading classNames="text-black py-8">
                <p>Encouraging Participation</p>
              </SectionHeading>
              <p>We encourage all students to take part in our sports events, whether as participants or enthusiastic supporters. Participation in sports helps students develop discipline, teamwork, and leadership skills, which are essential for their overall growth.</p>
            </div>

            <div>
              <SectionHeading classNames="text-black py-8">
                <p>Donate Sports Materials</p>
              </SectionHeading>
              <p>Help Us Empower Young Athletes at SBSS.</p>
              <p>At SBSS, we believe in the power of sports to transform lives. Participation in sports fosters teamwork, discipline, and a healthy lifestyle. However, many of our students lack access to the essential sports equipment needed to fully engage in these activities. Your generous donation of sports materials can make a significant difference.</p>
            </div>

            <div>
              <SectionHeading classNames="text-black py-8">
                <p>How Your Donation Helps</p>
              </SectionHeading>
              <div>
                <Container>
                  <ul className="text-black mt-3">
                    <p>
                      - Enhances Physical Education: Provides students with the tools they need for effective physical education classes.
                    </p>
                    <p>
                      - Supports Extracurricular Activities: Enables our sports teams to practice and compete at their best.
                    </p>
                    <p>- Promotes Healthy Lifestyles: Encourages students to stay active and healthy, reducing the risk of lifestyle-related diseases.</p>
                    <p>- Fosters Teamwork and Discipline: Helps students learn important life skills through team sports.</p>
                  </ul>
                </Container>
              </div>
            </div>

            <div>
              <SectionHeading classNames="text-black py-8">
                <p>How Your Donation Helps</p>
              </SectionHeading>
              <p>1. Contact Us: Reach out to our Sports Coordinator to discuss your donation.
              </p>
              <Container>
                  <ul className="text-black mt-3">
                    <p>- Name: Sonam Tamang</p>
                    <p>   - Email: abc@gmail.com</p>
                    <p>- Phone: 980000000</p>
                  </ul>
                </Container>
            </div>
          </LazyShow>
        </div>
      </Container>
    </div>
  )
}

export default Sports
