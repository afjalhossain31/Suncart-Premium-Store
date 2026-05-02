import React from "react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] text-black">
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center block mb-4">Create Account</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="••••••••" className="input input-bordered w-full" />
            </div>
            <button className="btn btn-warning w-full mt-4">Register</button>
          </form>
          <div className="text-center mt-4 text-sm">
            Already have an account? <Link href="/login" className="text-warning font-semibold">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}