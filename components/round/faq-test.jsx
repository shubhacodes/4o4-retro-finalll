"use client";
import React, { useState } from "react";

// --- Data for the FAQ section ---
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in branding, web design, content creation, social media management, and creative strategy. Basically, if it needs a creative touch, we're your people!",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines can vary depending on the scope, but a typical website project takes about 6-8 weeks from kickoff to launch. We'll provide a detailed schedule once we've defined the project goals.",
  },
  {
    question: "How do you ensure the work matches my vision?",
    answer:
      "Our process is highly collaborative. We have key check-in points for feedback and approvals, from initial concepts to final designs, to ensure we're aligned every step of the way.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, our proposals include a set number of revision rounds (usually two or three) at key stages. We find this strikes a good balance between refining the work and keeping the project on track.",
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer:
      "Absolutely. We love working with established brands to ensure consistency. We can also help evolve your guidelines if they need a refresh.",
  },
  {
    question: "What's the payment structure?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion, before the final assets are delivered. For larger projects, we can discuss milestone-based payments.",
  },
];

// --- Data for the Rounded FAQ section ---
const roundedFaqData = [
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love working with startups and understand the unique challenges and budget considerations. We offer flexible packages and can scale our services as you grow.",
  },
  {
    question: "Can you help with rebranding existing businesses?",
    answer:
      "Yes, rebranding is one of our specialties. We carefully analyze your current brand, understand what's working and what isn't, then create a refreshed identity that honors your history while positioning you for the future.",
  },
  {
    question: "What's included in your web design packages?",
    answer:
      "Our web design packages typically include strategy sessions, wireframing, custom design, responsive development, content management system setup, basic SEO optimization, and training on how to update your site.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer various support packages including website maintenance, content updates, hosting management, security monitoring, and performance optimization. We're here for the long haul.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We use a combination of scheduled check-ins, project management tools, and direct communication. You'll always know what's happening with your project and have multiple ways to reach us with questions or feedback.",
  },
];

// --- CSS Components for the Bubbles (No SVG) ---

const QuestionBubble = ({ children, isOpen }) => (
  <div className="flex justify-start mb-1 sm:mb-2">
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        minHeight: "60px",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: isOpen ? "scale(1.02) translateY(-2px)" : "scale(1)",
      }}
      className="w-full sm:w-auto"
    >
      {/* Enhanced shadow layer */}
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          right: "3px",
          minHeight: "57px",
          backgroundColor: "black",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          borderRadius: "4px",
          opacity: isOpen ? 0.8 : 0.6,
        }}
        className="sm:right-auto sm:w-[476px]"
      />
      {/* Main bubble */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "60px",
          backgroundColor: isOpen ? "#FFFDF7" : "white",
          border: "3px solid black",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          padding: "16px 18px",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: isOpen
            ? "0 0 0 1px #FFB600, 0 4px 12px rgba(255, 182, 0, 0.15)"
            : "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
        className="font-space-grotesk text-sm sm:text-base lg:text-lg font-medium leading-relaxed sm:w-[480px] sm:min-h-[80px] sm:p-[20px_24px]"
      >
        {children}
      </div>
    </div>
  </div>
);

const AnswerBubble = ({ children }) => (
  <div className="flex justify-end mb-3 sm:mb-4">
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "520px",
        minHeight: "70px",
        animation: "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      className="w-full sm:w-auto"
    >
      {/* Enhanced shadow for answer */}
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          right: "3px",
          minHeight: "67px",
          backgroundColor: "black",
          borderRadius: "6px",
          opacity: 0.7,
        }}
        className="sm:right-auto sm:w-[516px] sm:min-h-[86px]"
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70px",
          backgroundColor: "#FFB600",
          border: "3px solid black",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          padding: "18px 20px",
          boxShadow:
            "inset 0 1px 3px rgba(0,0,0,0.08), 0 2px 12px rgba(255, 182, 0, 0.2)",
        }}
        className="font-space-grotesk text-sm sm:text-base lg:text-lg font-normal leading-relaxed sm:w-[520px] sm:min-h-[90px] sm:p-[24px_28px]"
      >
        {children}
      </div>
    </div>
  </div>
);

