import React from "react";

const Hero3 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-7 px-4   bg-white">
      <p className=" font-bold  text-2xl ">First Look</p>
      <h1 className="text-2xl md:text-6xl font-bold my-4">
        NIKE AIR MAX PULSE
      </h1>
      <p className=" max-w-xl leading-relaxed">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse— designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex space-x-4 mt-6">
        <button className="bg-black border  hover:text-black  text-white px-6 py-3 rounded-full hover:bg-white transition">
          Notify Me
        </button>
        <button className=" bg-black border  text-white hover:text-black px-6 py-3 rounded-full hover:bg-white  transition">
          Shop Air Max
        </button>
      </div>
    </div>
  );
};

export default Hero3;
