import React from 'react'
import HeroContainer from "../../atoms/HeroContainer/HeroContainer"
import Image from "next/image"
import LazyShow from "../LazyShow/LazyShow"
import Container from "../../atoms/Container/Container"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import Button from '../../atoms/Buttons/Button'

import HeroImg from "../../../../../public/images/scholarship/hero.jpg"
import StudentImg1 from "../../../../../public/images/students/student1.jpg"

const Scholarships = () => {
  const scholarsData = [
    {
      scholarName: "Yangi Tamang",
      scholarClass: 8,
      imgUrl: StudentImg1,
    },
    {
      scholarName: "Yangi Tamang",
      scholarClass: 8,
      imgUrl: StudentImg1,
    },
    {
      scholarName: "Yangi Tamang",
      scholarClass: 8,
      imgUrl: StudentImg1,
    },
    {
      scholarName: "Yangi Tamang",
      scholarClass: 8,
      imgUrl: StudentImg1,
    },
    {
      scholarName: "Yangi Tamang",
      scholarClass: 8,
      imgUrl: StudentImg1,
    },

  ]
  return (
    <>
      <div>
        <LazyShow>
        {/* Hero section */}
        <HeroContainer>
          <Image
            src={HeroImg}
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
                Scholarships at Shree Bhotenamlang Secondary School
              </p><br /><br />
              <p className="text-sm sm:text-lg md:text-2xl w-full md:w-[60%]">
                Welcome to the Scholarships page of Shree Bhotenamlang Secondary School. We are committed to fostering academic excellence and providing opportunities for deserving students to achieve their educational goals.
              </p>
            </Container>
          </LazyShow>
        </div>

        <Container>
          {/* Scholarship holder section */}
          <div>
            <SectionHeading classNames="text-black py-8">
              <p>Scholarships we are providing at our school</p>
            </SectionHeading>
            <div className="ml-0 sm:ml-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 text-black ">
              {scholarsData.map((scholar, i) => (
                <div
                  className="bg-green-500 p-2 text-center rounded-lg mt-5 hover:scale-95 transition-all duration-300 "
                  key={i}
                >
                  <LazyShow key={i}>
                    <Image
                      src={scholar.imgUrl}
                      width={400}
                      height={300}
                      alt={scholar.scholarName}
                      className="rounded-lg w-full"
                    />
                    <p>{scholar.scholarName}</p>
                    <p>Class: {scholar.scholarClass}</p>
                  </LazyShow>
                </div>
              ))}
            </div>

          </div>


          {/* Scholarship provider section */}
          <div>
            <div>
              <SectionHeading classNames="text-black py-8">
                <p>Scholarships for SEE passed out students</p>
              </SectionHeading>

              <div className='text-black grid grid-cols-1 sm:grid-cols-2 py-8 gap-10'>
                <div className='flex flex-col order-2 sm:order-1 gap-5'>
                  <p className='text-xl font-bold'>1. HELP Scholarship  </p>
                  <p >Provided by the HELP organization, this scholarship supports around 50 students each year for two years, aiming to assist those in need of financial aid to pursue higher education.  </p>
                  <p className='text-lg font-semibold'>Requirements:</p>
                  <ul>
                    <li>- Paper 1</li>
                    <li>- Paper 2</li>
                    <li>- Paper 3</li>
                    <li>- Paper 4</li>
                  </ul>
                  <Button>Apply</Button>
                </div>
                <div className=" order-1 sm:order-2 flex justify-center ">
                  <div className="h-[300px]  w-full md:h-[400px] md:w-[400px] rounded-md overflow-hidden hover:scale-95 transition-all duration-300 ">
                    <Image
                      src="/images/scholarship/help.png"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className='text-black grid grid-cols-1 sm:grid-cols-2 py-8 gap-10'>
                <div className='flex flex-col order-2 sm:order-1 gap-5'>
                  <p className='text-xl font-bold'>2. CTEVT Scholarship</p>
                  <p>Offered by the Council for Technical Education and Vocational Training, this scholarship aims to support students pursuing technical education and vocational training in various disciplines. It is awarded to 100 students annually.</p>
                  <p className='text-lg font-semibold'>Requirements:</p>
                  <ul>
                    <li>- Academic transcripts</li>
                    <li>- Recommendation letters</li>
                    <li>- Personal statement</li>
                    <li>- Proof of financial need</li>
                  </ul>
                  <p className='text-lg font-medium'>Note: Deadline: June 15, 2024</p>
                  <Button>Apply</Button>
                </div>
                <div className=" order-1 sm:order-2 flex justify-center ">
                  <div className="h-[300px]  w-full md:h-[400px] md:w-[400px] rounded-md overflow-hidden hover:scale-95 transition-all duration-300 ">
                    <Image
                      src="/images/scholarship/ctevt.jpg"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className='text-black grid grid-cols-1 sm:grid-cols-2 py-8 gap-10'>
                <div className='flex flex-col order-2 sm:order-1 gap-5'>
                  <p className='text-xl font-bold'>3. Samantha Foundation Scholarship</p>
                  <p>Sponsored by the Samantha Foundation, this scholarship assists underprivileged students in achieving their higher education goals. It supports 75 students each year across various fields of study.</p>
                  <p className='text-lg font-semibold'>Requirements:</p>
                  <ul>
                    <li>- Completed application form</li>
                    <li>- Academic records</li>
                    <li>- Essay on a given topic</li>
                    <li>- Letters of recommendation</li>
                  </ul>
                  <p className='text-lg font-medium'>Note: Deadline: July 10, 2024</p>
                  <Button>Apply</Button>
                </div>
                <div className=" order-1 sm:order-2 flex justify-center ">
                  <div className="h-[300px]  w-full md:h-[400px] md:w-[400px] rounded-md overflow-hidden hover:scale-95 transition-all duration-300 ">
                    <Image
                      src="/images/scholarship/samata.jpeg"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className='text-black grid grid-cols-1 sm:grid-cols-2 py-8 gap-10'>
                <div className='flex flex-col order-2 sm:order-1 gap-5'>
                  <p className='text-xl font-bold'>4. UWC Scholarship</p>
                  <p>The United World Colleges (UWC) Scholarship provides an opportunity for students to attend one of the UWC schools worldwide, focusing on academic excellence and fostering international understanding. Around 50 scholarships are awarded annually.</p>
                  <p className='text-lg font-semibold'>Requirements:</p>
                  <ul>
                    <li>- Completed UWC application form</li>
                    <li>- School transcripts</li>
                    <li>- Personal essay</li>
                    <li>- Interviews</li>
                  </ul>
                  <p className='text-lg font-medium'>Note: Deadline: August 1, 2024</p>
                  <Button>Apply</Button>
                </div>
                <div className=" order-1 sm:order-2 flex justify-center ">
                  <div className="h-[300px]  w-full md:h-[400px] md:w-[400px] rounded-md overflow-hidden hover:scale-95 transition-all duration-300 ">
                    <Image
                      src="/images/scholarship/uwc.png"
                      width={300}
                      height={300}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        </LazyShow>

      </div>
    </>
  )
}

export default Scholarships