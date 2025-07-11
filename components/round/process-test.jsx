"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

// Manual Process Section - Click-only navigation with larger illustrations
export function ProcessTestSoft() {
  const [activeCard, setActiveCard] = useState(null);
  const { playClick } = useSound();

  const tabData = [
    {
      id: 1,
      title: "01 - Idea",
      content:
        "We get to know you—your brand, your goals, your vibe (and maybe your favorite snacks). This is where the ideas start flying and the creative wheels start turning.",
      image: "/process-1.png",
    },
    {
      id: 2,
      title: "02 - Execution",
      content:
        "We map out a plan and start bringing ideas to life with rough sketches and concepts. No idea is too wild at this stage.",
      image: "/process-2.png",
    },
    {
      id: 3,
      title: "03 - Launch",
      content:
        "This is where the magic happens. We translate the approved concepts into pixel-perfect designs and functional code.",
      image: "/process-3.png",
    },
  ];

  const currentTabData = tabData.find((tab) => tab.id === activeCard);

  return (
    <section className="w-full" style={{ backgroundColor: "#F7F4E9" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="flex flex-col items-center justify-center">
          <SectionHeader
            mainHeading="From idea to 'damn, that's good!'"
            subLabel="Our Process"
            className="mb-6 sm:mb-8 lg:mb-12"
          />

          {/* Main Container */}
          <div className="relative w-full">
            {/* Main content area */}
            <div className="relative bg-white border-2 border-black w-full min-h-[320px] sm:min-h-[360px] lg:h-[420px] p-4 sm:p-6 lg:p-10 rounded-lg">
              <div className="h-full flex flex-col justify-center">
                {/* Content Area */}
                <div className="flex flex-col lg:flex-row flex-1 relative items-center gap-6 sm:gap-8 lg:gap-12">
                  {/* Left: Expandable Cards */}
                  <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-8">
                    <div className="space-y-3 sm:space-y-4">
                      {tabData.map((tab) => (
                        <div
                          key={tab.id}
                          className="border-2 border-black rounded-lg bg-white overflow-hidden transform transition-all duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-lg"
                        >
                          {/* Card Header */}
                          <button
                            onClick={() => {
                              playClick();
                              setActiveCard(
                                activeCard === tab.id ? null : tab.id
                              );
                            }}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-300 ease-out"
                          >
                            <h3 className="font-bold text-base sm:text-lg lg:text-xl font-oswald text-black">
                              {tab.title}
                            </h3>
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center transition-all duration-500 ease-out transform ${
                                activeCard === tab.id
                                  ? "rotate-45 bg-black"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              <span
                                className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
                                  activeCard === tab.id
                                    ? "text-white"
                                    : "text-black"
                                }`}
                              >
                                +
                              </span>
                            </div>
                          </button>

                          {/* Expandable Content */}
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-out ${
                              activeCard === tab.id
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 transform transition-transform duration-500 ease-out">
                              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-black font-space-grotesk">
                                {tab.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Standalone Process Illustration */}
                  <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-4 lg:mt-0">
                    <div className="relative w-[280px] h-[220px] sm:w-[320px] sm:h-[250px] md:w-[360px] md:h-[280px] lg:w-[380px] lg:h-[300px] xl:w-[400px] xl:h-[320px]">
                      <Image
                        src={
                          currentTabData
                            ? currentTabData.image
                            : tabData[0].image
                        }
                        alt={
                          currentTabData
                            ? currentTabData.title
                            : tabData[0].title
                        }
                        fill
                        className="object-contain transition-all duration-500 ease-out"
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                        priority
                      />
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
