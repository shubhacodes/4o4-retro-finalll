"use client";
import React, { useState } from "react";
import { StandardCTAButton } from "./cta-test";
import useSound from "@/hooks/use-sound";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PricingTest() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const { playClick } = useSound();

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
      buttonColor: "#FFB600",
      cardBg: "#FAF9F5",
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
      buttonColor: "#FFB600",
      cardBg: "#DB5029",
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
      buttonColor: "#FFB600",
      cardBg: "#FAF9F5",
      popular: false,
    },
  ];

  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-24"
      style={{ backgroundColor: "#231F20" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-16">
          <SectionHeader
            mainHeading="Good work costs, great work pays."
            subLabel="Pricing"
            className="mb-4 sm:mb-6 lg:mb-8"
            onDarkBackground={true}
            pillPosition="section-boundary"
          />

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="bg-[#FAF9F5] border-2 border-black rounded-lg p-0.5 flex">
              <button
                onClick={() => {
                  playClick();
                  setBillingCycle("monthly");
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 font-bold font-oswald transition-all duration-200 rounded-md text-base sm:text-lg ${
                  billingCycle === "monthly"
                    ? "bg-[#FFB600] text-black"
                    : "bg-transparent text-[#3f4c38] hover:bg-[#FAF9F5]"
                }`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => {
                  playClick();
                  setBillingCycle("yearly");
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 font-bold font-oswald transition-all duration-200 rounded-md text-base sm:text-lg ${
                  billingCycle === "yearly"
                    ? "bg-[#FFB600] text-black"
                    : "bg-transparent text-[#3f4c38] hover:bg-[#FAF9F5]"
                }`}
              >
                YEARLY
              </button>
            </div>
          </div>
          {billingCycle === "yearly" && (
            <p className="text-[#FAF9F5] font-bold mt-2 sm:mt-3 font-space-grotesk text-base sm:text-lg">
              Save up to 25% with yearly billing!
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12">
          {pricingData.map((plan, index) => (
            <div
              key={plan.name}
              className="relative max-w-sm mx-auto lg:max-w-none"
            >
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
                className={`border-2 border-[#FAF9F5] rounded-lg p-4 sm:p-5 lg:p-8 h-full flex flex-col ${
                  plan.popular ? "lg:transform lg:scale-105" : ""
                }`}
                style={{ backgroundColor: plan.cardBg }}
              >
                {/* Header */}
                <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl font-oswald mb-2 sm:mb-3 lg:mb-4 text-[#231F20]">
                    {plan.name}
                  </h3>
                  <div className="mb-3 sm:mb-4 lg:mb-5">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-oswald text-[#231F20]">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </span>
                    <span className="text-base sm:text-lg font-space-grotesk text-[#231F20]">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  <p className="font-space-grotesk text-base sm:text-lg leading-relaxed text-[#231F20]">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-4 sm:mb-6 lg:mb-8">
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#FFB600] border border-[#231F20] flex-shrink-0 mt-0.5 mr-2 sm:mr-2 lg:mr-3" />
                        <span className="font-space-grotesk text-base sm:text-lg text-[#231F20] leading-relaxed">
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
          <p className="text-base sm:text-lg font-space-grotesk text-[#FAF9F5] mb-3 sm:mb-4 px-4">
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
