import Link from "next/link";
import Image from "next/image";

export default function ProductGallery() {
  const products = [
    {
      id: 1,
      label: "Just In",
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      color: "1 Colour",
      price: "₹ 10,795.00",
      image: "/images/Rectangle.png",
    },
    {
      id: 2,
      label: "Just In",
      name: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      color: "1 Colour",
      price: "₹ 4,995.00",
      image: "/images/Rectangle1.png",
    },
    {
      id: 3,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle2.png",
    },
    {
      id: 4,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle3.png",
    },
    {
      id: 5,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle4.png",
    },
    {
      id: 6,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle5.png",
    },
    {
      id: 7,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle6.png",
    },
    {
      id: 8,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle7.png",
    },
    {
      id: 9,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle8.png",
    },
    {
      id: 10,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle9.png",
    },
    {
      id: 11,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle10.png",
    },
    {
      id: 12,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle11.png",
    },
    {
      id: 13,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle12.png",
    },
    {
      id: 14,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle13.png",
    },
    {
      id: 15,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle14.png",
    },
    {
      id: 16,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle15.png",
    },
    {
      id: 17,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle16.png",
    },
    {
      id: 18,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle17.png",
    },
    {
      id: 19,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle18.png",
    },
    {
      id: 20,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle19.png",
    },
    {
      id: 21,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle20.png",
    },
    {
      id: 22,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle21.png",
    },
    {
      id: 23,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle22.png",
    },
    {
      id: 24,
      label: "Just In",
      name: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      color: "1 Colour",
      price: "₹ 8,695.00",
      image: "/images/Rectangle23.png",
    },
  ];

  const filters = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Trousers & Tights",
    "Shorts",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ];

  return (
    <div className=" md:pt-40 mx-auto px-4 py-8 ">
      <div className=" flex flex-col sm:flex-col-reverse md:flex-row ">
        <div className="w-full  md:w-1/5">
          <h2 className="text-xl font-bold mb-4">New (500)</h2>
          <ul className="space-y-2">
            {filters.map((filter, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-black cursor-pointer"
              >
                {filter}
              </li>
            ))}
          </ul>
          <div className="mt-6 ">
            <h3 className="text-lg font-semibold">Gender</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Men</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Women</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Unisex</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Kids</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Boys</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Girls</span>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Shop By Price</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Under ₹ 2 500.00</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">₹ 2 501.00 -₹</span>
              </label>
            </div>
          </div>
        </div>

        <main  className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6  ">
          {products.map((product) => (
            <div key={product.id} className="bg-white  p-4 relative group transition-all duration-300 ease-in-out group-hover:bg-gray-200 group-hover:shadow-md ">
              <Link href="/productDetailCard">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={348}
                  height={348}
                  className="md:w-[348px] md:h-[348px] sm:w-[120px] sm:h-[120px] object-cover  mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105 
                  "
                />
                
              </Link>

              <p className="text-orange-600 sm:text-[12px] md:text-lg font-semibold">
                {product.label}
              </p>

              <h3 className=" sm:text-[8px] md:text-sm text-black ">{product.name}</h3>
              <p className="text-gray-600 sm:text-[8px] md:text-sm">{product.category}</p>
              <p className="text-gray-400 sm:text-[8px] md:text-sm">{product.color}</p>
              <p className="text-black sm:text-[8px] md:text-sm">{product.price}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}




