"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../types/products";

const Carousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  // Ensure there are at least 3 products in the carousel
  const visibleProducts =
    products.slice(currentIndex, currentIndex + 3).length < 3
      ? [
          ...products.slice(currentIndex),
          ...products.slice(0, 3 - products.slice(currentIndex).length),
        ]
      : products.slice(currentIndex, currentIndex + 3);

  return (
    <div className="mx-auto px-4 py-8 max-w-screen-2xl">
      <div className="flex items-center justify-between  mb-4 md:px-8 sm:px-4">
        <h2 className="text-sm md:text-2xl font-semibold">Best of Air Max</h2>
        <div className="flex items-center space-x-2">
          <Link href="/productGalleryApi">
            <button className="md:text-lg sm:text-sm font-medium">Shop</button>
          </Link>
          <button
            onClick={handlePrev}
            className="text-gray-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center border border-gray-300"
          >
            <Image
              src="/images/aeroleft.png"
              alt="Previous"
              width={6.97}
              height={13.93}
            />
          </button>
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center border border-gray-300"
          >
            <Image
              src="/images/aeroright.png"
              alt="Next"
              width={6.97}
              height={13.93}
            />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 overflow-x-auto sm:overflow-hidden">
        {visibleProducts.map((product) => (
          <div
            key={product._id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 bg-white p-4 text-center rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <Link href={`/product/${product.slug?.current}`}>

              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={400}
                height={400}
                className="mx-auto object-cover mb-4 rounded-lg"
              />
            </Link>
            <div className="md:px-10 sm:text-[8px] md:text-sm  flex sm:flex-col md:flex-row  items-center justify-between  text-sm">
              <div className="text-start flex sm:items-center md:items-start flex-col" >
                <h3 className="text-black  font-medium">
                  {product.productName}
                </h3>
                <p className="text-gray-600 sm:text-start md:text-start">{product.category}</p>
              </div>
              <div>
                <p className="text-black  ">MRP : ₹ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
