import React from 'react';
import ScrollFloat from '@/components/ScrollFloat/ScrollFloat';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
const testimonials = [
    {
        quote:
            "Go beyond theory—bring your designs to life with hands-on access to real manufacturing units.",
        name: "",
        title: "FROM IDEA TO MARKET",
    },
    {
        quote:"Get a chance to win up to ₹3 lakhs in grants to kick start your brand.",
        name: "",
        title: "FUND YOUR DREAMS",
    },
    {
        quote: "Learn marketing, sales, sourcing, and scaling from industry veterans.",
        name: "",
        title: "MASTER FASHION BUSINESS ",
    },
    {
        quote:
            "Connect with founders, investors, and mentors shaping the future of fashion.",
        name: "",
        title: "BUILD NETWORK THAT MATTERS",
    },
    {
        quote:
            "Save time and money (₹20+ lakh) with our fast-track 8-week and 6-month programs.",
        name: "",
        title: "SKIP 4 YEAR DEGREE",
    },
];

const AboutUs = () => {
    return (
        <div className="w-full max-w-6xl mx-auto mt-20 md:mt-40 flex flex-col gap-20 md:gap-40 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between px-20">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="font-bold text-4xl md:text-5xl w-full  text-center md:text-left "
                >
                    Why Apex ?
                </ScrollFloat>
                <div className="text-lg md:w-2/3 text-zinc-200 mt-5 md:mt-0">
                    Apex is a Fashion and Lifestyle Brand for those who want to build, not just learn. If you’re ready to turn your fashion dream into a brand, this is where you start.
                </div>
            </div>
            <div className="h-[28rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden -mt-40">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default AboutUs;
