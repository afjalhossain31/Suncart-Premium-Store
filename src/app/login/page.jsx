import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] text-black">
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center block mb-4">Login to SunCart</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="••••••••" className="input input-bordered w-full" />
            </div>
            <button className="btn btn-warning w-full mt-4">Login</button>
          </form>
          <div className="text-center mt-4 text-sm">
            Don't have an account? <Link href="/register" className="text-warning font-semibold">Register here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}