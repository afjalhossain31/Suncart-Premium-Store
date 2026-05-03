"use client";
import { toast } from "@heroui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const AddToCartBtn = () => {
  return (
    <button
      onClick={() =>
        toast.success("You have added the item to your cart", {
          actionProps: {
            children: "Checkout",
            className: "bg-success text-success-foreground",
          },
          description:
            "Your item has been added to the cart. You can proceed to checkout or continue shopping.",
        })
      }
      className="w-full py-5 bg-stone-900 text-stone-50 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all active:scale-[0.98] shadow-xl shadow-stone-200 cursor-pointer"
    >
      <IoCartOutline size={20} />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
