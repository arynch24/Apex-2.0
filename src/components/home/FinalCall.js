import React from "react";
import { Vortex } from "../ui/vortex";
import { Award, Medal } from "lucide-react";
export default function FinalCall() {
  return (
    <div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <div className='text-xl my-10 flex items-center gap-4 border-[0.5px] border-zinc-600 text-zinc-300 rounded-lg px-4 py-2 '>
          <Medal size={24} />
          Ready to Build Your Fashion Empire?
        </div>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Join Apex School of Fashion today.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Don't just dream—make it real.Start your fashion brand with us.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#63B3ED_0%,#2B6CB0_50%,#63B3ED_100%)]" />
              <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                Apply Now
              </span>
            </button>
    
          <button className="px-4 py-3 border-1 border-zinc-400 rounded-full  text-white ">Download Brouchure</button>
        </div>
      </Vortex>
    </div>
  );
}
