"use client";

import { StandardCTAButton } from "./cta-test";

export default function Hero() {
  return (
    <section className="w-full" style={{ backgroundColor: "#231F20" }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="min-h-screen flex items-center justify-center py-6 sm:py-8 lg:py-12">
          {/* Browser Window Container */}
          <div className="relative w-full max-w-6xl">
            {/* Browser Window Frame */}
            <div className="bg-[#FAF9F5] rounded-t-lg border-2 border-black">
              {/* Browser Header */}
              <div
                className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 rounded-t-lg border-b-2 border-black"
                style={{ backgroundColor: "#231F20" }}
              >
                {/* Browser Buttons */}
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full border border-black"></div>
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-black"
                    style={{ backgroundColor: "#FFB600" }}
                  ></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border border-black"></div>
                </div>
                {/* Browser Title */}
                <div
                  className="px-2 sm:px-3 py-1 rounded text-[#FAF9F5] font-bold text-xs sm:text-sm border border-black hidden sm:block"
                  style={{ backgroundColor: "#DB5029" }}
                >
                  DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
                </div>
                <div className="w-8 sm:w-16"></div> {/* Spacer */}
              </div>

              {/* Browser Content */}
              <div
                className="p-4 sm:p-8 lg:p-16 text-center"
                style={{ backgroundColor: "#231F20" }}
              >
                {/* Main Brand Text */}
                <div className="mb-6 sm:mb-8">
                  <div className="mb-2 sm:mb-4">
                    {/* Main text */}
                    <h1
                      className="font-bold leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                      style={{
                        color: "#FFB600",
                        WebkitTextStroke: "0.5px #5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      WRONG TURN,
                    </h1>
                  </div>

                  <div>
                    {/* Main text */}
                    <h1
                      className="font-bold leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                      style={{
                        color: "#DB5029",
                        WebkitTextStroke: "0.5px #5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      RIGHT PLACE.
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
                  <p
                    className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium"
                    style={{
                      color: "#FAF9F5",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    Your brand should instantly feel like it belongs even to
                    someone who finds it by accident.
                  </p>
                </div>

                {/* CTA Button */}
                <StandardCTAButton
                  size="large"
                  rounded={false}
                  onClick={() => {
                    // Scroll to contact section or handle CTA action
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      // Fallback - could navigate to contact page or show contact form
                      console.log("CTA clicked - Start the detour!");
                    }
                  }}
                >
                  START THE DETOUR
                </StandardCTAButton>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: "#FFB600" }}
            >
              <span className="text-white font-bold text-sm sm:text-xl">
                ⚡
              </span>
            </div>

            <div
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: "#231F20" }}
            >
              <span className="text-white font-bold text-lg sm:text-2xl">
                ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
