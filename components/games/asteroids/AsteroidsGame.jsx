"use client";

import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Simple game classes
class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.angle = -Math.PI / 2;
    this.dx = 0;
    this.dy = 0;
    this.thrusting = false;
  }

  rotate(angle) {
    this.angle += angle;
  }

  thrust() {
    this.thrusting = true;
    this.dx += Math.cos(this.angle) * 0.1;
    this.dy += Math.sin(this.angle) * 0.1;
  }

  stopThrust() {
    this.thrusting = false;
  }

  update(canvasWidth, canvasHeight) {
    this.dx *= 0.98;
    this.dy *= 0.98;
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.strokeStyle = "#8abdb3";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.radius, 0);
    ctx.lineTo(-this.radius, -this.radius / 2);
    ctx.lineTo(-this.radius / 2, 0);
    ctx.lineTo(-this.radius, this.radius / 2);
    ctx.lineTo(this.radius, 0);
    ctx.stroke();

    if (this.thrusting) {
      ctx.beginPath();
      ctx.moveTo(-this.radius, 0);
      ctx.lineTo(-this.radius - 10, 0);
      ctx.strokeStyle = "#f87a30";
      ctx.stroke();
    }

    ctx.restore();
  }
}

class Projectile {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 2;
    this.lifespan = 100;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#ffc943";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Asteroid {
  constructor(x, y, size, dx, dy) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.radius = size * 20;
    this.dx = dx;
    this.dy = dy;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < -this.radius) this.x = canvasWidth + this.radius;
    if (this.x > canvasWidth + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = canvasHeight + this.radius;
    if (this.y > canvasHeight + this.radius) this.y = -this.radius;
  }

  draw(ctx) {
    ctx.strokeStyle = "#3f4c38";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function checkCollision(obj1, obj2) {
  if (!obj1 || !obj2) return false;
  const dx = obj1.x - obj2.x;
  const dy = obj1.y - obj2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < obj1.radius + obj2.radius;
}

export default function AsteroidsGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [canvasSize, setCanvasSize] = useState({
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  });
  const [mounted, setMounted] = useState(false);

  // Fix hydration error by ensuring client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle responsive canvas sizing
  useEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const maxWidth = Math.min(containerWidth - 32, CANVAS_WIDTH); // 32px for padding
        const aspectRatio = CANVAS_HEIGHT / CANVAS_WIDTH;
        const newHeight = maxWidth * aspectRatio;

        setCanvasSize({
          width: maxWidth,
          height: newHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted]);

  useEffect(() => {
    if (!gameStarted || !mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale factor for responsive canvas
    const scaleX = canvasSize.width / CANVAS_WIDTH;
    const scaleY = canvasSize.height / CANVAS_HEIGHT;

    // Game state
    let ship = new Ship(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    let asteroids = [];
    const projectiles = [];
    let currentScore = 0;
    let currentLives = 3;
    let currentLevel = 1;

    // Initialize asteroids
    const initAsteroids = () => {
      asteroids = [];
      const numAsteroids = currentLevel + 2;
      for (let i = 0; i < numAsteroids; i++) {
        let x, y;
        do {
          x = Math.random() * CANVAS_WIDTH;
          y = Math.random() * CANVAS_HEIGHT;
        } while (
          Math.sqrt(Math.pow(x - ship.x, 2) + Math.pow(y - ship.y, 2)) < 100
        );

        asteroids.push(
          new Asteroid(x, y, 3, Math.random() * 2 - 1, Math.random() * 2 - 1)
        );
      }
    };

    initAsteroids();

    // Key handling with preventDefault to stop page scrolling
    const keys = {};

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      // Prevent default behavior for game keys
      if (
        [
          "w",
          "a",
          "s",
          "d",
          "arrowup",
          "arrowdown",
          "arrowleft",
          "arrowright",
          " ",
        ].includes(key) ||
        e.code === "Space"
      ) {
        e.preventDefault();
      }

      keys[key] = true;

      if (e.code === "Space" && projectiles.length < 5) {
        e.preventDefault();
        const angle = ship.angle;
        projectiles.push(
          new Projectile(
            ship.x,
            ship.y,
            Math.cos(angle) * 5,
            Math.sin(angle) * 5
          )
        );
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();

      // Prevent default behavior for game keys
      if (
        [
          "w",
          "a",
          "s",
          "d",
          "arrowup",
          "arrowdown",
          "arrowleft",
          "arrowright",
          " ",
        ].includes(key) ||
        e.code === "Space"
      ) {
        e.preventDefault();
      }

      keys[key] = false;
    };

    // Focus canvas to ensure it receives key events
    canvas.focus();
    canvas.setAttribute("tabindex", "0");

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Game loop
    const gameLoop = () => {
      // Clear canvas with site background
      ctx.fillStyle = "#F7F4E9";
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

      // Scale the context for responsive rendering
      ctx.save();
      ctx.scale(scaleX, scaleY);

      // Update ship
      if (keys["a"] || keys["arrowleft"]) ship.rotate(-0.1);
      if (keys["d"] || keys["arrowright"]) ship.rotate(0.1);
      if (keys["w"] || keys["arrowup"]) ship.thrust();
      else ship.stopThrust();

      ship.update(CANVAS_WIDTH, CANVAS_HEIGHT);
      ship.draw(ctx);

      // Update projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        projectiles[i].update(CANVAS_WIDTH, CANVAS_HEIGHT);
        projectiles[i].draw(ctx);
        projectiles[i].lifespan--;

        if (projectiles[i].lifespan <= 0) {
          projectiles.splice(i, 1);
          continue;
        }

        // Check asteroid collisions
        for (let j = asteroids.length - 1; j >= 0; j--) {
          if (checkCollision(projectiles[i], asteroids[j])) {
            const asteroid = asteroids[j];

            // Split asteroid
            if (asteroid.size > 1) {
              const newSize = asteroid.size - 1;
              for (let k = 0; k < 2; k++) {
                asteroids.push(
                  new Asteroid(
                    asteroid.x,
                    asteroid.y,
                    newSize,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                  )
                );
              }
            }

            currentScore += (4 - asteroid.size) * 50;
            setScore(currentScore);

            asteroids.splice(j, 1);
            projectiles.splice(i, 1);
            break;
          }
        }
      }

      // Update asteroids
      for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].update(CANVAS_WIDTH, CANVAS_HEIGHT);
        asteroids[i].draw(ctx);

        // Check ship collision
        if (checkCollision(ship, asteroids[i])) {
          currentLives--;
          setLives(currentLives);

          if (currentLives <= 0) {
            setGameOver(true);
            ctx.restore();
            return;
          }

          ship = new Ship(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        }
      }

      // Check level completion
      if (asteroids.length === 0) {
        currentLevel++;
        setLevel(currentLevel);
        initAsteroids();
      }

      // Draw UI with site colors
      ctx.fillStyle = "#ffc943";
      ctx.font = "bold 20px var(--font-oswald)";
      ctx.textAlign = "left";
      ctx.fillText(`SCORE: ${currentScore}`, 20, 35);

      ctx.fillStyle = "#f87a30";
      ctx.textAlign = "right";
      ctx.fillText(`LIVES: ${currentLives}`, CANVAS_WIDTH - 20, 35);

      ctx.fillStyle = "#8abdb3";
      ctx.textAlign = "center";
      ctx.fillText(`LEVEL ${currentLevel}`, CANVAS_WIDTH / 2, 25);

      ctx.restore();

      if (!gameOver) {
        requestAnimationFrame(gameLoop);
      }
    };

    const animationId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, [gameStarted, canvasSize, mounted]);

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setLives(3);
    setGameOver(false);
    setGameStarted(false);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full" ref={containerRef}>
      <div className="relative w-full max-w-4xl">
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className="w-full h-auto rounded-xl bg-[#F7F4E9]"
          style={{ display: "block" }}
        />

        {/* Start Game Overlay - matching Tetris styling */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-xl max-w-md w-full mx-4">
              {/* Header */}
              <div className="bg-[#8abdb3] border-b-[3px] border-[#3f4c38] rounded-t-xl p-6 text-center">
                <p className="text-white/90 font-space-grotesk text-lg">
                  Navigate the cosmic chaos and survive the void.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Controls info - integrated without extra box */}
                <div className="space-y-3 text-center">
                  <h2 className="text-lg font-bold text-[#3f4c38] font-oswald">
                    FLIGHT CONTROLS
                  </h2>
                  <div className="space-y-1 text-sm text-[#3f4c38] font-space-grotesk opacity-75">
                    <div>ROTATE: A/D or ←/→</div>
                    <div>THRUST: W or ↑</div>
                    <div>FIRE: SPACEBAR</div>
                  </div>
                </div>

                {/* Motivational message */}
                <div className="bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl p-4 text-center">
                  <p className="text-[#3f4c38] font-medium font-space-grotesk">
                    "In space, no one can hear you stack up points."
                  </p>
                </div>

                {/* Start button */}
                <button
                  onClick={() => setGameStarted(true)}
                  className="w-full h-10 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-lg text-[#3f4c38] font-bold transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
                >
                  BLAST OFF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Game Over Overlay - matching Tetris styling */}
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-xl max-w-md w-full mx-4">
              {/* Header */}
              <div className="bg-[#f87a30] border-b-[3px] border-[#3f4c38] rounded-t-xl p-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-2 font-oswald">
                  MISSION FAILED
                </h1>
                <p className="text-white/90 font-space-grotesk">
                  Your ship has been lost to the void, but legends live on.
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
                  <p className="text-sm text-[#3f4c38] opacity-75 mt-2 font-space-grotesk">
                    Level {level} • {lives} lives remaining
                  </p>
                </div>

                {/* Motivational message */}
                <div className="bg-[#8abdb3] border-[3px] border-[#3f4c38] rounded-xl p-4 text-center">
                  <p className="text-[#3f4c38] font-medium font-space-grotesk">
                    "Every pilot crashes. Only legends get back up and fly
                    again."
                  </p>
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                  <button
                    onClick={resetGame}
                    className="w-full h-12 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-1px] font-space-grotesk"
                  >
                    TRY AGAIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile controls for touch devices */}
      {mounted && (
        <div className="mt-4 md:hidden">
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            <div></div>
            <button
              className="text-sm py-2 px-3 bg-[#ffc943] hover:bg-[#f87a30] text-[#3f4c38] hover:text-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-lg font-oswald font-bold uppercase tracking-wide transition-colors"
              onTouchStart={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keydown", { key: "w" });
                window.dispatchEvent(event);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keyup", { key: "w" });
                window.dispatchEvent(event);
              }}
            >
              ↑
            </button>
            <div></div>
            <button
              className="text-sm py-2 px-3 bg-[#ffc943] hover:bg-[#f87a30] text-[#3f4c38] hover:text-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-lg font-oswald font-bold uppercase tracking-wide transition-colors"
              onTouchStart={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keydown", { key: "a" });
                window.dispatchEvent(event);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keyup", { key: "a" });
                window.dispatchEvent(event);
              }}
            >
              ←
            </button>
            <button
              className="text-sm py-2 px-4 bg-[#f87a30] hover:bg-[#8abdb3] text-[#F7F4E9] hover:text-[#3f4c38] border-[3px] border-[#3f4c38] rounded-lg font-oswald font-bold uppercase tracking-wide transition-colors"
              onTouchStart={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keydown", { code: "Space" });
                window.dispatchEvent(event);
              }}
            >
              FIRE
            </button>
            <button
              className="text-sm py-2 px-3 bg-[#ffc943] hover:bg-[#f87a30] text-[#3f4c38] hover:text-[#F7F4E9] border-[3px] border-[#3f4c38] rounded-lg font-oswald font-bold uppercase tracking-wide transition-colors"
              onTouchStart={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keydown", { key: "d" });
                window.dispatchEvent(event);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                const event = new KeyboardEvent("keyup", { key: "d" });
                window.dispatchEvent(event);
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
