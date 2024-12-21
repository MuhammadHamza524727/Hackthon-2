import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/men1.png",
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    description: "Men's Short-Sleeve Running Top",
    category: "Men",
  },
  {
    id: 2,
    image: "/images/men2.png",
    title: "Nike Dri-FIT Challenger",
    price: "₹ 2 495",
    description: "Men's 18cm 2-in-1 Versatile Shorts",
    category: "Men",
  },
  {
    id: 3,
    image: "/images/women1.png",
    title: "Nike Dri-FIT ADV Run Division",
    price: "₹ 5 295",
    description: "Women's Long-Sleeve Running Top",
    category: "Women",
  },
  {
    id: 4,
    image: "/images/women2.png",
    title: "Nike Fast",
    price: "₹ 3 795",
    description: "Women's Mid-Rise7/8 Running Leggings ",
    category: "Women",
  },
];

import React from 'react'

const Gearup = () => {
  return (
    <div className=" mx-auto    px-4 py-8">
    <h1 className="text-2xl font-bold mb-6 ">Gear Up</h1>

    <div className="flex justify-end items-center ">
      <div className="w-full gap-4 flex sm:justify-center md:justify-end items-center mb-6 ">
        <h2 className=" sm:hidden md:block text-lg font-semibold">
          Shop Men s
        </h2>
        <h2 className=" md:hidden  sm:block text-lg font-semibold">
          Mix Collection
        </h2>

        <button className="text-gray-600 hover:text-black rounded-full w-12 h-12 flex items-center justify-center sm:hidden md:flex  bg-gray-100">
          <span>
            <Image
              src="/aeroleft.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
        <button className="text-gray-700 hover:text-black rounded-full w-12 h-12 flex items-center justify-center sm:hidden md:flex  bg-gray-200">
          <span>
            <Image
              src="/aeroright.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
      </div>

      <div className=" sm:hidden md:flex w-full gap-4  flex justify-end  items-center mb-6">
        <h2 className="text-lg font-semibold">Shop Women s</h2>
        <button className="text-gray-600 hover:text-black rounded-full w-12 h-12 flex items-center justify-center  bg-gray-200">
          <span>
            <Image
              src="/aeroleft.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
        <button className="text-gray-700 hover:text-black rounded-full w-12 h-12 flex items-center justify-center  bg-gray-200">
          <span>
            <Image
              src="/aeroright.png"
              alt="aeroleft Logo"
              width={6.97}
              height={13.93}
            />
          </span>
        </button>
      </div>
    </div>

    <div className="sm:w-full grid  md:grid-cols-2 lg:grid-cols-4 gap-6  grid-cols-1  ">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover rounded-md"
          />

          <div className="flex flex-col items-center  ">
            <div className="flex justify-between w-full gap-4  items-center ">
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-sm font-medium">{product.price}</p>
            </div>
            <p className="text-md text-gray-600 flex justify-start w-full">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Gearup

