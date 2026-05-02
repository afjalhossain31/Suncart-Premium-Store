"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      image: form.image,
    });
    if (error) toast.error(error.message || "Registration failed");
    else {
      toast.success("Registration successful");
      router.push("/login");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 card bg-white text-slate-800 shadow-xl border border-slate-100">
      <h1 className="text-3xl font-bold mb-5 text-slate-900 border-b pb-2">Register</h1>
      <form onSubmit={submit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Name</span>
          </label>
          <input
            className="input input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Email</span>
          </label>
          <input
            className="input input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            placeholder="Enter your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Profile Photo</span>
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            onChange={handleFileChange}
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
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        {form.image && (
          <div className="mt-2 flex justify-center">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                <img src={form.image} alt="Preview" />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-warning w-full text-white font-bold text-lg mt-2">
          Register
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
        Already have an account?{" "}
        <Link className="link text-orange-500 font-semibold" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
