import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div  className="md:pt-40 flex min-h-screen justify-center items-center bg-gray-100 py-5" >
      {/* Card Container */}
      <div data-aos="zoom-in"  className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src="/images/nike-logo.png"
            alt="Nike Logo"
            height={64}
            width={64}
            
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl  font-bold mb-6 tracking-wide">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
           
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Keep me signed in */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items  text-gray-500">
              <input type="checkbox" className="mr-2 " />
              Keep me signed in
            </label>
            <a href="#" className="text-gray-400 hover:text-black">
              Forgotten your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            SIGN IN
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          By logging in, you agree to Nike&apos;s{" "}
          <a href="#" className="text-gray-500 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-500 underline">
            Terms of Use
          </a>
          .
        </div>

        {/* Sign Up */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Not a Member?{" "}
          <span className='border-b-[0.5px]  border-black'>
          <a href="#" className="text-black font-semibold ">
            Join Us.
          </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default page
