import React from "react"
import LazyShow from "../LazyShow/LazyShow"
import Container from "../../atoms/Container/Container"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import Image from "next/image"
import { LuHelpingHand } from "react-icons/lu"
import Button from "../../atoms/Buttons/Button"

const Story = () => {
  return (
    <Container>
      <div className="text-black">
        <LazyShow>
          <div className="mb-8">
            <SectionHeading classNames=" text-center">
              Story of our students
            </SectionHeading>
            <p className="text-center">
              Your kindness and support can help create a brighter future for
              students who lack opportunities.
            </p>
          </div>
        </LazyShow>
        <LazyShow>
          <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-10 ">
            <div className="flex flex-col gap-10 order-2 sm:order-1">
              <p>
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
      </div>
    </Container>
  )
}

export default Story
