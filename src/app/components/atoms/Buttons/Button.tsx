import React, { ReactNode } from "react"
import { LuHelpingHand } from "react-icons/lu"

const Button = ({ children, icon }: { children: ReactNode; icon?: string }) => {
  return (
    <button className="w-full text-center flex gap-2 capitalize items-center justify-center sm:w-fit rounded-md bg-green-700 hover:bg-orange-600 transition-all duration-300 py-2 px-4 font-extrabold text-white">
      <span>{children}</span>
      {icon == "support" ? <LuHelpingHand size={25} /> : ""}{" "}
    </button>
  )
}

export default Button
