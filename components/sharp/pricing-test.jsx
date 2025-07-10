"use client";
import React, { useState, useMemo, memo } from "react";
import PropTypes from "prop-types";
import { ProcessFrame } from "./process-test.jsx";

// --- Constants for Styling and Magic Values ---
const COLORS = {
  YELLOW: "#FBBF24",
  WHITE: "white",
  BLACK: "black",
  TEAL: "#00796B",
  GRADIENT_START: "#fde047",
  GRADIENT_END: "#ef4444",
};

const STYLES = {
  BOOK_NOW_BUTTON: {
    border: "4px solid black",
    boxShadow: "6px 6px 0 #000",
    backgroundColor: COLORS.YELLOW,
    padding: "12px 32px",
    fontSize: "22px",
    fontFamily: "var(--font-oswald)",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
};

const PRICING_TOGGLE = {
  WIDTH: 250,
  HEIGHT: 50,
  SLANT_DEGREES: 11.5,
  SEPARATOR_WIDTH: 4,
  OVERLAP: 0.08, // 8% overlap to prevent anti-aliasing gaps
};

// --- Child Components (Memoized for Performance) ---

const PricingToggle = memo(({ billingCycle, setBillingCycle }) => {
  const { WIDTH, HEIGHT, SLANT_DEGREES, SEPARATOR_WIDTH, OVERLAP } =
    PRICING_TOGGLE;

  const paths = useMemo(() => {
    const slantRadians = (SLANT_DEGREES * Math.PI) / 180;
    const slantX = (HEIGHT / 2) * Math.tan(slantRadians);
    const midX = WIDTH / 2;

    const monthlyClip = `polygon(0 0, ${midX + slantX} 0, ${
      midX - slantX
    } ${HEIGHT}, 0 ${HEIGHT})`;
    const yearlyClip = `polygon(${
      midX + slantX
    } 0, ${WIDTH} 0, ${WIDTH} ${HEIGHT}, ${midX - slantX} ${HEIGHT})`;
    const separatorPath = `M ${midX + slantX} 0 L ${midX - slantX} ${HEIGHT}`;

    return { monthlyClip, yearlyClip, separatorPath };
  }, [WIDTH, HEIGHT, SLANT_DEGREES]);

  const buttonStyle = useMemo(
    () => ({
      flex: 1,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: COLORS.BLACK,
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "var(--font-inter), sans-serif",
      zIndex: 2,
    }),
    []
  );

  return (
    <div
      role="group"
      aria-label="Billing cycle toggle"
      style={{
        position: "relative",
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        margin: "20px 0",
      }}
    >
      <div // Visual container
        style={{
          position: "absolute",
          inset: 0,
          border: `3px solid ${COLORS.BLACK}`,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor:
              billingCycle === "monthly" ? COLORS.YELLOW : COLORS.WHITE,
            clipPath: paths.monthlyClip,
          }}
        />
        <div
          style={{
            flex: 1,
            backgroundColor:
              billingCycle === "yearly" ? COLORS.YELLOW : COLORS.WHITE,
            clipPath: paths.yearlyClip,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: `${SEPARATOR_WIDTH}px`,
            height: "100%",
            backgroundColor: COLORS.BLACK,
            transform: `translateX(-50%) rotate(${SLANT_DEGREES}deg)`,
            zIndex: 1,
          }}
        />
      </div>
      <div // Clickable container
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
        }}
      >
        <button
          onClick={() => setBillingCycle("monthly")}
          aria-pressed={billingCycle === "monthly"}
          style={buttonStyle}
        >
          monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          aria-pressed={billingCycle === "yearly"}
          style={buttonStyle}
        >
          yearly
        </button>
      </div>
    </div>
  );
});

PricingToggle.propTypes = {
  billingCycle: PropTypes.oneOf(["monthly", "yearly"]).isRequired,
  setBillingCycle: PropTypes.func.isRequired,
};
PricingToggle.displayName = "PricingToggle";

