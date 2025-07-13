"use client";
import { useState } from "react";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

const ServiceCard = ({
  title,
  description,
  expandedContent,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { playClick } = useSound();

  const toggleExpanded = () => {
    playClick();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`w-full max-w-6xl relative ${className}`}>
      {/* Main Card */}
      <div
        className={`relative bg-white border-2 border-[#231F20] transition-all duration-700 ease-out w-full rounded-xl overflow-hidden ${
          isExpanded ? "min-h-[520px] h-auto" : "h-[168px]"
        }`}
      >
        {/* Orange Header */}
        <div className="h-[56px] border-b-2 border-[#231F20] relative bg-[#DB5029]">
          {/* Plus/Minus Button */}
          <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2">
            {/* Main Button */}
            <button
              onClick={toggleExpanded}
              className="relative w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full border-2 border-[#231F20] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200"
            >
              {/* Plus/Minus Icon */}
              <div className="relative">
                {/* Horizontal Line (always present) */}
                <div className="w-3 h-0.5 bg-[#231F20] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                {/* Vertical Line (only for plus) */}
                {!isExpanded && (
                  <div className="w-0.5 h-3 bg-[#231F20] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-4 sm:px-6 py-4 sm:py-5">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#231F20] mb-1 leading-tight font-oswald">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#231F20] mb-4 font-space-grotesk leading-relaxed">
            {description}
          </p>

          {/* Expanded Content */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Separator Line */}
            <div
              className={`w-full h-0.5 bg-[#231F20] mb-4 sm:mb-6 transition-opacity duration-500 ${
                isExpanded ? "opacity-100 delay-200" : "opacity-0"
              }`}
            />

            {/* Content Area */}
            <div
              className={`flex flex-col lg:flex-row gap-4 sm:gap-6 transition-all duration-500 ease-out delay-300 ${
                isExpanded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              {/* Service Tags - Top on mobile, Left on desktop */}
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
                <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-3 justify-center lg:justify-start lg:items-start">
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
                        className={`bg-transparent border-2 border-[#231F20] px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-[#231F20] rounded-full hover:scale-105 transition-all duration-200 font-space-grotesk ${
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
              </div>

              {/* Main Content - Bottom on mobile, Right on desktop */}
              <div className="w-full lg:w-4/5 flex flex-col">
                <div
                  className={`bg-white rounded-lg p-3 sm:p-4 border-2 border-[#231F20] transition-all duration-350 ease-out delay-[450ms] flex flex-col ${
                    isExpanded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {/* Big Video Thumbnail */}
                  <div
                    className={`w-full h-24 sm:h-32 bg-gray-300 border-2 border-gray-400 rounded-lg flex items-center justify-center text-sm sm:text-lg text-gray-600 font-space-grotesk mb-3 sm:mb-4 transition-all duration-350 ease-out delay-[550ms] ${
                      isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-9 opacity-0"
                    }`}
                  >
                    Image Placeholder
                  </div>

                  {/* Video Information Below */}
                  <div
                    className={`transition-all duration-350 ease-out delay-[600ms] ${
                      isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-9 opacity-0"
                    }`}
                  >
                    {/* Video Title */}
                    <h4 className="text-[#231F20] text-base sm:text-lg font-bold mb-2 font-oswald">
                      {title} - Behind the Scenes
                    </h4>

                    {/* Video Description */}
                    <p className="text-[#231F20] text-xs sm:text-sm leading-relaxed font-space-grotesk mb-3">
                      {expandedContent?.description}
                    </p>
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
    <section className="w-full py-12 sm:py-16 bg-[#231F20] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 text-center">
          <SectionHeader
            mainHeading="We build brands, not just stuff."
            subLabel="Services"
            className="mb-4"
            onDarkBackground={true}
            pillPosition="section-boundary"
          />
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
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
