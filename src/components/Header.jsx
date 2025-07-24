import React from "react";

export const Header = () => {
  return (
    <header className="w-full bg-[#131313] border-b border-gray-800 px-4 py-7">
      <div className="flex items-center justify-between ">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="[font-family:'Quicksand',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
            Securing Your Flutter App: Best Practices and Techniques
          </h1>
        </div>
      </div>
    </header>
  );
};