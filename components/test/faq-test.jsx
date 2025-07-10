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
  <div
    style={{
      position: "relative",
      width: "620px",
      height: "110px",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "scale(1.01) translateY(-2px)" : "scale(1)",
    }}
  >
    {/* Enhanced shadow layer with softer edges */}
    <div
      style={{
        position: "absolute",
        top: "6px",
        left: "6px",
        width: "614px",
        height: "104px",
        backgroundColor: "black",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        borderRadius: "2px",
        opacity: isOpen ? 0.8 : 0.6,
      }}
    />
    {/* Main bubble with softer hover effects */}
    <div
      style={{
        position: "relative",
        width: "620px",
        height: "110px",
        backgroundColor: isOpen ? "#FFFDF7" : "white",
        border: "3px solid black",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: isOpen
          ? "0 0 0 1px #FFB600, 0 4px 12px rgba(255, 182, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </div>
  </div>
);

const AnswerBubble = ({ children }) => (
  <div
    style={{
      position: "relative",
      width: "660px",
      minHeight: "120px",
      marginTop: "8px",
      animation: "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }}
  >
    {/* Enhanced shadow for answer with softer edges */}
    <div
      style={{
        position: "absolute",
        top: "4px",
        left: "4px",
        width: "656px",
        minHeight: "116px",
        backgroundColor: "black",
        borderRadius: "3px",
        opacity: 0.7,
      }}
    />
    <div
      style={{
        position: "relative",
        width: "660px",
        minHeight: "120px",
        backgroundColor: "#FFB600",
        border: "3px solid black",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        fontSize: "19px",
        lineHeight: "1.7",
        fontWeight: "400",
        boxShadow:
          "inset 0 1px 3px rgba(0,0,0,0.08), 0 2px 12px rgba(255, 182, 0, 0.2)",
      }}
    >
      {children}
    </div>
  </div>
);

const ArrowIcon = ({ isOpen }) => (
  <div
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "black",
      borderRadius: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    {/* Single triangle that rotates smoothly */}
    <div
      style={{
        width: "0",
        height: "0",
        borderLeft: "9px solid transparent",
        borderRight: "9px solid transparent",
        borderTop: "12px solid #FFB600",
        transition: "all 0.3s ease",
        filter: "drop-shadow(0 1px 2px rgba(255, 182, 0, 0.3))",
      }}
    />
  </div>
);

// --- Rounded FAQ Components ---

const RoundedQuestionBubble = ({ children, isOpen }) => (
  <div
    style={{
      position: "relative",
      width: "620px",
      height: "110px",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "scale(1.01) translateY(-2px)" : "scale(1)",
    }}
  >
    {/* Rounded shadow layer */}
    <div
      style={{
        position: "absolute",
        top: "6px",
        left: "6px",
        width: "614px",
        height: "104px",
        backgroundColor: "black",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        borderRadius: "25px",
        opacity: isOpen ? 0.8 : 0.6,
      }}
    />
    {/* Main rounded bubble */}
    <div
      style={{
        position: "relative",
        width: "620px",
        height: "110px",
        backgroundColor: isOpen ? "#FFFDF7" : "white",
        border: "3px solid black",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: isOpen
          ? "0 0 0 1px #FFB600, 0 4px 12px rgba(255, 182, 0, 0.15)"
          : "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </div>
  </div>
);

const RoundedAnswerBubble = ({ children }) => (
  <div
    style={{
      position: "relative",
      width: "660px",
      minHeight: "120px",
      marginTop: "8px",
      animation: "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }}
  >
    {/* Rounded shadow for answer */}
    <div
      style={{
        position: "absolute",
        top: "4px",
        left: "4px",
        width: "656px",
        minHeight: "116px",
        backgroundColor: "black",
        borderRadius: "20px",
        opacity: 0.7,
      }}
    />
    <div
      style={{
        position: "relative",
        width: "660px",
        minHeight: "120px",
        backgroundColor: "#FFB600",
        border: "3px solid black",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        fontSize: "19px",
        lineHeight: "1.7",
        fontWeight: "400",
        boxShadow:
          "inset 0 1px 3px rgba(0,0,0,0.08), 0 2px 12px rgba(255, 182, 0, 0.2)",
      }}
    >
      {children}
    </div>
  </div>
);

const RoundedArrowIcon = ({ isOpen }) => (
  <div
    style={{
      width: "50px",
      height: "50px",
      backgroundColor: "black",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    }}
  >
    {/* Single triangle that rotates smoothly */}
    <div
      style={{
        width: "0",
        height: "0",
        borderLeft: "9px solid transparent",
        borderRight: "9px solid transparent",
        borderTop: "12px solid #FFB600",
        transition: "all 0.3s ease",
        filter: "drop-shadow(0 1px 2px rgba(255, 182, 0, 0.3))",
      }}
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
      className="w-full py-20"
      style={{
        backgroundColor: "#F7F4E9",
        backgroundImage:
          "radial-gradient(circle at 30% 40%, rgba(255, 182, 0, 0.03) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255, 182, 0, 0.02) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto" style={{ width: "1100px", maxWidth: "95vw" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h1
            className="font-bold mb-8"
            style={{
              fontSize: "72px",
              fontFamily: "var(--font-oswald)",
              color: "#000000",
              lineHeight: "1.1",
              textShadow: "2px 2px 0px rgba(0,0,0,0.06)",
              transition: "all 0.3s ease",
            }}
          >
            More questions?
            <br />
            <span
              style={{
                color: "#FFB600",
                filter: "drop-shadow(0 2px 4px rgba(255, 182, 0, 0.2))",
              }}
            >
              More answers.
            </span>
          </h1>
          <div
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "#FFB600",
              margin: "0 auto",
              borderRadius: "50px",
              boxShadow: "0 2px 8px rgba(255, 182, 0, 0.3)",
              animation: "gentlePulse 3s infinite",
            }}
          />
        </div>

        <div className="flex flex-col gap-8">
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
              {/* Question (Sender) */}
              <div className="flex justify-start">
                <button
                  onClick={() => handleToggle(index)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "none",
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
                    <div className="flex items-center justify-between h-full w-full gap-6">
                      <span
                        className="font-bold text-left"
                        style={{
                          fontFamily: "var(--font-oswald)",
                          fontSize: "25px",
                          color: openIndex === index ? "#444" : "#000",
                          transition: "all 0.4s ease",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {faq.question}
                      </span>
                      <RoundedArrowIcon isOpen={openIndex === index} />
                    </div>
                  </RoundedQuestionBubble>
                </button>
              </div>

              {/* Answer (Receiver) with gentle animation */}
              {openIndex === index && (
                <div
                  className="flex justify-end"
                  style={{
                    animation:
                      "gentleSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    opacity: 1,
                  }}
                >
                  <RoundedAnswerBubble>
                    <p style={{ margin: 0, color: "#2c2c2c" }}>{faq.answer}</p>
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
        className="w-full py-20"
        style={{
          backgroundColor: "#F7F4E9",
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255, 182, 0, 0.03) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255, 182, 0, 0.02) 0%, transparent 60%)",
        }}
      >
        <div className="mx-auto" style={{ width: "1100px", maxWidth: "95vw" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <h1
              className="font-bold mb-8"
              style={{
                fontSize: "72px",
                fontFamily: "var(--font-oswald)",
                color: "#000000",
                lineHeight: "1.1",
                textShadow: "2px 2px 0px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
            >
              You ask,
              <br />
              <span
                style={{
                  color: "#FFB600",
                  filter: "drop-shadow(0 2px 4px rgba(255, 182, 0, 0.2))",
                }}
              >
                we answer.
              </span>
            </h1>
            <div
              style={{
                width: "100px",
                height: "3px",
                backgroundColor: "#FFB600",
                margin: "0 auto",
                borderRadius: "3px",
                boxShadow: "0 2px 8px rgba(255, 182, 0, 0.3)",
                animation: "gentlePulse 3s infinite",
              }}
            />
          </div>

          <div className="flex flex-col gap-8">
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
                {/* Question (Sender) */}
                <div className="flex justify-start">
                  <button
                    onClick={() => handleToggle(index)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      outline: "none",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                    aria-expanded={openIndex === index}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-1px) scale(1.005)";
                      e.currentTarget.style.filter = "brightness(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.filter = "brightness(1)";
                    }}
                  >
                    <QuestionBubble isOpen={openIndex === index}>
                      <div className="flex items-center justify-between h-full w-full gap-6">
                        <span
                          className="font-bold text-left"
                          style={{
                            fontFamily: "var(--font-oswald)",
                            fontSize: "25px",
                            color: openIndex === index ? "#444" : "#000",
                            transition: "all 0.4s ease",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {faq.question}
                        </span>
                        <ArrowIcon isOpen={openIndex === index} />
                      </div>
                    </QuestionBubble>
                  </button>
                </div>

                {/* Answer (Receiver) with gentle animation */}
                {openIndex === index && (
                  <div
                    className="flex justify-end"
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
