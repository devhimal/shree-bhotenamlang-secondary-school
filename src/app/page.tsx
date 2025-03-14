import Hero from "./components/molecules/HeroSection/Hero";
import Event from "./components/molecules/Events/Event";
import Numbers from "./components/molecules/Numbers/Numbers";
import FeatureProgram from "./components/molecules/FeatureProgram/FeatureProgram";
import Story from "./components/molecules/Story/Story";
import { Testimonials } from "./components/molecules/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex relative flex-col items-center h-fit gap-10 overflow-hidden">
      <Hero />
      <Numbers />
      <Story />
      <FeatureProgram />
      <Event />
      <Testimonials />
    </main>
  );
}
