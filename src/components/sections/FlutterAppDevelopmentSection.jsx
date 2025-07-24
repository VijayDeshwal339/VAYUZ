import React from 'react'
import { Input } from "../ui/input";
import { Button } from '@radix-ui/themes';

export const FlutterAppDevelopmentSection = () => {

    const navLinks = [
    { text: "Events", left: "0" },
    { text: "Gen AI", left: "101px" },
    { text: "Careers", left: "200px" },
    { text: "Case study", left: "310px" },
    { text: "SME Talks", left: "444px" },
  ];

   const formFields = [
    { label: "Full Name", top: "56" },
    { label: "Email", top: "284px" },
    { label: "Phone Number", top: "344px" },
  ];

  const footerLinks = [
    { text: "About", left: "0" },
    { text: "Insights", left: "20" },
    { text: "Community", left: "171px" },
    { text: "Privacy & Policies", left: "287px" },
  ];

  return (
    <div className='w-full flex flex-col pb-10'>

      <div className='flex flex-col lg:flex-row justify-between items-start gap-5'>

        {/* Left side with staggered animations */}
        <div className='flex flex-col items-start lg:gap-36 opacity-0 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards]'>
         {/* Navigation Links with individual animations */}
         <div className="w-[100%] sm:w-[410px] flex flex-wrap gap-5 sm:justify-between">
        {navLinks.map((link, index) => (
          <div
            key={`nav-${index}`}
            className="font-['Quicksand',Helvetica] font-semibold text-white text-sm lg:text-base tracking-[0] leading-[normal] cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-blue-200 hover:-translate-y-1 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{
              animationDelay: `${0.4 + index * 0.1}s`
            }}
          >
            {link.text}
          </div>
        ))}
         </div>

          {/* Content section with fade-in animation */}
          <div className='flex flex-col gap-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]'>
          <div className="w-[100%] sm:w-[401px] font-['Quicksand',Helvetica] font-semibold text-white text-lg lg:text-[28px] tracking-[0] leading-[normal] mt-8 lg:mt-0 transform transition-all duration-500 hover:text-blue-100 hover:scale-105">
            For any collaborative projects or enquiries feel free to connect with
            us.
          </div>
           <div className="w-[207px] font-['Quicksand',Helvetica] font-semibold text-white text-xl lg:text-3xl tracking-[0] leading-[normal] mt-4 lg:mt-0 transform transition-all duration-300 hover:text-blue-200 hover:scale-110 cursor-pointer">
            vayuz.com
           </div>
           </div>
           </div>

       {/* Right Side with slide-in from right */}
       <div className='flex flex-col lg:items-end lg:gap-12 opacity-0 animate-[slideInRight_0.8s_ease-out_0.4s_forwards]'>
           {/* Title with dramatic entrance */}
           <div className="w-[339px] font-['Playfair_Display',Helvetica] font-medium text-white text-3xl lg:text-[75px] lg:text-center tracking-[1.50px] leading-tight lg:leading-[83.1px] mt-8 lg:mt-0 transform transition-all duration-500 hover:scale-105 hover:text-blue-200 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
             Connect With Us
           </div>

            {/* Form section with staggered field animations */}
            <div className='flex flex-col gap-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]'>
             <div className="w-[100%] sm:w-[301px] mt-8 lg:mt-0">
             {formFields.map((field, index) => (
             <div
            key={`field-${index}`}
            className="w-full lg:w-[301px] h-[33px] mt-8 first:mt-0 transform transition-all duration-300 hover:translate-x-2 opacity-0 animate-[slideInRight_0.6s_ease-out_forwards]"
            style={{
              animationDelay: `${1 + index * 0.2}s`
            }}
             >
            <div className="h-[18px] top-0 left-0 font-['Quicksand',Helvetica] font-medium text-white-60 text-sm tracking-[0] leading-[normal] transition-all duration-300 hover:text-white">
              {field.label}
            </div>
            <Input
              className="w-full lg:w-[300px] h-8 top-4 left-0 bg-transparent border-0 border-b border-white-60 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 transition-all duration-300 focus:border-blue-400 hover:border-blue-300 focus:scale-105"
              type={
                field.label === "Email"
                  ? "email"
                  : field.label === "Phone Number"
                    ? "tel"
                    : "text"
              }
            />
          </div>
             ))}
            </div>
             {/* Submit button with hover animations */}
             <Button className="self-start lg:self-end px-[25px] py-2 bg-blue-40 rounded-[56px] border border-solid border-[#08a7ce] font-['Quicksand',Helvetica] font-bold text-white-100 text-[13px] tracking-[0] leading-[20.8px] transition-all duration-300 hover:bg-blue-100 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 active:scale-95 opacity-0 animate-[bounceIn_0.8s_ease-out_1.6s_forwards] group">
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                SUBMIT
              </span>
            </Button>
           </div>

        </div>
  
        </div> 

        {/* Footer section with staggered link animations */}
        <div className="w-[100%] sm:w-[410px] flex flex-wrap gap-5 sm:justify-between mt-[120px] opacity-0 animate-[fadeInUp_0.8s_ease-out_1.8s_forwards]">
          {footerLinks.map((link, index) => (
            <div
              key={`footer-${index}`}
              className={`font-['Quicksand',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-blue-200 hover:-translate-y-1 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]`}
              style={{
                animationDelay: `${2 + index * 0.1}s`
              }}
            >
              {link.text}
            </div>
          ))}

        </div>
    </div>
  )
}
