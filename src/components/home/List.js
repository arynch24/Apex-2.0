import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";


const List = () => {

    const items = [
        { content: "Aspiring Fashion Entrepreneurs" },
        { content: "Creatives and Designers" },
        { content: "Anyone Passionate About Fashion" },
        { content: "Industry Professionals" },
        { content: "Students Looking to Launch Big" },
        { content: "Tired of Your 9-to-5" },
        { content: "Paragraph Item 14" },
        
    ];
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto mt-20 md:my-40 md:px-20 flex flex-col md:flex-row gap-20 md:gap-40 text-center">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-5xl md:text-7xl font-bold max-w-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Who Is Apex For ?
                    </h1>
                </div>
                <div  style={{ height: '400px', position: 'relative '  }}>
                    <InfiniteScroll
                        items={items}
                        isTilted={false}
                        tiltDirection='left'
                        autoplay={true}
                        autoplaySpeed={0.5}
                        autoplayDirection="down"
                        pauseOnHover={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default List;