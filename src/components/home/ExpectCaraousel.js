import Card from '@/components/ui/Card'
import { Cover } from '@/components/ui/cover'
const ExpectCaraousel = () => {
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto mt-20 md:my-40 flex flex-col gap-20 md:gap-40 text-center">
                <div className="flex flex-col md:flex-row items-center justify-between px-20">
                    <h1 className="text-4xl md:text-5xl font-bold max-w-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        What you can <Cover>Expect ?</Cover>
                    </h1>
                    <div className="text-lg md:w-2/5 text-zinc-200 mt-5 md:mt-0">
                        We offer course which provides end to end knowledge to start a clothing brand
                    </div>
                </div>
                <div className='flex gap-6 w-full -mt-20'>
                    <Card title="HANDS-ON LEARNING" description="Immerse yourself in every aspect of the fashion industry with state-of-the-art resources." />
                    <Card title="EXPERT INSIGHTS" description="Learn from our extensive experience in building and scaling successful fashion brands." />
                    <Card title="CUSTOMIZED SUPPORT" description="Benefit from personalized mentorship tailored to your brand's unique journey." />
                    <Card title="MARKET READY LAUNCH" description="Finish the program with a fully developed brand, ready to make it's mark." />
                </div>

            </div>
        </div>
    )
}

export default ExpectCaraousel