const BestOfferBadge = memo(() => (
  <div style={{ position: "absolute", top: -45, left: -70, zIndex: 2 }}>
    <svg
      height="140"
      width="240"
      fill="none"
      viewBox="0 0 320 186"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M187.694 42.8321L188.179 43.0341L188.685 42.8902L245.052 26.7685L245.552 53.4846L245.578 54.8774L246.968 54.9548L299.613 57.8719L264.154 82.6843L262.446 83.8787L264.121 85.1185L290.513 104.648L233.435 117.1L232.673 117.266L232.372 117.986L220.345 146.701L168.101 139.714L167.643 139.653L167.23 139.859L120.102 163.467L99.3868 140.228L98.8676 139.645L98.0927 139.736L40.0686 146.535L58.6702 119.481L59.8503 117.763L57.8473 117.189L16.2431 105.266L65.0745 85.3768L66.3639 84.8512L65.9353 83.5258L57.7135 58.1011L116.259 55.0035L116.784 54.9751L117.178 54.6262L148.73 26.574L187.694 42.8321Z"
        fill={COLORS.TEAL}
        stroke={COLORS.BLACK}
        strokeWidth="3"
      />
      <text
        x="160"
        y="95"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={COLORS.WHITE}
        fontSize="34"
        fontWeight="bold"
        transform="rotate(-20 160 93)"
        fontFamily="var(--font-oswald)"
      >
        BEST OFFER
      </text>
    </svg>
  </div>
));
BestOfferBadge.displayName = "BestOfferBadge";

