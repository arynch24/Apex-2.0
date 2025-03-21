import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";


const List = () => {

    const items = [

        {
            content: <div className="text-3xl">
                Aspiring Fashion Entrepreneurs
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                If fashion is your passion and you're ready to turn it into a successful business, this course is perfect for you.
            </p>
        },
        {
            content: <div className="text-3xl">
                Creatives and Designers
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                Whether you're a designer looking to launch your line or a creative individual with unique ideas, we're here to help you bring them to life.
            </p>
        },
        {
            content: <div className="text-3xl">
                Industry Professionals
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                If you're already in the fashion industry and want to expand your expertise to create your own brand, this is the next step in your journey.
            </p>
        },
        {
            content: <div className="text-3xl">
                Anyone Passionate About Fashion
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                If fashion is your passion and you're ready to turn it into a successful business, this course is perfect for you.
            </p>
        },
        {
            content: <div className="text-3xl">
                Tired of Your 9-to-5
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                If you're fed up with your job and dream of starting something of your own, this course will give you the fresh start you need to create a business you're truly passionate about.
            </p>
        },
        {
            content: <div className="text-3xl">
                Students Looking to Launch Big
            </div>
        },
        {
            content: <p className="text-[17px] md:text-md">
                If you're a student with big dream and want to kickstart your entrepreneurial journey in the fashion industry, this course will provide you with knowledge and support to make it happen.
            </p>
        },
    ];
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto mt-20 md:my-40 md:px-20 flex flex-col md:flex-row gap-20 md:gap-40 text-center">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-5xl md:text-7xl font-bold max-w-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Who Is Apex For ?
                    </h1>
                </div>
                <div style={{ height: '500px', position: 'relative ' }}>
                    <InfiniteScroll
                        items={items}
                        isTilted={false}
                        tiltDirection='left'
                        autoplay={true}
                        autoplaySpeed={0.5}
                        autoplayDirection="up"
                        pauseOnHover={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default List;