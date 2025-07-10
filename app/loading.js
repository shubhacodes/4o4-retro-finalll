// Simple loading for route transitions (not the main landing experience)
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#F7F4E9] flex items-center justify-center z-50">
      <div className="text-center">
        <div
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Loading...
        </div>
        <div className="w-8 h-8 border-4 border-[#DE6A48] border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
