"use client";
import { cn } from "@/lib/utils";

export default function Card({ title, description }) {
  return (
    <div className="max-w-1/4 w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        {/* Dark overlay on hover */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-30"></div>
        {/* Content moved to the bottom */}
        <div className="relative z-10 text-gray-100 mt-56">
          <h1 className="font-bold text-xl md:text-[22px]">{title}</h1>
          <hr className=" bg-blue-900 mt-2"></hr>
          <p className="font-normal text-sm my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
