import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Rectangle from "../../assets/Rectangle 129.svg"

export const ServicesOverviewSection = () => {
  const services = [
    {
      title: "Flutter App Development",
      content:
        "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!",
      isOpen: true,
    },
    {
      title: "Ui/ux Design",
      content: "",
      isOpen: false,
    },
    {
      title: "Customization & Integration",
      content: "",
      isOpen: false,
    },
    {
      title: "Testing & Quality Assurance",
      content: "",
      isOpen: false,
    },
    {
      title: "Maintenance & Support",
      content: "",
      isOpen: false,
    },
    {
      title: "Consulting & Training",
      content: "",
      isOpen: false,
    },
    {
      title: "Migration & Upgrades",
      content: "",
      isOpen: false,
    },
  ];

  return (
    <section className="w-full py-8 lg:py-16 flex flex-col items-center px-4 lg:px-0">
      <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
        <h2 className="font-normal text-white text-2xl lg:text-4xl mb-4 [font-family:'Playfair_Display',Helvetica]">
          Our Dynamic Services Suite!
        </h2>
        <p className="font-medium text-[#ffffffcc] text-lg lg:text-[22px] mb-6 [font-family:'Quicksand',Helvetica]">
          Embrace Innovation: Let's Create Together!
        </p>
        <p className="font-medium text-white-80 text-sm lg:text-base [font-family:'Quicksand',Helvetica]">
          Step into innovation! Explore our range of services and let's
          create something extraordinary together. Your vision, our expertise.
          Let's begin!
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="w-full lg:w-3/5">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {services.map((service, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="py-4 [font-family:'Playfair_Display',Helvetica] font-medium text-white-80 text-lg lg:text-[26px] tracking-[1.04px] hover:no-underline text-left">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  {index === 0 && (
                    <p className="[font-family:'Quicksand',Helvetica] font-normal text-white-60 text-sm lg:text-base">
                      <span className="font-medium text-[#ffffff99]">
                        Unlock endless possibilities with Flutter App
                        Development. Build beautiful, high-performance
                        applications for any platform - faster and easier than
                        ever before. Ready to revolutionize your app experience?
                      </span>
                      <span className="font-medium text-[#08a7cecc]">
                        &nbsp;
                      </span>
                      <span className="font-semibold text-[#08a7cecc]">
                        Let's get started today!
                      </span>
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-md lg:max-w-none lg:h-[509px] object-cover"
            alt="App development showcase"
            src={Rectangle}
          />
        </div>
      </div>
    </section>
  );
};