const ArrowIcon = ({ isOpen }) => (
  <div
    style={{
      width: "32px",
      height: "32px",
      backgroundColor: "black",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginLeft: "12px",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
    className="sm:w-10 sm:h-10 sm:ml-4"
  >
    <div
      style={{
        width: "0",
        height: "0",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "8px solid #FFB600",
        transition: "all 0.3s ease",
        filter: "drop-shadow(0 1px 2px rgba(255, 182, 0, 0.3))",
      }}
      className="sm:border-l-[8px] sm:border-r-[8px] sm:border-t-[10px]"
    />
  </div>
);

// --- Rounded FAQ Components ---

const RoundedQuestionBubble = ({ children, isOpen }) => (
  <div className="flex justify-start mb-1 sm:mb-2">
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        minHeight: "55px",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: isOpen ? "scale(1.02) translateY(-2px)" : "scale(1)",
      }}
      className="w-full sm:w-auto"
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          right: "3px",
          minHeight: "52px",
          backgroundColor: "black",
          borderRadius: "16px",
          opacity: 0.6,
        }}
        className="sm:right-auto sm:w-[416px] sm:min-h-[66px] sm:rounded-[20px]"
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "55px",
          backgroundColor: isOpen ? "#FFFDF7" : "white",
          border: "3px solid black",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "14px 16px",
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: isOpen
            ? "0 0 0 1px #FFB600, 0 4px 12px rgba(255, 182, 0, 0.15)"
            : "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
        className="font-space-grotesk text-sm sm:text-base lg:text-lg font-medium leading-relaxed sm:w-[420px] sm:min-h-[70px] sm:rounded-[24px] sm:p-[18px_22px]"
      >
        {children}
      </div>
    </div>
  </div>
);

const RoundedAnswerBubble = ({ children }) => (
  <div className="flex justify-end mb-3 sm:mb-4">
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        minHeight: "65px",
        animation: "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      className="w-full sm:w-auto"
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          right: "3px",
          minHeight: "62px",
          backgroundColor: "black",
          borderRadius: "16px",
          opacity: 0.7,
        }}
        className="sm:right-auto sm:w-[456px] sm:min-h-[76px] sm:rounded-[20px]"
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "65px",
          backgroundColor: "#FFB600",
          border: "3px solid black",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "16px 18px",
          boxShadow:
            "inset 0 1px 3px rgba(0,0,0,0.08), 0 2px 12px rgba(255, 182, 0, 0.2)",
        }}
        className="font-space-grotesk text-sm sm:text-base lg:text-lg font-normal leading-relaxed sm:w-[460px] sm:min-h-[80px] sm:rounded-[24px] sm:p-[22px_26px]"
      >
        {children}
      </div>
    </div>
  </div>
);

