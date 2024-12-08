import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/shoes1.png"
        alt="shoess"
        width={1344}
        height={700}
        className="sm:h-auto sm:flex md:block sm:justify-center md:justify-normal md:h-[700px] w-auto"
      />
    </div>
  );
};

export default Hero2;
