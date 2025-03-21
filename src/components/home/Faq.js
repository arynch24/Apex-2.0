import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4">
                <div className="p-20">
                    <h1 className="text-4xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        FAQ -
                    </h1>
                </div>
                <div className="mx-auto max-w-4xl">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>WHAT IS APEX SCHOOL OF FASHION ?</AccordionTrigger>
                            <AccordionContent>
                                Apex School of Fashion is a comprehensive fashion entrepreneurship program designed to help aspiring entrepreneurs launch and scale successful fashion brands.
                                The course covers every aspect of building a brand, from design to manufacturing, and includes hands-on experience in garment production.
                                At its core, Roots and Ink is a revolution in fashion education. It's more than just a program. It's a launchpad. A place where creativity meets execution. Where your ideas don't just live in your mind, but take shape, become real, and change the industry. We cover everything—from design and sourcing to manufacturing and branding—so you can launch, scale, and succeed in fashion
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>WHAT WILL I LEARN IN THIS COURSE ?</AccordionTrigger>
                            <AccordionContent>
                                You'll learn about brand creation, fabric sourcing, design, manufacturing processes, legalities, marketing, and operations management. The program is designed to provide both theoretical knowledge and practical skills needed to run a fashion business. You will learn to master the entire process of fashion entrepreneurship. Think of it as a blueprint for brand creation. From your first sketch to the moment your product reaches the market, we equip you with the tools, insights, and skills to build, run, and grow a fashion empire. This is your chance to learn not just the "how," but the "why" behind every decision.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>WILL I HAVE ACCESS TO REAL- WORLD EXPERIENCE ?</AccordionTrigger>
                            <AccordionContent>
                                Yes, the course offers hands-on learning, including practical exposure to garment manufacturing in our in house factory. You'll also receive guidance and support in executing your designs and turning them into finished products. Yes. And not just any experience. You'll be embedded in the process, working in our own factory. This isn't theoretical. You'll learn by doing, from fabric sourcing to overseeing manufacturing. You won't just understand the system—you'll be part of it, driving results. Your designs, brought to life with our resources.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>IS THIS COURSE SUITABLE FOR BEGINNERS ?</AccordionTrigger>
                            <AccordionContent>
                                Yes, whether you're a beginner with no prior experience in fashion or someone looking to scale an existing brand, Roots and Ink provides the tools, insights, and practical guidance to succeed at any level.Whether you're new to fashion or already running a brand, Roots and Ink is built to scale your knowledge. It's designed to take you from where you are to where you need to be.We start with the basics but push you towards mastery, no matter your starting point.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>WHO ARE THE INSTRUCTORS AND MENTORS ?</AccordionTrigger>
                            <AccordionContent>
                                The course is taught by industry veterans with over 30 years of experience, including experts from Aditya Birla, Arvind, D2C brands, and Shark Tank brands.You'll also have access to guest lectures and mentorship from leaders in the fashion industry.We've assembled a dream team of industry disruptors. People who have been in the trenches and emerged as pioneers.With over 30 years of experience, our instructors come from giants like Aditya Birla and Arvind, along with trailblazers from D2C brands and even those who've stood on the Shark Tank stage.They're not just teachers—they're mentors guiding you through every twist and turn.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>WHAT KIND OF SUPPORT WILL I RECEIVE DURING THE COURSE?</AccordionTrigger>
                            <AccordionContent>
                                This is where Roots and Ink stands apart. You'll have one-on-one mentorship with industry experts. Free consultations. And full access to our manufacturing facilities.You'll be guided, mentored, and supported in turning your vision into a brand. We don't just teach you how to build—we help you build. full access to our manufacturing unit to help execute your designs from start to finish.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>CAN I ACCESS THIS COURSE ONLINE ?</AccordionTrigger>
                            <AccordionContent>
                                Yes. We're offering Roots and Ink both in-person and online, making sure anyone, anywhere, can participate. No matter where you are, you'll have access to the same expert guidance, practical knowledge, and game-changing insights.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>WILL I RECEIVE A CERTIFICATE ?</AccordionTrigger>
                            <AccordionContent>
                                Yes, upon successful completion of the program, you'll receive a certification that can enhance your credibility in the fashion industry and help you attract potential investors or partners.Yes, but this isn't just a piece of paper. It's a badge of honor. A symbol of your journey and the expertise you've gained. It tells the world: I didn't just learn fashion—I mastered it.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq