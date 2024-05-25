import Hero from "./components/molecules/HeroSection/Hero"
import Navbar from "./components/molecules/Navbar/Navbar"
import Event from "./components/molecules/Events/Event"
import Numbers from "./components/molecules/Numbers/Numbers"
import FeatureProgram from "./components/molecules/FeatureProgram/FeatureProgram"

export default function Home() {
  return (
    <main className="flex relative flex-col items-center h-fit gap-10">
      <Navbar />
      <Hero />
      <Numbers />
      <FeatureProgram />
      <Event />
    </main>
  )
}
