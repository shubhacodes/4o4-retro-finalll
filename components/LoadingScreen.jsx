"use client";
import React, { useState, useEffect, useRef } from "react";
import GlitchText from "@/components/ui/GlitchText";

const LoadingScreen = ({
  onComplete,
  duration = 5000,
  showPercentage = true,
  enableAnimation = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [glitchMessage, setGlitchMessage] = useState("");
  const progressRef = useRef(0);
  const intervalRef = useRef(null);
  const messageIntervalRef = useRef(null);

  // Glitchy loading messages
  const glitchMessages = [
    "INITIALIZING...",
    "LOADING CREATIVITY...",
    "BREAKING BOUNDARIES...",
    "ERRORS ARE FEATURES...",
    "WELCOME TO 4o4...",
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update glitch message
  useEffect(() => {
    const updateMessage = () => {
      const randomIndex = Math.floor(Math.random() * glitchMessages.length);
      setGlitchMessage(glitchMessages[randomIndex]);
    };

    updateMessage();
    messageIntervalRef.current = setInterval(updateMessage, 1500);

    return () => {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    };
  }, []);

  // Progress animation logic
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setIsComplete(true);
      setTimeout(() => onComplete?.(), 100);
      return;
    }

    if (!enableAnimation) {
      setProgress(100);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const targetProgress = 100;
    const increment = targetProgress / (duration / 16);

    intervalRef.current = setInterval(() => {
      progressRef.current += increment;

      if (progressRef.current >= targetProgress) {
        progressRef.current = targetProgress;
        setProgress(targetProgress);
        setIsComplete(true);
        clearInterval(intervalRef.current);

        setTimeout(() => onComplete?.(), 500);
      } else {
        setProgress(Math.round(progressRef.current));
      }
    }, 16);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    };
  }, [duration, enableAnimation, prefersReducedMotion, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #6B2C91 0%, #4A1B6B 50%, #2D0F3D 100%)",
      }}
      role="status"
      aria-busy={!isComplete}
      aria-live="polite"
      aria-label={`Loading ${progress}% complete`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern - Top Right */}
        <div
          className="absolute top-4 right-4 w-32 h-32 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "8px 8px",
          }}
        />

        {/* Grid Pattern - Bottom Left */}
        <div
          className="absolute bottom-4 left-4 w-48 h-24 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "12px 12px",
          }}
        />

        {/* Colorful Rays */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Central rays spreading outward */}
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-orange-400 to-transparent opacity-30"
              style={{ transform: "rotate(45deg)", left: "50%", top: "-50%" }}
            />
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-yellow-400 to-transparent opacity-30"
              style={{ transform: "rotate(90deg)", left: "50%", top: "-50%" }}
            />
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-green-400 to-transparent opacity-30"
              style={{ transform: "rotate(135deg)", left: "50%", top: "-50%" }}
            />
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-blue-400 to-transparent opacity-30"
              style={{ transform: "rotate(180deg)", left: "50%", top: "-50%" }}
            />
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-purple-400 to-transparent opacity-30"
              style={{ transform: "rotate(225deg)", left: "50%", top: "-50%" }}
            />
            <div
              className="absolute w-1 h-96 bg-gradient-to-t from-transparent via-pink-400 to-transparent opacity-30"
              style={{ transform: "rotate(270deg)", left: "50%", top: "-50%" }}
            />
          </div>
        </div>
      </div>

      {/* Main Loading Window */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Browser Window - Matching Internal Styling */}
        <div className="bg-[#FAF9F5] rounded-t-lg border-2 border-black shadow-2xl w-96 sm:w-[480px] lg:w-[520px] mx-4">
          {/* Browser Header */}
          <div
            className="flex items-center justify-center px-4 py-3 rounded-t-lg border-b-2 border-black"
            style={{ backgroundColor: "#231F20" }}
          >
            {/* Browser Title */}
            <div
              className="px-3 py-1 rounded text-[#FAF9F5] font-bold text-xs border border-black"
              style={{ backgroundColor: "#DB5029" }}
            >
              SYSTEM LOADING...
            </div>
          </div>

          {/* Browser Content */}
          <div
            className="p-10 sm:p-12 lg:p-16 text-center"
            style={{ backgroundColor: "#FAF9F5" }}
          >
            {/* Loading Text */}
            <div className="mb-6">
              <h1
                className="text-4xl sm:text-5xl font-bold tracking-wider"
                style={{
                  fontFamily: "var(--font-oswald)",
                  color: "#FFB600",
                }}
              >
                LOADING...
              </h1>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-white border-2 border-black h-8 relative overflow-hidden">
                <div
                  className="h-full transition-all duration-200 ease-out border-r-2 border-black"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: progress > 0 ? "#DB5029" : "transparent",
                  }}
                />
                {/* Progress Bar Segments */}
                <div className="absolute inset-0 flex">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border-r border-black h-full"
                      style={{ borderRightWidth: i === 19 ? "0px" : "1px" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Percentage */}
            {showPercentage && (
              <div className="text-center">
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    color: "#FFB600",
                  }}
                >
                  {progress}%
                </span>
              </div>
            )}

            {/* Status Message */}
            <div className="mt-4 text-center">
              <div
                className="text-sm font-medium"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "#231F20",
                }}
              >
                {glitchMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
