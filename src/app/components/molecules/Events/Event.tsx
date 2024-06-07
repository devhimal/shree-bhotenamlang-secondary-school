import React, { ReactNode } from "react"
import { BentoGrid, BentoGridItem } from "../../ui/BentroGrid"
import Container from "../../atoms/Container/Container"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import LazyShow from "../LazyShow/LazyShow"

const Skeleton = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {children}
  </div>
)

const Events = () => {
  const items = [
    {
      title: "Kshitiz Learning Fair",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
    {
      title: "Rastrapati Running Shield",
      description: "Dive into the transformative power of technology.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
    {
      title: "Sports Week of January",
      description: "Discover the beauty of thoughtful and functional design.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
    {
      title: "Quiz of the year",
      description:
        "Understand the impact of effective communication in our lives.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
  ]

return (
  <Container classNames="text-black overflow-hidden ">
    <div className="">
      <LazyShow>
        <SectionHeading>Upcoming Events</SectionHeading>
      </LazyShow>
      <LazyShow>
        <BentoGrid className="w-full mx-auto">
          {items.map((item, i) => {
            return (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                icon={item.icon}
                className={i === 0 || i === 5 ? "md:col-span-2" : ""}
              />
            )
          })}
        </BentoGrid>
      </LazyShow>
    </div>
    <Container classNames="text-black">
      <div>
        <SectionHeading>Upcoming Events</SectionHeading>
        <BentoGrid className="w-full mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </Container>
  </Container>
)
}

export default Events
