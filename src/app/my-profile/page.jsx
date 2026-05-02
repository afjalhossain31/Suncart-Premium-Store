import React from "react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-black">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="avatar placeholder">
            <div className="bg-warning text-neutral-content rounded-full w-24">
              <span className="text-3xl text-white">JD</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="stat bg-slate-50 rounded-lg p-4">
            <div className="stat-title">Total Orders</div>
            <div className="stat-value text-warning">12</div>
          </div>
          <div className="stat bg-slate-50 rounded-lg p-4">
            <div className="stat-title">Member Since</div>
            <div className="stat-value text-sm mt-2">January 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}