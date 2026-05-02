"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data } = useSession();
  const router = useRouter();
  const user = data?.user;

  const logout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="navbar bg-white/90 sticky top-0 z-50 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-2xl font-bold text-orange-500">
          SunCart Store
        </Link>
      </div>

      <div className="hidden md:flex gap-2">
        <Link className="btn btn-ghost" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/products">
          Products
        </Link>
        <Link className="btn btn-ghost" href="/my-profile">
          My Profile
        </Link>
      </div>

      <div className="gap-3">
        {user ? (
          <button onClick={logout} className="btn btn-warning btn-sm">
            Logout
          </button>
        ) : (
          <>
            <Link className="btn btn-outline btn-sm" href="/login">
              Login
            </Link>
            <Link className="btn btn-warning btn-sm " href="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
