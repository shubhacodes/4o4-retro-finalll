"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ServiceTest from "@/components/round/servicetest";
import { AboutTestSoft } from "@/components/round/about-test";
import WorkShowcaseTest from "@/components/round/workshowcase-test";
import { ProcessTestSoft } from "@/components/round/process-test";
import TestimonialsTest from "@/components/round/testimonials-test";
import PricingTest from "@/components/round/pricing-test";
import { FAQTestSoft } from "@/components/round/faq-test";
import { CTATestSoft } from "@/components/round/cta-test";
import Hero from "@/components/sharp/hero";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  // Show loading screen on every page load/reload
  if (showLoading) {
    return (
      <LoadingScreen
        onComplete={handleLoadingComplete}
        duration={5000}
        showPercentage={true}
        enableAnimation={true}
      />
    );
  }

  // Show main website content after loading is complete
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutTestSoft />
      <ServiceTest />
      <WorkShowcaseTest />
      <ProcessTestSoft />
      <TestimonialsTest />
      <PricingTest />
      <FAQTestSoft />
      <CTATestSoft />
    </div>
  );
}
