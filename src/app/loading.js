import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <span className="loading loading-spinner loading-lg text-warning"></span>
    </div>
  );
}