"use client";
import { addToCart } from "@/cart/cart";
import Image from "next/image";
import Swal from "sweetalert2";
import { Product } from "types/products";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
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
    <button
      className="bg-black text-white py-3 px-6 rounded-3xl w-48 flex items-center gap-2 hover:bg-gray-800"
      onClick={handleAddToCart}
    >
      <span className="material-icons">
        <Image src="/images/cart.png" alt={product.productName} width={22.36} height={16.3} />
      </span>
      Add To Cart
    </button>
  );
}
