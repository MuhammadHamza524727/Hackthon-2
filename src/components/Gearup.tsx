"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../types/products";

const GearUp: React.FC = () => {
  const [menProducts, setMenProducts] = useState<Product[]>([]);
  const [womenProducts, setWomenProducts] = useState<Product[]>([]);
  const [currentMenIndex, setCurrentMenIndex] = useState(0);
  const [currentWomenIndex, setCurrentWomenIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);

        // Filter products by category
        const men = fetchedProducts.filter(
          (product) =>
            product.category?.toLowerCase().includes("men")
        );
        const women = fetchedProducts.filter(
          (product) =>
            product.category?.toLowerCase().includes("women")
        );

        setMenProducts(men);
        setWomenProducts(women);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleNextMen = () => {
    setCurrentMenIndex((prev) => (prev + 1) % menProducts.length);
  };

  const handlePrevMen = () => {
    setCurrentMenIndex(
      (prev) => (prev - 1 + menProducts.length) % menProducts.length
    );
  };

  const handleNextWomen = () => {
    setCurrentWomenIndex((prev) => (prev + 1) % womenProducts.length);
  };

  const handlePrevWomen = () => {
    setCurrentWomenIndex(
      (prev) => (prev - 1 + womenProducts.length) % womenProducts.length
    );
  };
  return (
    <div className="mx-auto max-w-screen-xl  py-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 sm:px-5 ">Gear Up</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
        {/* Men's Section */}
        <div>
          <div className="flex items-center sm:justify-start  md:justify-end mb-4 mx-4 gap-4">
            <h3 className="text-lg md:text-xl font-medium">Shop Men&apos;s</h3>
            <div className="flex  space-x-2">
              <button
                onClick={handlePrevMen}
                className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200"
              >
                <Image
                  src="/images/aeroleft.png"
                  alt="Previous"
                  width={12}
                  height={12}
                />
              </button>
              <button
                onClick={handleNextMen}
                className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200"
              >
                <Image
                  src="/images/aeroright.png"
                  alt="Next"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center  sm:py-5 md:space-x-32  ">
            {menProducts.slice(currentMenIndex, currentMenIndex + 2).map((item) => (
              <div
                key={item._id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 bg-white p-4 rounded-lg shadow-md"
              >
               <Link href={`/product/${item.slug?.current}`}>

                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={600}
                    height={600}
                    className="rounded-lg object-cover mb-4"
                  />
                </Link>
                <h4 className="text-black sm:text-sm md:text-md font-medium">{item.productName}</h4>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-black sm:text-sm md:text-md font-semibold mt-2">₹ {item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Women's Section */}
        <div>
          <div className="flex items-center sm:justify-start sm:px-5 sm:py-5 md:py-0 md:px-0 md:justify-end gap-5 mb-4">
            <h3 className="text-lg md:text-xl font-medium">Shop Women&apos;s</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevWomen}
                className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200"
              >
                <Image
                  src="/images/aeroleft.png"
                  alt="Previous"
                  width={12}
                  height={12}
                />
              </button>
              <button
                onClick={handleNextWomen}
                className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200"
              >
                <Image
                  src="/images/aeroright.png"
                  alt="Next"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center md:space-x-32">
            {womenProducts.slice(currentWomenIndex, currentWomenIndex + 2).map((item) => (
              <div
                key={item._id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 bg-white p-4 rounded-lg shadow-md"
              >
                {/* <Link href={`/product/${item._id}`}> */}
                <Link href={`/product/${item.slug?.current}`}>

                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={600}
                    height={600}
                    className="rounded-lg object-cover mb-4"
                  />
                </Link>
                <h4 className="text-black sm:text-sm md:text-md font-medium">{item.productName}</h4>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-black sm:text-sm md:text-md font-semibold mt-2">₹ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearUp;
