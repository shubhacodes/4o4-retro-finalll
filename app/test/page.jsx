import Hero from "@/components/sharp/hero";
import HeroTest from "@/components/sharp/herotest";
import HeroTest2 from "@/components/sharp/hero-test-2";
import Services from "@/components/sharp/services";
import ServiceTest from "@/components/sharp/servicetest";
import AboutTest from "@/components/sharp/about-test";
import WorkShowcaseTest from "@/components/sharp/workshowcase-test";
import ProcessTest from "@/components/sharp/process-test";
import TestimonialsTest from "@/components/sharp/testimonials-test";
import PricingTest from "@/components/sharp/pricing-test";
import FAQTest from "@/components/sharp/faq-test";
import CTATest from "@/components/sharp/cta-test";
import BrowserTabsTest from "@/components/sharp/browser-tabs-test";

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HeroTest />
      <HeroTest2 />
      <Services />
      <ServiceTest />
      <AboutTest />
      <WorkShowcaseTest />
      <ProcessTest />
      <TestimonialsTest />
      <PricingTest />
      <FAQTest />
      <CTATest />
      <BrowserTabsTest />
    </div>
  );
}
