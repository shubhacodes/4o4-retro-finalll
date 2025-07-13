"use client";

import useSound from "@/hooks/use-sound";

export default function Hero() {
  const { playClick } = useSound();

  return (
    <section className="w-full" style={{ backgroundColor: "#231F20" }}>
      <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-6 lg:gap-12 min-h-[500px] sm:min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Destiny Tagline */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="inline-block px-3 sm:px-4 py-2 sm:py-3 text-white font-bold text-xs sm:text-sm tracking-wide rounded-lg"
                style={{ backgroundColor: "#DB5029" }}
              >
                DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-1 sm:space-y-2 lg:space-y-4">
              {/* WRONG TURN */}
              <div className="relative">
                {/* Black shadow text - Desktop only */}
                <h1
                  className="absolute font-bold leading-none hidden lg:block"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 5rem)",
                    color: "#000000",
                    fontFamily: "var(--font-oswald)",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  WRONG TURN,
                </h1>
                {/* Colored text */}
                <h1
                  className="relative font-bold leading-none"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 5rem)",
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
                {/* Black shadow text - Desktop only */}
                <h1
                  className="absolute font-bold leading-none hidden lg:block"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 5rem)",
                    color: "#000000",
                    fontFamily: "var(--font-oswald)",
                    transform: "translate(2px, 2px)",
                  }}
                >
                  RIGHT PLACE.
                </h1>
                {/* Colored text */}
                <h1
                  className="relative font-bold leading-none"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 5rem)",
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
          </div>

          {/* Right Side - Images */}
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2 mb-2 lg:mb-0">
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

      {/* Bottom Border SVG */}
      <div className="w-full overflow-hidden">
        <img
          src="/border.svg"
          alt="Border decoration"
          className="w-full h-auto block"
          style={{ display: "block", width: "100%" }}
        />
      </div>
    </section>
  );
}
