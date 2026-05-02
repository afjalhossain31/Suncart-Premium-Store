import React from "react";

export default function UpdateProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-10 text-black">
      <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <form className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text">Full Name</span></label>
            <input type="text" defaultValue="John Doe" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" defaultValue="john.doe@example.com" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">New Password</span></label>
            <input type="password" placeholder="Leave blank to keep current" className="input input-bordered w-full" />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="btn btn-warning flex-1">Save Changes</button>
            <button type="button" className="btn btn-ghost flex-1">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}