"use client"
// pages/wishlist.tsx
import { useEffect, useState } from "react";
import { Product } from "../../../types/products"; // Adjust the import path based on your project structure
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Fetch wishlist items from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="bg-white p-4 border rounded-lg">
              <Image 
              className="w-full h-auto mb-4"
               src={urlFor(product.image).url()} 
               alt={product.productName} 
                width={400}
                height={400}
               />
             
              <h3>{product.productName}</h3>
              <p>${product.price}</p>
              <button
                className="mt-2 text-red-500"
                onClick={() => removeFromWishlist(product._id)} // Remove product
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
