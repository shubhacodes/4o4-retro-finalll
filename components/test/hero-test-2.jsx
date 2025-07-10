"use client";

export default function HeroTest2() {
  return (
    <section className="w-full" style={{ backgroundColor: "#fbf8f3" }}>
      <div
        className="mx-8 border border-gray-200"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="min-h-screen flex items-center justify-center py-12">
          {/* Browser Window Container */}
          <div className="relative w-full max-w-7xl">
            {/* Browser Window Frame */}
            <div className="bg-white rounded-t-lg border-2 border-black shadow-lg">
              {/* Browser Header */}
              <div
                className="flex items-center justify-between px-4 py-3 rounded-t-lg border-b-2 border-black"
                style={{ backgroundColor: "#90b6aa" }}
              >
                {/* Browser Buttons */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full border border-black"></div>
                  <div
                    className="w-3 h-3 rounded-full border border-black"
                    style={{ backgroundColor: "#f3c141" }}
                  ></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
                </div>
                {/* Browser Title */}
                <div
                  className="px-3 py-1 rounded text-white font-bold text-sm border border-black"
                  style={{ backgroundColor: "#f0752f" }}
                >
                  DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
                </div>
                <div className="w-16"></div> {/* Spacer */}
              </div>

              {/* Browser Content */}
              <div
                className="p-16 text-center"
                style={{ backgroundColor: "#90b6aa" }}
              >
                {/* Main Brand Text */}
                <div className="mb-8">
                  <div className="relative inline-block mb-4">
                    {/* Black shadow text */}
                    <h1
                      className="absolute font-bold leading-none translate-x-1 translate-y-1"
                      style={{
                        fontSize: "120px",
                        color: "#5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      WRONG TURN,
                    </h1>
                    {/* Main text */}
                    <h1
                      className="relative font-bold leading-none"
                      style={{
                        fontSize: "120px",
                        color: "#f3c141",
                        WebkitTextStroke: "2px #5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      WRONG TURN,
                    </h1>
                  </div>

                  <div className="relative inline-block">
                    {/* Black shadow text */}
                    <h1
                      className="absolute font-bold leading-none translate-x-1 translate-y-1"
                      style={{
                        fontSize: "120px",
                        color: "#5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      RIGHT PLACE.
                    </h1>
                    {/* Main text */}
                    <h1
                      className="relative font-bold leading-none"
                      style={{
                        fontSize: "120px",
                        color: "#f0752f",
                        WebkitTextStroke: "2px #5a5248",
                        fontFamily: "var(--font-oswald)",
                      }}
                    >
                      RIGHT PLACE.
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-12 max-w-2xl mx-auto">
                  <p
                    className="text-2xl leading-relaxed font-medium"
                    style={{
                      color: "#fbf8f3",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    Your brand should instantly feel like it belongs even to
                    someone who finds it by accident.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="relative inline-block">
                  {/* Black shadow button */}
                  <button
                    className="absolute px-6 py-3 font-bold text-xl border-2 translate-x-1 translate-y-1 cursor-pointer"
                    style={{
                      backgroundColor: "#5a5248",
                      borderColor: "#5a5248",
                      color: "#5a5248",
                      fontFamily: "var(--font-oswald)",
                    }}
                  >
                    START THE DETOUR
                  </button>
                  {/* Main button */}
                  <button
                    className="relative px-6 py-3 font-bold text-black border-2 text-xl hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-1 active:translate-y-1"
                    style={{
                      backgroundColor: "#f0752f",
                      borderColor: "#5a5248",
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
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: "#f3c141" }}
            >
              <span className="text-white font-bold text-xl">🎨</span>
            </div>

            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-black flex items-center justify-center"
              style={{ backgroundColor: "#90b6aa" }}
            >
              <span className="text-white font-bold text-2xl">↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
