import React from "react"
import Container from "../../atoms/Container/Container"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import { PinContainer } from "../../ui/PinContainer"
import Image from "next/image"
import LazyShow from "../LazyShow/LazyShow"

const FeatureProgram = () => {
  const Program = [
    {
      title: "Computer Course",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "/",
    },
    {
      title: "Optional Mathematics",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "",
    },
    {
      title: "Economics",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "",
    },
    {
      title: "Science",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "",
    },
    {
      title: "English",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "",
    },
    {
      title: "Social",
      desc: "The computer course is taught from class 4 to class 8.",
      imgUrl: "/images/school1.jpg",
      url: "",
    },
  ]
  return (
    <Container classNames="text-black">
      <div>
        <SectionHeading>Featured Program</SectionHeading>

        <div className="h-fit ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 ">
          {Program.map((item, index) => {
            return (
              <LazyShow key={index}>
                <PinContainer
                  title={item.title ? item.title : "bhotenamlang"}
                  href={item.url ? item.url : "bhotenamlangschool.com"}
                  key={index}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  h-full w-full ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {item.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-white">{item.desc}</span>
                    </div>

                    <Image
                      src={item.imgUrl}
                      width={200}
                      height={200}
                      alt="image"
                      className="w-full h-full object-cover mt-4 rounded-lg"
                    />
                  </div>
                </PinContainer>
              </LazyShow>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default FeatureProgram
