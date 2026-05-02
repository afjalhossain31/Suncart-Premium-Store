import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-warning tracking-tighter">
          SunCart
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="hidden md:flex gap-6 mr-4 text-sm font-medium">
          <Link href="/products" className="hover:text-warning transition-colors">Products</Link>
          <Link href="/categories" className="hover:text-warning transition-colors">Categories</Link>
          <Link href="/deals" className="hover:text-warning transition-colors">Deals</Link>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21h6" />
              </svg>
              <span className="badge badge-sm badge-warning indicator-item">0</span>
            </div>
          </div>
        </div>
        <Link href="/login" className="btn btn-warning btn-sm px-6 rounded-full hidden md:flex">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;