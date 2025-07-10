"use client";

import { motion } from "framer-motion";

export default function GameOverScreen({
  score,
  onRestart,
  onMainMenu,
  onReturnToMainSite,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-xl shadow-2xl max-w-md w-full mx-4"
    >
      {/* Header */}
      <div className="bg-[#f87a30] border-b-[3px] border-[#3f4c38] rounded-t-xl p-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-2 font-oswald">
          GAME OVER
        </h1>
        <p className="text-white/90 font-space-grotesk">
          Your stack has fallen, but your spirit remains unbroken.
        </p>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Score display */}
        <div className="bg-white border-[3px] border-[#3f4c38] rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold text-[#3f4c38] mb-2 font-oswald">
            FINAL SCORE
          </h2>
          <div className="text-4xl font-bold text-[#f87a30] font-space-grotesk">
            {score.toLocaleString()}
          </div>
        </div>

        {/* Motivational message */}
        <div className="bg-[#8abdb3] border-[3px] border-[#3f4c38] rounded-xl p-4 text-center">
          <p className="text-[#3f4c38] font-medium font-space-grotesk">
            "Every master was once a disaster. Ready for round two?"
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full h-12 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
          >
            PLAY AGAIN
          </button>

          <button
            onClick={onMainMenu}
            className="w-full h-12 bg-white border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
          >
            MAIN MENU
          </button>

          <button
            onClick={onReturnToMainSite}
            className="w-full h-12 bg-[#8abdb3] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
          >
            ← BACK TO SITE
          </button>
        </div>
      </div>
    </motion.div>
  );
}
