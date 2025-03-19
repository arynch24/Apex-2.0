"use client";

import { Spotlight } from "../components/ui/spotlight-new"
import Hero from "../components/home/Hero"
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="h-[1900px]">
      <Header />
      <Spotlight />
      
      <Hero />
      {/* <BentoGridThirdDemo /> */}
    </div>
  )
}

export default Home