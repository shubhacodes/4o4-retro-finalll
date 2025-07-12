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

export default function ServiceTest() {
  const services = [
    {
      title: "Brand & Identity",
      description: "Make your mark - boldly and beautifully.",
      expandedContent: {
        tags: [
          "Logo Design",
          "Brand Strategy",
          "Visual Identity",
          "Brand Guidelines",
        ],
        description:
          "Your brand is so much more than just a logo, it's your personality. Your story, your vibe. We help you bring that to life with a look and feel that's uniquely you. Whether you are just getting started or ready for a glow up, we craft everything from logos to full-on brand systems that speak the truth.",
      },
    },
    {
      title: "Web Design and Development",
      description: "Pretty and powerful websites that actually work.",
      expandedContent: {
        tags: [
          "UI UX Design",
          "Custom Web Development",
          "Responsive Design",
          "Maintenance",
        ],
        description:
          "Your website is your digital home—and no one likes a messy or confusing house. We design and build sites that are both beautiful and brainy. From clean code to buttery-smooth interfaces, our sites are crafted to delight users and make sure they stick around.",
      },
    },
    {
      title: "Digital Marketing",
      description: "Get seen. Get clicks. Get results.",
      expandedContent: {
        tags: [
          "SEO & SEM",
          "Social Media Marketing",
          "Email Campaigns",
          "Paid Ads",
        ],
        description:
          "It's a big, busy internet out there—let's make sure your brand doesn't get lost in the scroll. We're all about mixing data, creativity, and a bit of digital magic to make your message pop in the right places.",
      },
    },
  ];

  return (
    <section className="w-full py-12 bg-[#DB5029]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4 leading-tight font-['Oswald']">
            What we do
            <span className="text-[#DE6A48]"> (and</span>
            <br />
            <span className="text-[#DE6A48]">do really well)</span>
          </h2>
          <div className="w-32 h-1 bg-[#DE6A48] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              expandedContent={service.expandedContent}
              className={`z-[${services.length - index}]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
