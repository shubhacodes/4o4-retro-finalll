"use client";
import React from "react";
import JoystickButton from "@/components/ui/JoystickButton";
import useSound from "@/hooks/use-sound";
// ProcessFrame not used in round version - using custom rounded frame

// --- CTA Video Component ---
const CTAVideo = ({ rounded = false }) => {
  const [isPlaying, setIsPlaying] = React.useState(true); // Start as playing for autoplay
  const [showControls, setShowControls] = React.useState(false);
  const videoRef = React.useRef(null);
  const { playClick } = useSound();

  const handlePlayPause = () => {
    playClick();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundColor: "#000",
        border: "3px solid black",
        borderRadius: rounded ? "20px" : "3px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: rounded
          ? "0 8px 25px rgba(0, 0, 0, 0.15)"
          : "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
      className="sm:h-[450px] lg:h-[500px]"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={handlePlayPause}
    >
      {/* Actual Video */}
      <video
        ref={videoRef}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/cta-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Play/Pause Overlay */}
      {(!isPlaying || showControls) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isPlaying
              ? "rgba(0, 0, 0, 0.3)"
              : "linear-gradient(135deg, rgba(44, 44, 44, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "16px",
            transition: "all 0.3s ease",
          }}
        >
          {/* Play/Pause Button */}
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#f87a30",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(248, 122, 48, 0.4)",
              transform: showControls ? "scale(1.1)" : "scale(1)",
            }}
            className="sm:w-20 sm:h-20"
          >
            {!isPlaying ? (
              /* Play triangle */
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "16px solid black",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  marginLeft: "3px",
                }}
                className="sm:border-l-[20px] sm:border-t-[12px] sm:border-b-[12px] sm:ml-1"
              />
            ) : (
              /* Pause bars */
              <div style={{ display: "flex", gap: "3px" }} className="sm:gap-1">
                <div
                  style={{
                    width: "4px",
                    height: "16px",
                    backgroundColor: "black",
                  }}
                  className="sm:w-[6px] sm:h-5"
                />
                <div
                  style={{
                    width: "4px",
                    height: "16px",
                    backgroundColor: "black",
                  }}
                  className="sm:w-[6px] sm:h-5"
                />
              </div>
            )}
          </div>

          {!isPlaying && (
            <>
              {/* Video title */}
              <div
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: "bold",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
                className="sm:text-lg"
              >
                WATCH OUR STORY
              </div>

              {/* Video indicator */}
              <div
                style={{
                  color: "#f87a30",
                  fontSize: "12px",
                  fontFamily: "var(--font-inter)",
                  fontWeight: "500",
                }}
                className="sm:text-sm"
              >
                Click to play
              </div>
            </>
          )}
        </div>
      )}

      {/* Video overlay effects */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.2) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

