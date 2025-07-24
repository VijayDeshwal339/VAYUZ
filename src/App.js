import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { DynamicServicesSection } from "./components/sections/DynamicServicesSection";
import { FlutterAppDevelopmentSection } from "./components/sections/FlutterAppDevelopmentSection";
import { ServicesOverviewSection } from "./components/sections/ServicesOverviewSection";
import { UnlockPotentialSection } from "./components/sections/UnlockPotentialSection";

const App = () => {
  
  return (
    <div className="bg-[#131313] w-full min-h-screen flex ">
      {/* Sidebar */}
        <div className="w-[10px] xl:w-[213px] min-h-full">
        <Sidebar />
        </div>

        <div className="w-[100%] xl:w-[100%-213px]">
        {/* Header */}
         <Header />       
            {/* Main content sections */}
            <div className="w-[100%] px-5 space-y-16">
              {/* <UnlockPotentialSection /> */}
              <DynamicServicesSection />
              <ServicesOverviewSection />
              <FlutterAppDevelopmentSection />
            </div>
           </div>
        
      </div>
  
    
  );
};

export default App


