"use client";

export default function HeroTest() {
  return (
    <section className="w-full" style={{ backgroundColor: "#DE6A48" }}>
      <div
        className="mx-8 border border-gray-200"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="grid grid-cols-12 gap-0">
          {/* Empty column for centering */}
          <div className="col-span-1"></div>
          {/* Left Side - Text Content (60%) */}
          <div className="col-span-5 flex flex-col justify-start pl-6 pr-0 pt-12 pb-8">
            {/* Destiny Tagline */}
            <div className="mb-8">
              <div
                className="inline-block px-3 py-2 text-white font-bold text-sm"
                style={{ backgroundColor: "#000000" }}
              >
                DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
              </div>
            </div>

            {/* Main Headlines */}
            <div className="mb-8">
              {/* WRONG TURN */}
              <div className="relative inline-block mb-4">
                {/* Black shadow text */}
                <h1
                  className="absolute font-bold leading-none translate-x-1 translate-y-1"
                  style={{
                    fontSize: "100px",
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
                    fontSize: "100px",
                    color: "#5a0079",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  WRONG TURN,
                </h1>
              </div>

              {/* RIGHT PLACE */}
              <div className="relative inline-block">
                {/* Black shadow text */}
                <h1
                  className="absolute font-bold leading-none translate-x-1 translate-y-1"
                  style={{
                    fontSize: "100px",
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
                    fontSize: "100px",
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
            <div className="mb-8 max-w-md">
              <p
                className="text-lg leading-relaxed"
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
                className="absolute px-4 py-2 font-bold text-lg border-2 translate-x-1 translate-y-1 cursor-pointer"
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
                className="relative px-4 py-2 font-bold text-black border-2 border-black text-lg hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-1 active:translate-y-1"
                style={{
                  backgroundColor: "#FFB600",
                  fontFamily: "var(--font-oswald)",
                }}
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
              </button>
            </div>
          </div>

          {/* Right Side - Images (40%) */}
          <div className="col-span-5 relative flex items-center justify-center pl-0 pr-6 py-8">
            {/* Main computer image */}
            <div className="relative z-10">
              <img
                src="/landing-page/hero-image.png"
                alt="Retro computer setup"
                className="w-full h-auto max-w-none"
                style={{ transform: "scale(1.2)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
