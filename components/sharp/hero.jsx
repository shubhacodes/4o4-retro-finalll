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
      <div className="mx-auto max-w-[1150px] px-8 py-16">
        <div className="flex items-center gap-12 min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Destiny Tagline */}
            <div>
              <div
                className="inline-block px-4 py-3 text-white font-bold text-sm tracking-wide rounded-lg"
                style={{ backgroundColor: "#000000" }}
              >
                DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              {/* WRONG TURN */}
              <div className="relative">
                {/* Black shadow text */}
                <h1
                  className="absolute font-bold leading-none translate-x-1 translate-y-1"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
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
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
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
                  className="absolute font-bold leading-none translate-x-1 translate-y-1"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
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
                    fontSize: "clamp(3rem, 8vw, 4.5rem)",
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
            <div className="max-w-lg">
              <p
                className="text-xl leading-relaxed"
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
            <div className="relative inline-block">
              {/* Black shadow button */}
              <button
                className="absolute px-6 py-3 font-bold text-lg border-2 translate-x-1 translate-y-1 cursor-pointer rounded-lg"
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
                className="relative px-6 py-3 font-bold text-black border-2 border-black text-lg hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-1 active:translate-y-1 rounded-lg"
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
          <div className="flex-1 flex items-center justify-center">
            <div className="relative max-w-2xl w-full">
              <img
                src="/landing-page/hero-image.png"
                alt="Retro computer setup"
                className="w-full h-auto scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
