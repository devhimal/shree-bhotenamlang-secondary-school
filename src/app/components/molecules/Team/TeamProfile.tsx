import React from "react"
import Image from "next/image"

interface Props {
  imgUrl: string
  name: string
  faculty: any
  degree: string
  contact: any
  position: string
}

const TeamProfile = ({
  imgUrl,
  name,
  faculty,
  degree,
  contact,
  position,
}: Props) => {
  return (
    <div className="border w-full h-fit rounded-xl py-3 px-3 flex flex-col gap-4 overflow-hidden">
      <Image
        src={imgUrl ? imgUrl : "/images/teams/members1.jpg"}
        width={400}
        height={200}
        alt={name ? name : "profile picture"}
        className="w-full h-auto object-cover rounded-2xl"
      />
      <div className="text-black flex flex-col gap-1">
        <h2 className="capitalize font-bold">{name ? name : "N/A"}</h2>
        <div className="capitalize text-gray-500 flex flex-col gap-1">
          <p className="">{position}</p>
          <p className="flex flex-wrap gap-2">
            {faculty.map((item: string, i: number) => {
              // Return a span element for each item in the faculty array
              return <span key={i}>{item},</span>
            })}
          </p>
          <p>{degree ? degree : ""}</p>
          <p>{contact ? contact : "9818704367"}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamProfile
