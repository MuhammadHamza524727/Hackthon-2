import React from "react";
import Image from "next/image";

const Jordanspring = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Don&apos;t Miss</h1>
      <div className="w-full">
        <Image
          src="/images/jordan-closeup.png"
          alt="jordan-closeup"
          width={1344}
          height={700}
          className="sm:h-auto sm:flex md:block sm:justify-center md:justify-normal md:h-[700px] w-auto"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center py-7 px-4   bg-white">
        <h1 className="text-5xl md:text-5xl font-bold my-4">
          FLIGHT ESSENTIALS
        </h1>
        <p className=" max-w-xl leading-relaxed">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>

        <div className="flex space-x-4 mt-6">
          <button className="bg-black border  hover:text-black  text-white px-6 py-3 rounded-full hover:bg-white transition">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jordanspring;
