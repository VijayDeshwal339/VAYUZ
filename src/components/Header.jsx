import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
  { text: "App Development" },
  { text: "Challenges" },
  { text: "Hire Developer" },
  { text: "Community" },
];


  return (
    <header className="w-full bg-[#131313] border-b border-gray-800 px-4 py-4 relative z-50">
      {/* Flex layout for title and menu icon */}
      <div className="flex items-center justify-between">
        {/* Left spacer for alignment */}
        <div className="w-6 xl:hidden" />

        {/* Title */}
        <h1 className="flex-1 text-start [font-family:'Quicksand',Helvetica] font-semibold text-white text-base sm:text-lg">
          Securing Your Flutter App: Best Practices and Techniques
        </h1>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Slide-out menu for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#1e1e1e] z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } xl:hidden shadow-lg border-r border-gray-700`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>
          <nav className="mt-6 space-y-4">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="text-white text-base px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
              >
                {item.text}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};
