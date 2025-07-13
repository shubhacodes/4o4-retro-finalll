"use client";
import React, { useRef, useState, useEffect } from "react";
import { X, Maximize2, RotateCcw } from "lucide-react";
import Image from "next/image";
import useSound from "@/hooks/use-sound";
import JoystickButton from "@/components/ui/JoystickButton";
import SectionHeader from "@/components/ui/SectionHeader";

export const Frame3416 = ({
  title,
  imageBW,
  imageColor,
  tagline,
  onExpand,
  onClose,
  isExpanded,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { playClick } = useSound();

  const handleClose = () => {
    playClick();
    onClose();
  };

  const handleExpand = () => {
    playClick();
    onExpand();
  };

  return (
    <div
      className="relative bg-transparent flex-shrink-0"
      style={{
        width: "clamp(300px, 35vw, 420px)", // Optimized for mobile
        height: "clamp(340px, 42vw, 520px)", // Adjusted for mobile
        minWidth: "300px", // Reduced minimum for smaller screens
      }}
    >
      {/* Main container - responsive scaling */}
      <div className="relative w-full h-full">
        {/* Yellow header rectangle with black border - with rounded corners */}
        <div
          className="absolute border-t border-l border-r border-black rounded-t-lg"
          style={{
            width: "calc(100% - 8px)",
            height: "clamp(45px, 14%, 55px)", // Increased header height for larger cards
            left: "0px",
            top: "0px",
            backgroundColor: "#FFB600",
          }}
        />

        {/* Header separator line */}
        <div
          className="absolute bg-black"
          style={{
            width: "calc(100% - 8px)",
            height: "2px",
            left: "0px",
            top: "clamp(45px, 14%, 55px)", // Matches header height
          }}
        />

        {/* White content area – fills remaining space */}
        <div
          className="absolute bg-[#FAF9F5] rounded-b-lg border-l border-r border-b border-black"
          style={{
            left: "0px",
            top: "clamp(47px, 14.2%, 57px)", // Just below header separator
            width: "calc(100% - 8px)",
            bottom: "0px",
          }}
        />

        {/* Header content - company name */}
        <div
          className="absolute text-[#231F20] overflow-hidden px-3 sm:px-4 py-2 sm:py-3 flex items-center"
          style={{
            left: "0px",
            top: "0px",
            width: "calc(100% - 70px)", // Adjusted space for smaller buttons
            height: "clamp(45px, 14%, 55px)", // Matches header height
          }}
        >
          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-oswald leading-tight truncate">
            {title}
          </h3>
        </div>

        {/* Content container - restructured layout */}
        <div
          className="absolute text-black overflow-hidden px-3 sm:px-4 py-2 sm:py-3 flex flex-col"
          style={{
            left: "0px",
            top: "clamp(57px, 18%, 67px)", // Below header with appropriate padding
            width: "calc(100% - 8px)",
            height: "calc(100% - clamp(57px, 18%, 67px) - 8px)", // Fill remaining space with appropriate bottom padding
          }}
        >
          {/* Company logo - image section with hover effect - Much larger now */}
          <div
            className="mb-3 flex items-center justify-center"
            style={{ height: "calc(100% - 90px)" }} // Take most of the available space, adjusted for even taller card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-1">
              <div className="relative inline-block w-full h-full">
                <Image
                  key={isHovered ? "color" : "bw"}
                  src={isHovered ? imageColor : imageBW}
                  alt={`${title} logo`}
                  width={400}
                  height={300}
                  priority
                  unoptimized
                  className="object-cover transition-all duration-500 ease-in-out rounded-lg border border-black bg-white"
                  style={{
                    width: "100%",
                    height: "100%",
                    filter: isHovered ? "none" : "grayscale(100%)",
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                    boxShadow: isHovered
                      ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                      : "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Separator line - thinner and less margin */}
          <div className="w-full h-px bg-black mb-2 flex-none"></div>

          {/* Work done tags - bottom section - appropriately sized for even taller cards */}
          {tagline && (
            <div
              className="flex-none"
              style={{ height: "75px", overflow: "hidden" }}
            >
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {tagline.split(", ").map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-transparent border border-black text-black text-xs font-space-grotesk px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Control buttons positioned within the card boundaries - completely rounded */}
      {/* Close button - top right - with completely rounded edges */}
      <button
        className="absolute bg-white border border-black rounded-full hover:bg-gray-50 transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105"
        style={{
          width: "clamp(22px, 4vw, 30px)",
          height: "clamp(22px, 4vw, 30px)",
          right: "clamp(8px, 3%, 16px)",
          top: "clamp(6px, 2%, 12px)",
        }}
        onClick={handleClose}
        title="Remove Card"
      >
        <X size={14} className="text-black" />
      </button>

      {/* Expand button - top right - with completely rounded edges */}
      <button
        className="absolute bg-white border border-black rounded-full hover:bg-gray-50 transition-all duration-200 flex items-center justify-center cursor-pointer transform hover:scale-105"
        style={{
          width: "clamp(22px, 4vw, 30px)",
          height: "clamp(22px, 4vw, 30px)",
          right: "clamp(38px, 12%, 54px)",
          top: "clamp(6px, 2%, 12px)",
        }}
        onClick={handleExpand}
        title="View More Details"
      >
        <Maximize2 size={14} className="text-black" />
      </button>
    </div>
  );
};

// Navigation arrows with sound
const LeftArrow = ({ onClick }) => {
  const { playClick } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <div
      className="w-12 h-12 flex items-center justify-center bg-white border border-black rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-transparent border-r-black transform"></div>
    </div>
  );
};

const RightArrow = ({ onClick }) => {
  const { playClick } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <div
      className="w-12 h-12 flex items-center justify-center bg-white border border-black rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-black transform"></div>
    </div>
  );
};

// Enhanced Dialog Component with Browser Mockup and Design Language - Made responsive
const ExpandedDialog = ({ project, onClose }) => {
  const handleLinkClick = () => {
    const url = `https://www.${project.title
      .toLowerCase()
      .replace(/\s+/g, "")}.com/`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-white/10 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white/95 backdrop-blur-lg border border-black rounded-lg w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header - responsive */}
        <div className="bg-[#FFB600] border-b border-black p-3 sm:p-4 flex justify-between items-center">
          <h2 className="text-base sm:text-lg font-bold text-black font-oswald truncate">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors transform hover:scale-105 flex-shrink-0"
          >
            <X size={16} className="text-black" />
          </button>
        </div>

        {/* Content - responsive layout */}
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
            {/* Left Side - Browser Mockup with Single Screenshot Preview */}
            <div className="relative">
              {/* Browser Window Container */}
              <div
                className="relative"
                style={{ height: "clamp(360px, 45vh, 510px)" }}
              >
                {/* Browser Window */}
                <div className="relative w-full h-full bg-white border border-black rounded-lg overflow-hidden">
                  {/* Browser Header - responsive */}
                  <div className="bg-[#FFB600] border-b border-black p-2 sm:p-3 flex items-center justify-between">
                    <div className="flex-1 mx-2 sm:mx-4">
                      <button
                        onClick={handleLinkClick}
                        className="w-full bg-white border border-black rounded px-2 sm:px-3 py-1 text-xs sm:text-sm font-space-grotesk hover:bg-gray-100 transition-colors cursor-pointer text-left truncate"
                      >
                        https://www.
                        {project.title.toLowerCase().replace(/\s+/g, "")}.com/
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Landing Page Viewport */}
                  <div
                    className="relative bg-white overflow-y-auto"
                    style={{ height: "clamp(300px, 40vh, 450px)" }}
                  >
                    {/* Full Landing Page Content - Screenshots */}
                    <div className="w-full">
                      {/* Hero Section Screenshot */}
                      <div className="w-full h-80 bg-gray-200 border-b border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Hero Section Screenshot
                        </span>
                      </div>

                      {/* About Section Screenshot */}
                      <div className="w-full h-80 bg-gray-100 border-b border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          About Section Screenshot
                        </span>
                      </div>

                      {/* Services Section Screenshot */}
                      <div className="w-full h-80 bg-gray-200 border-b border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Services Section Screenshot
                        </span>
                      </div>

                      {/* Portfolio Section Screenshot */}
                      <div className="w-full h-80 bg-gray-100 border-b border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Portfolio Section Screenshot
                        </span>
                      </div>

                      {/* Testimonials Section Screenshot */}
                      <div className="w-full h-80 bg-gray-200 border-b border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Testimonials Section Screenshot
                        </span>
                      </div>

                      {/* Contact Section Screenshot */}
                      <div className="w-full h-80 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Contact Section Screenshot
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Typography & Colours Design Card */}
            <div
              className="flex flex-col"
              style={{ height: "clamp(360px, 45vh, 510px)" }}
            >
              {/* Main Typography & Colours Card */}
              <div className="bg-white border border-black rounded-lg overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className="bg-[#FFB600] border-b border-black p-2 sm:p-3 flex items-center relative">
                  <h4 className="text-base sm:text-lg font-oswald text-[#231F20]">
                    Typography & Colours
                  </h4>
                  {/* Yellow accent border on left - darker yellow for contrast */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DB5029]"></div>
                </div>

                {/* Content Grid */}
                <div className="p-3 grid grid-cols-2 gap-4 flex-1">
                  {/* Left Side - Typography */}
                  <div className="space-y-3">
                    {/* Main Typography Display */}
                    <div className="space-y-2">
                      <div className="text-gray-600 text-sm font-space-grotesk">
                        Urbanist
                      </div>
                      <div
                        className="text-5xl font-bold text-black"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        Aa
                      </div>
                    </div>

                    {/* Text Samples */}
                    <div className="space-y-2 mt-4">
                      <div className="space-y-1">
                        <div className="text-gray-500 text-xs font-space-grotesk">
                          48px - light
                        </div>
                        <div className="text-2xl font-light text-black font-space-grotesk">
                          Bank transfer
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-gray-500 text-xs font-space-grotesk">
                          24px - regular
                        </div>
                        <div className="text-lg font-normal text-black font-space-grotesk">
                          Bank transfer
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-gray-500 text-xs font-space-grotesk">
                          24px - bold
                        </div>
                        <div className="text-lg font-bold text-black font-space-grotesk">
                          Bank transfer
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Color Palette */}
                  <div className="space-y-2">
                    {/* Color Swatches */}
                    <div className="space-y-1.5">
                      {/* Primary Yellow */}
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-8 bg-[#FFB600] border border-black rounded"></div>
                        <div className="text-xs text-[#231F20] font-space-grotesk">
                          #FFB600
                          <br />
                          <span className="text-[#231F20]/70">Primary</span>
                        </div>
                      </div>

                      {/* Terra Cotta */}
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-8 bg-[#DB5029] border border-black rounded"></div>
                        <div className="text-xs text-[#231F20] font-space-grotesk">
                          #DB5029
                          <br />
                          <span className="text-[#231F20]/70">Secondary</span>
                        </div>
                      </div>

                      {/* Charcoal Black */}
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-8 bg-[#231F20] border border-black rounded"></div>
                        <div className="text-xs text-[#231F20] font-space-grotesk">
                          #231F20
                          <br />
                          <span className="text-[#231F20]/70">Text</span>
                        </div>
                      </div>

                      {/* Light Background */}
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-8 bg-[#FAF9F5] border border-black rounded"></div>
                        <div className="text-xs text-[#231F20] font-space-grotesk">
                          #FAF9F5
                          <br />
                          <span className="text-[#231F20]/70">Background</span>
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
  const { playClick } = useSound();

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
    playClick();
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 400;
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    playClick();
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 400;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Enhanced drag scrolling functionality with touch support
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

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStart.x) * 2;
    carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const refreshCards = () => {
    playClick();
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
      title: "GLC Foods",
      imageBW: "/glc-bw.png",
      imageColor: "/glc-c.png",
      tagline:
        "E-commerce Platform, Brand Identity, Digital Marketing, Mobile App",
    },
    {
      title: "C2E (Concept to Education)",
      imageBW: "/c2e-bw.png",
      imageColor: "/c2e-c.png",
      tagline:
        "Educational Platform, LMS Development, Student Portal, Course Management",
    },
    {
      title: "Brij Hair Artistry",
      imageBW: "/brij-bw.png",
      imageColor: "/brij-c.png",
      tagline:
        "Salon Booking System, Brand Identity, Portfolio Showcase, Client Management",
    },
    {
      title: "MV Realty",
      imageBW: "/mv-bw.png",
      imageColor: "/mv-c.png",
      tagline:
        "Property Listings, Real Estate CRM, Virtual Tours, Lead Generation",
    },
  ];

  return (
    <section
      className="w-full flex flex-col relative"
      style={{ backgroundColor: "#FAF9F5" }}
    >
      {/* Top Right Button Group - Improved Mobile Layout */}
      <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-30 flex flex-col items-end gap-2 sm:gap-3">
        {/* Joystick Button - positioned first on mobile */}
        <JoystickButton
          gameId={1}
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
        />

        {/* BRING THEM BACK Button - Only show when cards are hidden */}
        {hiddenCards.size > 0 && (
          <button
            onClick={refreshCards}
            className="bg-white border-2 border-black text-black px-2 sm:px-4 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm transform hover:scale-105 flex items-center gap-1 sm:gap-2 group rounded-lg h-8 sm:h-12 min-w-[60px] sm:min-w-auto"
            title="Bring back all projects"
            style={{
              animation: "slideInFromLeft 0.3s ease-out",
            }}
          >
            <RotateCcw
              size={10}
              className="text-[#DE6A48] group-hover:rotate-180 transition-transform duration-300 sm:w-[14px] sm:h-[14px]"
            />
            <span className="hidden sm:inline">BRING THEM BACK</span>
            <span className="sm:hidden text-xs">BACK</span>
          </button>
        )}
      </div>

      {/* Responsive container with generous padding */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-24 flex-grow flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <SectionHeader
            mainHeading="See what we've been cooking."
            subLabel="Work Showcase"
            className="mb-10 sm:mb-12 lg:mb-16"
            onDarkBackground={false}
            pillPosition="section-boundary"
          />

          {/* Carousel Layout - responsive */}
          <div className="w-full relative">
            {/* Navigation Buttons - responsive positioning and hiding on very small screens */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-200 hidden sm:block"
                style={{ left: "clamp(-50px, -8vw, -60px)" }}
              >
                <LeftArrow onClick={scrollLeft} />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-200 hidden sm:block"
                style={{ right: "clamp(-50px, -8vw, -60px)" }}
              >
                <RightArrow onClick={scrollRight} />
              </button>
            )}

            {/* Scrollable Container with Enhanced Touch Support */}
            <div
              ref={carouselRef}
              className="w-full overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                maxWidth: "1000px", // Optimized for mobile card sizes
                margin: "0 auto",
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: isDragging ? "none" : "auto",
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={(e) => {
                // Hide scrollbar for webkit browsers
                e.target.style.scrollbarWidth = "none";
              }}
            >
              {/* Cards container - reduced gaps and padding */}
              <div
                className="flex gap-2 sm:gap-3 lg:gap-4 xl:gap-6 justify-start pb-6 sm:pb-8 lg:pb-10"
                style={{
                  width: "fit-content",
                  paddingLeft: "clamp(16px, 4vw, 32px)",
                  paddingRight: "clamp(16px, 4vw, 32px)",
                }}
              >
                {cardData.map((card, index) => {
                  if (hiddenCards.has(index)) return null;

                  return (
                    <div key={index} className="flex-shrink-0">
                      <Frame3416
                        title={card.title}
                        imageBW={card.imageBW}
                        imageColor={card.imageColor}
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

        {/* Expanded Dialog */}
        {expandedProject && (
          <ExpandedDialog
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </div>

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

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
