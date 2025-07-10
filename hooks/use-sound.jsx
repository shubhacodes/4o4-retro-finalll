"use client";
import { useCallback, useRef, useEffect } from "react";

const useSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload the click sound
    audioRef.current = new Audio("/click.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.volume = 0.3; // Set a reasonable volume
  }, []);

  const playClick = useCallback(() => {
    if (audioRef.current) {
      // Reset to beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Handle autoplay restrictions gracefully
        console.warn("Audio play failed:", error);
      });
    }
  }, []);

  return { playClick };
};

export default useSound;
