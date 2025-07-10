"use client";
import React from "react";
import { ProcessFrame } from "../sharp/process-test.jsx"; // Import from sharp process-test

// --- CTA Video Component ---
const CTAVideo = ({ rounded = false }) => {
  const [isPlaying, setIsPlaying] = React.useState(true); // Start as playing for autoplay
  const [showControls, setShowControls] = React.useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
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
        height: "280px",
        backgroundColor: "#000",
        border: "3px solid black",
        borderRadius: rounded ? "20px" : "3px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: rounded
          ? "0 8px 25px rgba(0, 0, 0, 0.15)"
          : "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
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
              width: "80px",
              height: "80px",
              backgroundColor: "#FFB600",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(255, 182, 0, 0.4)",
              transform: showControls ? "scale(1.1)" : "scale(1)",
            }}
          >
            {!isPlaying ? (
              /* Play triangle */
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "20px solid black",
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  marginLeft: "4px",
                }}
              />
            ) : (
              /* Pause bars */
              <div style={{ display: "flex", gap: "4px" }}>
                <div
                  style={{
                    width: "6px",
                    height: "20px",
                    backgroundColor: "black",
                  }}
                />
                <div
                  style={{
                    width: "6px",
                    height: "20px",
                    backgroundColor: "black",
                  }}
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
                  fontSize: "18px",
                  fontFamily: "var(--font-oswald)",
                  fontWeight: "bold",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                WATCH OUR STORY
              </div>

              {/* Video indicator */}
              <div
                style={{
                  color: "#FFB600",
                  fontSize: "14px",
                  fontFamily: "var(--font-inter)",
                  fontWeight: "500",
                }}
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

// --- Enhanced CTA Button Component ---
const CTAButton = ({ rounded = false, children, onClick }) => (
  <div className="relative inline-block">
    {/* Black shadow button */}
    <button
      style={{
        position: "absolute",
        padding: "14px 32px",
        fontFamily: "var(--font-oswald)",
        fontWeight: "bold",
        fontSize: "22px",
        backgroundColor: "#000000",
        borderColor: "#000000",
        border: "3px solid black",
        borderRadius: rounded ? "12px" : "0",
        color: "#000000",
        transform: "translate(4px, 4px)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
    {/* Main button */}
    <button
      style={{
        position: "relative",
        padding: "14px 32px",
        fontFamily: "var(--font-oswald)",
        fontWeight: "bold",
        fontSize: "22px",
        backgroundColor: "#FFB600",
        border: "3px solid black",
        borderRadius: rounded ? "12px" : "0",
        color: "black",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: rounded ? "0 4px 15px rgba(255, 182, 0, 0.3)" : "none",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(2px, 2px)";
        e.currentTarget.style.backgroundColor = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)";
        e.currentTarget.style.backgroundColor = "#FFB600";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "translate(4px, 4px)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translate(2px, 2px)";
      }}
    >
      {children}
    </button>
  </div>
);

// --- Sharp CTA Section ---
const SharpCTASection = () => (
  <section className="w-full py-12" style={{ backgroundColor: "#F7F4E9" }}>
    <div className="mx-auto" style={{ width: "1100px", maxWidth: "95vw" }}>
      <ProcessFrame>
        <div className="flex items-center h-full" style={{ padding: "40px" }}>
          {/* Left Side: Video */}
          <div className="w-1/2 pr-8">
            <CTAVideo rounded={false} />
          </div>

          {/* Right Side: Content */}
          <div className="w-1/2 pl-8 flex flex-col justify-center">
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: "48px",
                fontFamily: "var(--font-oswald)",
                lineHeight: "1.2",
                color: "#000",
                letterSpacing: "1px",
              }}
            >
              Ready to start something{" "}
              <span style={{ color: "#FFB600" }}>special?</span>
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "19px",
                lineHeight: "1.7",
                color: "#333",
                maxWidth: "90%",
              }}
            >
              We're here to turn your ideas into unforgettable brand
              experiences. Let's chat about what we can build together.
            </p>
            <CTAButton
              rounded={false}
              onClick={() => console.log("Let's Talk clicked - Sharp CTA!")}
            >
              LET'S TALK
            </CTAButton>
          </div>
        </div>
      </ProcessFrame>
    </div>
  </section>
);

// --- Rounded CTA Section ---
const RoundedCTASection = () => (
  <section className="w-full py-12" style={{ backgroundColor: "#F7F4E9" }}>
    <div className="mx-auto" style={{ width: "1100px", maxWidth: "95vw" }}>
      {/* Custom rounded frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "400px",
        }}
      >
        {/* Shadow */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            right: "0",
            bottom: "0",
            backgroundColor: "black",
            borderRadius: "25px",
            opacity: 0.6,
          }}
        />
        {/* Main frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "400px",
            backgroundColor: "white",
            border: "3px solid black",
            borderRadius: "25px",
            padding: "40px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center h-full">
            {/* Left Side: Video */}
            <div className="w-1/2 pr-8">
              <CTAVideo rounded={true} />
            </div>

            {/* Right Side: Content */}
            <div className="w-1/2 pl-8 flex flex-col justify-center">
              <h2
                className="font-bold mb-6"
                style={{
                  fontSize: "48px",
                  fontFamily: "var(--font-oswald)",
                  lineHeight: "1.2",
                  color: "#000",
                  letterSpacing: "1px",
                }}
              >
                Let's create magic{" "}
                <span style={{ color: "#FFB600" }}>together.</span>
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: "19px",
                  lineHeight: "1.7",
                  color: "#333",
                  maxWidth: "90%",
                }}
              >
                Transform your vision into reality with our expert team. From
                concept to execution, we're your creative partners.
              </p>
              <CTAButton
                rounded={true}
                onClick={() => console.log("Let's Talk clicked - Rounded CTA!")}
              >
                START PROJECT
              </CTAButton>
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
