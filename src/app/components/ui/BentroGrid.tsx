import Image from "next/image";
import { cn } from "../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  h-full grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  imgUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imgUrl?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 h-full rounded-xl group/bento hover:shadow-xl hover:cursor-pointer transition duration-200 shadow-input dark:shadow-none p-4 text-black  bg-white border border-green-700 justify-between flex flex-col",
        className,
      )}
    >
      <div className="rounded-lg overflow-hidden h-[200px] lg:h-[300px]">
        <Image
          src={imgUrl ? imgUrl : ""}
          height={200}
          width={200}
          alt={imgUrl ? imgUrl : "event image"}
          className="h-full w-full object-cover text-white "
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <p className=" py-2 text-[12px] text-[#FF4500]">{icon} </p>
        <div className="font-sans font-bold capitalize">{title}</div>
        <div className="font-sans font-normal text-[14px] pt-2">
          {description}
        </div>
      </div>
    </div>
  );
};
