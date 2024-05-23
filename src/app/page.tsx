import Image from "next/image"
import { ImagesSlider } from "./components/ui/ImageSlider"
import Hero from "./components/molecules/HeroSection/Hero"
import Navbar from "./components/molecules/Navbar/Navbar"

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col  items-center h-[70vh] gap-10">
      <Navbar />
      <Hero />
    </main>
  )
}
