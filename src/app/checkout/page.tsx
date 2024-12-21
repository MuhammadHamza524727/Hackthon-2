import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white   min-h-screen">
      {/* Main Container */}
      <div className=" mx-auto px-4 md:px-64 py-6 lg:flex lg:space-x-8">
        {/* Left Section: User Details */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">How would you like to get your order?</h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Customs regulation for India requires a copy of the recipient&apos;s KYC. The address on this
            KYC needs to match the shipping address. Our courier will contact you via SMS/email to
            obtain a copy of your KYC.{" "}
            <a href="#" className="underline font-semibold">
              Learn More
            </a>
          </p>

          {/* Delivery Option */}
          <button className="w-full border border-gray-300  rounded-md hover:bg-gray-100 mb-6 flex justify-start items-center px-4 gap-5 py-5">
          <Image
                src="/images/Group.png"
                alt="shoe2"
                width={21}
                height={19}
                className="rounded-md"
              />
            Deliver it
          </button>

          {/* Form Section */}
          <form className="space-y-4">
            <h3 className="text-lg font-semibold">Enter your name and address:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3  col-span-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 "
              /> 
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 col-span-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="p-3 border rounded-md col-span-2"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="p-3 border rounded-md col-span-2"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="p-3 border rounded-md col-span-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="sm:p-2 md:p-3 border rounded-md "
              />
              <input
                type="text"
                placeholder="Locality"
                className="p-3 border rounded-md"
              />
              <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>State/Territory</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
              </select>
              <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>India</option>
              </select>
            </div>

            <label className="flex items-center space-x-2 pt-2">
              <input type="checkbox" />
              <span className="text-sm">Save this address to my profile</span>
            </label>

            <label className="flex items-center space-x-2 py-2">
              <input type="checkbox" />
              <span className="text-sm">Make this my preferred address</span>
            </label>

            {/* Contact Information */}
            <h3 className="text-lg font-semibold mt-6">What&apos;s your contact information?</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            {/* PAN Information */}
            <h3 className="text-lg font-semibold mt-6">What&apos;s your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Save PAN details to Nike Profile</span>
            </label>

            {/* Agreement */}
            <label className="flex items-start space-x-2 mt-6">
              <input type="checkbox" />
              <span className="text-sm text-gray-600 leading-relaxed">
                I have read and consent to Nike processing my information in accordance with the{" "}
                <a href="#" className="underline font-semibold">
                  Privacy Statement
                </a>{" "}
                and{" "}
                <a href="#" className="underline font-semibold">
                  Cookie Policy
                </a>
                .
              </span>
            </label>

            {/* Continue Button */}
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300  ">
              Continue
            </button>

            <h3 className="text-lg font-medium mt-6 border-b py-2 text-gray-500">Delivery</h3>

            <h3 className="text-lg font-medium mt-6 border-b py-2 text-gray-400">Shipping</h3>


            <h3 className="text-lg font-medium mt-6 border-b py-2 text-gray-400">Billing</h3>


            <h3 className="text-lg font-medium mt-6 border-b py-2 text-gray-400">Payment</h3>


          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="lg:w-1/3  p-6 rounded-md mt-8 lg:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="text-sm flex justify-between mb-2">
            <span>Subtotal</span>
            <span>20,890.00</span>
          </div>
          <div className="text-sm flex justify-between mb-2">
            <span>Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="font-semibold flex justify-between">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</p>

            {/* Product 1 */}
            <div className="flex items-center mb-4">
              <Image
                src="/images/men1.png"
                alt="men.png"
                width={96}
                height={96}
                className="rounded-md  "
              />
              <div className="ml-3 text-sm">
                <p className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
                <p>Size L</p>
                <p> 3,895.00</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex items-center">
              <Image
                src="/images/shoe2.png"
                alt="shoe2"
                width={96}
                height={96}
                className="rounded-md"
              />
              <div className="ml-3 text-sm">
                <p className="font-semibold">Nike Air Max 97 SE</p>
                <p>Size UK 8</p>
                <p> 16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page





