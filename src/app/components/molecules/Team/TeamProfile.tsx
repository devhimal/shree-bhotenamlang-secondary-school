import React from "react"
import Image from "next/image"
import { Interface } from "readline"

interface Props {
  imgUrl: string
  name: string
  faculty: string
  degree: string
}

const TeamProfile = ({ imgUrl, name, faculty, degree }: Props) => {
  return (
    <div className="border w-full h-fit rounded-md py-3 px-3 flex flex-col gap-4">
      <Image
        src={imgUrl ? imgUrl : "/images/teams/members1.jpg"}
        width={400}
        height={200}
        alt={name ? name : "profile picture"}
        className="w-full h-auto object-cover rounded-[12px]"
      />
      <div className="text-black">
        <h2>{name ? name : "N/A"}</h2>
        <p>{faculty ? faculty : ""}</p>
        <p>{degree ? degree : ""}</p>
      </div>
    </div>
  )
}

export default TeamProfile
