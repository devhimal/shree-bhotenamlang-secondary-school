import React from "react"
import LazyShow from "../LazyShow/LazyShow"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"

interface Props {
  data: string[]
  title: string
  subheading: string
}
const MisionVisionCard = ({ data, title, subheading }: Props) => {
  return (
    <div>
      <LazyShow>
        <SectionHeading>{title}</SectionHeading>
      </LazyShow>
      <LazyShow>
        <p>{subheading}</p>
      </LazyShow>
      <ul className="flex flex-col gap-4 ml-4 py-8">
        {data.map((mision, i) => {
          return (
            <LazyShow key={i}>
              <div className="flex gap-4">
                <span>{i + 1}</span>
                <span>{mision}</span>
              </div>
            </LazyShow>
          )
        })}
      </ul>
    </div>
  )
}

export default MisionVisionCard
