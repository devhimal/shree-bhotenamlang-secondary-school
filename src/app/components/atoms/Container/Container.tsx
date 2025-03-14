import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  classNames?: string;
  id?: string;
}

const Container = ({ children, classNames, id }: Props) => {
  return (
    <div
      // style={{ paddingLeft: "10px", paddingRight: "10px" }}
      id={id}
      className={cn(
        "mx-auto px-6 md:px-14 w-full h-fit max-w-[1440px] text-white ",
        classNames,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
