export default function ScrollbarTest() {
  return (
    <div className="min-h-[200vh] p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">
        Custom Scrollbar Test - FORCE SCROLLBAR
      </h1>

      <div className="mb-8 p-4 bg-red-100 border-2 border-red-500">
        <h2 className="text-xl font-bold text-red-700 mb-2">
          🚨 INSTRUCTIONS TO SEE SCROLLBAR:
        </h2>
        <ol className="list-decimal list-inside text-red-700 space-y-1">
          <li>
            <strong>Hard refresh your browser:</strong> Ctrl+Shift+R (Windows)
            or Cmd+Shift+R (Mac)
          </li>
          <li>
            <strong>Clear cache:</strong> F12 → Right click refresh → "Empty
            Cache and Hard Reload"
          </li>
          <li>
            <strong>Check browser:</strong> Make sure you're using Chrome,
            Safari, or Edge (webkit browsers)
          </li>
          <li>
            <strong>Scroll down:</strong> The page is now 200vh tall to force
            scrollbar
          </li>
        </ol>
      </div>

      {/* Global scrollbar test */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 bg-yellow-200 p-2">
          Global Scrollbar (Main Page) - SHOULD BE VISIBLE NOW
        </h2>
        <p className="mb-4 text-lg">
          The main page scrollbar (on the right side of your browser window)
          should now be:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg space-y-2">
          <li>
            🟨 <strong>Mustard colored</strong> (#d4af37) thumb
          </li>
          <li>
            ⬛ <strong>Dark gray borders</strong> (#333333) around everything
          </li>
          <li>
            📏 <strong>20px wide</strong> (much wider than default)
          </li>
          <li>
            📐 <strong>Rectangular</strong> (no rounded corners)
          </li>
          <li>
            🔼🔽 <strong>Arrow buttons</strong> at top and bottom
          </li>
        </ul>
      </div>

      {/* Container scrollbar test */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 bg-blue-200 p-2">
          Container Scrollbar Test
        </h2>
        <div
          className="h-64 w-full bg-gray-100 border-4 border-black p-4"
          style={{
            overflow: "auto",
            scrollbarWidth: "thick",
            scrollbarColor: "#d4af37 #f0f0f0",
          }}
        >
          <div className="h-96 bg-gradient-to-b from-yellow-100 to-yellow-300">
            <p className="mb-4 p-4 bg-white rounded">
              This container has overflow content.
            </p>
            <p className="mb-4 p-4 bg-white rounded">
              Scroll to see the custom scrollbar.
            </p>
            <p className="mb-4 p-4 bg-white rounded">
              It should have mustard color and dark borders.
            </p>
            <p className="mb-4 p-4 bg-white rounded">
              The scrollbar should be rectangular.
            </p>
            <p className="mb-4 p-4 bg-white rounded">
              Look for arrow buttons at top/bottom.
            </p>
            <p className="mb-4 p-4 bg-white rounded">More content here...</p>
            <p className="mb-4 p-4 bg-white rounded">Keep scrolling...</p>
            <p className="mb-4 p-4 bg-white rounded">Even more content...</p>
            <p className="mb-4 p-4 bg-white rounded">
              Final content at bottom.
            </p>
          </div>
        </div>
      </div>

      {/* Large content to force main scrollbar */}
      <div className="space-y-8">
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 1</h3>
          <p>This creates a long page to force the main scrollbar.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 2</h3>
          <p>Keep scrolling to test the main page scrollbar.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 3</h3>
          <p>The scrollbar on the right should be wide and mustard colored.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 4</h3>
          <p>With dark gray borders around the thumb and track.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 5</h3>
          <p>And arrow buttons at the top and bottom.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 6</h3>
          <p>
            If you still don't see it, try a different browser or clear cache
            again.
          </p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 7</h3>
          <p>The scrollbar styling uses webkit pseudo-elements.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 8</h3>
          <p>This should work in Chrome, Safari, and Edge browsers.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 9</h3>
          <p>Firefox uses a different scrollbar system.</p>
        </div>
        <div className="h-32 bg-mustard rounded p-4">
          <h3 className="text-2xl font-bold">Section 10 - BOTTOM</h3>
          <p>
            You've reached the bottom! The scrollbar should be fully visible
            now.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 border border-green-300 rounded">
        <h3 className="font-semibold text-green-800 mb-2">
          ✅ If You See the Custom Scrollbar:
        </h3>
        <p className="text-green-700 mb-2">
          Great! The implementation is working. The scrollbar should have:
        </p>
        <ul className="list-disc list-inside text-green-700">
          <li>Mustard color (#d4af37)</li>
          <li>Dark gray borders (#333333)</li>
          <li>20px width (thick)</li>
          <li>Rectangular design</li>
          <li>Arrow buttons</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded">
        <h3 className="font-semibold text-red-800 mb-2">
          ❌ If You Still Don't See It:
        </h3>
        <ul className="list-disc list-inside text-red-700">
          <li>Try Chrome browser specifically</li>
          <li>Hard refresh (Ctrl+Shift+R)</li>
          <li>Clear all browser cache</li>
          <li>Disable browser extensions</li>
          <li>Check if you're using a webkit-based browser</li>
        </ul>
      </div>
    </div>
  );
}
