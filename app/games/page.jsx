"use client";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">🎮 Mini Games</h1>
        <p className="text-xl mb-8">Choose your adventure!</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a
            href="/games/1"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer block"
          >
            <h3 className="font-semibold text-lg mb-2">Tetris</h3>
            <p className="text-sm opacity-75">From Services Section</p>
            <p className="text-xs opacity-50 mt-1">
              Stack Master - Ready to Play!
            </p>
          </a>
          <a
            href="/games/2"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer block"
          >
            <h3 className="font-semibold text-lg mb-2">Asteroids</h3>
            <p className="text-sm opacity-75">From Testimonials Section</p>
            <p className="text-xs opacity-50 mt-1">
              Space Explorer - Ready to Play!
            </p>
          </a>
          <a
            href="/games/3"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer block"
          >
            <h3 className="font-semibold text-lg mb-2">Retro Brawl</h3>
            <p className="text-sm opacity-75">From CTA Section</p>
            <p className="text-xs opacity-50 mt-1">
              Fighting Game - Ready to Play!
            </p>
          </a>
        </div>
        <button
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2 bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 transition-colors"
        >
          ← Back to Main Site
        </button>
      </div>
    </div>
  );
}
