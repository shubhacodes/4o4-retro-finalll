"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import GameOverScreen from "./game-over-screen";
import KeyGuide from "./key-guide";
import useSound from "@/hooks/use-sound";

// Game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 30;

// Tetrimino shapes with retro colors
const TETRIMINOS = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "#00796B", // Teal
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#FFB600", // Yellow
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#DE6A48", // Orange
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#EC3649", // Red-pink
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: "#FFC1A2", // Light peach
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: "#000000", // Black
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: "#FFFFFF", // White (with black border)
  },
};

const createEmptyBoard = () => {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0)
  );
};

const getRandomTetrimino = () => {
  const tetriminos = Object.keys(TETRIMINOS);
  const randTetrimino =
    tetriminos[Math.floor(Math.random() * tetriminos.length)];
  return {
    ...TETRIMINOS[randTetrimino],
    type: randTetrimino,
  };
};

const initialPosition = {
  x: Math.floor(BOARD_WIDTH / 2) - 1,
  y: 0,
};

export default function TetrisGame({ onReturn, onReturnToMainSite }) {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(getRandomTetrimino());
  const [nextPiece, setNextPiece] = useState(getRandomTetrimino());
  const [position, setPosition] = useState({ ...initialPosition });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dropIntervalRef = useRef(null);
  const { playClick } = useSound();

  // FIXED collision detection - this was the main bug
  const checkCollision = useCallback(
    (piece, pos) => {
      for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
          if (piece.shape[y][x]) {
            const boardX = pos.x + x;
            const boardY = pos.y + y;

            // Check if outside board limits
            if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) {
              return true;
            }

            // FIXED: Check if overlapping a placed piece (only if within board)
            if (boardY >= 0 && board[boardY] && board[boardY][boardX] !== 0) {
              return true;
            }
          }
        }
      }
      return false;
    },
    [board]
  );

  const updateBoard = useCallback(() => {
    const newBoard = [...board.map((row) => [...row])];

    // Place the current piece on the board
    for (let y = 0; y < currentPiece.shape.length; y++) {
      for (let x = 0; x < currentPiece.shape[y].length; x++) {
        if (currentPiece.shape[y][x]) {
          const boardY = position.y + y;
          const boardX = position.x + x;

          if (
            boardY >= 0 &&
            boardY < BOARD_HEIGHT &&
            boardX >= 0 &&
            boardX < BOARD_WIDTH
          ) {
            newBoard[boardY][boardX] = currentPiece;
          }
        }
      }
    }

    // Check for completed lines
    const completedLines = [];
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      if (newBoard[y].every((cell) => cell !== 0)) {
        completedLines.push(y);
      }
    }

    if (completedLines.length > 0) {
      const linePoints = [40, 100, 300, 1200];
      const points = linePoints[completedLines.length - 1] * level;
      setScore((prevScore) => prevScore + points);

      setLines((prevLines) => {
        const newLines = prevLines + completedLines.length;
        setLevel(Math.floor(newLines / 10) + 1);
        return newLines;
      });

      const filteredBoard = newBoard.filter(
        (_, index) => !completedLines.includes(index)
      );
      const newRows = Array.from({ length: completedLines.length }, () =>
        Array.from({ length: BOARD_WIDTH }, () => 0)
      );
      setBoard([...newRows, ...filteredBoard]);
    } else {
      setBoard(newBoard);
    }

    // Check for game over - if piece can't be placed at starting position
    if (checkCollision(nextPiece, initialPosition)) {
      setGameOver(true);
      if (dropIntervalRef.current) {
        clearInterval(dropIntervalRef.current);
      }
      return;
    }

    setPosition({ ...initialPosition });
    setCurrentPiece(nextPiece);
    setNextPiece(getRandomTetrimino());
  }, [board, currentPiece, nextPiece, position, level, checkCollision]);

  const rotate = useCallback((piece) => {
    const newShape = piece.shape.map((_, index) =>
      piece.shape.map((row) => row[index]).reverse()
    );
    return { ...piece, shape: newShape };
  }, []);

  const tryRotate = useCallback(() => {
    if (gameOver || isPaused) return;

    const rotatedPiece = rotate(currentPiece);
    if (!checkCollision(rotatedPiece, position)) {
      setCurrentPiece(rotatedPiece);
    }
  }, [currentPiece, position, rotate, checkCollision, gameOver, isPaused]);

  const moveHorizontal = useCallback(
    (direction) => {
      if (gameOver || isPaused) return;

      const newPos = { ...position, x: position.x + direction };
      if (!checkCollision(currentPiece, newPos)) {
        setPosition(newPos);
      }
    },
    [currentPiece, position, checkCollision, gameOver, isPaused]
  );

  const moveDown = useCallback(() => {
    if (gameOver || isPaused) return;

    const newPos = { ...position, y: position.y + 1 };
    if (!checkCollision(currentPiece, newPos)) {
      setPosition(newPos);
      return;
    }

    // Piece has landed, update the board
    updateBoard();
  }, [currentPiece, position, checkCollision, gameOver, isPaused, updateBoard]);

  const hardDrop = useCallback(() => {
    if (gameOver || isPaused) return;

    let newY = position.y;
    while (!checkCollision(currentPiece, { x: position.x, y: newY + 1 })) {
      newY++;
    }

    setPosition({ x: position.x, y: newY });
    setTimeout(() => updateBoard(), 50);
  }, [currentPiece, position, checkCollision, gameOver, isPaused, updateBoard]);

  const togglePause = useCallback(() => {
    playClick();
    setIsPaused((prev) => !prev);
  }, [playClick]);

  const restartGame = useCallback(() => {
    playClick();
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetrimino());
    setNextPiece(getRandomTetrimino());
    setPosition({ ...initialPosition });
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setLines(0);
    setIsPaused(false);
  }, [playClick]);

  const handleReturn = useCallback(() => {
    playClick();
    onReturn();
  }, [onReturn, playClick]);

  const handleReturnToMainSite = useCallback(() => {
    playClick();
    onReturnToMainSite();
  }, [onReturnToMainSite, playClick]);

  // Keyboard controls - prevent page scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default behavior for game keys to stop page scrolling
      if (
        ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " "].includes(e.key)
      ) {
        e.preventDefault();
      }

      if (gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          moveHorizontal(-1);
          break;
        case "ArrowRight":
          moveHorizontal(1);
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowUp":
          tryRotate();
          break;
        case " ":
          hardDrop();
          break;
        case "p":
        case "P":
          togglePause();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveHorizontal, moveDown, tryRotate, hardDrop, gameOver, togglePause]);

  // Game loop
  useEffect(() => {
    if (!gameOver && !isPaused) {
      if (dropIntervalRef.current) {
        clearInterval(dropIntervalRef.current);
      }

      const dropSpeed = Math.max(100, 800 - (level - 1) * 50);
      dropIntervalRef.current = setInterval(() => {
        moveDown();
      }, dropSpeed);
    } else if (dropIntervalRef.current) {
      clearInterval(dropIntervalRef.current);
    }

    return () => {
      if (dropIntervalRef.current) {
        clearInterval(dropIntervalRef.current);
      }
    };
  }, [level, moveDown, gameOver, isPaused]);

  // Render the current piece - improved rendering
  const renderPiece = () => {
    const pieces = [];

    for (let y = 0; y < currentPiece.shape.length; y++) {
      for (let x = 0; x < currentPiece.shape[y].length; x++) {
        if (currentPiece.shape[y][x]) {
          const boardX = position.x + x;
          const boardY = position.y + y;

          // Only render if the piece is completely within the board bounds
          if (
            boardY >= 0 &&
            boardY < BOARD_HEIGHT &&
            boardX >= 0 &&
            boardX < BOARD_WIDTH
          ) {
            pieces.push(
              <div
                key={`piece-${boardY}-${boardX}`}
                className="absolute"
                style={{
                  width: BLOCK_SIZE,
                  height: BLOCK_SIZE,
                  backgroundColor: currentPiece.color,
                  border:
                    currentPiece.color === "#FFFFFF"
                      ? "3px solid #000"
                      : "2px solid #000",
                  left: boardX * BLOCK_SIZE,
                  top: boardY * BLOCK_SIZE,
                  zIndex: 10,
                  boxSizing: "border-box",
                }}
              />
            );
          }
        }
      }
    }

    return pieces;
  };

  // Render the board - improved grid system
  const renderBoard = () => {
    const cells = [];

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        const cell = board[y][x];
        cells.push(
          <div
            key={`cell-${y}-${x}`}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              backgroundColor: cell ? cell.color : "transparent",
              border: cell ? "2px solid #000" : "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
        );
      }
    }

    return cells;
  };

  const renderNextPiece = () => {
    const shape = nextPiece.shape;
    const color = nextPiece.color;
    const previewSize = 20;

    // Calculate piece dimensions for centering
    const pieceWidth = shape[0].length * previewSize;
    const pieceHeight = shape.length * previewSize;
    const containerSize = 100;
    const offsetX = (containerSize - pieceWidth) / 2;
    const offsetY = (containerSize - pieceHeight) / 2;

    return (
      <div className="w-28 h-28 bg-white border-[3px] border-[#3f4c38] rounded-lg flex items-center justify-center relative">
        <div
          className="relative"
          style={{ width: containerSize, height: containerSize }}
        >
          {shape.map((row, y) => {
            return row.map((cell, x) => {
              if (cell) {
                return (
                  <div
                    key={`next-${y}-${x}`}
                    className="absolute"
                    style={{
                      width: previewSize,
                      height: previewSize,
                      backgroundColor: color,
                      border:
                        color === "#FFFFFF"
                          ? "2px solid #000"
                          : "1px solid #000",
                      left: offsetX + x * previewSize,
                      top: offsetY + y * previewSize,
                      boxSizing: "border-box",
                    }}
                  />
                );
              }
              return null;
            });
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F4E9] pb-20">
      {gameOver ? (
        <div className="flex items-center justify-center min-h-screen">
          <GameOverScreen
            score={score}
            onRestart={restartGame}
            onMainMenu={handleReturn}
            onReturnToMainSite={handleReturnToMainSite}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#3f4c38] mb-2 font-oswald">
              STACK MASTER
            </h1>
            <p className="text-[#3f4c38]/70 text-sm md:text-base font-space-grotesk">
              {isPaused
                ? "Game Paused - Press P to Resume"
                : "Every Block Counts"}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-4 md:gap-8">
            {/* Game board - FIXED container */}
            <div className="relative flex-shrink-0">
              <div
                className="bg-white border-[3px] border-[#3f4c38] rounded-xl shadow-2xl relative mx-auto overflow-hidden"
                style={{
                  width: `${BOARD_WIDTH * BLOCK_SIZE}px`,
                  height: `${BOARD_HEIGHT * BLOCK_SIZE}px`,
                }}
              >
                {/* Grid background */}
                <div
                  className="grid absolute inset-0"
                  style={{
                    gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${BLOCK_SIZE}px)`,
                    gridTemplateRows: `repeat(${BOARD_HEIGHT}, ${BLOCK_SIZE}px)`,
                  }}
                >
                  {renderBoard()}
                </div>

                {/* Current piece overlay */}
                {!isPaused && (
                  <div className="absolute inset-0">{renderPiece()}</div>
                )}

                {/* Pause overlay */}
                {isPaused && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl px-6 md:px-8 py-3 md:py-4 shadow-lg">
                      <h3 className="text-xl md:text-2xl font-bold text-[#3f4c38] font-oswald">
                        PAUSED
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Game info */}
            <div className="w-full max-w-sm xl:max-w-xs space-y-4 md:space-y-6">
              {/* Next piece */}
              <div className="bg-[#8abdb3] border-[3px] border-[#3f4c38] rounded-xl p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-[#3f4c38] mb-3 md:mb-4 text-center font-oswald">
                  NEXT BLOCK
                </h3>
                <div className="flex justify-center">{renderNextPiece()}</div>
              </div>

              {/* Stats */}
              <div className="bg-white border-[3px] border-[#3f4c38] rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-[#3f4c38] text-center font-oswald">
                  GAME STATS
                </h3>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center p-2 bg-[#F7F4E9] border-2 border-[#3f4c38] rounded-lg">
                    <span className="font-medium text-[#3f4c38] text-sm md:text-base font-space-grotesk">
                      Score
                    </span>
                    <span className="font-bold text-[#f87a30] text-lg md:text-xl font-space-grotesk">
                      {score.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-[#F7F4E9] border-2 border-[#3f4c38] rounded-lg">
                    <span className="font-medium text-[#3f4c38] text-sm md:text-base font-space-grotesk">
                      Level
                    </span>
                    <span className="font-bold text-[#8abdb3] text-lg md:text-xl font-space-grotesk">
                      {level}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-[#F7F4E9] border-2 border-[#3f4c38] rounded-lg">
                    <span className="font-medium text-[#3f4c38] text-sm md:text-base font-space-grotesk">
                      Lines
                    </span>
                    <span className="font-bold text-[#ffc943] text-lg md:text-xl font-space-grotesk">
                      {lines}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls - FIXED spacing to prevent overlap */}
              <div className="space-y-2 md:space-y-3 mb-8">
                <button
                  onClick={togglePause}
                  className="w-full h-10 md:h-12 bg-[#ffc943] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] text-sm md:text-base shadow-md font-space-grotesk"
                >
                  {isPaused ? "RESUME" : "PAUSE"}
                </button>

                <button
                  onClick={restartGame}
                  className="w-full h-10 md:h-12 bg-[#f87a30] border-[3px] border-[#3f4c38] rounded-xl text-white font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] text-sm md:text-base shadow-md font-space-grotesk"
                >
                  RESTART
                </button>

                <button
                  onClick={handleReturn}
                  className="w-full h-10 md:h-12 bg-white border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] text-sm md:text-base shadow-md font-space-grotesk"
                >
                  MAIN MENU
                </button>

                <button
                  onClick={handleReturnToMainSite}
                  className="w-full h-10 md:h-12 bg-[#8abdb3] border-[3px] border-[#3f4c38] rounded-xl text-[#3f4c38] font-bold hover:shadow-lg transition-all duration-200 hover:translate-y-[-2px] text-sm md:text-base shadow-md font-space-grotesk"
                >
                  ← BACK TO SITE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <KeyGuide />
    </div>
  );
}
