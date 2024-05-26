import React from "react"
import Container from "../../atoms/Container/Container"
import LazyShow from "../LazyShow/LazyShow"

const Numbers = () => {
  const NumbersData = [
    {
      title: "Current Students",
      number: 1233,
    },
    {
      title: "Teachers",
      number: 20,
    },
    {
      title: "Passed Out Students",
      number: 200,
    },
    {
      title: "Volunteer Teachers",
      number: 20,
    },
  ]
  return (
    <LazyShow>
      <Container classNames="relative text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 ">
          {NumbersData.map((item, index) => {
            return (
              <div
                key={index}
                className=" h-[200px] flex flex-col gap-4 justify-center items-center "
              >
                <div className="text-4xl font-extrabold text-blue-900">
                  {item.number}
                </div>
                <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              </div>
            )
          })}
        </div>
      </Container>
    </LazyShow>
  )
}

export default Numbers
