"use client";
import React from "react";

// Simple auth client without external dependencies
export const authClient = {
  async signUp(credentials) {
    try {
      const response = await fetch("/api/auth/simple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sign-up",
          email: credentials.email,
          password: credentials.password,
          name: credentials.name,
          image: credentials.image,
        }),
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Sign up failed");
      
      // Store user in localStorage
      if (json.data) {
        localStorage.setItem("user", JSON.stringify(json.data));
      }
      return json;
    } catch (error) {
      return { error: error.message };
    }
  },

  async signIn(credentials) {
    try {
      const response = await fetch("/api/auth/simple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sign-in",
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Sign in failed");
      
      // Store user in localStorage
      if (json.data) {
        localStorage.setItem("user", JSON.stringify(json.data));
      }
      return json;
    } catch (error) {
      return { error: error.message };
    }
  },

  async signOut() {
    localStorage.removeItem("user");
    return { data: null };
  },

  getUser() {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

export const useSession = () => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setUser(authClient.getUser());
    setLoading(false);
  }, []);

  return { data: { session: { user } }, status: loading ? "loading" : "authenticated" };
};
