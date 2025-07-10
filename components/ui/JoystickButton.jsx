"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSound from "@/hooks/use-sound";

const JoystickButton = ({ gameId = 1, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { playClick } = useSound();

  const handleClick = () => {
    playClick();
    // Navigate to specific game page
    router.push(`/games/${gameId}`);
    console.log(`Navigating to game ${gameId}`);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed top-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-white/10 backdrop-blur-sm
        border border-white/20
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:bg-white/20 hover:border-white/40
        hover:scale-110
        ${isHovered ? "animate-pulse" : ""}
        ${className}
      `}
      title="Play a mini-game!"
    >
      <Image
        src="/joystick.png"
        alt="Mini Game"
        width={24}
        height={24}
        className={`
          transition-all duration-300
          ${isHovered ? "scale-110" : "scale-100"}
        `}
      />
    </button>
  );
};

export default JoystickButton;
