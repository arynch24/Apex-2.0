"use client";

import { Spotlight } from "../components/ui/spotlight-new"
import Hero from "../components/home/Hero"
import Header from "@/components/Header";
import { FeaturesSectionDemo } from "@/components/home/FeatureSectionDemo";
import ExpectCaraousel from "@/components/home/ExpectCaraousel";
import Aboutus from "@/components/home/AboutUs";
import List from "@/components/home/List";
import ApproachDesc from "@/components/home/ApproachDesc";
import Application from "@/components/home/Application";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Spotlight />
      <Hero />
      <FeaturesSectionDemo />
      <Aboutus />
      <ExpectCaraousel />
      <List />
      <ApproachDesc />
      <Application />
    </div>
  )
}

export default Home