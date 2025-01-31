"use client";
import { addToCart } from "@/cart/cart";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Product } from "types/products";
import Swal from "sweetalert2";

interface productPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        category,
        slug,
        price,
        inventory,
        colors,
        status,
        image,
        description,
        _type
        }`,
    { slug }
  );
}
export default async function ProductPage({ params }: productPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  // add to cart

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="md:pt-10 flex flex-col lg:flex-row items-center gap-8 p-6 max-w-6xl mx-auto">
      {/* Product Image */}
      <div
        data-aos="zoom-out-up"
        className="w-full lg:w-1/2 flex justify-center"
      >
        <Image
          src={urlFor(product.image).url()}
          alt={product.productName}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-bold">₹ {product.price}</p>
        <Link href="/cart">
          <button
            className="bg-black text-white py-3 px-6 rounded-3xl w-48 flex items-center gap-2 hover:bg-gray-800"
            onClick={(e) => handleAddToCart(e, product)}
          >
            <span className="material-icons">
              {product.image && (
                <Image
                  src="/images/cart.png"
                  alt={product.productName}
                  width={22.36}
                  height={16.3}
                />
              )}
            </span>
            Add To Cart
          </button>
        </Link>
       
      </div>
    </div>
  );
}
