"use client";
import React, { useRef, useState, useEffect } from "react";
import { X, Maximize2, RotateCcw } from "lucide-react";

export const Frame3416 = ({
  title,
  content,
  tagline,
  onExpand,
  onClose,
  isExpanded,
  ...props
}) => (
  <div
    className="relative bg-transparent"
    style={{
      width: "500px",
      height: "450px",
    }}
  >
    {/* Main container with proportional scaling */}
    <div
      className="relative w-full h-full"
      style={{
        transform: "scale(0.524, 0.598)", // 500/954 ≈ 0.524, 450/753 ≈ 0.598
        transformOrigin: "top left",
      }}
    >
      {/* Black background rectangle */}
      <div
        className="absolute bg-black"
        style={{
          width: "936.315px",
          height: "734px",
          left: "17.6846px",
          top: "19px",
        }}
      />

      {/* Orange rectangle with black border */}
      <div
        className="absolute border-[3px] border-black"
        style={{
          width: "933.315px",
          height: "731px",
          left: "1.5px",
          top: "1.5px",
          backgroundColor: "#DE6A48",
        }}
      />

      {/* First horizontal line */}
      <div
        className="absolute bg-black"
        style={{
          width: "934.623px",
          height: "3px",
          left: "1.49121px",
          top: "105.015px", // 106.515 - 1.5
        }}
      />

      {/* Second horizontal line */}
      <div
        className="absolute bg-black"
        style={{
          width: "934.623px",
          height: "3px",
          left: "0px",
          top: "365.384px", // 366.884 - 1.5
        }}
      />

      {/* White content area */}
      <div
        className="absolute bg-white"
        style={{
          left: "3px",
          top: "367px",
          width: "930.5px", // 933.5 - 3
          height: "364px", // 731 - 367
        }}
      />

      {/* Content container */}
      <div
        className="absolute text-black font-sans overflow-hidden"
        style={{
          left: "25px",
          top: "360px",
          width: "900px",
          height: "380px",
          padding: "20px",
        }}
      >
        {/* Title */}
        <h3
          className="font-bold mb-6 mt-0"
          style={{
            fontSize: "40px",
            marginBottom: "25px",
            marginTop: "0",
          }}
        >
          {title}
        </h3>

        {/* Content */}
        <p
          className="mb-6 mt-0"
          style={{
            fontSize: "26px",
            lineHeight: "1.5",
            marginBottom: "25px",
            marginTop: "0",
          }}
        >
          {content}
        </p>

        {/* Tagline */}
        {tagline && (
          <>
            <p
              className="font-normal mb-4 mt-0"
              style={{
                fontSize: "26px",
                fontWeight: "normal",
                marginBottom: "15px",
                marginTop: "0",
              }}
            >
              {tagline}
            </p>
            <p
              className="mt-0"
              style={{
                fontSize: "26px",
                lineHeight: "1.5",
                marginTop: "0",
              }}
            >
              So bring us the scraps, the static, the wild ideas that don't make
              sense yet. That's where the real magic starts.
            </p>
          </>
        )}
      </div>
    </div>

    {/* Control buttons positioned within the card boundaries */}
    {/* Close button - top right */}
    <button
      className="absolute bg-white border-2 border-black hover:bg-gray-50 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
      style={{
        width: "28px",
        height: "28px",
        right: "20px",
        top: "20px", // Properly centered in the orange header section
      }}
      onClick={onClose}
      title="Remove Card"
    >
      <X size={14} className="text-black" />
    </button>

    {/* Expand button - top right */}
    <button
      className="absolute bg-white border-2 border-black hover:bg-gray-50 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
      style={{
        width: "28px",
        height: "28px",
        right: "56px", // 20px + 28px + 8px spacing
        top: "20px", // Properly centered in the orange header section
      }}
      onClick={onExpand}
      title="View More Details"
    >
      <Maximize2 size={14} className="text-black" />
    </button>
  </div>
);

// Navigation arrows with clean styling
const LeftArrow = () => (
  <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
    <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-transparent border-r-black transform"></div>
  </div>
);

const RightArrow = () => (
  <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
    <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-black transform"></div>
  </div>
);

