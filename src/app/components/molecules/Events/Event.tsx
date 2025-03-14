import React, { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "../../ui/BentroGrid";
import Container from "../../atoms/Container/Container";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import LazyShow from "../LazyShow/LazyShow";

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
      title: "Environment Day",
      description:
        "Environment Day at [Your School Name] is dedicated to raising awareness about the importance of environmental conservation. Through activities like tree planting, clean-up drives, and eco-friendly workshops, students engage in efforts to promote sustainability and make a positive impact on the planet.",
      imgUrl: "/images/school1.jpg",
      icon: "2024-02-4",
    },
  ];

  return (
    <Container classNames="text-black overflow-hidden " id="events">
      <div className="">
        <LazyShow>
          <SectionHeading>Past Events</SectionHeading>
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
              );
            })}
          </BentoGrid>
        </LazyShow>
      </div>
    </Container>
  );
};

export default Events;
