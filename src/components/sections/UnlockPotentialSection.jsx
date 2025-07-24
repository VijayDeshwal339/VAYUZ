import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Rectangle from "../../assets/Rectangle 3.svg"
import Group from "../../assets/Group 20364.svg"

export const UnlockPotentialSection = () => {
  return (
    <section className="w-full relative py-8 lg:py-16 px-4 lg:px-0">
      <div className="relative mx-auto max-w-full">
        {/* Decorative elements */}
        <div className="relative z-0">
          <div className="absolute right-0 top-[60px] hidden lg:block">
            <div className="w-32 h-32 bg-[#08a7ce] rounded-full blur-[125px] relative top-[223px]" />
            <div className="w-[73px] h-[73px] bg-[#09d809] rounded-[36.5px] blur-[98.4px] relative left-[37px]" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start xl:gap-20">
          {/* Left content */}
          <div className="flex flex-col space-y-8 w-full lg:max-w-[409px]">
            <div className="space-y-4">
              <h2 className="font-medium text-2xl lg:text-[43px] leading-tight lg:leading-[51.6px] text-white [font-family:'Playfair_Display',Helvetica]">
                Unlock the Potential of Flutter
              </h2>
              <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[28.2px] text-white [font-family:'Quicksand',Helvetica]">
                Your Premier Partner for Cross-Platform App Excellence!
              </p>
            </div>

            <Button className="rounded-[56px] bg-blue-100 text-white-100 px-[30px] py-3 font-bold text-sm lg:text-base [font-family:'Quicksand',Helvetica] w-fit">
              UPGRADE YOUR TECH
            </Button>
          </div>

          {/* Right content - Code examples */}
          <div className="relative w-full lg:w-auto">
            <img
              className="w-full max-w-[507px] h-auto lg:h-[372px] object-cover"
              alt="Rectangle"
              src={Rectangle}
            />

            <Card className="absolute w-[40%] lg:w-[298px] h-auto lg:h-[81px] top-[50%] lg:top-[195px] -right-20 p-0 overflow-hidden">
              <div className="w-full h-full bg-[#d9d9d9] rounded-md bg-[url(/src/assets/code-20240410-150743-via-10015-io.png)] bg-[100%_100%]" />
            </Card>

            <Card className="absolute w-[40%] lg:w-[298px] h-auto lg:h-[161px] top-[70%] lg:top-[310px] right-[0%]   p-0 overflow-hidden">
              <div className="relative h-full w-full">
                <div className="absolute w-full h-40 top-px bg-[#d9d9d9] rounded-md" />
                <img
                  className="absolute w-full h-full"
                  alt="Code"
                  src={Group}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};