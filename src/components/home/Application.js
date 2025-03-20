import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
export default function Application() {
    const data = [
        {
            title: "01",
            desc: "Are You Ready to Redefine Fashion?",
            content: (
                <div>
                    <CardContainer className="inter-var -mt-20 ">
                        <CardBody
                            className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-10 py-15 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 dark:text-white">
                                Explore Your Fit
                            </CardItem>
                            <CardItem translateZ="50" className="h-[0.5px] my-4  bg-zinc-500 w-full">
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                                We’re looking for students who are passionate, driven, and ready to push boundaries. This step is about understanding your goals and vision.
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            ),
        },
        {
            title: "02",
            desc: "Let's Talk on the Vision",
            content: (
                <div>
                    <CardContainer className="inter-var -mt-20 ">
                        <CardBody
                            className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-10 py-15 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 dark:text-white">
                                Founder’s Chat
                            </CardItem>
                            <CardItem translateZ="50" className="h-[0.5px] my-4  bg-zinc-500 w-full">
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                                In this call, we’ll discuss your goals, what you hope to achieve, and how we can help you thrive. It’s a chance for us to get to know you.  
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            ),
        },
        {
            title: "03",
            desc: "Do We Click?",
            content: (
                <div>
                    <CardContainer className="inter-var -mt-20 ">
                        <CardBody
                            className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-10 py-15 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 dark:text-white">
                                Passion Check
                            </CardItem>
                            <CardItem translateZ="50" className="h-[0.5px] my-4  bg-zinc-500 w-full">
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                               This step is all about energy, enthusiasm, and your drive to succeed. We want to see if you're a perfect fit for our community.
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            ),
        },
        {
            title: "04",
            desc: "Welcome to Apex!",
            content: (
                <div>
                    <CardContainer className="inter-var -mt-20 ">
                        <CardBody
                            className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-10 py-15 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 dark:text-white">
                                Final Decision
                            </CardItem>
                            <CardItem translateZ="50" className="h-[0.5px] my-4  bg-zinc-500 w-full">
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-xl max-w-sm mt-2 dark:text-neutral-300">
                               If we're a match, we'll send you an official invitation to join our community. Get ready to create something extraordinary!
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full md:p-20">
            <Timeline data={data} />
        </div>
    );
}
