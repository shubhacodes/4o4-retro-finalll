"use client";

import useSound from "@/hooks/use-sound";

export default function Hero() {
  const { playClick } = useSound();

  const handleCTAClick = () => {
    playClick();
    // Scroll to contact section or handle CTA action
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback - could navigate to contact page or show contact form
      console.log("CTA clicked - Start the detour!");
    }
  };

  return (
    <section className="w-full" style={{ backgroundColor: "#DE6A48" }}>
      <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 min-h-[500px] sm:min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Destiny Tagline */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="inline-block px-3 sm:px-4 py-2 sm:py-3 text-white font-bold text-xs sm:text-sm tracking-wide rounded-lg"
                style={{ backgroundColor: "#000000" }}
              >
                DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-2 sm:space-y-4">
              {/* WRONG TURN */}
              <div className="relative">
                {/* Black shadow text */}
                <h1
                  className="absolute font-bold leading-none translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    color: "#000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  WRONG TURN,
                </h1>
                {/* Colored text */}
                <h1
                  className="relative font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    color: "#5a0079",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  WRONG TURN,
                </h1>
              </div>

              {/* RIGHT PLACE */}
              <div className="relative">
                {/* Black shadow text */}
                <h1
                  className="absolute font-bold leading-none translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    color: "#000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  RIGHT PLACE.
                </h1>
                {/* Colored text */}
                <h1
                  className="relative font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    color: "#00796B",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  RIGHT PLACE.
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-md sm:max-w-lg mx-auto lg:mx-0">
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: "#F7F4E9",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                Your brand should instantly feel like it belongs even to someone
                who finds it by accident.
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative inline-block mx-auto lg:mx-0">
              {/* Black shadow button */}
              <button
                className="absolute px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base lg:text-lg border-2 translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1 cursor-pointer rounded-lg"
                style={{
                  backgroundColor: "#000000",
                  borderColor: "#000000",
                  color: "#000000",
                  fontFamily: "var(--font-oswald)",
                }}
              >
                START THE DETOUR
              </button>
              {/* Main button */}
              <button
                className="relative px-4 sm:px-6 py-2 sm:py-3 font-bold text-black border-2 border-black text-sm sm:text-base lg:text-lg hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 sm:active:translate-x-1 sm:active:translate-y-1 rounded-lg"
                style={{
                  backgroundColor: "#FFB600",
                  fontFamily: "var(--font-oswald)",
                }}
                onClick={handleCTAClick}
              >
                START THE DETOUR
              </button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-2xl w-full">
              <img
                src="/landing-page/hero-image.png"
                alt="Retro computer setup"
                className="w-full h-auto scale-100 sm:scale-105 lg:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
