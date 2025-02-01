import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Product } from "types/products";
import AddToCartButton from "@/components/ui/AddToCartButton"; // Client component ko import karo

interface ProductPageProps {
  params: { slug: string };
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="md:pt-10 flex flex-col lg:flex-row items-center gap-8 p-6 max-w-6xl mx-auto">
      {/* Product Image */}
      <div data-aos="zoom-out-up" className="w-full lg:w-1/2 flex justify-center">
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
        
        {/* Client Component for Add To Cart Button */}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
