import React from "react";
import HeroContainer from "../../atoms/HeroContainer/HeroContainer";
import Image from "next/image";
import LazyShow from "../LazyShow/LazyShow";
import Container from "../../atoms/Container/Container";

interface Props {
  headline: string;
}

const HeroImage = ({ headline }: Props) => {
  return (
    <div>
      <HeroContainer>
        <Image
          src={"/images/events/schoolbig.jpg"}
          width={1024}
          height={1024}
          alt="team members image"
          className="w-full h-full object-cover"
        />
      </HeroContainer>
      <div className="absolute top-[-40%]">
        <LazyShow>
          <Container classNames="text-start">
            <p className="text-sm sm:text-lg md:text-2xl w-full md:w-[60%]">
              {headline}
            </p>
          </Container>
        </LazyShow>
      </div>
    </div>
  );
};

export default HeroImage;
