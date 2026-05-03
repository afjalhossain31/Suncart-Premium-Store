"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLinkOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import {
  Button,
  FieldError,
  Form,
  Input,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "../../../lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/my-profile";

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photo = formData.get("photo");

    const result = await authClient.signUp({
      name,
      email,
      password,
      image: photo,
    });

    if (result.error) {
      toast.error(result.error || "Registration failed");
    }

    if (!result.error) {
      toast.success("Registration successful! Redirecting...");
      window.location.href = redirect;
    }

    console.log(result, "--- Sign Up Response ---");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-orange-500/30"></span>
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em]">
              Suncart Premium Store
            </span>
            <span className="h-0.5 w-8 bg-orange-500/30"></span>
          </div>
          <h1 className="text-5xl font-serif text-stone-900 tracking-tighter mb-2">
            Create Account
          </h1>
          <p className="text-stone-900/50 font-medium">
            Join our community for a premium experience
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-stone-200 shadow-xl shadow-stone-200/50">
          <Form className="space-y-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              validate={(v) =>
                v.trim().length < 3
                  ? "Please enter a valid full name (at least 3 characters)"
                  : null
              }
              className="space-y-2"
            >
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Full Name
              </label>
              <div className="relative flex items-center">
                <IoPersonOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  name="name"
                  placeholder="Afjal Hossain"
                  className="w-full pl-11 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <TextField
              name="photo"
              validate={(v) =>
                v && !v.startsWith("https://")
                  ? "Please enter a valid url (must start with https://)"
                  : null
              }
              className="space-y-2"
            >
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Avatar URL
              </label>
              <div className="relative flex items-center">
                <IoLinkOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  name="photo"
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full pl-11 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <TextField
              isRequired
              name="email"
              validate={(v) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? "Please enter a valid email address"
                  : null
              }
              className="space-y-2"
            >
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <IoMailOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <TextField
              isRequired
              name="password"
              validate={(v) =>
                v.length < 8
                  ? "Please enter a stronger password (at least 8 characters)"
                  : null
              }
              className="space-y-2"
            >
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative flex items-center">
                <IoLockClosedOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter a strong password"
                  className="w-full pl-11 pr-12 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute right-4 text-stone-400 hover:text-stone-600 focus:outline-none z-10"
                >
                  {isVisible ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEyeOutline size={20} />
                  )}
                </button>
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <button
              type="submit"
              className="w-full py-5 bg-green-800 text-stone-50 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-orange-500 transition-all active:scale-[0.98] shadow-xl"
            >
              Join the Store
            </button>
          </Form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-stone-900/50 text-sm font-medium mb-4">
            Already have an account?{" "}
            <Link
              href={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-stone-900 font-black hover:text-orange-500 transition-colors underline decoration-orange-500/30 underline-offset-4"
            >
              Login
            </Link>
          </p>
          <Link
            href="/"
            className="text-stone-900/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-stone-900"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
