"use client";
import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function Login() {
  const router = useRouter();
  const sp = useSearchParams();
  const callback = sp.get("callbackURL") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: callback,
    });
    if (error) toast.error(error.message || "Login failed");
    else {
      toast.success("Login successful");
      router.push(callback);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 card bg-white text-slate-800 shadow-xl border border-slate-100">
      <h1 className="text-3xl font-bold mb-5 text-slate-900 border-b pb-2">Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Email</span>
          </label>
          <input
            className="input input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Password</span>
          </label>
          <input
            className="input input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning w-full text-white font-bold text-lg mt-2">
          Login
        </button>
      </form>

      <div className="divider text-slate-400">OR</div>

      <button
        onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })}
        className="btn btn-outline w-full text-slate-600 hover:bg-slate-50"
      >
        Continue with Google
      </button>

      <p className="mt-6 text-center text-slate-600">
        New user?{" "}
        <Link className="link text-orange-500 font-semibold" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

