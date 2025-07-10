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

export default function BrowserTabsTest() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);

  const currentTab = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Classic Chrome Browser Window Frame - Sharp Edges */}
      <div className="relative">
        {/* Sharp Shadow */}
        <div className="absolute w-full h-full bg-black translate-x-2 translate-y-2" />

        {/* Main Chrome Window - Sharp Edges */}
        <div className="relative bg-[#DE6A48] border-2 border-black overflow-hidden">
          {/* Classic Chrome Title Bar */}
          <div className="bg-[#DE6A48] border-b-2 border-black p-2">
            <div className="flex items-center justify-between">
              {/* Left: Window Controls - Classic Style */}
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-red-500 border border-black"></div>
                <div className="w-4 h-4 bg-yellow-500 border border-black"></div>
                <div className="w-4 h-4 bg-green-500 border border-black"></div>
              </div>

              {/* Center: Simple Title */}
              <div className="text-center">
                <span className="text-sm font-bold text-black font-oswald tracking-wider">
                  404 FOUND US - TESTIMONIALS
                </span>
              </div>

              {/* Right: Window Controls */}
              <div className="flex gap-1">
                <div className="w-6 h-4 bg-gray-300 border border-black flex items-center justify-center">
                  <span className="text-xs font-bold">_</span>
                </div>
                <div className="w-6 h-4 bg-gray-300 border border-black flex items-center justify-center">
                  <span className="text-xs font-bold">□</span>
                </div>
                <div className="w-6 h-4 bg-gray-300 border border-black flex items-center justify-center">
                  <span className="text-xs font-bold">×</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Bar - Sharp Classic Style */}
          <div className="bg-gray-200 border-b border-black">
            <div className="flex">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`
                    px-4 py-2 text-sm font-bold border-r border-black transition-all font-oswald
                    ${
                      activeTab === tab.value
                        ? "bg-[#FFB600] text-black border-b-2 border-[#FFB600]"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    {/* Simple favicon */}
                    <div
                      className={`w-3 h-3 border border-black
                      ${activeTab === tab.value ? "bg-black" : "bg-gray-500"}`}
                    ></div>
                    <span className="text-xs">{tab.label}</span>
                    {activeTab === tab.value && (
                      <span className="text-xs ml-1 hover:bg-black hover:text-white px-1">
                        ×
                      </span>
                    )}
                  </div>
                </button>
              ))}

              {/* New Tab Button */}
              <button className="px-3 py-2 bg-gray-300 border-r border-black hover:bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-bold">+</span>
              </button>
            </div>
          </div>

          {/* Address Bar Area - Classic Style */}
          <div className="bg-gray-100 border-b-2 border-black p-2">
            <div className="flex items-center gap-2">
              {/* Navigation Buttons */}
              <div className="flex gap-1">
                <button className="w-6 h-6 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-200">
                  <span className="text-xs font-bold">←</span>
                </button>
                <button className="w-6 h-6 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-200">
                  <span className="text-xs font-bold">→</span>
                </button>
                <button className="w-6 h-6 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-200">
                  <span className="text-xs font-bold">↻</span>
                </button>
              </div>

              {/* Address Bar */}
              <div className="flex-1">
                <div className="bg-white border border-black px-3 py-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 border border-black"></div>
                    <span className="text-sm text-black font-space-grotesk">
                      https://404foundus.com/testimonials/{currentTab?.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Button */}
              <button className="w-6 h-6 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-200">
                <span className="text-xs font-bold">⋮</span>
              </button>
            </div>
          </div>

          {/* Website Content Area - Clean and Minimal */}
          <div className="bg-[#F7F4E9] p-8">
            <div className="flex flex-col gap-8">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-4xl font-bold text-black font-oswald mb-2">
                    {currentTab?.title}
                  </h2>
                  <p className="text-gray-600 font-space-grotesk text-lg">
                    Client: {currentTab?.label}
                  </p>
                </div>

                {currentTab?.subtitle && (
                  <div className="relative">
                    {/* Sharp Badge Shadow */}
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                    {/* Sharp Badge */}
                    <span className="relative inline-block px-4 py-2 text-sm font-bold bg-[#DE6A48] border-2 border-black font-space-grotesk text-white">
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
                      <p className="font-bold text-black text-xl font-oswald">
                        {currentTab?.clientName}
                      </p>
                      <p className="text-gray-600 font-space-grotesk">
                        {currentTab?.clientRole}
                      </p>
                      <p className="text-[#DE6A48] font-space-grotesk font-bold">
                        {currentTab?.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Sharp Style */}
              <div className="flex gap-4">
                <div className="relative">
                  {/* Button Shadow */}
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                  {/* Main Button */}
                  <button className="relative px-6 py-3 bg-[#DE6A48] border-2 border-black text-white font-bold font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
                    VIEW PROJECT
                  </button>
                </div>

                <div className="relative">
                  {/* Button Shadow */}
                  <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                  {/* Main Button */}
                  <button className="relative px-6 py-3 bg-white border-2 border-black text-black font-bold font-oswald hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
