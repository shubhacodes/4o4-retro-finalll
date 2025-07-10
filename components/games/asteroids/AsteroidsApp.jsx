"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AsteroidsGame from "./AsteroidsGame";

export default function AsteroidsApp() {
  const router = useRouter();

  const handleBackToSite = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen p-4" style={{ backgroundColor: "#F7F4E9" }}>
      <div className="max-w-6xl mx-auto">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBackToSite}
            className="flex items-center gap-2 px-4 py-2 text-[#3f4c38] border-[3px] border-[#3f4c38] rounded-lg hover:bg-[#3f4c38] hover:text-[#F7F4E9] transition-colors font-oswald font-bold uppercase tracking-wide"
          >
            ← Back to Site
          </button>
        </div>

        {/* Game Header */}
        <header className="text-center mb-8">
          <h1
            className="font-bold text-4xl md:text-6xl lg:text-8xl text-[#3f4c38] mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            ASTEROIDS
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-[#3f4c38] opacity-75"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Your spaceship isn't broken. It's just waiting to be remixed.
          </p>
        </header>

        {/* Game Container */}
        <div className="flex justify-center">
          <AsteroidsGame />
        </div>
      </div>
    </main>
  );
}
