"use client";

import { useState } from "react";

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

function BrowserTabsTest() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);
  const [isNewTab, setIsNewTab] = useState(false);

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
    setIsNewTab(false);
  };

  const handleNewTab = () => {
    setIsNewTab(true);
    setActiveTab("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Classic Chrome Browser Window Frame - Sharp Edges */}
      <div className="relative">
        {/* Sharp Shadow */}
        <div className="absolute w-full h-full bg-black translate-x-2 translate-y-2" />

        {/* Main Chrome Window - Sharp Edges */}
        <div className="relative bg-white border-2 border-black overflow-hidden shadow-xl">
          {/* Tab Bar - Enhanced Retro Style */}
          <div className="bg-gradient-to-b from-white to-gray-50 border-b-2 border-black shadow-inner">
            <div className="flex">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabClick(tab.value)}
                  className={`
                    px-4 py-3 text-sm border-r-2 border-black transition-all duration-300 ease-out font-oswald relative group
                    ${
                      activeTab === tab.value && !isNewTab
                        ? "bg-[#FFB600] text-black transform -translate-y-0.5 shadow-lg border-b-0 z-10"
                        : "bg-white text-gray-600 hover:bg-gray-50 hover:transform hover:-translate-y-0.5 hover:shadow-md"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    {/* Enhanced favicon with glow effect */}
                    <div
                      className={`w-3 h-3 border border-black transition-all duration-200
                      ${
                        activeTab === tab.value && !isNewTab
                          ? "bg-black shadow-sm"
                          : "bg-gray-500 group-hover:bg-gray-600"
                      }`}
                    ></div>
                    <span className="text-xs whitespace-nowrap">
                      {tab.label}
                    </span>
                    {activeTab === tab.value && !isNewTab && (
                      <span className="text-xs ml-1 hover:bg-black hover:text-white px-1 rounded transition-colors duration-150 cursor-pointer">
                        ×
                      </span>
                    )}
                  </div>
                </button>
              ))}

              {/* New Tab Button - Enhanced */}
              <button
                onClick={handleNewTab}
                className={`px-4 py-3 border-r-2 border-black transition-all duration-300 ease-out flex items-center justify-center group font-oswald
                  ${
                    isNewTab
                      ? "bg-[#FFB600] text-black transform -translate-y-0.5 shadow-lg border-b-0 z-10"
                      : "bg-white hover:bg-gray-50 hover:transform hover:-translate-y-0.5 hover:shadow-md"
                  }`}
              >
                <span className="text-sm transition-transform duration-200 group-hover:scale-110">
                  +
                </span>
              </button>
            </div>
          </div>

          {/* Address Bar Area - Enhanced Style */}
          <div className="bg-gradient-to-b from-gray-50 to-white border-b-2 border-black p-3 shadow-inner">
            <div className="flex items-center gap-3">
              {/* Navigation Buttons - Enhanced */}
              <div className="flex gap-1">
                <button className="w-7 h-7 bg-gradient-to-b from-white to-gray-100 border-2 border-black flex items-center justify-center hover:from-gray-50 hover:to-gray-150 transition-all duration-200 ease-out hover:shadow-md active:scale-95">
                  <span className="text-xs">←</span>
                </button>
                <button className="w-7 h-7 bg-gradient-to-b from-white to-gray-100 border-2 border-black flex items-center justify-center hover:from-gray-50 hover:to-gray-150 transition-all duration-200 ease-out hover:shadow-md active:scale-95">
                  <span className="text-xs">→</span>
                </button>
                <button className="w-7 h-7 bg-gradient-to-b from-white to-gray-100 border-2 border-black flex items-center justify-center hover:from-gray-50 hover:to-gray-150 transition-all duration-200 ease-out hover:shadow-md active:scale-95">
                  <span className="text-xs">↻</span>
                </button>
              </div>

              {/* Address Bar - Enhanced */}
              <div className="flex-1">
                <div className="bg-white border-2 border-black px-4 py-2 shadow-inner rounded-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 border border-black rounded-full shadow-sm"></div>
                    <span className="text-sm text-black font-space-grotesk">
                      https://404foundus.com/testimonials/
                      {isNewTab ? "new-opportunity" : currentTab?.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Button - Enhanced */}
              <button className="w-7 h-7 bg-gradient-to-b from-white to-gray-100 border-2 border-black flex items-center justify-center hover:from-gray-50 hover:to-gray-150 transition-all duration-200 ease-out hover:shadow-md active:scale-95">
                <span className="text-xs">⋮</span>
              </button>
            </div>
          </div>

          {/* Website Content Area - Dynamic Content */}
          <div className="bg-[#F7F4E9] p-8">
            {isNewTab ? (
              /* New Tab Content - Witty Message */
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                  <div className="relative bg-[#FFB600] border-2 border-black p-8 text-center">
                    <h2 className="text-5xl text-black font-oswald mb-4 transition-all duration-500 ease-out">
                      YOUR TURN!
                    </h2>
                    <p className="text-xl text-black font-space-grotesk mb-6 transition-all duration-500 ease-out">
                      The next testimonial could be from YOU!
                    </p>
                    <p className="text-lg text-black font-space-grotesk opacity-80 transition-all duration-500 ease-out">
                      Ready to join our success stories? Let's create something
                      amazing together.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                    <button className="relative px-8 py-4 bg-[#DE6A48] border-2 border-black text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-out hover:shadow-lg">
                      START YOUR PROJECT
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                    <button className="relative px-8 py-4 bg-white border-2 border-black text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-out hover:shadow-lg">
                      GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Testimonial Content */
              <div className="flex flex-col gap-8">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-4xl text-black font-oswald mb-2 transition-all duration-300 ease-out">
                      {currentTab?.title}
                    </h2>
                    <p className="text-gray-600 font-space-grotesk text-lg transition-all duration-300 ease-out">
                      Client: {currentTab?.label}
                    </p>
                  </div>

                  {currentTab?.subtitle && (
                    <div className="relative">
                      {/* Sharp Badge Shadow */}
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                      {/* Sharp Badge */}
                      <span className="relative inline-block px-4 py-2 text-sm bg-[#DE6A48] border-2 border-black font-space-grotesk text-black transition-all duration-300 ease-out">
                        {currentTab.subtitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                  <blockquote className="relative text-lg leading-relaxed text-black font-space-grotesk italic border-2 border-black bg-white p-6">
                    "{currentTab?.description}"
                  </blockquote>
                </div>

                {/* Client Info - Simple Card */}
                <div className="relative">
                  {/* Card Shadow */}
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                  {/* Main Card */}
                  <div className="relative bg-white border-2 border-black p-6">
                    <div className="flex items-center gap-6">
                      {/* Client Photo - Only Image Allowed */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                        <div className="relative w-16 h-16 bg-[#00796B] border-2 border-black flex items-center justify-center">
                          <span className="text-white font-bold text-xl font-oswald">
                            {currentTab?.clientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-black text-xl font-oswald transition-all duration-300 ease-out">
                          {currentTab?.clientName}
                        </p>
                        <p className="text-gray-600 font-space-grotesk transition-all duration-300 ease-out">
                          {currentTab?.clientRole}
                        </p>
                        <p className="text-[#DE6A48] font-space-grotesk transition-all duration-300 ease-out">
                          {currentTab?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button - Contact Only */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Button Shadow */}
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                    {/* Main Button */}
                    <button className="relative px-8 py-4 bg-white border-2 border-black text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 ease-out hover:shadow-lg">
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Soft Edges Version
function BrowserTabsTestSoft() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);
  const [isNewTab, setIsNewTab] = useState(false);

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
    setIsNewTab(false);
  };

  const handleNewTab = () => {
    setIsNewTab(true);
    setActiveTab("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Soft Chrome Browser Window Frame */}
      <div className="relative">
        {/* Black Shadow Block */}
        <div className="absolute w-full h-full bg-black translate-x-2 translate-y-2 rounded-xl" />

        {/* Main Chrome Window - Soft Edges */}
        <div className="relative bg-gray-200 border-2 border-black overflow-hidden rounded-xl shadow-lg">
          {/* Tab Bar - Soft Style */}
          <div className="bg-gradient-to-b from-gray-200 to-gray-100 border-b-2 border-black rounded-t-xl">
            <div className="flex p-2">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabClick(tab.value)}
                  className={`
                    px-4 py-3 text-sm font-oswald transition-all duration-500 ease-out relative group rounded-t-lg mx-1
                    ${
                      activeTab === tab.value && !isNewTab
                        ? "bg-[#FFB600] text-black transform -translate-y-1 shadow-lg"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-200 hover:transform hover:-translate-y-0.5 hover:shadow-md"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    {/* Soft favicon */}
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-500 ease-out
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
                      <span className="text-xs ml-1 hover:bg-black hover:text-white px-1 rounded-full transition-all duration-300 ease-out cursor-pointer">
                        ×
                      </span>
                    )}
                  </div>
                </button>
              ))}

              {/* New Tab Button - Soft */}
              <button
                onClick={handleNewTab}
                className={`px-4 py-3 font-oswald transition-all duration-500 ease-out rounded-t-lg mx-1 flex items-center justify-center group
                  ${
                    isNewTab
                      ? "bg-[#FFB600] text-black transform -translate-y-1 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-200 hover:transform hover:-translate-y-0.5 hover:shadow-md"
                  }`}
              >
                <span className="text-sm transition-transform duration-300 ease-out group-hover:scale-110">
                  +
                </span>
              </button>
            </div>
          </div>

          {/* Address Bar Area - Soft Style */}
          <div className="bg-gradient-to-b from-gray-100 to-gray-50 border-b-2 border-black p-3">
            <div className="flex items-center gap-3">
              {/* Navigation Buttons - Soft */}
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-2 border-black rounded-full flex items-center justify-center hover:from-gray-100 hover:to-gray-200 transition-all duration-300 ease-out hover:shadow-md hover:scale-105">
                  <span className="text-xs">←</span>
                </button>
                <button className="w-8 h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-2 border-black rounded-full flex items-center justify-center hover:from-gray-100 hover:to-gray-200 transition-all duration-300 ease-out hover:shadow-md hover:scale-105">
                  <span className="text-xs">→</span>
                </button>
                <button className="w-8 h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-2 border-black rounded-full flex items-center justify-center hover:from-gray-100 hover:to-gray-200 transition-all duration-300 ease-out hover:shadow-md hover:scale-105">
                  <span className="text-xs">↻</span>
                </button>
              </div>

              {/* Address Bar - Soft */}
              <div className="flex-1">
                <div className="bg-white border-2 border-black px-4 py-2 rounded-full shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-black font-space-grotesk">
                      https://404foundus.com/testimonials/
                      {isNewTab ? "new-opportunity" : currentTab?.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Button - Soft */}
              <button className="w-8 h-8 bg-gradient-to-b from-gray-200 to-gray-300 border-2 border-black rounded-full flex items-center justify-center hover:from-gray-100 hover:to-gray-200 transition-all duration-300 ease-out hover:shadow-md hover:scale-105">
                <span className="text-xs">⋮</span>
              </button>
            </div>
          </div>

          {/* Website Content Area - Soft */}
          <div className="bg-[#F7F4E9] p-8 rounded-b-xl">
            {isNewTab ? (
              /* New Tab Content - Soft Version */
              <div className="flex flex-col items-center justify-center min-h-[400px] gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-xl"></div>
                  <div className="relative bg-[#FFB600] border-2 border-black rounded-xl p-8 text-center shadow-lg">
                    <h2 className="text-5xl text-black font-oswald mb-4 transition-all duration-500 ease-out">
                      YOUR TURN!
                    </h2>
                    <p className="text-xl text-black font-space-grotesk mb-6 transition-all duration-500 ease-out">
                      The next testimonial could be from YOU!
                    </p>
                    <p className="text-lg text-black font-space-grotesk opacity-80 transition-all duration-500 ease-out">
                      Ready to join our success stories? Let's create something
                      amazing together.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                    <button className="relative px-8 py-4 bg-[#DE6A48] border-2 border-black rounded-lg text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-400 ease-out hover:shadow-lg">
                      START YOUR PROJECT
                    </button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                    <button className="relative px-8 py-4 bg-white border-2 border-black rounded-lg text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-400 ease-out hover:shadow-lg">
                      GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Testimonial Content - Soft */
              <div className="flex flex-col gap-8">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-4xl text-black font-oswald mb-2 transition-all duration-400 ease-out">
                      {currentTab?.title}
                    </h2>
                    <p className="text-gray-600 font-space-grotesk text-lg transition-all duration-400 ease-out">
                      Client: {currentTab?.label}
                    </p>
                  </div>

                  {currentTab?.subtitle && (
                    <div className="relative">
                      {/* Soft Badge Shadow */}
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                      {/* Soft Badge */}
                      <span className="relative inline-block px-4 py-2 text-sm bg-[#DE6A48] border-2 border-black rounded-lg font-space-grotesk text-black transition-all duration-400 ease-out shadow-md">
                        {currentTab.subtitle}
                      </span>
                    </div>
                  )}
                </div>

                {/* Testimonial Content */}
                <div className="relative">
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                  <blockquote className="relative text-lg leading-relaxed text-black font-space-grotesk italic rounded-lg border-2 border-black bg-white p-6 shadow-lg">
                    "{currentTab?.description}"
                  </blockquote>
                </div>

                {/* Client Info - Soft Card */}
                <div className="relative">
                  {/* Card Shadow */}
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                  {/* Main Card */}
                  <div className="relative bg-white border-2 border-black rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-6">
                      {/* Client Photo - Soft */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-full"></div>
                        <div className="relative w-16 h-16 bg-[#00796B] border-2 border-black rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-oswald">
                            {currentTab?.clientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-black text-xl font-oswald transition-all duration-400 ease-out">
                          {currentTab?.clientName}
                        </p>
                        <p className="text-gray-600 font-space-grotesk transition-all duration-400 ease-out">
                          {currentTab?.clientRole}
                        </p>
                        <p className="text-[#DE6A48] font-space-grotesk transition-all duration-400 ease-out">
                          {currentTab?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button - Contact Only */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Button Shadow */}
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                    {/* Main Button */}
                    <button className="relative px-8 py-4 bg-white border-2 border-black rounded-lg text-black font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-400 ease-out hover:shadow-lg">
                      CONTACT US
                    </button>
                  </div>
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
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4E9] via-white to-gray-50">
      {/* Main Content */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-col items-center justify-center gap-16">
            {/* Sharp Version */}
            <div className="w-full">
              <div className="mb-12 text-center">
                <h2 className="text-4xl text-black font-oswald mb-4">
                  TESTIMONIALS - SHARP
                </h2>
                <p className="text-lg text-gray-600 font-space-grotesk max-w-2xl mx-auto">
                  Browse through our client success stories in true retro style.
                  Each tab is a journey back to when browsers had personality!
                </p>
              </div>
              <BrowserTabsTest />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TestimonialsTestSoft() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F4E9] via-white to-gray-50">
      {/* Main Content */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-col items-center justify-center gap-16">
            {/* Soft Version */}
            <div className="w-full">
              <div className="mb-12 text-center">
                <h2 className="text-4xl text-black font-oswald mb-4">
                  TESTIMONIALS - SOFT
                </h2>
                <p className="text-lg text-gray-600 font-space-grotesk max-w-2xl mx-auto">
                  The same experience with softer edges and smoother animations.
                  Modern comfort meets retro charm!
                </p>
              </div>
              <BrowserTabsTestSoft />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
