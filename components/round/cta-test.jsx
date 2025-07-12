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
              backgroundColor: "#DB5029",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(219, 80, 41, 0.4)",
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
        bg-[#FAF9F5] 
        border-2 
        border-black 
        font-oswald 
        text-[#231F20]
        hover:bg-[#FAF9F5]/90 
        active:bg-[#FAF9F5]/80
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
    style={{ backgroundColor: "#231F20" }}
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
              linear-gradient(#231F20 1px, transparent 1px),
              linear-gradient(90deg, #231F20 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundColor: "#FAF9F5",
            borderBottom: "2px solid black",
          }}
        />

        {/* Main content area */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "350px",
            backgroundColor: "#FAF9F5",
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
                  color: "#231F20",
                  letterSpacing: "1px",
                }}
              >
                Ready to start something{" "}
                <span style={{ color: "#DB5029" }}>special?</span>
              </h2>
              <p
                className="mb-6 sm:mb-8 text-base sm:text-lg font-space-grotesk"
                style={{
                  lineHeight: "1.7",
                  color: "#231F20",
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

// --- Rounded CTA Section (Retro Arcade Machine Design) ---
const RoundedCTASection = () => (
  <section
    className="w-full pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-10 lg:pb-4"
    style={{ backgroundColor: "#231F20" }}
  >
    <div className="mx-auto max-w-6xl px-6">
      {/* Arcade Cabinet Container */}
      <div className="relative">
        {/* Main Arcade Cabinet */}
        <div
          style={{
            position: "relative",
            width: "100%",
            border: "4px solid black",
            borderRadius: "24px",
            backgroundColor: "#FAF9F5",
            overflow: "hidden",
          }}
        >
          {/* Arcade Cabinet Header */}
          <div className="bg-[#DB5029] border-b-4 border-black p-4 relative">
            <div className="text-center">
              <h3 className="font-bold text-black font-oswald text-lg tracking-wider">
                404 ARCADE
              </h3>
              <div className="text-xs text-black font-mono">
                INSERT COIN TO CONTINUE
              </div>
            </div>
          </div>

          {/* Arcade Screen & Controls Area */}
          <div className="bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 relative">
            {/* Stacked Layout - Video First, Controls Second */}
            <div className="flex flex-col gap-8 relative z-10">
              {/* First Line: Game Screen */}
              <div className="w-full flex justify-center">
                {/* Subtle Screen Frame - Smaller Video */}
                <div className="relative bg-[#231F20] p-3 rounded-xl border-2 border-black w-full max-w-2xl">
                  <div style={{ height: "300px", overflow: "hidden" }}>
                    <CTAVideo rounded={true} />
                  </div>
                </div>
              </div>

              {/* Second Line: Control Panel */}
              <div className="w-full">
                {/* Subtle Control Panel */}
                <div className="bg-[#231F20] rounded-xl p-6 border-2 border-black relative overflow-hidden">
                  {/* Control Panel Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                      {/* Left: Joystick Area */}
                      <div className="flex flex-col items-center">
                        <div className="inline-block bg-[#FAF9F5] rounded-full p-3 border-2 border-[#DB5029] mb-3">
                          <JoystickButton
                            gameId={3}
                            className="relative bottom-auto right-auto"
                          />
                        </div>
                        <div className="text-[#DB5029] font-mono text-xs tracking-wider">
                          PLAYER 1
                        </div>
                      </div>

                      {/* Center: Message */}
                      <div className="flex-1 text-center lg:text-left">
                        <h2
                          className="font-bold mb-4 text-xl sm:text-2xl font-oswald text-[#FAF9F5]"
                          style={{
                            lineHeight: "1.3",
                            letterSpacing: "0.5px",
                          }}
                        >
                          The best decisions are made when taken with{" "}
                          <span className="text-[#DB5029]">time.</span>
                        </h2>
                        <p
                          className="text-sm sm:text-base font-space-grotesk text-[#FAF9F5] opacity-80 mb-6"
                          style={{
                            lineHeight: "1.6",
                          }}
                        >
                          So someone plays a game. Let's create something
                          meaningful together while you take your time to
                          decide.
                        </p>
                      </div>

                      {/* Right: Start Button */}
                      <div className="flex flex-col items-center">
                        <StandardCTAButton
                          size="medium"
                          rounded={true}
                          onClick={() =>
                            console.log("Game Started - Arcade CTA!")
                          }
                          className="bg-[#DB5029] text-black hover:bg-[#DB5029]/90 border-black font-bold mb-2"
                        >
                          🎮 START GAME
                        </StandardCTAButton>
                        <div className="text-[#FAF9F5] font-mono text-xs opacity-60">
                          PRESS START
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arcade Cabinet Footer */}
          <div className="bg-[#231F20] border-t-4 border-black p-3">
            <div className="flex items-center justify-between text-[#FAF9F5]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#DB5029] rounded-full animate-pulse"></div>
                <span className="font-mono text-xs">GAME READY</span>
              </div>
              <div className="text-center">
                <div className="font-mono text-xs">404 FOUND US © 2024</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs">CREDITS: ∞</span>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
