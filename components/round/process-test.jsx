"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

// Retro Process Section with Terminal Interface
export function ProcessTestSoft() {
  const [activeCard, setActiveCard] = useState(1);
  const { playClick } = useSound();

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
    },
  ];

  const currentTabData = tabData.find((tab) => tab.id === activeCard);

  return (
    <section className="w-full" style={{ backgroundColor: "#231F20" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12 text-center">
            <SectionHeader
              mainHeading="From idea to 'damn, that's good!'"
              subLabel="Process"
              className="mb-4"
              onDarkBackground={true}
              pillPosition="section-boundary"
              customPillStyle={{ top: "-40px" }}
            />
          </div>

          {/* Retro Terminal Container */}
          <div className="relative w-full">
            {/* Main Terminal Window */}
            <div className="relative bg-[#DB5029] border-2 border-black overflow-hidden rounded-xl">
              {/* Terminal Status Bar */}
              <div className="bg-[#231F20] border-b-2 border-black p-2">
                <div className="flex items-center gap-2 text-[#DB5029] font-mono text-xs">
                  <span className="animate-pulse">●</span>
                  <span>SYSTEM STATUS: ONLINE</span>
                  <span className="text-white">|</span>
                  <span>ACTIVE PROCESSES: {activeCard}/3</span>
                  <span className="text-white">|</span>
                  <span>MEMORY: {((activeCard / 3) * 100).toFixed(0)}%</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-b-xl">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Left: Process Terminal */}
                  <div className="w-full lg:w-1/2 flex items-center">
                    <div className="bg-[#231F20] border-2 border-black rounded-lg p-4 font-mono text-sm w-full">
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DB5029]">
                        <span className="text-[#DB5029] font-bold">
                          PROCESS_MANAGER.EXE
                        </span>
                        <span className="text-white text-xs">v2.0.24</span>
                      </div>

                      {/* Process List */}
                      <div className="space-y-2">
                        {tabData.map((tab) => (
                          <div
                            key={tab.id}
                            className={`border-2 rounded-lg p-3 cursor-pointer transition-all duration-300 ${
                              activeCard === tab.id
                                ? "border-[#DB5029] bg-[#DB5029]/10"
                                : "border-gray-600 hover:border-[#DB5029]/50"
                            }`}
                            onClick={() => {
                              playClick();
                              setActiveCard(tab.id);
                            }}
                          >
                            {/* Process Header */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    activeCard === tab.id
                                      ? "bg-[#DB5029] animate-pulse"
                                      : "bg-gray-500"
                                  }`}
                                ></div>
                                <span
                                  className={`font-bold ${
                                    activeCard === tab.id
                                      ? "text-[#DB5029]"
                                      : "text-white"
                                  }`}
                                >
                                  {tab.title}
                                </span>
                              </div>
                              <span
                                className={`text-xs px-2 py-1 rounded border ${
                                  activeCard === tab.id
                                    ? "text-[#DB5029] border-[#DB5029]"
                                    : "text-gray-400 border-gray-600"
                                }`}
                              >
                                {activeCard === tab.id ? "RUNNING" : "IDLE"}
                              </span>
                            </div>

                            {/* Process Details */}
                            <div className="text-xs text-gray-400 mb-2">
                              {tab.subtitle}
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-700 rounded-full h-1">
                              <div
                                className={`h-1 rounded-full transition-all duration-500 ${
                                  activeCard === tab.id
                                    ? "bg-[#DB5029]"
                                    : "bg-gray-600"
                                }`}
                                style={{
                                  width: `${activeCard === tab.id ? 100 : 0}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Terminal Footer */}
                      <div className="mt-4 pt-2 border-t border-[#DB5029]/30">
                        <div className="flex items-center gap-2 text-[#DB5029] text-xs">
                          <span className="animate-pulse">{">"}</span>
                          <span>SELECT PROCESS TO VIEW DETAILS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Process Display */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-[#F7F4E9] border-2 border-black rounded-lg p-4 min-h-[400px]">
                      {/* Display Header */}
                      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                        <span className="text-[#231F20] font-bold font-oswald text-lg">
                          {currentTabData?.title || "SELECT PROCESS"}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-[#231F20] font-mono">
                            LIVE
                          </span>
                        </div>
                      </div>

                      {/* Process Content */}
                      <div className="space-y-4">
                        {/* Process Description */}
                        <div className="bg-white border-2 border-black rounded-lg p-4">
                          <p className="text-[#231F20] font-space-grotesk leading-relaxed">
                            {currentTabData?.content ||
                              "No process selected. Click on a process in the terminal to view details."}
                          </p>
                        </div>

                        {/* Process Visualization */}
                        <div className="bg-white border-2 border-black rounded-lg p-4 flex items-center justify-center">
                          <div className="relative w-[280px] h-[220px] sm:w-[320px] sm:h-[250px]">
                            <Image
                              src={currentTabData?.image || tabData[0].image}
                              alt={currentTabData?.title || "Process"}
                              fill
                              className="object-contain transition-all duration-500 ease-out"
                              sizes="(max-width: 640px) 280px, 320px"
                              priority
                            />

                            {/* Retro Scanlines Effect */}
                            <div
                              className="absolute inset-0 pointer-events-none opacity-10"
                              style={{
                                background: `repeating-linear-gradient(
                                  0deg,
                                  transparent,
                                  transparent 2px,
                                  rgba(0,0,0,0.1) 2px,
                                  rgba(0,0,0,0.1) 4px
                                )`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Process Stats */}
                        <div className="bg-[#231F20] border-2 border-black rounded-lg p-3">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-[#DB5029] font-mono text-xs">
                                STATUS
                              </div>
                              <div className="text-white font-bold text-sm">
                                ACTIVE
                              </div>
                            </div>
                            <div>
                              <div className="text-[#DB5029] font-mono text-xs">
                                PRIORITY
                              </div>
                              <div className="text-white font-bold text-sm">
                                HIGH
                              </div>
                            </div>
                            <div>
                              <div className="text-[#DB5029] font-mono text-xs">
                                PROGRESS
                              </div>
                              <div className="text-white font-bold text-sm">
                                100%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
