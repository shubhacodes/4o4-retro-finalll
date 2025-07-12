"use client";
import { useState } from "react";

const ServiceCard = ({
  title,
  description,
  expandedContent,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`w-full max-w-5xl relative ${className}`}>
      {/* Shadow/Border Effect */}
      <div
        className={`absolute bg-black transition-all duration-700 ease-out w-full left-1.5 top-1.5 ${
          isExpanded ? "h-[420px]" : "h-[148px]"
        }`}
      />

      {/* Main Card */}
      <div
        className={`relative bg-white border-2 border-black transition-all duration-700 ease-out w-full ${
          isExpanded ? "h-[420px]" : "h-[148px]"
        }`}
      >
        {/* Orange Header */}
        <div className="h-[60px] border-b-2 border-black relative bg-[#DB5029]">
          {/* Plus/Minus Button */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            {/* Button Shadow */}
            <div className="absolute w-7 h-7 bg-black rounded-full border-2 border-black left-0.5 top-0.5" />
            {/* Main Button */}
            <button
              onClick={toggleExpanded}
              className="relative w-7 h-7 bg-white rounded-full border-2 border-black flex items-center justify-center cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
            >
              {/* Plus/Minus Icon */}
              <div className="relative">
                {/* Horizontal Line (always present) */}
                <div className="w-3 h-0.5 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                {/* Vertical Line (only for plus) */}
                {!isExpanded && (
                  <div className="w-0.5 h-3 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 py-4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-black mb-1 leading-tight font-['Oswald']">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lg text-black mb-4 font-['Space_Grotesk']">
            {description}
          </p>

          {/* Expanded Content */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Separator Line */}
            <div
              className={`w-full h-0.5 bg-black mb-4 transition-opacity duration-500 ${
                isExpanded ? "opacity-100 delay-200" : "opacity-0"
              }`}
            />

            {/* Content Area */}
            <div
              className={`flex gap-6 transition-all duration-500 ease-out delay-300 ${
                isExpanded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              {/* Left Side - Service Tags */}
              <div className="w-1/5 flex flex-col gap-3 items-start">
                {expandedContent?.tags?.map((tag, index) => {
                  const delayClasses = [
                    "delay-[400ms]",
                    "delay-[460ms]",
                    "delay-[520ms]",
                    "delay-[580ms]",
                  ];
                  return (
                    <div
                      key={index}
                      className={`bg-[#FFB600] border-2 border-black px-3 py-1.5 text-xs font-bold text-left inline-block font-['Space_Grotesk'] transition-all duration-300 ease-out ${
                        delayClasses[index] || "delay-[400ms]"
                      } ${
                        isExpanded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>

              {/* Right Side - Content */}
              <div className="w-4/5 flex flex-col">
                <p
                  className={`text-black text-sm leading-relaxed mb-4 font-['Space_Grotesk'] transition-all duration-350 ease-out delay-[450ms] ${
                    isExpanded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {expandedContent?.description}
                </p>

                {/* Image Placeholders */}
                <div className="flex gap-4 mt-4 mb-6">
                  <div
                    className={`w-2/5 h-20 bg-gray-300 border border-gray-400 flex items-center justify-center text-sm text-gray-600 font-['Space_Grotesk'] transition-all duration-350 ease-out delay-[550ms] ${
                      isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-9 opacity-0"
                    }`}
                  >
                    Image placeholder
                  </div>
                  <div
                    className={`w-2/5 h-20 bg-gray-300 border border-gray-400 flex items-center justify-center text-sm text-gray-600 font-['Space_Grotesk'] transition-all duration-350 ease-out delay-[600ms] ${
                      isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-9 opacity-0"
                    }`}
                  >
                    Image placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const servicesData = [
    {
      title: "BRANDING & IDENTITY",
      description:
        "We help create a brand that not only looks good but feels right.",
      expandedContent: {
        tags: ["LOGO DESIGN", "BRAND GUIDES", "PACKAGING", "STRATEGY"],
        description:
          "Our branding process digs deep into what makes your business unique. We develop comprehensive brand identities that include logo design, color palettes, typography systems, and brand guidelines that ensure consistency across all touchpoints.",
      },
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
      description:
        "Websites that work as hard as you do, with personality to match.",
      expandedContent: {
        tags: ["UI/UX DESIGN", "DEVELOPMENT", "CMS", "OPTIMIZATION"],
        description:
          "We build websites that are beautiful, functional, and optimized for both users and search engines. From initial wireframes to final deployment, we handle every aspect of creating your digital presence.",
      },
    },
    {
      title: "CREATIVE STRATEGY",
      description: "Big ideas that actually work in the real world.",
      expandedContent: {
        tags: ["STRATEGY", "RESEARCH", "PLANNING", "EXECUTION"],
        description:
          "We help you develop creative strategies that align with your business goals. Through research, analysis, and strategic planning, we create roadmaps that guide all creative decisions and ensure maximum impact.",
      },
    },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: "#DB5029" }}>
      <div
        className="mx-8 border border-gray-200"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="flex flex-col items-center justify-center py-16 px-8">
          <h1 className="font-bold mb-12 text-[70px] font-oswald text-black text-center">
            SERVICES
          </h1>

          <div className="flex flex-col gap-8 w-full items-center">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                expandedContent={service.expandedContent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
