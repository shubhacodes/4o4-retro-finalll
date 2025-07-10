"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  Folder,
  Plus,
  Minus,
  CirclePlus,
  FileText,
  UserPlus,
} from "lucide-react";
import { CHAT_CONVERSATIONS, FOLDER_ITEMS } from "../../data/about-data";

// Retro computer sound generation using Web Audio API
const createRetroSounds = () => {
  const audioContext =
    typeof window !== "undefined"
      ? new (window.AudioContext || window.webkitAudioContext)()
      : null;

  const playMessageSound = () => {
    if (!audioContext) return;

    // Classic computer beep sound - like old terminals
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Retro beep characteristics - sharp, digital
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = "square"; // Classic digital sound

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.15);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  };

  const playTypingSound = () => {
    if (!audioContext) return;

    // Typewriter/mechanical keyboard click
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();

    oscillator.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Sharp click sound like old typewriter
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = "square";

    // Add some filtering for a more authentic click
    filterNode.type = "highpass";
    filterNode.frequency.setValueAtTime(300, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.08,
      audioContext.currentTime + 0.005
    );
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.04);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.04);
  };

  // Additional retro startup sound
  const playStartupSound = () => {
    if (!audioContext) return;

    // Classic computer startup beep sequence
    const frequencies = [400, 600, 800];
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscillator.type = "square";

      const startTime = audioContext.currentTime + index * 0.1;
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.05, startTime + 0.02);
      gainNode.gain.linearRampToValueAtTime(0, startTime + 0.08);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.08);
    });
  };

  return { playMessageSound, playTypingSound, playStartupSound };
};

// Simple retro theme configuration
const theme = {
  colors: {
    primary: "#8abdb3",
    secondary: "#ffc943", // Yellow
    accent: "#3f4c38", // Main text color
    background: "#F7F4E9", // Beige for text areas
    white: "#ffffff",
    black: "#000000",
    // Simplified retro colors
    chatBg: "#F7F4E9", // Beige background
    messageBoxBg: "#F7F4E9", // Beige for message areas
    textPrimary: "#3f4c38", // Main text color
    textSecondary: "#ffc943", // Yellow for highlights
    border: "#3f4c38", // Use main text color for borders
  },
  breakpoints: {
    mobile: 768,
  },
};

// Simple Typing Indicator Component
const TypingIndicator = ({ user, avatar }) => {
  return (
    <div className="px-4 py-1 font-mono text-sm">
      <div style={{ color: theme.colors.textPrimary }}>
        <span style={{ color: theme.colors.textSecondary }}>[{user}]</span>
        <span className="ml-2">is typing</span>
        <span className="ml-1">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
            .
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            .
          </span>
        </span>
      </div>
    </div>
  );
};

// Simple Retro Message Component
const ChatMessage = ({ message, isOwn = false, isAnimating = false }) => {
  return (
    <div
      className={`px-4 py-1 font-mono text-sm ${
        isAnimating ? "animate-fade-in-up" : ""
      }`}
    >
      <div style={{ color: theme.colors.textPrimary }}>
        <span style={{ color: theme.colors.textSecondary }}>
          [{message.user}]
        </span>
        <span className="ml-2">{message.time}</span>
      </div>
      <div className="mt-1" style={{ color: theme.colors.textPrimary }}>
        {message.message}
      </div>
    </div>
  );
};

