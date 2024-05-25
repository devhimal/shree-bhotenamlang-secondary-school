import React, { ReactNode } from "react"
import { cn } from "../../utils/cn"

interface Props {
  children: ReactNode
  classNames?: string
}

const SectionHeading = ({ children, classNames }: Props) => {
  return (
    <div
      className={cn(
        " py-4 font-extrabold text-xl md:text-2xl capitalize",
        classNames
      )}
    >
      {children}
    </div>
  )
}

export default SectionHeading
