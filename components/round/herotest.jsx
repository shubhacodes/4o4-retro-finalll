"use client";

import { StandardCTAButton } from "./cta-test";
import { useRouter } from "next/navigation";

export default function HeroTest() {
  const router = useRouter();

  return (
    <section className="w-full" style={{ backgroundColor: "#DE6A48" }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        {/* Mobile-first responsive layout - stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-0 min-h-screen lg:min-h-auto">
          {/* Empty column for centering on desktop only */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Text Content - Full width on mobile, 5 cols on desktop */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center lg:justify-start px-4 sm:px-6 lg:pl-6 lg:pr-0 py-8 sm:py-12 lg:pt-12 lg:pb-8 order-2 lg:order-1">
            {/* Destiny Tagline */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <div
                className="inline-block px-3 py-2 text-white font-bold text-xs sm:text-sm"
                style={{ backgroundColor: "#000000" }}
              >
                DESTINY DRESSES LIKE AN ERROR, SOMETIMES.
              </div>
            </div>

            {/* Main Headlines - Responsive text sizing */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              {/* WRONG TURN */}
              <div className="mb-2 sm:mb-4">
                <h1
                  className="font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 6.25rem)", // 40px to 100px
                    color: "#5a0079",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  WRONG TURN,
                </h1>
              </div>

              {/* RIGHT PLACE */}
              <div>
                <h1
                  className="font-bold leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 6.25rem)", // 40px to 100px
                    color: "#00796B",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "var(--font-oswald)",
                  }}
                >
                  RIGHT PLACE.
                </h1>
              </div>
            </div>

            {/* Description - Responsive sizing and centering on mobile */}
            <div className="mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "#F7F4E9",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                Your brand should instantly feel like it belongs even to someone
                who finds it by accident.
              </p>
            </div>

            {/* CTA Button - Center on mobile */}
            <div className="flex justify-center lg:justify-start">
              <StandardCTAButton
                size="large"
                rounded={false}
                onClick={() => router.push("/contact")}
              >
                START THE DETOUR
              </StandardCTAButton>
            </div>
          </div>

          {/* Image Section - Full width on mobile, 5 cols on desktop */}
          <div className="w-full lg:col-span-5 relative flex items-center justify-center px-4 sm:px-6 lg:pl-0 lg:pr-6 py-6 sm:py-8 order-1 lg:order-2">
            {/* Main computer image - Responsive sizing */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-none">
              <img
                src="/landing-page/hero-image.png"
                alt="Retro computer setup"
                className="w-full h-auto"
                style={{
                  transform: "scale(1)",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          {/* Hidden spacing column on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
}
