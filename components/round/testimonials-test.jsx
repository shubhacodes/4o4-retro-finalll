"use client";

import { useState } from "react";
import { StandardCTAButton } from "./cta-test";
import JoystickButton from "@/components/ui/JoystickButton";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

const tabsData = [
  {
    value: "mk-associates",
    label: "MK Associates",
    title: "Brand Upgrade",
    subtitle: "Complete Rebrand",
    description:
      "At 404, we believe the best ideas don't always follow the brief. They show up in the margins in wrong turns, happy accidents, and unexpected detours. Your brand isn't broken, it just needs 404 magic. So bring us the scraps, the static, the wild ideas that don't make sense yet.",
    clientName: "Michael Kumar",
    clientRole: "Creative Director",
  },
  {
    value: "glc-foods",
    label: "GLC Foods",
    title: "Digital Presence",
    subtitle: "Website & Marketing",
    description:
      "Working with 404 was a game-changer for our food business. They didn't just build us a website - they crafted our entire digital identity. From our logo to our social media presence, everything flows seamlessly. Our online orders increased by 300% in the first quarter after launch.",
    clientName: "Gloria Chen",
    clientRole: "CEO & Founder",
  },
  {
    value: "tech-startup",
    label: "TechFlow",
    title: "Startup Launch",
    subtitle: "Full Package",
    description:
      "404 took our rough concept and turned it into a compelling brand story. They understood our vision before we even fully articulated it. The website they built perfectly captures our innovative spirit while remaining user-friendly. We've secured three major clients directly through our new site.",
    clientName: "Sarah Mitchell",
    clientRole: "Co-Founder",
  },
  {
    value: "retail-chain",
    label: "Urban Threads",
    title: "E-commerce Revamp",
    subtitle: "Fast Project",
    description:
      "Our brick-and-mortar clothing store was struggling until 404 helped us transition online. They created an e-commerce platform that feels as personal as shopping in our physical store. The brand identity they developed perfectly captures our urban aesthetic and tripled our sales.",
    clientName: "Marcus Thompson",
    clientRole: "Store Owner",
  },
];

