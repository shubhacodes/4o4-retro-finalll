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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      role="status"
      aria-busy={!isComplete}
      aria-live="polite"
      aria-label={`Loading ${progress}% complete`}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,182,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,182,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Main 4o4 Logo with Glitch - Even smaller */}
        <div className="text-center">
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={false}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            4o4
          </GlitchText>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <GlitchText
            speed={1.5}
            enableShadows={true}
            enableOnHover={false}
            className="text-xs sm:text-sm lg:text-base font-light opacity-70"
          >
            CREATIVE AGENCY
          </GlitchText>
        </div>

        {/* Progress Bar Container - Clean and simple */}
        <div className="w-72 sm:w-80 lg:w-96 mx-auto space-y-3">
          {/* Progress Bar - Simple and clear */}
          <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFB600] transition-all duration-100 ease-out rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Progress Percentage - Even smaller */}
          {showPercentage && (
            <div className="text-center">
              <span className="text-base sm:text-lg font-bold text-[#FFB600]">
                {progress}%
              </span>
            </div>
          )}
        </div>

        {/* Glitch Message - Even smaller */}
        <div className="text-center min-h-[2rem] flex items-center">
          <GlitchText
            speed={2}
            enableShadows={false}
            enableOnHover={false}
            className="text-xs font-medium text-gray-400"
          >
            {glitchMessage}
          </GlitchText>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
