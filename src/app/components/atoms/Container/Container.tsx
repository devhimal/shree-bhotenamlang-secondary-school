import React, { ReactNode } from "react"
import { cn } from "../../utils/cn"

interface Props {
  children: ReactNode
  classNames?: string
}

const Container = ({ children, classNames }: Props) => {
  return (
    <div
      // style={{ paddingLeft: "10px", paddingRight: "10px" }}
      className={cn(
        "mx-auto  z-50 px-8 md:px-14 w-full h-fit text-white ",
        classNames
      )}
    >
      {children}
    </div>
  )
}

export default Container
