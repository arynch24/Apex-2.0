import ShinyText from '@/components/ui/ShinyText';

const Hero = () => {
    return (
        <div className="w-full rounded-md flex bg-black/[0.96] antialiased relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 w-full h-full bg-grid-white/[0.02] backdrop-blur-3xl"
                    style={{
                        backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                        maskImage: `
                linear-gradient(to bottom, 
                    rgba(0, 0, 0, 1) 0%, 
                    rgba(0, 0, 0, 0.8) 60%, 
                    rgba(0, 0, 0, 0) 100%),
                radial-gradient(circle at center, 
                    rgba(0, 0, 0, 1) 0%, 
                    rgba(0, 0, 0, 0.8) 70%, 
                    rgba(0, 0, 0, 0) 100%)
            `,
                        boxShadow: '0px 100px 120px 180px rgba(0, 0, 0, 0.8)'
                    }}
                />

                {/* Bottom Blur Effect */}
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent blur-5xl" />
            </div>

            {/* Content */}
            <div className="h-screen md:items-center md:justify-center p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Introducing India's First <br />
                    Fashion Entrepreneurship Program
                </h1>
                <ShinyText text="Empowering India's next Generation of Fashion Entrepreneurship" disabled={false} speed={3} className=' mt-4 font-normal text-base text-white max-w-lg text-center mx-auto' />
                <div className="flex justify-center w-full mt-12">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#63B3ED_0%,#2B6CB0_50%,#63B3ED_100%)]" />
                        <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                            Apply Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
