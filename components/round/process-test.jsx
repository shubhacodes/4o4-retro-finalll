"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Minus, Square, X, Folder, FileText, Rocket } from "lucide-react";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

// Retro Process Section with Site Design Consistency
export function ProcessTestSoft() {
  const [activeCard, setActiveCard] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { playClick } = useSound();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tabData = [
    {
      id: 1,
      title: "01 - IDEA",
      subtitle: "Discovery Phase",
      content:
        "We get to know you—your brand, your goals, your vibe (and maybe your favorite snacks). This is where the ideas start flying and the creative wheels start turning.",
      image: "/process-1.png",
      status: "ACTIVE",
      progress: 100,
      icon: Folder,
    },
    {
      id: 2,
      title: "02 - EXECUTION",
      subtitle: "Development Phase",
      content:
        "We map out a plan and start bringing ideas to life with rough sketches and concepts. No idea is too wild at this stage.",
      image: "/process-2.png",
      status: "PENDING",
      progress: 0,
      icon: FileText,
    },
    {
      id: 3,
      title: "03 - LAUNCH",
      subtitle: "Deploy Phase",
      content:
        "This is where the magic happens. We translate the approved concepts into pixel-perfect designs and functional code.",
      image: "/process-3.png",
      status: "PENDING",
      progress: 0,
      icon: Rocket,
    },
  ];

  const currentTabData = tabData.find((tab) => tab.id === activeCard);

  return (
    <section className="w-full" style={{ backgroundColor: "#231F20" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-16 text-center">
            <SectionHeader
              mainHeading="From idea to 'damn, that's good!'"
              subLabel="Process"
              className="mb-4"
              onDarkBackground={true}
              pillPosition="section-boundary"
            />
          </div>

          {/* Retro-Modern Window */}
          <div className="relative w-full">
            <div className="bg-white border-2 border-[#231F20] rounded-xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="bg-[#DB5029] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b-2 border-[#231F20]">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-[#231F20] rounded-full flex items-center justify-center flex-shrink-0">
                    <Folder
                      size={10}
                      className="text-[#231F20] sm:w-3 sm:h-3"
                    />
                  </div>
                  <span className="text-white font-bold text-xs sm:text-sm font-oswald truncate">
                    Process Manager - [Our Work Process]
                  </span>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                  <button
                    className="bg-white border border-[#231F20] rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center transform hover:scale-105"
                    style={{
                      width: "clamp(22px, 4vw, 30px)",
                      height: "clamp(22px, 4vw, 30px)",
                    }}
                    onClick={() => playClick()}
                  >
                    <Minus size={12} className="text-[#231F20]" />
                  </button>
                  <button
                    className="bg-white border border-[#231F20] rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center transform hover:scale-105"
                    style={{
                      width: "clamp(22px, 4vw, 30px)",
                      height: "clamp(22px, 4vw, 30px)",
                    }}
                    onClick={() => playClick()}
                  >
                    <Square size={10} className="text-[#231F20]" />
                  </button>
                  <button
                    className="bg-white border border-[#231F20] rounded-full hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center transform hover:scale-105"
                    style={{
                      width: "clamp(22px, 4vw, 30px)",
                      height: "clamp(22px, 4vw, 30px)",
                    }}
                    onClick={() => playClick()}
                  >
                    <X size={12} className="text-[#231F20] hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[500px]">
                {/* Left Sidebar - Process List */}
                <div className="w-full lg:w-1/3 bg-white flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-[#231F20]">
                  {/* Sidebar Header */}
                  <div className="bg-[#DB5029] px-3 sm:px-4 py-2 sm:py-3 flex items-center">
                    <span className="text-white font-bold text-xs sm:text-sm font-oswald">
                      Process Steps
                    </span>
                  </div>

                  {/* Horizontal border line */}
                  <div className="h-0.5 bg-[#231F20]"></div>

                  {/* Process List */}
                  <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
                    {/* Mobile: Horizontal scrollable tabs */}
                    <div className="block lg:hidden">
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                        {tabData.map((tab) => {
                          const IconComponent = tab.icon;
                          return (
                            <div
                              key={tab.id}
                              className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-xs rounded-xl border-2 transition-all duration-300 hover:scale-105 flex-shrink-0 whitespace-nowrap ${
                                activeCard === tab.id
                                  ? "bg-[#DB5029] text-white border-[#DB5029]"
                                  : "bg-white text-[#231F20] border-[#231F20] hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                playClick();
                                setActiveCard(tab.id);
                              }}
                            >
                              <IconComponent
                                size={14}
                                className={
                                  activeCard === tab.id
                                    ? "text-white"
                                    : "text-[#231F20]"
                                }
                              />
                              <div className="flex flex-col">
                                <div
                                  className={`font-bold font-oswald text-xs ${
                                    activeCard === tab.id
                                      ? "text-white"
                                      : "text-[#231F20]"
                                  }`}
                                >
                                  {tab.title}
                                </div>
                                <div
                                  className={`text-xs opacity-75 font-space-grotesk ${
                                    activeCard === tab.id
                                      ? "text-white"
                                      : "text-[#231F20]"
                                  }`}
                                >
                                  {tab.subtitle}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Desktop: Vertical stacked layout */}
                    <div className="hidden lg:block">
                      <div className="space-y-2 sm:space-y-3">
                        {tabData.map((tab) => {
                          const IconComponent = tab.icon;
                          return (
                            <div
                              key={tab.id}
                              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 cursor-pointer text-xs sm:text-sm rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                                activeCard === tab.id
                                  ? "bg-[#DB5029] text-white border-[#DB5029]"
                                  : "bg-white text-[#231F20] border-[#231F20] hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                playClick();
                                setActiveCard(tab.id);
                              }}
                            >
                              <IconComponent
                                size={14}
                                className={
                                  activeCard === tab.id
                                    ? "text-white"
                                    : "text-[#231F20]"
                                }
                              />
                              <div className="flex-1 min-w-0">
                                <div className="font-bold font-oswald text-[#231F20] truncate">
                                  {tab.title}
                                </div>
                                <div className="text-xs opacity-75 font-space-grotesk text-[#231F20] truncate">
                                  {tab.subtitle}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Content Display */}
                <div className="flex-1 bg-white flex flex-col">
                  {/* Content Header */}
                  <div className="bg-[#DB5029] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
                    <span className="text-white font-bold text-xs sm:text-sm font-oswald truncate">
                      {currentTabData?.title || "Select Process"} - Details
                    </span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border border-white"></div>
                      <span className="text-white text-xs font-space-grotesk font-bold">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Horizontal border line */}
                  <div className="h-0.5 bg-[#231F20]"></div>

                  {/* Main Content */}
                  <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto">
                    {currentTabData ? (
                      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        {/* Process Description */}
                        <div>
                          <div className="font-bold mb-3 sm:mb-4 text-[#231F20] font-oswald text-lg sm:text-xl">
                            PROCESS DESCRIPTION
                          </div>
                          <div className="text-[#231F20] font-space-grotesk text-sm sm:text-base leading-relaxed bg-gray-50 p-3 sm:p-4 rounded-xl border-2 border-[#231F20]">
                            {currentTabData.content}
                          </div>
                        </div>

                        {/* Process Visualization */}
                        <div>
                          <div className="font-bold mb-3 sm:mb-4 text-[#231F20] font-oswald text-lg sm:text-xl">
                            VISUAL REPRESENTATION
                          </div>
                          <div className="bg-white border-2 border-[#231F20] rounded-xl overflow-hidden">
                            {/* Image Container */}
                            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[240px] lg:h-[200px]">
                              <div className="relative w-full max-w-[250px] sm:max-w-[300px] h-[150px] sm:h-[180px] lg:h-[200px]">
                                <Image
                                  src={currentTabData.image}
                                  alt={currentTabData.title}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 300px"
                                  priority
                                />
                              </div>
                            </div>

                            {/* Image Info Bar */}
                            <div className="bg-white border-t-2 border-[#231F20] px-3 sm:px-4 py-2 sm:py-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs sm:text-sm font-oswald font-bold text-[#231F20] truncate">
                                  {currentTabData.title} Visualization
                                </span>
                                <span className="text-xs font-space-grotesk text-[#231F20] opacity-75 flex-shrink-0">
                                  Stage {currentTabData.id} of 3
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-[#231F20] mt-8 font-space-grotesk text-sm sm:text-base">
                        Select a process from the sidebar to view details.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Bar - Hidden on mobile */}
              <div className="hidden sm:block bg-[#DB5029] border-t-2 border-[#231F20] px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 lg:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border border-white"></div>
                      <span className="text-white font-bold font-oswald">
                        STATUS: {currentTabData?.status || "IDLE"}
                      </span>
                    </div>
                    <div className="text-white font-space-grotesk">
                      ACTIVE PROCESS: {activeCard}/3
                    </div>
                    <div className="text-white font-space-grotesk">
                      PROGRESS: {currentTabData?.progress || 0}%
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-white font-space-grotesk text-xs">
                      {currentTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export for consistency
export default ProcessTestSoft;
