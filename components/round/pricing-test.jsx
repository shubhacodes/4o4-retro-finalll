"use client";
import React, { useState } from "react";
import { StandardCTAButton } from "./cta-test";

export default function PricingTest() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = [
    {
      name: "Starter Boost",
      monthlyPrice: "149",
      yearlyPrice: "1499",
      description: "Perfect for small businesses just getting started.",
      features: [
        "Basic website maintenance",
        "Social media setup (2 platforms)",
        "Monthly performance report",
        "Email support",
      ],
      buttonColor: "#FFB600", // Reverted to original yellow
      cardBg: "white",
      popular: false,
    },
    {
      name: "Marketing Momentum",
      monthlyPrice: "299",
      yearlyPrice: "2999",
      description: "Ideal for growing businesses ready to accelerate.",
      features: [
        "Everything in Starter Boost",
        "Social media management (3 platforms)",
        "12 posts per month",
        "Monthly email campaigns (3)",
        "2 blog articles monthly",
      ],
      buttonColor: "#FFB600", // Reverted to original yellow
      cardBg: "#f87a30", // Keeping new orange
      popular: true,
    },
    {
      name: "Enterprise Elite",
      monthlyPrice: "599",
      yearlyPrice: "5999",
      description: "Comprehensive solution for established businesses.",
      features: [
        "Everything in Marketing Momentum",
        "Social media management (5 platforms)",
        "20 posts per month",
        "Weekly email campaigns",
        "4 blog articles monthly",
        "Dedicated account manager",
      ],
      buttonColor: "#FFB600", // Reverted to original yellow
      cardBg: "white",
      popular: false,
    },
  ];

  return (
    <section
      className="w-full py-8 sm:py-10 lg:py-20"
      style={{ backgroundColor: "#8abdb3" }}
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="font-bold mb-3 sm:mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-4xl font-oswald text-[#3f4c38]">
            CHOOSE YOUR PLAN
          </h1>
          <p className="text-base sm:text-lg font-space-grotesk text-[#3f4c38] max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8 px-4">
            Everything you need to build a brand that stands out from the crowd.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="bg-white border-2 border-black rounded-lg p-0.5 flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 font-bold font-oswald transition-all duration-200 rounded-md text-xs sm:text-sm ${
                  billingCycle === "monthly"
                    ? "bg-[#FFB600] text-black"
                    : "bg-transparent text-[#3f4c38] hover:bg-white"
                }`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 font-bold font-oswald transition-all duration-200 rounded-md text-xs sm:text-sm ${
                  billingCycle === "yearly"
                    ? "bg-[#FFB600] text-black"
                    : "bg-transparent text-[#3f4c38] hover:bg-white"
                }`}
              >
                YEARLY
              </button>
            </div>
          </div>
          {billingCycle === "yearly" && (
            <p className="text-[#3f4c38] font-bold mt-2 sm:mt-3 font-space-grotesk text-xs sm:text-sm">
              Save up to 25% with yearly billing!
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-12">
          {pricingData.map((plan, index) => (
            <div key={plan.name} className="relative">
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 lg:-top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#FFB600] border-2 border-black rounded-lg px-2 sm:px-3 lg:px-4 py-1 sm:py-1 lg:py-2">
                    <span className="font-bold font-oswald text-black text-xs sm:text-xs lg:text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`border-2 border-black rounded-lg p-3 sm:p-4 lg:p-8 h-full flex flex-col ${
                  plan.popular ? "lg:transform lg:scale-105" : ""
                }`}
                style={{ backgroundColor: plan.cardBg }}
              >
                {/* Header */}
                <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl font-oswald mb-2 sm:mb-3 lg:mb-4 text-[#3f4c38]">
                    {plan.name}
                  </h3>
                  <div className="mb-3 sm:mb-4 lg:mb-5">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-oswald text-[#3f4c38]">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-space-grotesk text-[#3f4c38]">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  <p className="font-space-grotesk text-xs sm:text-sm lg:text-lg leading-relaxed text-[#3f4c38]">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-4 sm:mb-6 lg:mb-8">
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#ffc943] border border-black flex-shrink-0 mt-0.5 mr-2 sm:mr-2 lg:mr-3" />
                        <span className="font-space-grotesk text-xs sm:text-sm lg:text-lg text-[#3f4c38] leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="w-full flex justify-center">
                  <StandardCTAButton
                    size="small"
                    rounded={true}
                    onClick={() => console.log(`Selected ${plan.name} plan`)}
                  >
                    GET STARTED
                  </StandardCTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm sm:text-base lg:text-lg font-space-grotesk text-[#3f4c38] mb-3 sm:mb-4 px-4">
            Need a custom solution? Let's talk about your specific needs.
          </p>
          <StandardCTAButton
            size="medium"
            rounded={true}
            onClick={() => console.log("Contact Us clicked")}
          >
            CONTACT US
          </StandardCTAButton>
        </div>
      </div>
    </section>
  );
}
