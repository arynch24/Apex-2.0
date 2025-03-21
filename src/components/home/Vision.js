import React from 'react'
import FlyingPosters from '../FlyingPosters/FlyingPosters'

const Vision = () => {
    const items = [
        'https://picsum.photos/500/500?grayscale',
        'https://picsum.photos/600/600?grayscale',
        'https://picsum.photos/400/400?grayscale'
    ];

    return (
        <div className="w-full flex justify-center py-20">
            <div className="w-full max-w-7xl py-20 px-4 md:px-8 flex flex-col md:flex-row">
                <div className="flex flex-col  justify-center md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        FROM VISION TO REALITY
                    </h1>
                    <div className='h-[0.5px] bg-zinc-600 w-full my-4 '></div>
                    <p className='text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-600 dark:from-neutral-400 dark:via-white dark:to-white'>
                        The Journey of Era of Nari
                    </p>
                    <p className='text-lg mt-10  text-neutral-700 dark:text-neutral-300 '>
                        <b>Era of Nari</b>
                        is a brand that <b>empowers women entrepreneurs in fashion, </b> launching without any prior knowledge or experience, while celebrating <b>tradition</b> and <b>embracing modern design.</b> With Apex support, they have successfully navigated challenges in their journey. We aim to help <b>100 more </b>brands like Era of Nari in the near future.
                    </p>
                </div>
                <div className='w-1/2' style={{ height: '600px', position: 'relative' }}>
                    <FlyingPosters items={items} />
                </div>
            </div>
        </div>
    )
}

export default Vision;