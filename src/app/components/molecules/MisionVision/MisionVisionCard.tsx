import React from "react"
import LazyShow from "../LazyShow/LazyShow"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import { DiVim } from "react-icons/di"

interface Props {
  data?: string[]
  title?: string
  subheading?: string
  contactDetail?: string[]
}
const MisionVisionCard = ({
  data,
  title,
  subheading,
  contactDetail,
}: Props) => {
  return (
    <div>
      <LazyShow>
        <SectionHeading>{title}</SectionHeading>
      </LazyShow>
      <LazyShow>
        <p>{subheading}</p>
      </LazyShow>
      <ul
        className={`${
          data
            ? "mt-8 flex flex-col flex-wrap-wrap gap-4 ml-4  mb-2"
            : "mt-4 flex flex-col gap-4 ml-4  mb-2"
        }`}
      >
        {contactDetail ? (
          <div>
            {contactDetail?.map((mision, i) => {
              return (
                <LazyShow key={i}>
                  <div className="flex gap-4 text-orange-600">
                    <span>{mision}</span>
                  </div>
                </LazyShow>
              )
            })}
          </div>
        ) : (
          <div>
            {data?.map((mision, i) => {
              return (
                <LazyShow key={i}>
                  <div className="flex gap-4">
                    <span>{i + 1}</span>
                    <span>{mision}</span>
                  </div>
                </LazyShow>
              )
            })}
          </div>
        )}
      </ul>
    </div>
  )
}

export default MisionVisionCard
