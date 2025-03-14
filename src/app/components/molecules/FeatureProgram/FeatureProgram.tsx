import React from "react";
import Container from "../../atoms/Container/Container";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import { PinContainer } from "../../ui/PinContainer";
import Image from "next/image";
import LazyShow from "../LazyShow/LazyShow";

const FeatureProgram = () => {
  const Program = [
    {
      title: "Computer Course",
      desc: "Learning programming, algorithms, and technology fundamentals.",
      imgUrl: "/images/subjects/computer.jpeg",
      url: "/",
    },
    {
      title: "Optional Mathematics",
      desc: "Solving problems with numbers, logic, and analytical thinking.",
      imgUrl: "/images/subjects/math.jpeg",
      url: "",
    },
    {
      title: "Economics",
      desc: "Studying how resources are produced, distributed, and consumed.",
      imgUrl: "/images/subjects/economics.jpeg",
      url: "",
    },
    {
      title: "Science",
      desc: "Exploring the wonders of the natural world through experiments and observations.",
      imgUrl: "/images/subjects/science.jpeg",
      url: "",
    },
    {
      title: "English",
      desc: "Enhancing communication skills through literature, grammar, and writing.",
      imgUrl: "/images/subjects/english.jpeg",
      url: "",
    },
    {
      title: "Social",
      desc: "Understanding history, culture, and society’s impact on the world.",
      imgUrl: "/images/subjects/social.jpeg",
      url: "",
    },
  ];
  return (
    <Container classNames="text-black relative ">
      <div className="">
        <SectionHeading>Featured Program</SectionHeading>

        <div className="h-full ml-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  ">
          {Program.map((item, index) => {
            return (
              <div
                key={index}
                className="border hover:cursor-pointer border-grey-200 rounded-md px-2 py-2 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-[14px] py-2 ">{item.desc}</p>
                </div>
                <div className="h-[250px] w-full ">
                  <Image
                    src={item.imgUrl}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FeatureProgram;
