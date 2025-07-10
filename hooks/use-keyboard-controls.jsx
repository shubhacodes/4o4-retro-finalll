"use client";

import { useState, useEffect, useCallback } from "react";

export function useKeyboardControls() {
  const [keys, setKeys] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keys.hasOwnProperty(e.key)) {
        setKeys((prev) => ({ ...prev, [e.key]: true }));
      }
    };

    const handleKeyUp = (e) => {
      if (keys.hasOwnProperty(e.key)) {
        setKeys((prev) => ({ ...prev, [e.key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  const resetKeys = useCallback((keysToReset) => {
    setKeys((prev) => {
      const newKeys = { ...prev };
      keysToReset.forEach((key) => {
        if (newKeys.hasOwnProperty(key)) {
          newKeys[key] = false;
        }
      });
      return newKeys;
    });
  }, []);

  return {
    isKeyDown: keys,
    resetKeys,
  };
}