// --- Standardized CTA Button Component (for use across entire website) ---
export const StandardCTAButton = ({
  children,
  onClick,
  size = "medium", // "small", "medium", "large"
  rounded = false,
  className = "",
}) => {
  const { playClick } = useSound();

  const handleClick = (e) => {
    playClick();
    if (onClick) {
      onClick(e);
    }
  };

  const sizes = {
    small: {
      padding: "10px 20px",
      fontSize: "14px",
      translate: { hover: "1px, 1px", pressed: "2px, 2px" },
    },
    medium: {
      padding: "12px 28px",
      fontSize: "16px",
      translate: { hover: "2px, 2px", pressed: "3px, 3px" },
    },
    large: {
      padding: "15px 36px",
      fontSize: "20px",
      translate: { hover: "3px, 3px", pressed: "4px, 4px" },
    },
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative 
        bg-white 
        border-2 
        border-black 
        font-oswald 
        text-[#3f4c38]
        hover:bg-gray-50 
        active:bg-gray-100
        transition-all 
        duration-200 
        transform 
        hover:scale-105
        ${rounded ? "rounded-xl" : ""}
        ${className}
      `}
      style={{
        padding: sizes[size].padding,
        fontSize: sizes[size].fontSize,
      }}
    >
      {children}
    </button>
  );
};

// --- Legacy CTA Button (keeping for backwards compatibility) ---
const CTAButton = ({ rounded = false, children, onClick }) => (
  <StandardCTAButton size="large" rounded={rounded} onClick={onClick}>
    {children}
  </StandardCTAButton>
);

// --- Sharp CTA Section (updated colors) ---
const SharpCTASection = () => (
  <section
    className="w-full py-8 sm:py-10 lg:py-12"
    style={{ backgroundColor: "#8abdb3" }}
  >
    <div className="mx-auto max-w-6xl px-6">
      {/* Outer boundary container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          border: "3px solid black",
          borderRadius: "25px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        {/* Grid strip at top */}
        <div
          style={{
            height: "40px",
            width: "100%",
            backgroundImage: `
              linear-gradient(#3f4c38 1px, transparent 1px),
              linear-gradient(90deg, #3f4c38 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundColor: "#F7F4E9",
            borderBottom: "2px solid black",
          }}
        />

        {/* Main content area */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "350px",
            backgroundColor: "white",
            padding: "24px",
          }}
          className="sm:min-h-[400px] sm:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center h-full gap-6 lg:gap-0">
            {/* Left Side: Video */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <CTAVideo rounded={true} />
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center text-center lg:text-left">
              <h2
                className="font-bold mb-4 sm:mb-6 text-xl sm:text-2xl font-oswald"
                style={{
                  lineHeight: "1.2",
                  color: "#3f4c38",
                  letterSpacing: "1px",
                }}
              >
                Ready to start something{" "}
                <span style={{ color: "#f87a30" }}>special?</span>
              </h2>
              <p
                className="mb-6 sm:mb-8 text-base sm:text-lg font-space-grotesk"
                style={{
                  lineHeight: "1.7",
                  color: "#3f4c38",
                }}
              >
                We're here to turn your ideas into unforgettable brand
                experiences. Let's chat about what we can build together.
              </p>
              <div className="flex justify-center lg:justify-start">
                <StandardCTAButton
                  size="medium"
                  rounded={true}
                  onClick={() => console.log("Let's Talk clicked - Sharp CTA!")}
                >
                  LET'S TALK
                </StandardCTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Rounded CTA Section (Clean Design) ---
const RoundedCTASection = () => (
  <section
    className="w-full pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-10 lg:pb-4"
    style={{ backgroundColor: "#8abdb3" }}
  >
    <div className="mx-auto max-w-6xl px-6">
      {/* Outer boundary container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          border: "3px solid black",
          borderRadius: "24px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        {/* Main content frame - no grid lines */}
        <div className="relative bg-white p-6 sm:p-8 lg:p-10">
          {/* Joystick Button - positioned relative to this container */}
          <div className="absolute top-4 right-4 z-10">
            <JoystickButton
              gameId={3}
              className="relative bottom-auto right-auto"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
            {/* Left Side: Video */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <CTAVideo rounded={true} />
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center text-center lg:text-left">
              <h2
                className="font-bold mb-4 sm:mb-6 text-xl sm:text-2xl font-oswald"
                style={{
                  lineHeight: "1.2",
                  color: "#3f4c38",
                  letterSpacing: "1px",
                }}
              >
                Let's create magic{" "}
                <span style={{ color: "#f87a30" }}>together.</span>
              </h2>
              <p
                className="mb-6 sm:mb-8 text-base sm:text-lg font-space-grotesk"
                style={{
                  lineHeight: "1.7",
                  color: "#3f4c38",
                }}
              >
                Transform your vision into reality with our expert team. From
                concept to execution, we're your creative partners.
              </p>
              <div className="flex justify-center lg:justify-start">
                <StandardCTAButton
                  size="medium"
                  rounded={true}
                  onClick={() =>
                    console.log("Start Project clicked - Rounded CTA!")
                  }
                >
                  START PROJECT
                </StandardCTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main CTA Test Component ---
export default function CTATest() {
  return (
    <>
      {/* Sharp CTA Section */}
      <SharpCTASection />
    </>
  );
}

export function CTATestSoft() {
  return (
    <>
      {/* Rounded CTA Section */}
      <RoundedCTASection />
    </>
  );
}