// Professional Dialog Component
const ExpandedDialog = ({ project, onClose }) => {
  const getProjectDetails = (title) => {
    switch (title) {
      case "MK Associates":
        return {
          services: [
            "Tax Consultation & Planning",
            "Chartered Accountancy Services",
            "Business Registration & Compliance",
            "Financial Audit & Assurance",
            "GST Registration & Returns",
          ],
          description:
            "A premier law firm specializing in taxation and chartered accountancy services, providing comprehensive financial and legal solutions to businesses and individuals.",
          expertise:
            "With over 15 years of expertise, MK Associates has successfully handled 500+ tax cases and helped numerous businesses achieve compliance and growth.",
        };
      case "GLC Foods":
        return {
          services: [
            "Product Development",
            "Brand Strategy",
            "E-commerce Platform",
            "Digital Marketing",
            "Supply Chain Management",
          ],
          description:
            "Revolutionizing healthy eating with premium, artisanal products that don't compromise on taste.",
          expertise:
            "Leading the gourmet low-carb revolution with innovative products and strategic market positioning.",
        };
      default:
        return {
          services: [
            "Strategy & Planning",
            "Design & Development",
            "Brand Implementation",
            "Digital Solutions",
            "Ongoing Support",
          ],
          description: project.content,
          expertise:
            "Delivering exceptional results through innovative approaches and strategic thinking.",
        };
    }
  };

  const details = getProjectDetails(project.title);

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      <div
        className="bg-white/95 backdrop-blur-lg border-2 border-black max-w-6xl w-full h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ease-out"
        style={{
          animation: "slideIn 0.4s ease-out",
          maxHeight: "85vh",
          aspectRatio: "16/10",
        }}
      >
        {/* Professional Header */}
        <div className="bg-[#DE6A48] border-b-2 border-black p-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex-1 pr-4">
            <h2
              className="text-4xl font-bold text-black mb-2 transition-all duration-300"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {project.title}
            </h2>
            <p className="text-lg text-black/80 font-medium leading-relaxed">
              {details.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-90 flex-shrink-0"
            title="Close Dialog"
          >
            <X
              size={18}
              className="text-black transition-transform duration-200"
            />
          </button>
        </div>

        {/* Professional Content Layout */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8 transform transition-all duration-500 ease-out">
                <h3
                  className="text-3xl font-bold mb-4 text-black"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Our Expertise
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {details.expertise}
                </p>
              </div>

              <div className="mb-8 transform transition-all duration-500 ease-out delay-100">
                <h4 className="text-2xl font-semibold mb-6 text-black">
                  Services Delivered
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-out hover:transform hover:scale-105 hover:shadow-md"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-[#DE6A48] border border-black mr-4 flex-shrink-0 transition-all duration-300"></div>
                      <span className="text-gray-800 font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7F4E9] p-6 border-2 border-black transform transition-all duration-500 ease-out delay-200 hover:shadow-lg">
                <h5 className="text-xl font-bold mb-3 text-black">
                  Project Philosophy
                </h5>
                <p className="text-lg font-medium text-black italic">
                  "{project.tagline}"
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h4
                  className="text-2xl font-bold mb-6 text-black"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Brand Identity
                </h4>

                {/* Color Palette */}
                <div className="mb-8 transform transition-all duration-500 ease-out delay-300">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800">
                    Color Palette
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-[#DE6A48] border-2 border-black mr-4 transition-all duration-300 hover:shadow-lg"></div>
                      <div>
                        <p className="font-medium text-gray-800">#DE6A48</p>
                        <p className="text-sm text-gray-600">Primary Orange</p>
                      </div>
                    </div>
                    <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-black border-2 border-black mr-4 transition-all duration-300 hover:shadow-lg"></div>
                      <div>
                        <p className="font-medium text-gray-800">#000000</p>
                        <p className="text-sm text-gray-600">Primary Black</p>
                      </div>
                    </div>
                    <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-[#F7F4E9] border-2 border-black mr-4 transition-all duration-300 hover:shadow-lg"></div>
                      <div>
                        <p className="font-medium text-gray-800">#F7F4E9</p>
                        <p className="text-sm text-gray-600">
                          Background Cream
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography Preview */}
                <div className="mb-8 transform transition-all duration-500 ease-out delay-400">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800">
                    Typography
                  </h5>
                  <div className="space-y-3 p-4 border-2 border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                    <div>
                      <h6
                        className="text-2xl font-bold text-black"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        Oswald Bold
                      </h6>
                      <p className="text-sm text-gray-600">
                        Headlines & Titles
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Clean, professional body text for readability and modern
                        appeal.
                      </p>
                      <p className="text-sm text-gray-600">Body Text</p>
                    </div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="bg-white border-2 border-black p-6 transform transition-all duration-500 ease-out delay-500 hover:shadow-lg hover:transform hover:scale-105">
                  <h5 className="text-lg font-semibold mb-4 text-black">
                    Project Impact
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between transition-colors duration-200 hover:text-[#DE6A48]">
                      <span className="text-gray-700">Completion Time</span>
                      <span className="font-bold text-black">4 weeks</span>
                    </div>
                    <div className="flex justify-between transition-colors duration-200 hover:text-[#DE6A48]">
                      <span className="text-gray-700">Team Size</span>
                      <span className="font-bold text-black">6 experts</span>
                    </div>
                    <div className="flex justify-between transition-colors duration-200 hover:text-[#DE6A48]">
                      <span className="text-gray-700">Deliverables</span>
                      <span className="font-bold text-black">15+ assets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default function WorkShowcaseTest() {
  const carouselRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hiddenCards, setHiddenCards] = useState(new Set());
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollability);
      return () => carousel.removeEventListener("scroll", checkScrollability);
    }
  }, [hiddenCards]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -520, // Card width + gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 520, // Card width + gap
        behavior: "smooth",
      });
    }
  };

  // Drag scrolling functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft,
    });
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStart.x) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
  };

  const refreshCards = () => {
    setHiddenCards(new Set());
    setExpandedProject(null);
  };

  const expandProject = (project) => {
    setExpandedProject(project);
  };

  const closeProject = (index) => {
    setHiddenCards((prev) => new Set([...prev, index]));
  };

  // Card content data - Limited to 4 cards
  const cardData = [
    {
      title: "MK Associates",
      content:
        "A premier law firm specializing in taxation and chartered accountancy services, providing comprehensive financial and legal solutions to businesses and individuals.",
      tagline: "Excellence in Tax Law & Chartered Accountancy.",
    },
    {
      title: "GLC Foods",
      content:
        "Gourmet Low Carb revolutionizes healthy eating with premium, artisanal products that don't compromise on taste.",
      tagline: "Where gourmet meets wellness.",
    },
    {
      title: "TechFlow Solutions",
      content:
        "We streamline digital workflows for modern businesses, turning complex processes into elegant, automated systems.",
      tagline: "Efficiency through innovation.",
    },
    {
      title: "Artisan Collective",
      content:
        "A curated marketplace connecting independent artisans with design-conscious consumers who value authentic, handcrafted goods.",
      tagline: "Crafted with purpose.",
    },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: "#F7F4E9" }}>
      <div
        className="mx-20 border border-gray-200"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="grid grid-cols-12 gap-6 px-12 pt-12 pb-8">
          <div className="col-span-12 flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h1
                className="font-bold mb-3 tracking-tight"
                style={{
                  fontSize: "70px",
                  fontFamily: "var(--font-oswald)",
                  color: "#000000",
                  textShadow: "2px 2px 0px rgba(222, 106, 72, 0.1)",
                }}
              >
                WORK SHOWCASE
              </h1>
              <div className="w-24 h-1 bg-[#DE6A48] mx-auto mb-4"></div>
              <p className="text-lg text-gray-700 font-medium">
                Discover our latest creative projects and innovations
              </p>
            </div>

            {/* Dynamic Refresh Button - Only appears when cards are hidden */}
            {hiddenCards.size > 0 && (
              <div
                className="flex justify-center mb-10 animate-in slide-in-from-top duration-500"
                style={{
                  animation: "slideDown 0.5s ease-out",
                }}
              >
                <div className="text-center">
                  <p className="text-gray-600 mb-3 text-sm font-medium">
                    {hiddenCards.size === 1
                      ? "Oops! Accidentally dismissed a project?"
                      : `Missing ${hiddenCards.size} projects? No worries!`}
                  </p>
                  <button
                    onClick={refreshCards}
                    className="bg-white border-2 border-black text-black px-8 py-4 hover:bg-gray-50 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 mx-auto group"
                    title="Bring back all projects"
                  >
                    <RotateCcw
                      size={20}
                      className="text-[#DE6A48] group-hover:rotate-180 transition-transform duration-300"
                    />
                    <span>BRING THEM BACK</span>
                  </button>
                </div>
              </div>
            )}

            {/* Carousel Layout - Cards flow off-screen with scroll functionality */}
            <div className="w-full relative">
              {/* Navigation Buttons - Show/Hide based on scroll availability */}
              {canScrollLeft && (
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 transition-all duration-200"
                  style={{ left: "-60px" }}
                >
                  <LeftArrow />
                </button>
              )}
              {canScrollRight && (
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 transition-all duration-200"
                  style={{ right: "-60px" }}
                >
                  <RightArrow />
                </button>
              )}

              {/* Scrollable Container with Drag Functionality */}
              <div
                ref={carouselRef}
                className="w-full overflow-x-auto overflow-y-hidden scroll-smooth cursor-grab active:cursor-grabbing"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  maxWidth: "950px", // Reduced to show more of the next card
                  margin: "0 auto", // Center the container
                  userSelect: isDragging ? "none" : "auto",
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onScroll={(e) => {
                  // Hide scrollbar for webkit browsers
                  e.target.style.scrollbarWidth = "none";
                }}
              >
                {/* Cards container - horizontal scroll */}
                <div
                  className="flex gap-6 justify-start"
                  style={{ width: "fit-content", paddingRight: "20px" }}
                >
                  {cardData.map((card, index) => {
                    if (hiddenCards.has(index)) return null;

                    return (
                      <div key={index} className="flex-shrink-0">
                        <Frame3416
                          title={card.title}
                          content={card.content}
                          tagline={card.tagline}
                          onExpand={() => expandProject(card)}
                          onClose={() => closeProject(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Dialog */}
      {expandedProject && (
        <ExpandedDialog
          project={expandedProject}
          onClose={() => setExpandedProject(null)}
        />
      )}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
