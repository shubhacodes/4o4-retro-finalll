"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GAME_CONSTANTS, COLORS, IMAGES, FONTS } from "../../../constants";

export default function SnowBored() {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const gameStateRef = useRef({
    player: {
      x: 100,
      y: GAME_CONSTANTS.CANVAS_HEIGHT / 2,
      velocityY: 0,
      isMovingUp: false,
      sprite: null,
    },
    obstacles: [],
    trailPoints: [],
    frameCount: 0,
    startTime: Date.now(),
    gameSpeedMultiplier: 1,
    obstacleGenerationInterval: GAME_CONSTANTS.TREE_GENERATION_INTERVAL,
    lastSpeedIncreaseTime: 0,
    score: 0,
    isGameOver: false,
  });

  const startGame = () => {
    setPlayingGame(true);
    setGameOver(false);
    setScore(0);
    setGameTime(0);
    // Reset game state
    gameStateRef.current = {
      player: {
        x: 100,
        y: GAME_CONSTANTS.CANVAS_HEIGHT / 2,
        velocityY: 0,
        isMovingUp: false,
        sprite: gameStateRef.current.player.sprite,
      },
      obstacles: [],
      trailPoints: [],
      frameCount: 0,
      startTime: Date.now(),
      gameSpeedMultiplier: 1,
      obstacleGenerationInterval: GAME_CONSTANTS.TREE_GENERATION_INTERVAL,
      lastSpeedIncreaseTime: 0,
      score: 0,
      isGameOver: false,
    };
  };

  const returnToMenu = () => {
    setPlayingGame(false);
    setGameOver(false);
  };

  const handleBackToSite = () => {
    router.push("/");
  };

  const handleKeyDown = (e) => {
    if (e.code === "Space" && !gameStateRef.current.isGameOver && playingGame) {
      e.preventDefault(); // Prevent page scrolling
      gameStateRef.current.player.isMovingUp = true;
    }
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space" && !gameStateRef.current.isGameOver && playingGame) {
      e.preventDefault(); // Prevent page scrolling
      gameStateRef.current.player.isMovingUp = false;
    }
  };

  useEffect(() => {
    if (!playingGame) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    };

    const loadObstacleSprites = async () => {
      const treeSprites = await Promise.all(IMAGES.TREES.map(loadImage));
      const snowmanSprites = await Promise.all(IMAGES.SNOWMEN.map(loadImage));
      return { treeSprites, snowmanSprites };
    };

    const initGame = async () => {
      const playerSprite = await loadImage(IMAGES.PLAYER);
      const { treeSprites, snowmanSprites } = await loadObstacleSprites();

      gameStateRef.current.player.sprite = playerSprite;

      const getRandomObstacleSprite = () => {
        const useTree = Math.random() > 0.3;
        const sprites = useTree ? treeSprites : snowmanSprites;
        return sprites[Math.floor(Math.random() * sprites.length)];
      };

      for (let i = 0; i < 6; i++) {
        gameStateRef.current.obstacles.push({
          x: Math.random() * GAME_CONSTANTS.CANVAS_WIDTH,
          y: Math.random() * (GAME_CONSTANTS.CANVAS_HEIGHT - 100) + 50,
          sprite: getRandomObstacleSprite(),
        });
      }

      const drawBackground = () => {
        ctx.fillStyle = COLORS.sky; // Beige background
        ctx.fillRect(
          0,
          0,
          GAME_CONSTANTS.CANVAS_WIDTH,
          GAME_CONSTANTS.CANVAS_HEIGHT
        );
      };

      const drawPlayer = () => {
        const { player } = gameStateRef.current;
        if (player.sprite) {
          ctx.save();
          ctx.translate(player.x, player.y);

          if (gameStateRef.current.isGameOver) {
            ctx.rotate(-Math.PI / 2);
          }

          ctx.drawImage(
            player.sprite,
            -GAME_CONSTANTS.PLAYER_WIDTH / 2,
            -GAME_CONSTANTS.PLAYER_HEIGHT / 2,
            GAME_CONSTANTS.PLAYER_WIDTH,
            GAME_CONSTANTS.PLAYER_HEIGHT
          );
          ctx.restore();
        }
      };

      const drawObstacles = () => {
        gameStateRef.current.obstacles.forEach((obstacle) => {
          ctx.drawImage(
            obstacle.sprite,
            obstacle.x - GAME_CONSTANTS.OBSTACLE_WIDTH / 2,
            obstacle.y - GAME_CONSTANTS.OBSTACLE_HEIGHT,
            GAME_CONSTANTS.OBSTACLE_WIDTH,
            GAME_CONSTANTS.OBSTACLE_HEIGHT
          );
        });
      };

      const drawSkiTrail = () => {
        ctx.strokeStyle = COLORS.skiTrail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        gameStateRef.current.trailPoints.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.stroke();
      };

      const drawUI = () => {
        ctx.fillStyle = "#3f4c38";
        ctx.font = 'bold 16px "Oswald", sans-serif';

        const scoreText = `Score: ${gameStateRef.current.score}`;
        const scoreWidth = ctx.measureText(scoreText).width;
        ctx.fillText(
          scoreText,
          GAME_CONSTANTS.CANVAS_WIDTH - scoreWidth - 20,
          30
        );

        const currentTime = gameStateRef.current.isGameOver
          ? gameTime
          : Math.floor((Date.now() - gameStateRef.current.startTime) / 1000);
        const timeString = new Date(currentTime * 1000)
          .toISOString()
          .substr(14, 5);
        ctx.fillText(timeString, 20, 30);
      };

      const checkCollision = () => {
        const { player, obstacles } = gameStateRef.current;
        for (let obstacle of obstacles) {
          const dx = Math.abs(player.x - obstacle.x);
          const dy = Math.abs(player.y - obstacle.y);
          if (
            dx < GAME_CONSTANTS.PLAYER_WIDTH / 2 &&
            dy < GAME_CONSTANTS.PLAYER_HEIGHT / 2
          ) {
            return true;
          }
        }
        return false;
      };

      const updateGame = () => {
        if (gameStateRef.current.isGameOver) return;

        const { player, obstacles, trailPoints } = gameStateRef.current;
        const currentTime = Date.now();

        if (currentTime - gameStateRef.current.lastSpeedIncreaseTime >= 2500) {
          gameStateRef.current.gameSpeedMultiplier += 0.05;
          gameStateRef.current.obstacleGenerationInterval = Math.max(
            30,
            gameStateRef.current.obstacleGenerationInterval - 5
          );
          gameStateRef.current.lastSpeedIncreaseTime = currentTime;
        }

        if (player.isMovingUp) {
          player.velocityY = Math.max(
            player.velocityY - 0.2,
            -GAME_CONSTANTS.MOVEMENT_SPEED
          );
        } else {
          player.velocityY = Math.min(
            player.velocityY + GAME_CONSTANTS.GRAVITY,
            GAME_CONSTANTS.MOVEMENT_SPEED
          );
        }

        player.y += player.velocityY;

        if (player.y < 50) player.y = 50;
        if (player.y > GAME_CONSTANTS.CANVAS_HEIGHT - 70)
          player.y = GAME_CONSTANTS.CANVAS_HEIGHT - 70;

        trailPoints.unshift({ x: player.x, y: player.y + 10 });
        if (trailPoints.length > 50) {
          trailPoints.pop();
        }

        gameStateRef.current.obstacles = obstacles
          .map((obstacle) => ({
            ...obstacle,
            x:
              obstacle.x -
              GAME_CONSTANTS.MOVEMENT_SPEED *
                gameStateRef.current.gameSpeedMultiplier,
          }))
          .filter((obstacle) => obstacle.x > -50);

        gameStateRef.current.trailPoints = trailPoints
          .map((point) => ({
            ...point,
            x:
              point.x -
              GAME_CONSTANTS.MOVEMENT_SPEED *
                gameStateRef.current.gameSpeedMultiplier,
          }))
          .filter((point) => point.x > 0);

        if (
          gameStateRef.current.frameCount %
            gameStateRef.current.obstacleGenerationInterval ===
          0
        ) {
          gameStateRef.current.obstacles.push({
            x: GAME_CONSTANTS.CANVAS_WIDTH + 50,
            y: Math.random() * (GAME_CONSTANTS.CANVAS_HEIGHT - 100) + 50,
            sprite: getRandomObstacleSprite(),
          });
        }

        if (checkCollision()) {
          gameStateRef.current.isGameOver = true;
          setGameOver(true);
          setGameTime(
            Math.floor((Date.now() - gameStateRef.current.startTime) / 1000)
          );
          return;
        }

        if (gameStateRef.current.frameCount % 60 === 0) {
          gameStateRef.current.score += 10;
        }

        gameStateRef.current.frameCount++;
      };

      const gameLoop = () => {
        ctx.clearRect(
          0,
          0,
          GAME_CONSTANTS.CANVAS_WIDTH,
          GAME_CONSTANTS.CANVAS_HEIGHT
        );

        drawBackground();
        drawSkiTrail();
        drawObstacles();
        drawPlayer();
        drawUI();

        if (!gameStateRef.current.isGameOver) {
          updateGame();
          setScore(gameStateRef.current.score);
        }

        requestAnimationFrame(gameLoop);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      gameLoop();
    };

    initGame();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [playingGame, gameOver, gameTime]);

  return (
    <div className="min-h-screen bg-[#F7F4E9]">
      {playingGame ? (
        <main
          className="min-h-screen p-4"
          style={{ backgroundColor: "#F7F4E9" }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={returnToMenu}
                className="flex items-center gap-2 px-4 py-2 text-[#3f4c38] border-[3px] border-[#3f4c38] rounded-lg hover:bg-[#3f4c38] hover:text-[#F7F4E9] transition-colors font-oswald font-bold uppercase tracking-wide"
              >
                ← Back to Menu
              </button>
            </div>

            {/* Game Container */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={GAME_CONSTANTS.CANVAS_WIDTH}
                  height={GAME_CONSTANTS.CANVAS_HEIGHT}
                  className="border-[3px] border-[#3f4c38] rounded-lg shadow-lg"
                />
                {gameOver && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/75 rounded-lg">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-white mb-4 font-oswald">
                        It's Snow Over!
                      </h2>
                      <p className="text-xl text-white mb-6 font-space-grotesk">
                        Final Score: {score}
                      </p>
                      <button
                        onClick={startGame}
                        className="px-6 py-3 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold text-lg hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] shadow-md font-oswald"
                      >
                        Play Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-[#3f4c38] mt-6 text-lg font-space-grotesk">
                Press and hold SPACE to move up
              </p>
            </div>
          </div>
        </main>
      ) : (
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
                SNOW BORED
              </h1>
              <p className="text-lg md:text-xl text-black/65 max-w-lg mx-auto px-4 font-space-grotesk">
                We're Snow Back in Business
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
                onClick={startGame}
                className="w-full max-w-80 mx-auto block h-16 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold text-2xl hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] shadow-md font-oswald"
              >
                START GAME
              </button>

              <button
                onClick={handleBackToSite}
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
              Ready to hit the slopes? Avoid the trees and snowmen as you ski
              down the mountain!
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
