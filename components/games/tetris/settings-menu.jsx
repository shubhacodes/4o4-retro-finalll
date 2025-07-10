"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SettingsMenu({ onClose }) {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [volume, setVolume] = useState(75);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#F7F4E9] border-[3px] border-black w-full max-w-lg mx-4 shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFC1A2] to-[#DE6A48] border-b-[3px] border-black p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/10 rounded transition-colors"
            >
              <span className="text-2xl">←</span>
            </button>
            <h2 className="text-3xl font-bold text-black font-oswald">
              GAME SETTINGS
            </h2>
            <div className="w-10" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Music toggle */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black font-oswald">
              AUDIO EXPERIENCE
            </h3>
            <div className="flex items-center justify-between p-4 bg-white border-[3px] border-black">
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-[#00796B]">
                  {musicEnabled ? "🔊" : "🔇"}
                </span>
                <span className="font-medium text-black font-space-grotesk">
                  Background Music
                </span>
              </div>
              <button
                onClick={() => setMusicEnabled(!musicEnabled)}
                className={`w-16 h-8 border-[3px] border-black relative transition-all duration-200 ${
                  musicEnabled ? "bg-[#FFB600]" : "bg-white"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-black absolute top-0 transition-all duration-200 ${
                    musicEnabled ? "left-8" : "left-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Volume slider */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black font-oswald">
              VOLUME CONTROL
            </h3>
            <div className="p-4 bg-white border-[3px] border-black space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-black font-space-grotesk">
                  Master Volume
                </span>
                <span className="font-bold text-[#DE6A48] text-lg font-space-grotesk">
                  {volume}%
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number.parseInt(e.target.value))}
                  disabled={!musicEnabled}
                  className="w-full h-3 bg-black/20 appearance-none cursor-pointer disabled:opacity-50"
                  style={{
                    background: `linear-gradient(to right, #FFB600 0%, #FFB600 ${volume}%, #e5e5e5 ${volume}%, #e5e5e5 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="p-4 bg-[#00796B] border-[3px] border-black">
            <h4 className="font-bold text-white mb-2 font-oswald">
              PROOF OF CONCEPT
            </h4>
            <p className="text-white/90 text-sm font-space-grotesk">
              This isn't just a game—it's a remix of classic perfection. Every
              block matters, every line counts.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 h-12 bg-[#FFB600] border-[3px] border-black text-black font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
            >
              SAVE & CLOSE
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
