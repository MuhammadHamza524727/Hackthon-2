import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div  className="md:pt-10 flex justify-center items-center min-h-screen bg-gray-100 px-4 py-5">
      {/* Card Container */}
      <div data-aos="zoom-in" className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/nike-logo.png"
            alt="Nike Logo"
            height={64}
            width={64}
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-xl font-bold mb-4">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Create your Nike Member profile and get <br /> first access to the very best
          of Nike <br /> products, inspiration and community.
        </p>

        {/* Form */}
        <form>
          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
          />

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
          />

          {/* Date of Birth */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
          />
          <p className="text-xs text-gray-500 mb-3 text-center">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country */}
          <select
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            defaultValue="India"
          >
             <option>Pakistan</option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>

          {/* Gender */}
          <div className="flex justify-between mb-4">
            <button
              type="button"
              className="w-[48%] py-2 border rounded-md hover:bg-gray-100"
            >
              Male
            </button>
            <button
              type="button"
              className="w-[48%] py-2 border rounded-md hover:bg-gray-100"
            >
              Female
            </button>
          </div>

          {/* Sign Up for Emails */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="email-updates"
              className="w-4 h-4 mr-2"
            />
            <label htmlFor="email-updates" className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </label>
          </div>
          <p className="text-xs text-center text-gray-500 py-5 mt-4">
            By creating an account, you agree to Nike&apos;s{" "}
            <a href="#" className="underline text-gray-500">
              Privacy <br /> Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-gray-500">
              Terms of Use
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>

          {/* Terms */}
        </form>

        {/* Already a Member */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Already a Member?{" "}
          <a href="#" className="text-black underline font-medium">
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
