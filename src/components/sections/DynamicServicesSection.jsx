import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const DynamicServicesSection = () => {
  return (
    <div className="w-full py-6 px-4 lg:px-0 flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 p-0">
     
        <div className="w-full lg:w-[258px]">
          <h2 className="font-medium text-2xl lg:text-[40px] text-white leading-tight lg:leading-[42.4px] [font-family:'Playfair_Display',Helvetica] mb-2">
            Flutter's Dawn
          </h2>
          <p className="font-semibold text-sm lg:text-base text-white [font-family:'Quicksand',Helvetica]">
            History of flutter
          </p>
        </div>

        <div className="w-full lg:w-[405px]  [font-family:'Quicksand',Helvetica] ">
          <span className="text-[#ffffffcc] ">
            Uncover the fascinating story of Flutter in 'Flutter's Dawn:
            History of Flutter.' From humble origins to global acclaim,
            delve into its captivating narrative. Explore milestones, triumphs,
            and challenges. Whether tech enthusiast or curious mind, join us on
            this captivating journey!{" "}
          </span>
          <span className="text-[#08a7ce]">Click to begin!</span>
        </div>

       
       <div className="w-[150px] flex  lg:justify-end lg:items-end">
        <button className="bg-blue-100 text-white-100 rounded-[56px] px-[20px] lg:px-[30px] py-3 font-bold text-sm lg:text-base [font-family:'Quicksand',Helvetica] flex items-center gap-[15px]">
          BEGIN
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        </div>
        

      
     </div>
  );
};