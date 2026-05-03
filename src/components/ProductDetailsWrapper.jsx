"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function ProductDetailsWrapper({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionData = useSession();
  const user = sessionData.data?.session?.user;
  const isLoading = sessionData.status === "loading";

  useEffect(() => {
    // If user is not authenticated and we're done loading, redirect to login
    if (!isLoading && !user) {
      // Get current URL to redirect back after login
      const currentPath = typeof window !== "undefined" ? window.location.pathname + window.location.search : "";
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
    }
  }, [user, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="font-serif italic animate-pulse">Loading product details...</p>
      </div>
    );
  }

  // Show nothing if not authenticated (will redirect)
  if (!user) {
    return null;
  }

  // If user is authenticated, show the product details
  return children;
}
