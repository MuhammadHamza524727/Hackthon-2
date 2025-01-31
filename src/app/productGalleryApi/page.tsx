"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import React from "react";

const ProductGalleryApi: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || ""; // Safely handle null searchParams

  useEffect(() => {
    // Load wishlist from localStorage on component mount
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // Handle adding/removing products to/from wishlist
  const toggleWishlist = (product: Product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === product._id);
    let updatedWishlist;

    if (isAlreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
  };

  if (isLoading) {
    return <p className="text-center text-gray-600 mt-6 py-10 text-lg">Loading Shoes...</p>;
  }

  return (
    <main className="md:pt-10 mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-col-reverse md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/5">
          <h2 className="text-lg font-bold mb-4">Products ({filteredProducts.length})</h2>
          <ul className="space-y-2 text-sm pr-5">
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="text-gray-600 hover:text-black cursor-pointer"
              >
                {product.productName}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-4/5">
          <div className="flex justify-between mb-6">
            {/* Wishlist Button */}
            <button
              className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg"
              onClick={() => alert('Wishlist: ' + wishlist.length + ' items')}
            >
              Wishlist ({wishlist.length})
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white p-2 relative group transition-all duration-300 ease-in-out group-hover:bg-gray-200 group-hover:shadow-md"
              >
                <Link href={`/product/${product.slug?.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={348}
                      height={348}
                      className="md:w-[348px] md:h-[348px] sm:w-[120px] sm:h-[120px] object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  )}
                </Link>

                <p className="text-orange-600 sm:text-[12px] md:text-lg font-semibold">
                  {product.status}
                </p>
                <h3 className="sm:text-[8px] md:text-sm text-black">
                  {product.productName}
                </h3>
                <p className="text-gray-600 sm:text-[8px] md:text-sm">
                  {product.category}
                </p>
                <p className="text-gray-400 sm:text-[8px] md:text-sm">
                  {product.colors}
                </p>
                <p className="text-black sm:text-[8px] md:text-sm">
                  MRP : ₹ {product.price}
                </p>

                {/* Wishlist Heart Icon */}
                <button
                  className="absolute top-2 right-4 p-2 text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  {wishlist.some((item) => item._id === product._id) ? (
                    // Filled heart icon when the item is in the wishlist
                    <AiFillHeart className="text-pink-500" size={24} />
                  ) : (
                    // Outlined heart icon when the item is not in the wishlist
                    <AiOutlineHeart className="text-gray-500" size={24} />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-6 text-xl">No products found.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductGalleryApi;
