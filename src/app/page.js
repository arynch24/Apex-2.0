"use client";

import { Spotlight } from "../components/ui/spotlight-new"
import Hero from "../components/home/Hero"
import Header from "@/components/Header";
import { FeaturesSectionDemo } from "@/components/home/FeatureSectionDemo";

import Aboutus from "@/components/home/AboutUs";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Spotlight />
      <Hero />
      <FeaturesSectionDemo />
      <Aboutus />
    </div>
  )
}

export default Home