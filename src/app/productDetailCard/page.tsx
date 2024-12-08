import Image from "next/image";

const ProductDetailCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6 max-w-6xl mx-auto">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/Rectangle2.png"
          alt="Nike Air "
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
          Nike Air Force 1 <br />
          PLT.AF.ORM
        </h1>
        <p className="text-gray-600">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its inside out inspired construction including unique layering and
          exposed foam accents ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal while the unexpected shading rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="text-2xl font-bold">₹ 8,695.00</p>
        <button className="bg-black text-white py-3 px-6 rounded-3xl w-48 flex items-center gap-2 hover:bg-gray-800">
          <span className="material-icons">
            <Image
              src="/images/cart.png"
              alt="shoess"
              width={22.36}
              height={16.3}
            />
          </span>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
