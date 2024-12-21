import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white min-h-screen p-4">
   
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
      {/* Bag Section */}
      <div className="lg:col-span-2">
         {/* Free Delivery Notice */}
    <div className="bg-gray-200 py-2 text-start px-4 text-sm">
      Free Delivery <br /> <span className="font-semibold"> 14,000.00 or more</span>.{" "}
      <a href="#" className="underline ml-2">
        View details
      </a>
    </div>

        <h1 className="text-2xl font-semibold mb-4">Bag</h1>

        {/* Product 1 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex items-center">
            <Image
              src="/images/men1.png"
              alt="Nike Product"
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h2>
              <p className="text-sm text-gray-500">
                Men&apos;s Short-Sleeve Running Top <br />
                Ashen Slate/Cobalt Bliss
              </p>
              <div className="text-sm text-gray-500 mt-2">
                <span>Size: L</span> &nbsp; | &nbsp; <span>Quantity: 1</span>
              </div>
              {/* Actions */}
          <div className="flex items-center mt-4 space-x-4 text-gray-600">
            <button className="hover:text-black">
            <Image
              src="/images/heart.png"
              alt="Nike Product"
              width={16}
              height={16}
              className="rounded-md"
            />
            </button>
            <button className="hover:text-black">
            <Image
              src="/images/dustbin.png"
              alt="Nike Product"
              width={16}
              height={16}
              className="rounded-md h-"
            />
            </button>
          </div>
            </div>
            <p className="font-semibold text-right">MRP: 3,895.00</p>
          
          </div>
        </div>

        {/* Product 2 */}
        <div className="border-b pb-4">
          <div className="flex items-center">
            <Image
              src="/images/Rectangle9.png"
              alt="Nike Product"
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">Nike Air Max 97 SE</h2>
              <p className="text-sm text-gray-500">
                Men&apos;s Shoes <br />
                Flat Pewter/Light Bone/Black/White
              </p>
              <div className="text-sm mt-2 text-gray-500">
                <span>Size: 8</span> &nbsp; | &nbsp; <span>Quantity: 1</span>
              </div>
              <div className="flex items-center mt-4 space-x-4 text-gray-600">
            <button className="hover:text-black">
            <Image
              src="/images/heart.png"
              alt="heart"
              width={16}
              height={16}
              className="rounded-md"
            />
            </button>
            <button className="hover:text-black">
            <Image
              src="/images/dustbin.png"
              alt="dustbin"
              width={16}
              height={16}
              className="rounded-md"
            />
            </button>
          </div>
            </div>
            <p className="font-semibold text-right">MRP:  16,995.00</p>
          </div>
          {/* Actions */}
          
        </div>
      </div>

      {/* Summary Section */}
      <div className="lg:col-span-1 bg-gray-100 p-6 rounded-md h-fit">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span> 20,890.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-base font-semibold border-b-2 py-2">
          <span>Total</span>
          <span> 20,890.00</span>
        </div>
        <button className="w-full bg-black text-white py-3 mt-4 rounded-3xl hover:bg-gray-800">
          Member Checkout
        </button>
      </div>
    </div>
  </div>
  )
}

export default page;
