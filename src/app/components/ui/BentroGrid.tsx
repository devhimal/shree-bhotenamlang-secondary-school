import Image from "next/image"
import { cn } from "../utils/cn"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] h-full   grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  imgUrl,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  imgUrl?: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
        className
      )}
    >
      <div className="rounded-md overflow-hidden">
        <Image
          src={imgUrl ? imgUrl : ""}
          height={120}
          width={120}
          alt={imgUrl ? imgUrl : "event image"}
          className="h-full w-full object-cover textd-white "
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <p className="text-white py-2 pt-4 font-sm">{icon}</p>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}
