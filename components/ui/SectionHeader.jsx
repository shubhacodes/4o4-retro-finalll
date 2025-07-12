"use client";

const SectionHeader = ({
  mainHeading,
  subLabel,
  className = "",
  centerAlign = true,
  onDarkBackground = false,
  pillPosition = "default", // "default", "top", "section-boundary"
  customPillStyle = {},
}) => {
  const textColor = onDarkBackground ? "#FAF9F5" : "#231F20";
  // Pill colors - same as the original star colors
  const pillColor = onDarkBackground ? "#2E7368" : "#560472";

  // Calculate pill positioning based on pillPosition prop
  const getPillPositioning = () => {
    switch (pillPosition) {
      case "section-boundary":
        return {
          className: "absolute left-1/2 transform -translate-x-1/2 z-20",
          style: {
            top: "-60px", // Position on section boundary
            ...customPillStyle,
          },
        };
      case "top":
        return {
          className:
            "absolute -top-16 left-1/2 transform -translate-x-1/2 z-20",
          style: customPillStyle,
        };
      default:
        return {
          className:
            "absolute -top-12 left-1/2 transform -translate-x-1/2 z-20",
          style: customPillStyle,
        };
    }
  };

  const pillPositioning = getPillPositioning();

  return (
    <div
      className={`${centerAlign ? "text-center" : ""} ${className} relative`}
    >
      {/* Main Creative Heading */}
      <div className="relative inline-block">
        <h1
          className="font-bold mb-3 font-oswald leading-tight inline-block relative z-10 uppercase"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: textColor,
            letterSpacing: "1px",
            position: "relative",
          }}
        >
          {mainHeading}
        </h1>

        {/* Pill positioned based on pillPosition prop */}
        {subLabel && (
          <div
            className={pillPositioning.className}
            style={pillPositioning.style}
          >
            <div
              className="relative px-3 py-1 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: pillColor,
                minWidth: "120px",
                height: "32px",
              }}
            >
              {/* Sub-label text centered in the pill */}
              <span
                className="font-space-grotesk text-xs font-bold tracking-wider uppercase text-center"
                style={{
                  color: "#FAF9F5",
                }}
              >
                {subLabel}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
