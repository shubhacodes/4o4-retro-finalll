"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SettingsMenu from "./settings-menu";
import useSound from "@/hooks/use-sound";

export default function GameMenu({ startGame, onReturnToMainSite }) {
  const [showSettings, setShowSettings] = useState(false);
  const { playClick } = useSound();

  const handleStartGame = () => {
    playClick();
    startGame();
  };

  const handleReturnToMainSite = () => {
    playClick();
    onReturnToMainSite();
  };

  const handleToggleSettings = () => {
    playClick();
    setShowSettings(!showSettings);
  };

  return (
    <div className="min-h-screen bg-[#F7F4E9]">
      {/* Playing game state is now managed by the parent component */}
      {/* This component only renders the menu UI */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-12 w-full max-w-md">
          {/* Main logo */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
            }}
          >
            <h1 className="text-6xl md:text-9xl font-bold text-[#DE6A48] mb-4 font-oswald">
              TETRIS
            </h1>
            <p className="text-lg md:text-xl text-black/65 max-w-lg mx-auto px-4 font-space-grotesk">
              Wrong Turn, Right Stack
            </p>
          </motion.div>

          {/* Game buttons */}
          <motion.div
            className="w-full space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={handleStartGame}
              className="w-full max-w-80 mx-auto block h-16 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold text-2xl hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] shadow-md font-oswald"
            >
              START GAME
            </button>

            <button
              onClick={handleReturnToMainSite}
              className="w-full max-w-80 mx-auto block h-12 bg-white border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold text-lg hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] shadow-md font-space-grotesk"
            >
              ← BACK TO MAIN SITE
            </button>
          </motion.div>

          {/* Playful footer text */}
          <motion.p
            className="text-black/65 text-base max-w-md mx-auto px-4 font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Ready to turn chaos into order? Let's see what you're made of.
          </motion.p>
        </div>
      </motion.div>

      {/* Settings overlay */}
      <AnimatePresence>
        {showSettings && (
          <SettingsMenu onClose={() => setShowSettings(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
