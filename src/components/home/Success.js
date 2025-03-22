import StickyScrollCards from "../ui/StickyScroll"

const Success = () => {
    return (
        <div className="w-full flex flex-row pt-40">
            <div className="w-1/2 flex justify-center items-center h-screen md:sticky md:top-1">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        SUCCESS AND OUTCOMES
                    </h1>
                    <div className="text-lg md:w-[80%] mt-5 md:pl-1">
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                            <li>100% of Apex participants launch their brands during the program.</li>
                            <li>Collaborates with top fashion manufacturers & retailers.</li>
                            <li>Mentors have 30+ years of experience with global brands.</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <StickyScrollCards />
            </div>
        </div>
    );
};

export default Success;