const BrandBuilderCard = memo(() => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const { price, period } = useMemo(() => {
    switch (billingCycle) {
      case "yearly":
        return { price: "9999", period: "/year" };
      case "monthly":
      default:
        return { price: "999", period: "/month" };
    }
  }, [billingCycle]);

  return (
    <div className="flex w-full items-stretch">
      <div className="w-3/5 pr-12 flex flex-col justify-center items-start">
        <h2
          id="brand-builder-title"
          className="font-bold mb-6"
          style={{ fontSize: "48px", fontFamily: "var(--font-oswald)" }}
        >
          Brand Builder Pro Max
        </h2>
        <p className="mb-8" style={{ fontSize: "20px", lineHeight: "1.7" }}>
          We handle regular website updates and maintenance, along with security
          monitoring to catch bugs before they become problems. Our team ensures
          your site runs at peak performance and stays up to date with plugin
          and theme enhancements.
        </p>
        <div className="relative inline-block">
          {/* Black shadow button */}
          <button
            className="absolute px-4 py-2 font-bold text-xl border-2 translate-x-1 translate-y-1 cursor-pointer"
            style={{
              backgroundColor: "#000000",
              borderColor: "#000000",
              color: "#000000",
              fontFamily: "var(--font-oswald)",
            }}
          >
            BOOK NOW
          </button>
          {/* Main button */}
          <button
            className="relative px-4 py-2 font-bold text-black border-2 border-black text-xl hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-1 active:translate-y-1"
            style={{
              backgroundColor: "#FFB600",
              fontFamily: "var(--font-oswald)",
            }}
            onClick={() => {
              console.log("Book Now clicked - Brand Builder Pro Max!");
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div
        className="w-2/5 p-12 flex flex-col relative"
        style={{
          border: `3px solid ${COLORS.BLACK}`,
          background: `radial-gradient(circle at top left, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
        }}
      >
        <BestOfferBadge />
        <div
          className="font-bold relative"
          style={{
            fontSize: "90px",
            fontFamily: "var(--font-oswald)",
            lineHeight: "1",
            color: COLORS.BLACK,
          }}
        >
          ${price}
          <span
            className="text-3xl"
            style={{
              position: "absolute",
              top: "0.2em",
              fontWeight: "normal",
            }}
          >
            {period}
          </span>
        </div>
        <PricingToggle
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
        <p className="text-lg mb-6">Save up to 30% by paying yearly.</p>
        <hr
          className="border-t-4 border-black mb-6"
          style={{ width: "100%" }}
        />
        <p className="text-xl leading-relaxed">
          This pack is ideal for businesses focused on long-term growth through
          consistent visibility.
        </p>
      </div>
    </div>
  );
});
BrandBuilderCard.displayName = "BrandBuilderCard";

const MarketingMomentumCard = memo(() => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const { price, period } = useMemo(() => {
    switch (billingCycle) {
      case "yearly":
        return { price: "2999", period: "/year" };
      case "monthly":
      default:
        return { price: "299", period: "/month" };
    }
  }, [billingCycle]);

  return (
    <div className="flex w-full items-stretch">
      <div className="w-3/5 pr-12 flex flex-col justify-center items-start">
        <h2
          id="marketing-momentum-title"
          className="font-bold mb-6"
          style={{
            fontSize: "48px",
            fontFamily: "var(--font-oswald)",
          }}
        >
          Marketing Momentum
        </h2>
        <p className="mb-8" style={{ fontSize: "20px", lineHeight: "1.7" }}>
          We offer end-to-end digital support including social media management
          across three platforms with up to twelve posts per month, and monthly
          email campaigns with a cap of three. Our team creates two blog
          articles each month and provides a basic analytics report with
          actionable insights.
        </p>
        <div className="relative inline-block">
          {/* Black shadow button */}
          <button
            className="absolute px-4 py-2 font-bold text-xl border-2 translate-x-1 translate-y-1 cursor-pointer"
            style={{
              backgroundColor: "#000000",
              borderColor: "#000000",
              color: "#000000",
              fontFamily: "var(--font-oswald)",
            }}
          >
            BOOK NOW
          </button>
          {/* Main button */}
          <button
            className="relative px-4 py-2 font-bold text-black border-2 border-black text-xl hover:transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer active:translate-x-1 active:translate-y-1"
            style={{
              backgroundColor: "#FFB600",
              fontFamily: "var(--font-oswald)",
            }}
            onClick={() => {
              console.log("Book Now clicked - Marketing Momentum!");
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      <div
        className="w-2/5 p-12 flex flex-col"
        style={{
          backgroundColor: "#DE6A48",
          border: `3px solid ${COLORS.BLACK}`,
        }}
      >
        <div
          className="font-bold relative"
          style={{
            fontSize: "90px",
            fontFamily: "var(--font-oswald)",
            lineHeight: "1",
          }}
        >
          ${price}
          <span
            className="text-3xl"
            style={{
              position: "absolute",
              top: "0.2em",
              fontWeight: "normal",
            }}
          >
            {period}
          </span>
        </div>
        <PricingToggle
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
        <p className="text-lg mb-6">Save up to 30% by paying yearly.</p>
        <hr
          className="border-t-4 border-black mb-6"
          style={{ width: "100%" }}
        />
        <p className="text-xl leading-relaxed">
          Ideal for small to medium-sized businesses, this plan is to help you
          build and maintain a strong online presence.
        </p>
      </div>
    </div>
  );
});
MarketingMomentumCard.displayName = "MarketingMomentumCard";

export default function PricingTest() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F7F4E9" }}>
      <div
        className="mx-auto"
        style={{
          width: "1150px",
          maxWidth: "95vw",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 pt-8 pb-4">
          <h1
            className="font-bold mb-12 text-center"
            style={{
              fontSize: "70px",
              fontFamily: "var(--font-oswald)",
              color: COLORS.BLACK,
            }}
          >
            Pricing Section
          </h1>
          <p className="mb-12 text-xl">
            Flexible plans for teams of all sizes.
          </p>

          <div className="w-full flex flex-col items-center gap-12">
            <article aria-labelledby="marketing-momentum-title">
              <ProcessFrame>
                <MarketingMomentumCard />
              </ProcessFrame>
            </article>

            <article aria-labelledby="brand-builder-title">
              <ProcessFrame>
                <BrandBuilderCard />
              </ProcessFrame>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
