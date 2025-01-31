"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";

const ProductGalleryApi: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        // Filter products for the "Men" category
        const menProducts = fetchedProducts.filter(
          (product) => product.category?.toLowerCase().includes("women")
        );
        setProducts(menProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="md:pt-10 mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-col-reverse md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/5">
          <h2 className="text-lg font-bold mb-4">Women&apos;s Products</h2>
          <ul className="space-y-2 text-sm pr-5">
            {products.map((product) => (
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
        <main className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {products.map((product) => (
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
            </div>
          ))}
        </main>
      </div>
    </main>
  );
};

export default ProductGalleryApi;
