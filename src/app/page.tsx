import Image from "next/image"
import { ImagesSlider } from "./components/ui/ImageSlider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center h-[70vh] gap-10">
      <ImagesSlider
        images={[
          "/images/school1.jpg",
          "/images/school2.jpg",
          "/images/school3.jpg",
          "/images/school4.jpg",
        ]}
      >
        <h1>hello slider</h1>
      </ImagesSlider>
    </main>
  )
}
