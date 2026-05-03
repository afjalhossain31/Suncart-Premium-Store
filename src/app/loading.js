"use client";

const loading = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-60 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-4 bg-orange-500/40"></span>
            <span className="text-orange-500 text-2xl font-black uppercase tracking-[0.5em] animate-pulse">
              Solis
            </span>
            <span className="h-px w-4 bg-orange-500/40"></span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-stone-200 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-stone-900 animate-loading-bar"
            style={{ width: "40%" }}
          ></div>
        </div>

        <div className="mt-6 overflow-hidden">
          <p className="text-center text-stone-900 text-lg font-serif italic tracking-wide animate-bounce-subtle">
            Preparing your summer essentials...
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-2px);
            opacity: 1;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default loading;
