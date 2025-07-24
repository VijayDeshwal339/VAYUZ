import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Logo from "../assets/Logo.svg"
import Rectangle from "../assets/rectangle-143.svg"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { text: "App Development" },
    { text: "Challenges" },
    { text: "Hire Developer" },
    { text: "Community" },
  ];

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          className="p-2 text-white bg-[#131313] hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed lg:relative top-0 left-0 w-[280px] lg:w-[213px] h-full bg-[#131313] z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} border-r border-gray-800`}>
        {/* Vertical line */}
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800"></div>
        
        <div className="p-4 lg:p-0 h-full overflow-y-auto">
          {/* Logo */}
          <div className="mt-4 lg:mt-[23px] ml-0 lg:ml-[45px] mb-8">
            <img
              className="w-[130px] h-[30px] object-cover"
              alt="Vayuz logo"
              src={Logo}
            />
          </div>

          {/* Contact button */}
          <div className="ml-0 lg:ml-[30px] mb-8">
            <button
              variant="ghost"
              className="flex items-center gap-2.5 px-[30px] py-3 overflow-hidden w-full lg:w-auto border-conic-gradient border rounded-md"
            >
              <span className="[font-family:'Quicksand',Helvetica] font-bold text-white-100 text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                CONTACT US
              </span>
            </button>
          </div>

          {/* Navigation menu */}
          <nav className="ml-0 lg:ml-5 space-y-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center gap-2.5 pl-3 pr-3 py-2 rounded-[7px] overflow-hidden text-left w-full justify-start hover:bg-gray-800"
              >
                <span className="[font-family:'Quicksand',Helvetica] font-medium text-white-100 text-[15px] tracking-[0] leading-6">
                  {item.text}
                </span>
              </Button>
            ))}
          </nav>

          {/* Info card */}
          <div className="ml-0 lg:ml-6 mt-8 lg:mt-[60px] hidden lg:block">
            <Card className="w-full max-w-[167px] h-[170px] bg-transparent border-none">
              <CardContent className="p-0">
                <img
                  className="w-[165px] h-[101px] object-cover rounded-lg"
                  alt="Rectangle"
                  src={Rectangle}
                />
                <p className="w-[165px] h-[54px] mt-[15px] [font-family:'Quicksand',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  Lorem ipsum dolor sit amet consectetur. Enim tempor posuere
                  rutrum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};