// Soft Edges Version
function BrowserTabsTestSoft() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);
  const [isNewTab, setIsNewTab] = useState(false);
  const { playClick } = useSound();

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  const handleTabClick = (tabValue) => {
    playClick();
    setActiveTab(tabValue);
    setIsNewTab(false);
  };

  const handleNewTab = () => {
    playClick();
    setIsNewTab(true);
    setActiveTab("");
  };

  const handleContactClick = () => {
    playClick();
    console.log("Contact Us clicked");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      {/* Soft Chrome Browser Window Frame */}
      <div className="relative">
        {/* Main Chrome Window - Soft Edges */}
        <div className="relative bg-[#FFB600] border-2 border-black overflow-hidden rounded-xl">
          {/* Tab Bar - Updated to yellow */}
          <div className="bg-[#FFB600] border-b-2 border-black rounded-t-xl">
            <div className="flex p-1 sm:p-2 overflow-x-auto scrollbar-hide">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabClick(tab.value)}
                  className={`
                    px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-oswald transition-all duration-500 ease-out relative group rounded-t-lg mx-0.5 sm:mx-1 whitespace-nowrap flex-shrink-0 min-w-[80px] sm:min-w-[100px]
                    ${
                      activeTab === tab.value && !isNewTab
                        ? "bg-white text-black border-b-0 transform -translate-y-1 shadow-sm"
                        : "bg-white/80 text-[#3f4c38] hover:bg-white hover:transform hover:-translate-y-0.5"
                    }
                  `}
                >
                  <div className="flex items-center gap-1 sm:gap-2 justify-center">
                    {/* favicon */}
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ease-out
                      ${
                        activeTab === tab.value && !isNewTab
                          ? "bg-black"
                          : "bg-gray-500 group-hover:bg-gray-600"
                      }`}
                    ></div>
                    <span className="text-xs whitespace-nowrap">
                      {tab.label}
                    </span>
                    {activeTab === tab.value && !isNewTab && (
                      <span className="text-xs ml-1 hover:bg-black hover:text-white px-1 rounded-full transition-all duration-300 ease-out cursor-pointer hidden sm:inline">
                        ×
                      </span>
                    )}
                  </div>
                </button>
              ))}

              {/* New Tab Button */}
              <button
                onClick={handleNewTab}
                className={`px-2 sm:px-4 py-2 sm:py-3 font-oswald transition-all duration-500 ease-out rounded-t-lg mx-0.5 sm:mx-1 flex items-center justify-center group flex-shrink-0
                  ${
                    isNewTab
                      ? "bg-[#FFB600] text-black transform -translate-y-1"
                      : "bg-white text-black hover:bg-gray-100 hover:transform hover:-translate-y-0.5"
                  }`}
              >
                <span className="text-sm transition-transform duration-300 ease-out group-hover:scale-110">
                  +
                </span>
              </button>
            </div>
          </div>

          {/* Address Bar Area - Updated to yellow */}
          <div className="bg-[#FFB600] border-b-2 border-black p-2 sm:p-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Navigation Buttons - Updated to match site design */}
              <div className="hidden sm:flex gap-2">
                <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                  <span className="text-xs">←</span>
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                  <span className="text-xs">→</span>
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                  <span className="text-xs">↻</span>
                </button>
              </div>

              {/* Address Bar */}
              <div className="flex-1">
                <div className="bg-white border-2 border-black px-2 sm:px-4 py-1 sm:py-2 rounded-full">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-[#3f4c38] font-space-grotesk truncate">
                      <span className="hidden sm:inline">
                        https://404foundus.com/testimonials/
                      </span>
                      <span className="sm:hidden">404foundus.com/</span>
                      {isNewTab ? "new-opportunity" : currentTab?.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Button - Updated to match site design */}
              <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                <span className="text-xs text-[#3f4c38]">⋮</span>
              </button>
            </div>
          </div>

          {/* Website Content Area - Changed to white background */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-b-xl flex justify-center">
            {isNewTab ? (
              /* New Tab Content */
              <div className="flex flex-col max-w-3xl text-center w-full relative">
                {/* Subtle PREVIEW watermark */}
                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                  <span className="text-gray-400 text-xs font-oswald transform -rotate-12 tracking-widest">
                    PREVIEW
                  </span>
                </div>

                {/* Header with placeholder profile and call-to-action */}
                <div className="flex flex-col items-center mb-6 relative">
                  {/* Placeholder Profile Image with Question Mark */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB600] border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center mb-4 opacity-70">
                    <span className="text-black text-2xl sm:text-3xl font-oswald font-bold animate-pulse">
                      ?
                    </span>
                  </div>

                  {/* Your Name and Company */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-100 opacity-20 rounded-lg"></div>
                    <h3 className="text-xl sm:text-2xl text-gray-500 font-oswald font-bold mb-1 relative border-b border-dashed border-gray-300">
                      YOUR NAME HERE
                    </h3>
                    <p className="text-gray-400 font-space-grotesk text-sm sm:text-base mb-2 relative border-b border-dashed border-gray-300">
                      Your Title
                    </p>
                    <p className="text-gray-400 font-space-grotesk text-sm relative border-b border-dashed border-gray-300">
                      Your Company
                    </p>
                  </div>
                </div>

                {/* Call-to-Action Text */}
                <div className="mb-6 relative">
                  <p className="font-space-grotesk text-base sm:text-lg leading-relaxed text-gray-500 relative border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 bg-opacity-30">
                    Ready to join our success stories? Whether you need a
                    complete rebrand, a stunning website, or a full digital
                    transformation, we're here to make it happen. Let's create
                    something amazing together and earn those 5 stars!
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button
                    className="px-6 py-3 font-bold text-black border-2 text-xl hover:scale-105 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer"
                    style={{
                      backgroundColor: "#FFB600",
                      borderColor: "#000000",
                      fontFamily: "var(--font-oswald)",
                    }}
                    onClick={() => console.log("Start Project clicked")}
                  >
                    START YOUR PROJECT
                  </button>
                </div>
              </div>
            ) : (
              /* Regular Testimonial Content */
              <div className="flex flex-col max-w-3xl text-center w-full">
                {/* Header with circular image and name */}
                <div className="flex flex-col items-center mb-6">
                  {/* Large Circular Profile Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00796B] border-2 border-black rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-lg sm:text-xl font-oswald font-bold">
                      {currentTab?.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Name and Company */}
                  <div>
                    <h3 className="text-xl sm:text-2xl text-black font-oswald font-bold mb-1">
                      {currentTab?.clientName}
                    </h3>
                    <p className="text-[#586158] font-space-grotesk text-sm sm:text-base mb-2">
                      {currentTab?.clientRole}
                    </p>
                    <p className="text-[#586158] font-space-grotesk text-sm">
                      {currentTab?.label}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="mb-6">
                  <p className="font-space-grotesk text-base sm:text-lg leading-relaxed text-[#3f4c38]">
                    {currentTab?.description}
                  </p>
                </div>

                {/* Project Type Badge */}
                <div className="flex justify-center">
                  <span className="inline-block bg-[#FFB600] text-black font-space-grotesk text-sm px-4 py-2 rounded-full border-2 border-black">
                    {currentTab?.title} • {currentTab?.subtitle}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsTest() {
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "#FAF9F5" }}
    >
      {/* Joystick for Game 2 */}
      <div className="absolute top-6 right-6 z-20">
        <JoystickButton
          gameId={2}
          className="relative bottom-auto right-auto"
        />
      </div>
      {/* Main Content */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center gap-16 sm:gap-20">
            {/* Soft Version */}
            <div className="w-full">
              <div className="mb-12 sm:mb-16 text-center">
                <SectionHeader
                  mainHeading="Clients talk and we hear."
                  subLabel="Testimonials"
                  className="mb-4"
                  onDarkBackground={false}
                  pillPosition="section-boundary"
                />
              </div>
              <BrowserTabsTestSoft />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
