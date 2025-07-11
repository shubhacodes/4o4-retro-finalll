"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GameMenu from "./game-menu";
import TetrisGame from "./tetris-game";

export default function TetrisApp() {
  const router = useRouter();
  const [gameState, setGameState] = useState("menu"); // "menu" or "playing"

  const handleStartGame = () => {
    setGameState("playing");
  };

  const handleReturnToMenu = () => {
    setGameState("menu");
  };

  const handleReturnToMainSite = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#F7F4E9]">
      {gameState === "menu" ? (
        <GameMenu
          startGame={handleStartGame}
          onReturnToMainSite={handleReturnToMainSite}
        />
      ) : (
        <TetrisGame
          onReturn={handleReturnToMenu}
          onReturnToMainSite={handleReturnToMainSite}
        />
      )}
    </main>
  );
}
