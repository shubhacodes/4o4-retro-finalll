"use client";

import { useRouter } from "next/navigation";
import GameMenu from "./game-menu";

export default function TetrisApp() {
  const router = useRouter();

  const handleReturnToMainSite = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#F7F4E9]">
      <GameMenu onReturnToMainSite={handleReturnToMainSite} />
    </main>
  );
}
