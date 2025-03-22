import StickyScrollCards from "../ui/StickyScroll"

const Success = () => {
    return (
        <div className="w-full flex flex-row py-40 ">
            <div className="w-1/2 flex justify-center  items-center h-[50rem] md:sticky md:top-10">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Apply to Bootcamp
                    </h1>
                    <div className="text-lg md:w-2/5 text-center text-zinc-200 mt-5 md:pl-1">
                        Ready to join a home where you say YES to your next big quest?
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
