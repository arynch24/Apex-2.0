"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
export default function ApproachDesc() {
  return (
    <HeroHighlight className={" flex-col md:flex-row w-full md:max-w-7xl px-20 md:gap-20"}>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto w-1/2">
        <h2>Design to Delivery </h2>
        <Highlight className="text-black dark:text-white">
          <span>&#40;D2D Approach&#41;</span>
        </Highlight>
      </motion.h1>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="text-gray-300 mt-20"
      >
        At Apex School of Fashion, we don't just offer an entrepreneurship program; we help you build your brand from the ground up. Our Design to Delivery (D2D) support means that we are with you at every step of the process. From designing your products to delivering them to your customers, we provide hands-on help to turn your ideas into reality. We focus on your success and grow together as your brand flourishes.
      </ScrollReveal>
    </HeroHighlight>
  );
}
