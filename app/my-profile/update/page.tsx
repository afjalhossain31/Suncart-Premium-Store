"use client";
import React, { useState, useEffect } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const { data, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name || "");
      setImage(data.user.image || "");
    }
  }, [data]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
      router.refresh();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isPending) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (!data?.user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 card bg-white text-slate-800 shadow-xl border border-slate-100 italic-none">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">Update Information</h2>
      <form onSubmit={submit} className="space-y-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Display Name</span>
          </label>
          <input
            className="input input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-slate-700">Profile Picture</span>
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full bg-white text-slate-800 focus:outline-orange-500"
            onChange={handleFileChange}
          />
          <label className="label">
            <span className="label-text-alt text-slate-400">Choose a photo from your gallery</span>
          </label>
        </div>

        {image && (
          <div className="mt-2 flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                <img src={image} alt="Preview" onError={(e) => (e.currentTarget.src = "https://i.postimg.cc/8P7F9GbZ/user.png")} />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-warning w-full text-white font-bold text-lg mt-4">
          Update Information
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-ghost w-full text-slate-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

