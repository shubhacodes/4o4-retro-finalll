"use client";

const SectionHeader = ({
  mainHeading,
  subLabel,
  className = "",
  centerAlign = true,
}) => {
  return (
    <div className={`${centerAlign ? "text-center" : ""} ${className}`}>
      {/* Main Creative Heading */}
      <h1
        className="font-bold mb-3 font-oswald leading-tight inline-block"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)", // Responsive sizing
          color: "#ffc943", // Big yellow text
          WebkitTextStroke: "2px #000", // Thicker black border around each letter
          textShadow:
            "0.25px 0.25px 0px #000, " +
            "0.5px 0.5px 0px #000, " +
            "0.75px 0.75px 0px #000, " +
            "1px 1px 0px #000, " +
            "1.25px 1.25px 0px #000, " +
            "1.5px 1.5px 0px #000, " +
            "1.75px 1.75px 0px #000, " +
            "2px 2px 0px #000, " +
            "2.25px 2.25px 0px #000, " +
            "2.5px 2.5px 0px #000, " +
            "2.75px 2.75px 0px #000, " +
            "3px 3px 0px #000, " +
            "3.25px 3.25px 0px #000, " +
            "3.5px 3.5px 0px #000, " +
            "3.75px 3.75px 0px #000, " +
            "4px 4px 0px #000, " +
            "4.25px 4.25px 0px #000, " +
            "4.5px 4.5px 0px #000, " +
            "4.75px 4.75px 0px #000, " +
            "5px 5px 0px #000, " +
            "5.25px 5.25px 0px #000, " +
            "5.5px 5.5px 0px #000, " +
            "5.75px 5.75px 0px #000, " +
            "6px 6px 0px #000", // Ultra-dense layering for seamless shadow
          letterSpacing: "1px",
          position: "relative",
          transform: "rotate(-1deg)", // Slight tilt for character
        }}
      >
        {mainHeading}
      </h1>

      {/* Sub-label */}
      {subLabel && (
        <div className="mt-4">
          <span
            className="font-space-grotesk text-sm font-medium tracking-wider uppercase"
            style={{
              color: "#3f4c38",
              backgroundColor: "#f7f4e9",
              border: "2px solid #3f4c38",
              padding: "6px 16px",
              borderRadius: "20px",
              display: "inline-block",
              boxShadow: "2px 2px 0px rgba(63, 76, 56, 0.2)",
            }}
          >
            {subLabel}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
