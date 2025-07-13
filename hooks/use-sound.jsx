"use client";
import { useCallback, useRef, useEffect } from "react";

const useSound = () => {
  const audioRef = useRef(null);
  const typewriterAudioRef = useRef(null);

  useEffect(() => {
    // Preload the click sound
    audioRef.current = new Audio("/click.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.volume = 0.3; // Set a reasonable volume

    // Create typewriter sound (using click sound with different settings)
    typewriterAudioRef.current = new Audio("/click.mp3");
    typewriterAudioRef.current.preload = "auto";
    typewriterAudioRef.current.volume = 0.15; // Lower volume for typewriter effect
    typewriterAudioRef.current.playbackRate = 1.8; // Faster playback for typewriter feel
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

  const playTypewriter = useCallback(() => {
    if (typewriterAudioRef.current) {
      // Reset to beginning and play
      typewriterAudioRef.current.currentTime = 0;
      typewriterAudioRef.current.play().catch((error) => {
        // Handle autoplay restrictions gracefully
        console.warn("Typewriter audio play failed:", error);
      });
    }
  }, []);

  return { playClick, playTypewriter };
};

export default useSound;
