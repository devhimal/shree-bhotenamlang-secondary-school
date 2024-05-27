import Hero from "./components/molecules/HeroSection/Hero"
import Navbar from "./components/molecules/Navbar/Navbar"
import Event from "./components/molecules/Events/Event"
import Numbers from "./components/molecules/Numbers/Numbers"
import Footer from "./components/molecules/Footer/Footer"
import FeatureProgram from "./components/molecules/FeatureProgram/FeatureProgram"
import Story from "./components/molecules/Story/Story"
import { Testimonials } from "./components/molecules/Testimonials/Testimonials"

export default function Home() {
  return (
    <main className="flex relative flex-col items-center h-fit gap-10 overflow-hidden">
      <Navbar />
      <Hero />
      <Numbers />
      <Story />
      <FeatureProgram />
      <Event />
      <Testimonials />
      <Footer />
    </main>
  )
}
