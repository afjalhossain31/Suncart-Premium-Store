import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackURL=/my-profile");
  }

  const u = session.user;

  return (
    <div className="max-w-xl mx-auto p-8 mt-10 card bg-white text-slate-800 shadow-xl border border-slate-100">
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <Image
              src={u.image || "https://i.postimg.cc/8P7F9GbZ/user.png"}
              alt="profile"
              width={140}
              height={140}
              className="rounded-full mx-auto border-4 border-white shadow-md object-cover w-[140px] h-[140px]"
            />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold mt-6 text-slate-900 tracking-tight">
          {u.name}
        </h1>
        <div className="badge badge-warning mt-2 px-4 py-3 font-semibold text-white">
          Verified Account
        </div>

        <div className="mt-8 w-full space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-500 font-medium italic">Full Name</span>
            <span className="text-slate-900 font-bold">{u.name}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-500 font-medium italic">Email Address</span>
            <span className="text-slate-900 font-bold">{u.email}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-500 font-medium italic">Member Since</span>
            <span className="text-slate-900 font-bold">
              {new Date(u.createdAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <Link
          href="/my-profile/update"
          className="btn btn-warning mt-10 w-full text-white font-bold text-lg hover:shadow-lg transition-all"
        >
          Update Information
        </Link>
      </div>
    </div>
  );
}