const RoundedArrowIcon = ({ isOpen }) => (
  <div
    style={{
      width: "28px",
      height: "28px",
      backgroundColor: "black",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginLeft: "10px",
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
    className="sm:w-9 sm:h-9 sm:rounded-[18px] sm:ml-[14px]"
  >
    <div
      style={{
        width: "0",
        height: "0",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "7px solid #FFB600",
        transition: "all 0.3s ease",
      }}
      className="sm:border-l-[7px] sm:border-r-[7px] sm:border-t-[9px]"
    />
  </div>
);

// --- Rounded FAQ Section Component ---
const RoundedFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-8 sm:py-12 lg:py-20"
      style={{
        backgroundColor: "#F7F4E9",
        backgroundImage:
          "radial-gradient(circle at 30% 40%, rgba(255, 182, 0, 0.03) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255, 182, 0, 0.02) 0%, transparent 60%)",
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1100px" }}
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-[70px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 lg:mb-5 font-oswald">
            FAQS
          </h1>
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "#FFB600",
              margin: "0 auto",
              borderRadius: "50px",
              boxShadow: "0 2px 8px rgba(255, 182, 0, 0.3)",
              animation: "gentlePulse 3s infinite",
            }}
            className="sm:w-20 sm:h-[3px] lg:w-[100px]"
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 max-w-3xl mx-auto">
          {roundedFaqData.map((faq, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                transform:
                  openIndex === index ? "translateY(-1px)" : "translateY(0)",
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                filter:
                  openIndex === index ? "brightness(1.02)" : "brightness(1)",
              }}
            >
              {/* Question */}
              <button
                onClick={() => handleToggle(index)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  outline: "none",
                  width: "100%",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                aria-expanded={openIndex === index}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-1px) scale(1.005)";
                  e.currentTarget.style.filter = "brightness(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                <RoundedQuestionBubble isOpen={openIndex === index}>
                  <div className="flex items-center justify-between h-full w-full gap-2 sm:gap-4">
                    <span className="flex-1 text-left font-medium">
                      {faq.question}
                    </span>
                    <RoundedArrowIcon isOpen={openIndex === index} />
                  </div>
                </RoundedQuestionBubble>
              </button>

              {/* Answer with gentle animation */}
              {openIndex === index && (
                <div
                  style={{
                    animation:
                      "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    opacity: 1,
                  }}
                >
                  <RoundedAnswerBubble>
                    <p
                      style={{
                        margin: 0,
                        color: "#2c2c2c",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </RoundedAnswerBubble>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main FAQ Component ---
export default function FAQTest() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes gentleSlideIn {
          from {
            opacity: 0;
            transform: translateX(15px) translateY(-5px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        @keyframes gentlePulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 182, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 182, 0, 0);
          }
        }
      `}</style>
      <section
        className="w-full py-8 sm:py-10 lg:py-12"
        style={{
          backgroundColor: "#F7F4E9",
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255, 182, 0, 0.03) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255, 182, 0, 0.02) 0%, transparent 60%)",
        }}
      >
        <div
          className="mx-auto px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: "1100px" }}
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-[70px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 lg:mb-5 font-oswald">
              FAQS
            </h1>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#FFB600",
                margin: "0 auto",
                borderRadius: "50px",
                boxShadow: "0 2px 8px rgba(255, 182, 0, 0.3)",
                animation: "gentlePulse 3s infinite",
              }}
              className="sm:w-20 sm:h-[3px] lg:w-[100px]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="w-full"
                style={{
                  transform:
                    openIndex === index ? "translateY(-1px)" : "translateY(0)",
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  filter:
                    openIndex === index ? "brightness(1.02)" : "brightness(1)",
                }}
              >
                {/* Question */}
                <button
                  onClick={() => handleToggle(index)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "none",
                    width: "100%",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  aria-expanded={openIndex === index}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-1px) scale(1.005)";
                    e.currentTarget.style.filter = "brightness(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  <QuestionBubble isOpen={openIndex === index}>
                    <div className="flex items-center justify-between h-full w-full gap-2 sm:gap-4">
                      <span className="flex-1 text-left font-medium">
                        {faq.question}
                      </span>
                      <ArrowIcon isOpen={openIndex === index} />
                    </div>
                  </QuestionBubble>
                </button>

                {/* Answer with gentle animation */}
                {openIndex === index && (
                  <div
                    style={{
                      animation:
                        "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      opacity: 1,
                    }}
                  >
                    <AnswerBubble>
                      <p style={{ margin: 0, color: "#2c2c2c" }}>
                        {faq.answer}
                      </p>
                    </AnswerBubble>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FAQTestSoft() {
  return (
    <>
      <style jsx>{`
        @keyframes gentleSlideIn {
          from {
            opacity: 0;
            transform: translateX(15px) translateY(-5px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        @keyframes gentlePulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 182, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 182, 0, 0);
          }
        }
      `}</style>
      <RoundedFAQSection />
    </>
  );
}