// Reusable FolderSection component
const FolderSection = ({
  name,
  items,
  expanded,
  selectedItem,
  onToggle,
  onSelectItem,
  parentName = "About us",
}) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle(name);
      }
    },
    [name, onToggle]
  );

  const handleItemKeyDown = useCallback(
    (event, item) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelectItem(item, parentName);
      }
    },
    [onSelectItem, parentName]
  );

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer hover:bg-[--accent-color]/10 transition-all duration-200 mb-1 p-2 rounded-lg group"
        onClick={() => onToggle(name)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={`folder-${name.replace(" ", "-").toLowerCase()}`}
        style={{ "--accent-color": theme.colors.accent }}
      >
        <div className="mr-3">
          <div
            className="w-4 h-4 border-2 rounded-sm flex items-center justify-center shadow-sm"
            style={{
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.black,
            }}
          >
            {expanded ? (
              <Minus
                size={10}
                style={{ color: theme.colors.accent }}
                strokeWidth={2.5}
              />
            ) : (
              <Plus
                size={10}
                style={{ color: theme.colors.accent }}
                strokeWidth={2.5}
              />
            )}
          </div>
        </div>
        <Folder
          size={18}
          className="mr-3 transition-colors"
          style={{ color: theme.colors.secondary }}
          strokeWidth={2}
        />
        <span
          className="font-semibold font-space-grotesk text-sm sm:text-base lg:text-lg transition-colors"
          style={{ color: theme.colors.accent }}
        >
          {name}
        </span>
      </div>

      {expanded && (
        <nav
          id={`folder-${name.replace(" ", "-").toLowerCase()}`}
          className="ml-4 mt-1 space-y-1"
          role="list"
        >
          {items.map((item) => (
            <div key={item} className="relative" role="listitem">
              <div
                className={`flex items-center cursor-pointer transition-all duration-200 p-2 rounded-md text-sm group ${
                  selectedItem === item ? "" : "hover:bg-[--accent-color]/10"
                }`}
                style={{
                  backgroundColor:
                    selectedItem === item
                      ? `${theme.colors.secondary}80`
                      : "transparent",
                  color: theme.colors.accent,
                  "--accent-color": theme.colors.accent,
                  border: "none",
                  outline: "none",
                }}
                onClick={() => onSelectItem(item, parentName)}
                onKeyDown={(e) => handleItemKeyDown(e, item)}
              >
                <div className="w-5 mr-3 flex items-center">
                  {selectedItem !== item && (
                    <div
                      className="w-2 h-2 rounded-full shadow-sm"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                  )}
                </div>
                <span className="font-space-grotesk font-medium text-xs sm:text-sm">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

// Main About Us Panel component
const AboutUsPanelSoft = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    "About Us": true,
    "Our History": true,
    "Work Stuff": true,
  });
  const [currentPath, setCurrentPath] = useState("About us → #the404");
  const [selectedItem, setSelectedItem] = useState("#the404");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState(null);
  const [lastAnimatedIndex, setLastAnimatedIndex] = useState(-1);
  const [isInView, setIsInView] = useState(false);

  const timeoutRefs = useRef([]);
  const soundsRef = useRef(null);
  const messagesEndRef = useRef(null);
  const componentRef = useRef(null);

  // Initialize intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Initialize retro computer sounds
  useEffect(() => {
    if (typeof window !== "undefined") {
      soundsRef.current = createRetroSounds();

      // Play startup sound when component first loads and is in view
      const timer = setTimeout(() => {
        if (soundsRef.current && isInView) {
          soundsRef.current.playStartupSound();
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Message queue system with realistic timing and sounds
  useEffect(() => {
    const messages = CHAT_CONVERSATIONS[selectedItem] || [];

    // Clear existing timeouts
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];

    // Reset state
    setDisplayedMessages([]);
    setIsTyping(false);
    setTypingUser(null);
    setLastAnimatedIndex(-1);

    if (messages.length === 0 || !isInView) return;

    let currentIndex = 0;
    let delay = 500; // Initial delay

    const showNextMessage = () => {
      if (currentIndex >= messages.length || !isInView) return;

      const message = messages[currentIndex];
      const nextMessage = messages[currentIndex + 1];

      // Show typing indicator
      setIsTyping(true);
      setTypingUser({ user: message.user, avatar: message.avatar });

      // Play typing sound
      if (soundsRef.current && isInView) {
        soundsRef.current.playTypingSound();
      }

      // Typing duration based on message length
      const typingDuration = Math.min(
        Math.max(message.message.length * 50, 800),
        3000
      );

      const typingTimeout = setTimeout(() => {
        if (!isInView) return;

        // Hide typing, show message
        setIsTyping(false);
        setTypingUser(null);

        setDisplayedMessages((prev) => [...prev, message]);
        setLastAnimatedIndex(currentIndex);

        // Play message sound
        if (soundsRef.current && isInView) {
          soundsRef.current.playMessageSound();
        }

        currentIndex++;

        // Calculate delay until next message
        let nextDelay = 1000; // Default delay

        if (nextMessage) {
          // Shorter delay if same user continues
          if (nextMessage.user === message.user) {
            nextDelay = Math.random() * 1000 + 500; // 0.5-1.5s
          } else {
            nextDelay = Math.random() * 2000 + 1000; // 1-3s
          }
        }

        if (currentIndex < messages.length && isInView) {
          const nextTimeout = setTimeout(showNextMessage, nextDelay);
          timeoutRefs.current.push(nextTimeout);
        }
      }, typingDuration);

      timeoutRefs.current.push(typingTimeout);
    };

    // Start the message queue only if component is in view
    if (isInView) {
      const initialTimeout = setTimeout(showNextMessage, delay);
      timeoutRefs.current.push(initialTimeout);
    }

    // Cleanup function
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, [selectedItem, isInView]);

  // Memoized handlers to prevent unnecessary re-renders
  const toggleFolder = useCallback((folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  }, []);

  const selectItem = useCallback(
    (item, parent = "About us") => {
      setCurrentPath(`${parent} → ${item}`);
      setSelectedItem(item);
      // Close sidebar on mobile after selection
      if (isMobile) {
        setSidebarOpen(false);
      }
    },
    [isMobile]
  );

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  // Auto-scroll to bottom when new messages appear (contained within chat area)
  useEffect(() => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest(".overflow-y-auto");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [displayedMessages, isTyping]);

  return (
    <div
      ref={componentRef}
      className="absolute inset-0 rounded-lg overflow-hidden"
      style={{ backgroundColor: theme.colors.chatBg }}
    >
      {/* Retro Header Bar */}
      <header
        className="w-full flex h-12 sm:h-14 lg:h-16 border-b-2 font-mono"
        style={{
          backgroundColor: theme.colors.secondary, // Yellow background
          borderBottomColor: theme.colors.border,
        }}
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-full hover:bg-white/10 transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
          aria-expanded={sidebarOpen}
          style={{ color: theme.colors.textPrimary }}
        >
          <div className="w-5 h-5 flex flex-col justify-center space-y-1">
            <div
              className="w-full h-0.5"
              style={{ backgroundColor: theme.colors.textPrimary }}
            />
            <div
              className="w-full h-0.5"
              style={{ backgroundColor: theme.colors.textPrimary }}
            />
            <div
              className="w-full h-0.5"
              style={{ backgroundColor: theme.colors.textPrimary }}
            />
          </div>
        </button>

        {/* Retro title display */}
        <div className="flex items-center w-full pl-4 md:pl-8">
          <div className="flex items-center space-x-2">
            <span
              className="font-bold text-sm sm:text-base md:text-lg"
              style={{ color: theme.colors.textPrimary }}
            >
              SYSTEM:
            </span>
            <span
              className="text-sm sm:text-base md:text-lg"
              style={{ color: theme.colors.textPrimary }}
            >
              {currentPath.split(" → ")[0].toUpperCase()}
            </span>
            <span
              className="text-sm sm:text-base md:text-lg"
              style={{ color: theme.colors.textPrimary }}
            >
              &gt;
            </span>
            <span
              className="text-sm sm:text-base md:text-lg font-bold border border-2 px-2 py-1"
              style={{
                color: theme.colors.textPrimary,
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.chatBg,
              }}
            >
              {currentPath.split(" → ")[1]}
            </span>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] lg:h-[calc(100%-4rem)] relative">
        {/* Navigation Sidebar */}
        <nav
          className={`
          fixed md:relative top-0 md:top-0 left-0 h-full w-64 md:w-1/4 p-4 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out border-r-2
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }
        `}
          style={{
            backgroundColor: theme.colors.background,
            borderRightColor: theme.colors.black,
          }}
          aria-label="Main navigation"
        >
          {/* Mobile Close Button */}
          <button
            className="md:hidden absolute top-4 right-4 hover:scale-110 transition-all duration-200"
            onClick={toggleSidebar}
            aria-label="Close navigation menu"
            style={{ color: theme.colors.accent }}
          >
            <div className="w-6 h-6 relative">
              <div
                className="absolute w-full h-0.5 transform rotate-45 top-1/2 -translate-y-1/2"
                style={{ backgroundColor: theme.colors.accent }}
              />
              <div
                className="absolute w-full h-0.5 transform -rotate-45 top-1/2 -translate-y-1/2"
                style={{ backgroundColor: theme.colors.accent }}
              />
            </div>
          </button>

          <div className="space-y-2 mt-8 md:mt-0">
            {Object.entries(FOLDER_ITEMS).map(([folderName, items]) => (
              <FolderSection
                key={folderName}
                name={folderName}
                items={items}
                expanded={expandedFolders[folderName]}
                selectedItem={selectedItem}
                onToggle={toggleFolder}
                onSelectItem={selectItem}
                parentName={folderName === "About Us" ? "About us" : folderName}
              />
            ))}
          </div>
        </nav>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        {/* Retro Chat Interface - Main Content */}
        <main
          className="w-full md:w-3/4 flex flex-col overflow-hidden border"
          style={{
            backgroundColor: theme.colors.chatBg,
            borderColor: theme.colors.border,
          }}
        >
          {/* Retro Chat Header */}
          <div
            className="p-4 border-b-2 font-mono"
            style={{
              backgroundColor: theme.colors.messageBoxBg,
              borderBottomColor: theme.colors.border,
            }}
          >
            <div className="flex items-center space-x-2">
              <span
                className="text-lg font-bold"
                style={{ color: theme.colors.textSecondary }}
              >
                [{selectedItem.replace("#", "").toUpperCase()}]
              </span>
              <span
                className="text-sm"
                style={{ color: theme.colors.textPrimary }}
              >
                - TERMINAL SESSION
              </span>
            </div>
            <div
              className="text-xs mt-1 flex items-center space-x-2"
              style={{ color: theme.colors.textPrimary }}
            >
              <span>●</span>
              <span>LIVE CONVERSATION FEED</span>
              <span>●</span>
              <span>FOUNDING PARTNERS</span>
            </div>
          </div>

          {/* Chat Messages - Scrollable Area */}
          <div
            className="flex-1 overflow-y-auto scrollbar-thin"
            style={{
              maxHeight: "100%",
            }}
          >
            <div className="py-4 min-h-full">
              {displayedMessages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isAnimating={index === lastAnimatedIndex}
                />
              ))}
              {isTyping && typingUser && (
                <TypingIndicator
                  user={typingUser.user}
                  avatar={typingUser.avatar}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export function AboutTestSoft() {
  return (
    <>
      {/* Custom CSS for retro animations and styling */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }

        /* Retro scrollbar styling */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #3f4c38 #f7f4e9;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f7f4e9;
          border: 1px solid #3f4c38;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #3f4c38;
          border: 1px solid #ffc943;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #ffc943;
        }
      `}</style>

      <section
        className="w-full"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="mx-4 sm:mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 sm:px-8 pt-8 pb-4">
            <div className="lg:col-span-10 lg:col-start-2 flex flex-col items-center justify-center">
              <h1
                className="font-bold mb-4 text-2xl sm:text-3xl lg:text-4xl font-oswald text-center"
                style={{ color: theme.colors.accent }}
              >
                ABOUT SECTION
              </h1>
              <p
                className="text-center text-sm sm:text-base mb-6"
                style={{ color: theme.colors.accent }}
              >
                Live Chat between founding partners (Discord Style)
              </p>

              {/* Main Content Container */}
              <div className="mt-6 w-full flex justify-center relative">
                <div className="w-full max-w-6xl relative">
                  {/* Background Container */}
                  <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px]">
                    {/* Main Container */}
                    <div
                      className="absolute top-0 left-0 w-full h-full border-2 rounded-xl"
                      style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.black,
                      }}
                    >
                      <AboutUsPanelSoft />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Default export for consistency
export default AboutTestSoft;
