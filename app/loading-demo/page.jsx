"use client";
import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function LoadingDemoPage() {
  const [showLoader, setShowLoader] = useState(false);
  const [duration, setDuration] = useState(3000);
  const [showPercentage, setShowPercentage] = useState(true);
  const [enableAnimation, setEnableAnimation] = useState(true);

  const startLoader = () => {
    setShowLoader(true);
  };

  const handleComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4E9] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-6xl font-bold mb-4 text-black"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            LOADING SCREEN DEMO
          </h1>
          <p
            className="text-xl text-gray-700"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Experience the full-screen animated gradient loading experience
          </p>
        </div>

        {/* Demo Controls */}
        <div className="bg-white border-4 border-black rounded-lg p-8 mb-8 shadow-lg">
          <h2
            className="text-2xl font-bold mb-6 text-black"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Loading Configuration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Duration Control */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Duration: {duration}ms
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer border-2 border-black"
                style={{
                  background: `linear-gradient(to right, #DE6A48 0%, #DE6A48 ${
                    ((duration - 1000) / 9000) * 100
                  }%, #e5e5e5 ${
                    ((duration - 1000) / 9000) * 100
                  }%, #e5e5e5 100%)`,
                }}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>1s</span>
                <span>10s</span>
              </div>
            </div>

            {/* Toggle Controls */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="showPercentage"
                  checked={showPercentage}
                  onChange={(e) => setShowPercentage(e.target.checked)}
                  className="w-5 h-5 border-2 border-black rounded"
                />
                <label
                  htmlFor="showPercentage"
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Show Percentage
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="enableAnimation"
                  checked={enableAnimation}
                  onChange={(e) => setEnableAnimation(e.target.checked)}
                  className="w-5 h-5 border-2 border-black rounded"
                />
                <label
                  htmlFor="enableAnimation"
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Enable Animation
                </label>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="mt-8 text-center">
            <button
              onClick={startLoader}
              disabled={showLoader}
              className="px-8 py-4 bg-[#FFB600] border-4 border-black font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#e6a500] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: "var(--font-oswald)",
                boxShadow: "6px 6px 0 #000",
              }}
            >
              {showLoader ? "LOADING..." : "START LOADING DEMO"}
            </button>
          </div>
        </div>

        {/* Loading Screen Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Animated Gradient",
              description:
                "Full-screen gradient that shifts left-to-right in sync with load progress using your brand colors.",
              icon: "🌈",
            },
            {
              title: "Retro Window UI",
              description:
                "Computer window-style loader with authentic title bar, control buttons, and progress display.",
              icon: "💻",
            },
            {
              title: "Synchronized Motion",
              description:
                "All animations driven by single progress value for perfect timing and smooth experience.",
              icon: "⚡",
            },
            {
              title: "Accessibility First",
              description:
                "Respects prefers-reduced-motion, includes ARIA labels, and provides screen reader announcements.",
              icon: "♿",
            },
            {
              title: "Brand Consistent",
              description:
                "Uses your established color palette, typography system, and design language patterns.",
              icon: "🎨",
            },
            {
              title: "Configurable",
              description:
                "Adjustable duration, toggleable percentage display, and animation controls for different use cases.",
              icon: "⚙️",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-bold mb-3 text-black"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Implementation Guide */}
        <div className="mt-12 bg-black text-white border-4 border-black rounded-lg p-8">
          <h2
            className="text-2xl font-bold mb-6 text-[#FFB600]"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            IMPLEMENTATION GUIDE
          </h2>

          <div
            className="space-y-4 text-lg"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <div>
              <span className="text-[#DE6A48] font-bold">1. App Router:</span>
              <span className="ml-2">
                Already set up in `app/loading.js` for automatic route loading
              </span>
            </div>
            <div>
              <span className="text-[#00796B] font-bold">2. Manual Use:</span>
              <span className="ml-2">
                Import `LoadingScreen` component and control with state
              </span>
            </div>
            <div>
              <span className="text-[#5a0079] font-bold">
                3. Customization:
              </span>
              <span className="ml-2">
                Adjust duration, toggle percentage, enable/disable animations
              </span>
            </div>
            <div>
              <span className="text-[#FFB600] font-bold">4. Callbacks:</span>
              <span className="ml-2">
                Use `onComplete` prop to handle loading completion
              </span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900 rounded border-2 border-gray-700">
            <code className="text-green-400 text-sm">
              {`<LoadingScreen 
  onComplete={() => console.log('Done!')}
  duration={3000}
  showPercentage={true}
  enableAnimation={true}
/>`}
            </code>
          </div>
        </div>
      </div>

      {/* Loading Screen Overlay */}
      {showLoader && (
        <LoadingScreen
          onComplete={handleComplete}
          duration={duration}
          showPercentage={showPercentage}
          enableAnimation={enableAnimation}
        />
      )}
    </div>
  );
}
