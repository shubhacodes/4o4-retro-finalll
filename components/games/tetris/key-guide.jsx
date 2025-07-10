"use client";

export default function KeyGuide() {
  const controls = [
    { keys: ["←", "→"], action: "Move" },
    { keys: ["↓"], action: "Drop" },
    { keys: ["↑"], action: "Rotate" },
    { keys: ["SPACE"], action: "Hard Drop" },
    { keys: ["P"], action: "Pause" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#3f4c38] border-t-[3px] border-[#3f4c38]">
      <div className="max-w-4xl mx-auto px-2 md:px-4 py-2 md:py-3">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 text-white">
          {controls.map((control, index) => (
            <div key={index} className="flex items-center gap-1 md:gap-2">
              <div className="flex gap-1">
                {control.keys.map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    className="bg-[#ffc943] border-2 border-white rounded px-1 md:px-2 py-1 text-[#3f4c38] font-bold text-xs md:text-sm min-w-[1.5rem] md:min-w-[2rem] text-center font-space-grotesk"
                  >
                    {key}
                  </div>
                ))}
              </div>
              <span className="text-xs md:text-sm font-medium font-space-grotesk">
                {control.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
