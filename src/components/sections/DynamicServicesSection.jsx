import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const DynamicServicesSection = () => {
  return (
    <div className="w-full py-6 px-4 lg:px-0 flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 p-0">
     
        {/* Title Section with slide-in from left */}
        <div className="w-full lg:w-[258px] opacity-0 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards]">
          <h2 className="font-medium text-2xl lg:text-[40px] text-white leading-tight lg:leading-[42.4px] [font-family:'Playfair_Display',Helvetica] mb-2 transform transition-all duration-500 hover:scale-105 hover:text-blue-200">
            Flutter's Dawn
          </h2>
          <p className="font-semibold text-sm lg:text-base text-white [font-family:'Quicksand',Helvetica] transition-all duration-300 hover:text-blue-100">
            History of flutter
          </p>
        </div>

        {/* Description Section with fade-in */}
        <div className="w-full lg:w-[405px] [font-family:'Quicksand',Helvetica] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <span className="text-[#ffffffcc] transition-all duration-300 hover:text-white">
            Uncover the fascinating story of Flutter in 'Flutter's Dawn:
            History of Flutter.' From humble origins to global acclaim,
            delve into its captivating narrative. Explore milestones, triumphs,
            and challenges. Whether tech enthusiast or curious mind, join us on
            this captivating journey!{" "}
          </span>
          <span className="text-[#08a7ce] transition-all duration-300 hover:text-[#0ea5e9] cursor-pointer animate-pulse">
            Click to begin!
          </span>
        </div>

        {/* Button Section with slide-in from right and hover animations */}
        <div className="w-[150px] flex lg:justify-end lg:items-end opacity-0 animate-[slideInRight_0.8s_ease-out_0.6s_forwards]">
          <button className="bg-gradient-to-r from-[#08a7ce] to-[#0ea5e9] text-white rounded-[56px] px-[20px] lg:px-[30px] py-3 font-bold text-sm lg:text-base [font-family:'Quicksand',Helvetica] flex items-center gap-[15px] 
                           transform transition-all duration-300 ease-out
                           hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50
                           hover:from-[#0ea5e9] hover:to-[#3b82f6]
                           active:scale-95
                           group">
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              BEGIN
            </span>
            <ArrowRightIcon className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
          </button>
        </div>
    </div>
  );
};